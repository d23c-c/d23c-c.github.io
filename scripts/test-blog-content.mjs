import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { units } from "./learning-content.mjs";
import { learningTracks } from "../src/data/learning.ts";
const read=relative=>readFile(`dist/${relative}`,"utf8");
assert.equal(units.length,70);
for(const track of learningTracks) {
 const files=(await readdir(`src/content/posts/learning-notes/${track.slug}`)).filter(f=>f.endsWith(".md"));
 assert.equal(files.length,track.units);
 const page=await read(`learning-notes/${track.slug}/index.html`);
 assert(page.includes(track.tools));
 assert(page.includes(track.stage));
}
assert.equal(learningTracks.find(t=>t.slug==="csharp").tools,"Visual Studio");
const archive=await read("research/index.html");
assert(archive.includes("<h2 class=\"text-3xl font-bold mb-8\">Archive</h2>"));
assert(!archive.includes("閱讀留下筆記"));
for(const link of ["bgsqkcuarc0cax9","1me0596ntshep9m","x35n04cex2rx3pc","0soou0yqiqmqlva"]) assert(archive.includes(`https://canva.link/${link}`));
const timeline=await read("archive/index.html");
for(const stage of ["Grades 10–11","Grade 12 · Fall semester","University year 1 · Spring semester","Grade 11 · Spring semester"]) assert(timeline.includes(stage));
const home=await read("index.html");
const footer=home.match(/<footer\b[\s\S]*?<\/footer>/)?.[0];
assert(footer && !footer.includes("data-youtube-music-trigger") && !footer.includes("Sitemap"));
assert(home.includes("Hot Tags"));
for(const route of ["index.html","learning-notes/index.html","archive/index.html","tags/index.html","categories/index.html","research/index.html","security/index.html","about/index.html","projects/index.html"]) {
 const html=await read(route);
 const visible=html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/g,"").replace(/<!--[\s\S]*?-->/g,"").replace(/<[^>]+>/g,"");
 assert(!/[\u3400-\u9fff]/.test(visible),`Non-English UI on ${route}: ${visible.match(/[\u3400-\u9fff][^<>]{0,60}/)?.[0]}`);
}
console.log("Content checks passed: 70 notes, 5 language pages, study timeline, English UI, presentations and footer.");
