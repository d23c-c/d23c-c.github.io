import assert from "node:assert/strict";
import { cp, mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { siteBasePath } from "../src/config/sitePath";

// Astro's base prefixes URLs, but does not nest the generated files on disk.
assert.match(siteBasePath, /^\/[A-Za-z0-9_-]+\/$/);
const root = process.cwd();
const output = path.resolve(root, "_pages");
assert.equal(path.dirname(output), root);
assert.equal(path.basename(output), "_pages");
const destination = path.join(output, siteBasePath.slice(1, -1));
await stat(path.join(root, "dist/index.html"));
await rm(output, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
await cp(path.join(root, "dist"), destination, { recursive: true });

async function checkFiles(directory: string): Promise<void> {
	for (const entry of await readdir(directory, { withFileTypes: true })) {
		assert(!entry.isSymbolicLink(), `Symlink in artifact: ${entry.name}`);
		assert(!/^\.(?:git|env|npmrc)/i.test(entry.name), `Private file in artifact: ${entry.name}`);
		assert(!/\.(?:pem|key|pfx|p12|map|pdf|docx?)$/i.test(entry.name), `Unexpected private/source file: ${entry.name}`);
		if (entry.isDirectory()) await checkFiles(path.join(directory, entry.name));
	}
}
await checkFiles(destination);
for (const page of ["index.html", "about/index.html", "security/index.html", "research/index.html", "projects/index.html", "pagefind/pagefind.js"]) {
	await stat(path.join(destination, page));
}
const home = await readFile(path.join(destination, "index.html"), "utf8");
assert(home.includes(`${siteBasePath}_astro/`), "Asset URLs must include the base path");
assert(home.includes("A:lNVfqUGILD:JQG"), "Unexpected site title");
await writeFile(path.join(output, ".nojekyll"), "");
await writeFile(path.join(output, "index.html"), `<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${siteBasePath}"><meta name="robots" content="noindex"><title>quisasterisk</title></head><body><a href="${siteBasePath}">進入網站</a></body></html>`);
// robots.txt only applies at the domain root.
await writeFile(path.join(output, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: https://d23c-c.github.io${siteBasePath}sitemap-index.xml\n`);
await cp(path.join(destination, "404.html"), path.join(output, "404.html"));
console.log(`Pages artifact verified: ${destination}`);
