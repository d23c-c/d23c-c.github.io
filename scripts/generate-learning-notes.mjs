import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { units, sqlFixture } from "./learning-content.mjs";
import { syntax } from "./learning-syntax.mjs";
import { siteBasePath } from "../src/config/sitePath.ts";

const reports=JSON.parse(await readFile("src/data/learning-verification.json","utf8"));
const names={cpp:"C++",python:"Python",php:"PHP",csharp:"C#",sql:"SQL"};
const authorTools={cpp:"Code::Blocks、Dev-C++ 與 VS Code",python:"VS Code；Linux 上以文字編輯器建立 .py 檔後編寫腳本",php:"VS Code",csharp:"Visual Studio",sql:"VS Code"};
const references={
 cpp:"https://en.cppreference.com/w/cpp/language.html",
 python:"https://docs.python.org/3.12/tutorial/",
 php:"https://www.php.net/manual/en/langref.php",
 csharp:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/",
 sql:"https://www.sqlite.org/lang.html",
};
const special={
 winforms:"https://learn.microsoft.com/en-us/dotnet/desktop/winforms/get-started/create-app-visual-studio",
 razor:"https://learn.microsoft.com/en-us/aspnet/core/tutorials/razor-pages/razor-pages-start?view=aspnetcore-10.0",
 efcore:"https://learn.microsoft.com/en-us/aspnet/core/data/ef-rp/intro?view=aspnetcore-10.0",
 erd:"https://mermaid.js.org/syntax/entityRelationshipDiagram.html",
};
const platform={cpp:"https://zerojudge.tw/Problems?tabid=BASIC",python:"https://zerojudge.tw/Problems?tabid=BASIC",php:"https://leetcode.com/problemset/",csharp:"https://leetcode.com/problemset/",sql:"https://leetcode.com/studyplan/top-sql-50/"};
const fence=(language,code)=>`\n\`\`\`${language}\n${code.trimEnd()}\n\`\`\`\n`;
const slug=text=>text.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
// Keep prose containing PHP variables / C++ operators out of math and HTML parsing.
const prose=text=>text.replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll("$","\\$");
await mkdir("public/assets/learning/sql",{recursive:true});
await writeFile("public/assets/learning/sql/fixtures.sql",sqlFixture);
await writeFile("public/assets/learning/sql/ddl2mermaid.py",units.find(u=>u.id==="Q08").code);
await writeFile("public/assets/learning/sql/schema.mmd",reports.units.Q08.output+"\n");
assert.equal(units.length,70);
for(const original of units) {
 const unit={...original,concepts:original.concepts.map(prose),pitfalls:original.pitfalls.map(prose),quiz:original.quiz.map(prose),exercise:prose(original.exercise)};
 const name=names[unit.language],report=reports.units[unit.id];assert(report,`Missing verification report: ${unit.id}`);
 unit.tags = unit.tags.map(tag => tag.toLowerCase() === name.toLowerCase() ? name : tag);
 const primary=unit.kind?special[unit.kind]:references[unit.language];
 const w3=`https://www.w3schools.com/${unit.language==="csharp"?"cs":unit.language}/${unit.chapter}.${unit.language==="csharp"?"php":"asp"}`;
 const language=unit.codeLanguage??({cpp:"cpp",python:"python",php:"php",csharp:"csharp",sql:"sql"}[unit.language]);
 const prerequisite=Number(unit.id.slice(1))>1?unit.id[0]+String(Number(unit.id.slice(1))-1).padStart(2,"0"):"None";
 let body=`---\ntitle: ${JSON.stringify(`${name} ${unit.id} · ${unit.title}`)}\npublished: 2026-11-01\ndescription: ${JSON.stringify(`${name} study notes: ${unit.title}.`)}\ncategory: ${JSON.stringify(`Languages / ${name}`)}\ntags: ${JSON.stringify([...new Set([name,...unit.tags])])}\nlang: "zh-TW"\nseries: ${JSON.stringify(`${name} Learning Notes`)}\nseriesOrder: ${Number(unit.id.slice(1))}\ncomment: false\n---\n\n## TL;DR\n\n${unit.concepts.map(s=>`- ${s}`).join("\n")}\n\n## 1. 概念與前置知識\n\n本單元整理「${unit.topic}」。前置單元：${prerequisite}。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。\n\n## 2. 語法速查\n\n| 寫法 | 用途 |\n|---|---|\n${syntax[unit.id].map(([code,use])=>`| \`${code.replaceAll("|","\\|")}\` | ${prose(use)} |`).join("\n")}\n\n## 3. 最小範例與驗證\n\n環境：${report.environment}。\n\n`;
 body+=`撰寫環境：${authorTools[unit.language]}。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。\n\n`;
 if(report.status==="not-run") body+=`⚠️ 未驗證：${report.reason}\n\n`;
 if(report.status==="build") body+="⚠️ 僅已在 Windows 編譯通過；尚未實際操作視窗，不把編譯結果視為 UI 測試通過。\n\n";
 if(unit.language==="sql") body+=`除 Q08 外，先載入[共同測試資料 fixtures.sql](${siteBasePath}assets/learning/sql/fixtures.sql)。資料全部為合成範例，每次測試從新的記憶體資料庫開始。SQL 語句以 SQLite 驗證；⚠️ 未在 MySQL 執行，方言專屬行為不可直接外推。\n\n`;
 body+=fence(language,unit.code);
 if(unit.kind==="razor") body+="\n另建立 `Pages/Index.cshtml`：\n"+fence("html","@page\n<h1>Study Notes</h1>");
 if(unit.kind==="winforms") body+="\n專案需使用 `net10.0-windows`、啟用 `UseWindowsForms` 並使用 Windows Desktop SDK。`Program.cs` 為上面的完整程式，可在 Visual Studio 的終端機以 `dotnet build` 編譯，再於 Windows 用 `dotnet run` 操作視窗。Visual Studio 可使用視覺化 WinForms Designer；本文的最小範例另以程式建立控制項，便於閱讀與重現。\n";
 if(unit.kind==="efcore") body+="\n專案需要對應 .NET 10 的 `Microsoft.EntityFrameworkCore.Sqlite` 套件。此範例只示範服務與模型設定，還需要 Razor 頁面、資料庫 migration、表單驗證與儲存流程，才構成完整 CRUD 專案。不要把資料庫檔或真實連線設定提交到公開儲存庫。\n";
 body+="\n輸入："+(unit.input?fence("text",unit.input):"無；範例使用內建或共同測試資料。\n");
 if(report.status!=="not-run") body+=`\n${report.status==="build"?"實際建置結果":"實際輸出"}：\n`+fence("text",report.output||"No output.");
 body+="\n## 4. 常見陷阱\n\n以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。\n\n"+unit.pitfalls.map((s,i)=>`### 陷阱 ${i+1}\n\n${s}\n`).join("\n");
 body+="\n## 5. 執行與判題格式\n\n";
 if(unit.language==="cpp") body+="本機使用 `g++ -std=c++17 -Wall -Wextra -O2 main.cpp -o main` 編譯。ZeroJudge 需要完整程式與 stdin/stdout，批次輸入應依題目規格讀到 EOF。C15 起才加入 LeetCode 函式／類別題；LeetCode 只填指定介面，不額外印提示文字，且本範圍不使用 vector。\n";
 if(unit.language==="python") body+="本機使用 `python main.py` 執行。ZeroJudge 需要完整程式與標準輸入輸出；P13 起才加入 LeetCode 函式題，需遵守平台提供的介面。不要把本篇範例當成任何判題題目的完整解答。\n";
 if(unit.language==="php") body+="本機 CLI 使用 `php main.php`。LeetCode 需使用指定函式或類別，不能把 CLI 範例原封不動當成提交格式。PHP 不使用 ZeroJudge 練習；本站不代交程式，也不推測帳號的已解題狀態。\n";
 if(unit.language==="csharp") body+=unit.kind?"此為專案式範例，需要建立符合目標框架的 .csproj；WinForms 的 UI 執行限 Windows，Razor Pages 則需要 ASP.NET Core 伺服器。\n":"以 .NET 10 主控台專案執行。LeetCode 則只實作指定方法／類別，不另外建立 Console 輸入輸出流程。\n";
 if(unit.language==="sql") body+="查詢練習只提交題目要求的 SQL；題目已提供 schema 時，不要額外提交 CREATE TABLE。Q06–Q08 則在本機建立測試資料庫，確認約束與 ERD。\n";
 body+=`\n## 6. 練習\n\n以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。\n\n1. ${unit.exercise}\n2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。\n3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。\n\n延伸題庫：[${unit.language==="sql"?"LeetCode SQL 50":unit.language==="cpp"||unit.language==="python"?"ZeroJudge basic problems":"LeetCode problem list"}](${platform[unit.language]})。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。\n\n## 7. 自我檢測\n\n${unit.quiz[0]}\n\n<details><summary>答案</summary>\n\n${unit.quiz[1]}\n\n</details>\n\n## 8. 來源與課綱對照\n\n- [${unit.kind?"Official tutorial":"Language reference"}](${primary})：語言或框架參考文件。\n`;
 if(!unit.kind)body+=`- [W3Schools curriculum chapter](${w3})：對應課綱中的單元位置；本文文字與範例為重新撰寫。\n`;
 if(unit.id==="P12")body+="- [Python copy module](https://docs.python.org/3.12/library/copy.html)：淺複製與深複製。\n";
 if(unit.id==="H08")body+="- [PHP References Explained](https://www.php.net/manual/en/language.references.php)：PHP 參照的語意。\n";
 if(unit.id==="Q08")body+=`\n## 9. 實際產生的 ERD\n\n產生器已執行，並使用本站的 Mermaid 相容渲染器產生 SVG。此流程未使用 Mermaid CLI，因此不宣稱已執行 mmdc。\n\n[Download SVG](${siteBasePath}assets/learning/sql/schema.svg) · [Mermaid source](${siteBasePath}assets/learning/sql/schema.mmd) · [Python script](${siteBasePath}assets/learning/sql/ddl2mermaid.py)\n`+fence("mermaid",report.output);
 const directory=`src/content/posts/learning-notes/${unit.language}`;await mkdir(directory,{recursive:true});
 await writeFile(`${directory}/${unit.id.toLowerCase()}-${slug(unit.title)}.md`,body);
}
console.log("Generated 70 original study notes from the reviewed curriculum.");
