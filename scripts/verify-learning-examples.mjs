import assert from "node:assert/strict";
import { spawn, spawnSync } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import { createServer } from "node:net";
import { units, sqlFixture } from "./learning-content.mjs";

// Local authoring check, deliberately separate from the Node-only Pages build.
const work = path.join(os.tmpdir(), "quisasterisk-notes-examples");
await mkdir(work, {recursive:true});
const results = {};
const env = {...process.env, DOTNET_CLI_TELEMETRY_OPTOUT:"1", DOTNET_NOLOGO:"1", DOTNET_SKIP_FIRST_TIME_EXPERIENCE:"1"};
function run(command,args,options={}) {
 const result=spawnSync(command,args,{encoding:"utf8",cwd:work,env,timeout:90000,...options});
 assert.equal(result.status,0,`${command} failed: ${result.error?.message??""}\n${result.stderr}\n${result.stdout}`);
 return result.stdout.replaceAll("\r\n","\n").trimEnd();
}
const cppVersion=run("g++",["--version"]).split("\n")[0];
const pythonVersion=run("python",["--version"]);
const dotnetVersion=run("dotnet",["--version"]);
const project=(sdk,extra="")=>`<Project Sdk="${sdk}"><PropertyGroup><TargetFramework>net10.0${sdk.includes("Windows")?"-windows":""}</TargetFramework><OutputType>Exe</OutputType><EnableDefaultCompileItems>false</EnableDefaultCompileItems><ImplicitUsings>enable</ImplicitUsings><Nullable>enable</Nullable>${extra}</PropertyGroup><ItemGroup><Compile Include="Program.cs" /></ItemGroup></Project>`;
const consoleDir=path.join(work,"console");await mkdir(consoleDir,{recursive:true});
await writeFile(path.join(consoleDir,"Study.csproj"),project("Microsoft.NET.Sdk"));
await writeFile(path.join(consoleDir,"Program.cs"),'System.Console.WriteLine("ready");');
run("dotnet",["restore","Study.csproj","--ignore-failed-sources"],{cwd:consoleDir});
for(const unit of units) {
 const input=unit.input??"";
 if(unit.language==="cpp") {
  const file=path.join(work,`${unit.id}.cpp`),exe=path.join(work,`${unit.id}.exe`);
  await writeFile(file,unit.code);run("g++",["-std=c++17","-Wall","-Wextra","-O2",file,"-o",exe]);
  results[unit.id]={status:"run",environment:cppVersion+" · C++17",output:run(exe,[],{input})};
 } else if(unit.language==="python" || unit.kind==="erd") {
  await writeFile(path.join(work,"fixtures.sql"),sqlFixture);
  const file=path.join(work,`${unit.id}.py`);await writeFile(file,unit.code);
  results[unit.id]={status:"run",environment:pythonVersion,output:run("python",[file],{input,env:{...env,PYTHONIOENCODING:"utf-8"}})};
 } else if(unit.language==="sql") {
  const harness="import json,sys,sqlite3\np=json.load(sys.stdin)\nc=sqlite3.connect(':memory:')\nc.executescript(p['fixture'])\nfor statement in p['code'].split(';'):\n if statement.strip():\n  cursor=c.execute(statement)\n  if cursor.description:\n   for row in cursor:\n    print(' | '.join('NULL' if x is None else str(x) for x in row))\nc.close()\n";
  results[unit.id]={status:"run",environment:run("python",["-c","import sqlite3;print('SQLite '+sqlite3.sqlite_version)"]),output:run("python",["-c",harness],{input:JSON.stringify({code:unit.code,fixture:sqlFixture})})};
 } else if(unit.language==="csharp" && !unit.kind) {
  await writeFile(path.join(consoleDir,"Program.cs"),unit.code);
  run("dotnet",["build","Study.csproj","--no-restore","-c","Release","-v","q"],{cwd:consoleDir});
  results[unit.id]={status:"run",environment:`.NET SDK ${dotnetVersion} · net10.0`,output:run("dotnet",[path.join(consoleDir,"bin/Release/net10.0/Study.dll")],{input})};
 } else if(unit.kind==="winforms") {
  const dir=path.join(work,"winforms");await mkdir(dir,{recursive:true});
  await writeFile(path.join(dir,"Study.csproj"),project("Microsoft.NET.Sdk.WindowsDesktop","<UseWindowsForms>true</UseWindowsForms>"));
  await writeFile(path.join(dir,"Program.cs"),unit.code);
  run("dotnet",["build","Study.csproj","-c","Release","-v","q","--ignore-failed-sources"],{cwd:dir});
  results[unit.id]={status:"build",environment:`.NET SDK ${dotnetVersion} · net10.0-windows`,output:"Build succeeded. Interactive UI not executed."};
 } else if(unit.kind==="razor") {
  const dir=path.join(work,"razor");await mkdir(path.join(dir,"Pages"),{recursive:true});
  await writeFile(path.join(dir,"Web.csproj"),project("Microsoft.NET.Sdk.Web"));
  await writeFile(path.join(dir,"Program.cs"),unit.code);
  await writeFile(path.join(dir,"Pages/Index.cshtml"),'@page\n<h1>Study Notes</h1>\n');
  run("dotnet",["build","Web.csproj","-c","Release","-v","q","--ignore-failed-sources"],{cwd:dir});
  const probe=createServer();await new Promise(r=>probe.listen(0,"127.0.0.1",r));const port=probe.address().port;await new Promise(r=>probe.close(r));
  const child=spawn("dotnet",[path.join(dir,"bin/Release/net10.0/Web.dll"),"--urls",`http://127.0.0.1:${port}`],{cwd:dir,env,stdio:"ignore"});
  try {
   let response;
   for(let i=0;i<40;i++){try{response=await fetch(`http://127.0.0.1:${port}/`);break;}catch{await new Promise(r=>setTimeout(r,250));}}
   assert.equal(response?.status,200);assert.match(await response.text(),/<h1>Study Notes<\/h1>/);
   results[unit.id]={status:"run",environment:`.NET SDK ${dotnetVersion} · ASP.NET Core`,output:"HTTP 200\n<h1>Study Notes</h1>"};
  } finally { child.kill(); }
 } else {
  results[unit.id]={status:"not-run",environment:unit.language==="php"?"PHP 8+ · runtime unavailable":"EF Core + SQLite · provider not installed",reason:unit.language==="php"?"本機未安裝 PHP CLI，未執行，不提供推測輸出。":"本機未安裝此範例所需的 EF Core SQLite 套件；尚未編譯或執行。"};
 }
 console.log(`${unit.id}: ${results[unit.id].status}`);
}
const { initMerman,renderSvg,assertSafeSvgForDom }=await import("@mermanjs/web");
await initMerman({wasm:{module_or_path:await readFile(new URL(import.meta.resolve("@mermanjs/web/pkg/merman_wasm_bg.wasm")))}});
const diagram=renderSvg(results.Q08.output,{host_theme:{preset:"editor-light"},svg:{diagram_id:"study-schema",pipeline:"parity"}});
assertSafeSvgForDom(diagram);
await mkdir("public/assets/learning/sql",{recursive:true});
await writeFile("public/assets/learning/sql/schema.svg",diagram);
await writeFile("src/data/learning-verification.json",JSON.stringify({checkedAt:"2026-11-01",units:results},null,2)+"\n");
console.log(`Verified ${units.length} units; ERD rendered to SVG.`);
