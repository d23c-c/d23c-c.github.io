import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { units } from "./learning-content.mjs";
import { learningTracks } from "../src/data/learning.ts";
import matter from "gray-matter";
import { formatActivityDate } from "../src/utils/experience-utils.ts";
const read = (relative) => readFile(`dist/${relative}`, "utf8");
assert.equal(units.length, 70);
for (const track of learningTracks) {
	const files = (
		await readdir(`src/content/posts/learning-notes/${track.slug}`)
	).filter((f) => f.endsWith(".md"));
	assert.equal(files.length, track.units);
	const page = await read(`learning-notes/${track.slug}/index.html`);
	assert(page.includes(track.tools));
	assert(page.includes(track.stage));
}
assert.equal(
	learningTracks.find((t) => t.slug === "csharp").tools,
	"Visual Studio",
);
const archive = await read("research/index.html");
assert(archive.includes('<h2 class="text-3xl font-bold mb-8">Archive</h2>'));
assert(!archive.includes("閱讀留下筆記"));
for (const link of [
	"bgsqkcuarc0cax9",
	"1me0596ntshep9m",
	"x35n04cex2rx3pc",
	"0soou0yqiqmqlva",
])
	assert(archive.includes(`https://canva.link/${link}`));
const timeline = await read("archive/index.html");
for (const stage of [
	"Grades 10–11",
	"Grade 12 · Fall semester",
	"University year 1 · Spring semester",
	"Grade 11 · Spring semester",
])
	assert(timeline.includes(stage));
const home = await read("index.html");
const footer = home.match(/<footer\b[\s\S]*?<\/footer>/)?.[0];
assert(
	footer &&
		!footer.includes("data-youtube-music-trigger") &&
		!footer.includes("Sitemap"),
);
assert(home.includes("Hot Tags"));
for (const route of [
	"index.html",
	"posts/index.html",
	"experiences/index.html",
	"learning-notes/index.html",
	"archive/index.html",
	"tags/index.html",
	"categories/index.html",
	"research/index.html",
	"security/index.html",
	"about/index.html",
	"projects/index.html",
]) {
	const html = await read(route);
	const visible = html
		.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/g, "")
		.replace(/<!--[\s\S]*?-->/g, "")
		.replace(/<[^>]+>/g, "");
	assert(
		!/[\u3400-\u9fff]/.test(visible),
		`Non-English UI on ${route}: ${visible.match(/[\u3400-\u9fff][^<>]{0,60}/)?.[0]}`,
	);
}
const experienceFiles = (await readdir("src/content/posts/experiences")).filter(
	(f) => f.endsWith(".md"),
);
assert.equal(
	experienceFiles.length,
	27,
	"Every confirmed activity must have its own article",
);
assert.equal(
	formatActivityDate("2025-07"),
	"Jul 2025",
	"Month-only event dates must not invent a day",
);
const experiences = await read("experiences/index.html");
const categories = await read("categories/index.html");
assert(categories.includes("Languages") && categories.includes("Experiences"));
assert(
	categories.includes("/learning-notes/") &&
		categories.includes("/experiences/"),
);
assert(
	!categories.includes("Languages / C++"),
	"Language units belong inside the Languages category",
);
const postsPage = await read("posts/index.html");
for (const filename of experienceFiles) {
	const source = await readFile(
		`src/content/posts/experiences/${filename}`,
		"utf8",
	);
	const { data } = matter(source);
	const { start, end, kind } = data.experience;
	assert.equal(data.category, "Experiences");
	assert.equal(data.published.toISOString().slice(0, 10), "2026-11-05");
	assert(
		!/[\u3400-\u9fff]/.test(data.title + data.description + data.tags.join("")),
	);
	assert(start <= (end ?? start), `Invalid activity range in ${filename}`);
	assert(["Workshop", "Competition", "Conference", "Teaching"].includes(kind));
	const slug = filename.replace(/\.md$/, "");
	const href = `/posts/experiences/${slug}/`;
	for (const html of [experiences, timeline, postsPage])
		assert(html.includes(href), `Missing ${href}`);
	assert(timeline.includes(`data-event-start="${start}"`));
	const built = await read(`posts/experiences/${slug}/index.html`);
	assert(
		built.includes(data.title.replaceAll("&", "&amp;")) ||
			built.includes(data.title),
	);
	// Raw source correspondence and private join/access links must never be published.
	assert(
		!/mail\.google\.com|meet\.google\.com|dcdc43588@|ANGjdJ|-----BEGIN .*PRIVATE KEY|(?:ghp_|github_pat_)[A-Za-z0-9_]+|AIza[0-9A-Za-z_-]{30,}/.test(
			source,
		),
		`Private material in ${filename}`,
	);
}
for (const html of [experiences, timeline, postsPage])
	assert(!/Hack the Tainan|HITCON 2026|TeamT5 Security Camp/.test(html));
assert(timeline.includes('data-timeline-filter="Experiences"'));
assert(timeline.includes('data-timeline-filter="Languages"'));
assert(!postsPage.includes(">Learning Notes</"));
console.log(
	"Content checks passed: 70 notes, 27 experiences, category hierarchy, activity dates, English UI and exposure checks.",
);
