import assert from "node:assert/strict";
import {
	cp,
	mkdir,
	readdir,
	readFile,
	rm,
	stat,
	writeFile,
} from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";
import { siteBasePath } from "../src/config/sitePath";

// Astro's base prefixes URLs, but does not nest the generated files on disk.
assert.match(siteBasePath, /^\/[A-Za-z0-9_-]+\/$/);
const root = process.cwd();
const output = path.resolve(root, "_pages");
assert.equal(path.dirname(output), root);
assert.equal(path.basename(output), "_pages");
const destination = path.join(output, siteBasePath.slice(1, -1));
const publication = JSON.parse(
	await readFile(path.join(root, "src/data/cve-publication.json"), "utf8"),
) as {
	reports: { path: string; sha256: string }[];
};
const approvedReports = new Map(
	publication.reports.map((report) => [report.path, report.sha256]),
);
assert.equal(
	approvedReports.size,
	3,
	"Exactly three reviewed CVE reports are allowed",
);
const checkedReports = new Set<string>();
await stat(path.join(root, "dist/index.html"));
await rm(output, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
await cp(path.join(root, "dist"), destination, { recursive: true });

async function checkFiles(directory: string): Promise<void> {
	for (const entry of await readdir(directory, { withFileTypes: true })) {
		assert(!entry.isSymbolicLink(), `Symlink in artifact: ${entry.name}`);
		assert(
			!/^\.(?:git|env|npmrc)/i.test(entry.name),
			`Private file in artifact: ${entry.name}`,
		);
		assert(
			!/\.(?:pem|key|pfx|p12|map|docx?)$/i.test(entry.name),
			`Unexpected private/source file: ${entry.name}`,
		);
		if (/\.pdf$/i.test(entry.name)) {
			const reportPath = path
				.relative(destination, path.join(directory, entry.name))
				.replaceAll("\\", "/");
			assert(
				/^assets\/cve\/reports\/cve-\d{4}-\d{4,}-public-report\.pdf$/.test(
					reportPath,
				),
				"PDF outside reviewed CVE report directory",
			);
			const approvedHash = approvedReports.get(reportPath);
			assert(approvedHash, "Unreviewed PDF in artifact");
			const hash = createHash("sha256")
				.update(await readFile(path.join(directory, entry.name)))
				.digest("hex");
			assert.equal(
				hash,
				approvedHash,
				"Reviewed PDF changed; repeat privacy review before publishing",
			);
			checkedReports.add(reportPath);
		}
		if (entry.isDirectory()) await checkFiles(path.join(directory, entry.name));
		else if (entry.name.endsWith(".html")) {
			const html = await readFile(path.join(directory, entry.name), "utf8");
			assert(
				!html.includes(siteBasePath + siteBasePath.slice(1)),
				`Duplicate base URL in ${entry.name}`,
			);
			assert(
				!html.includes('href="/404/"'),
				`Unprefixed 404 URL in ${entry.name}`,
			);
		}
	}
}
await checkFiles(destination);
assert.equal(
	checkedReports.size,
	approvedReports.size,
	"Reviewed report missing from artifact",
);
for (const page of [
	"index.html",
	"about/index.html",
	"security/index.html",
	"research/index.html",
	"projects/index.html",
	"pagefind/pagefind.js",
]) {
	await stat(path.join(destination, page));
}
const home = await readFile(path.join(destination, "index.html"), "utf8");
assert(
	home.includes(`${siteBasePath}_astro/`),
	"Asset URLs must include the base path",
);
assert(home.includes("A:lNVfqUGILD:JQG"), "Unexpected site title");
await writeFile(path.join(output, ".nojekyll"), "");
await writeFile(
	path.join(output, "index.html"),
	`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${siteBasePath}"><meta name="robots" content="noindex"><title>quisasterisk</title></head><body><a href="${siteBasePath}">Enter site</a></body></html>`,
);
// robots.txt only applies at the domain root.
await writeFile(
	path.join(output, "robots.txt"),
	`User-agent: *\nAllow: /\nSitemap: https://d23c-c.github.io${siteBasePath}sitemap-index.xml\n`,
);
await cp(path.join(destination, "404.html"), path.join(output, "404.html"));
// Check actual same-origin links/assets/metadata against the packaged tree.
const checked = new Set<string>();
async function verifyUrls(directory: string): Promise<void> {
	for (const entry of await readdir(directory, { withFileTypes: true })) {
		const file = path.join(directory, entry.name);
		if (entry.isDirectory()) {
			await verifyUrls(file);
			continue;
		}
		if (!entry.name.endsWith(".html")) continue;
		const html = await readFile(file, "utf8");
		const pageUrl = new URL(
			path.relative(output, file).replaceAll("\\", "/"),
			"https://d23c-c.github.io/",
		);
		for (const tag of html.matchAll(
			/<(?:a|link|script|img|iframe|meta)\b[^>]*>/g,
		)) {
			for (const attribute of tag[0].matchAll(
				/(href|src|content)="([^"]+)"/g,
			)) {
				if (attribute[1] === "content" && !attribute[2].startsWith("https://"))
					continue;
				const target = new URL(attribute[2].replaceAll("&amp;", "&"), pageUrl);
				if (
					target.origin !== pageUrl.origin ||
					!target.pathname.startsWith(siteBasePath) ||
					checked.has(target.pathname)
				)
					continue;
				checked.add(target.pathname);
				const local = path.resolve(
					output,
					`.${decodeURIComponent(target.pathname)}`,
				);
				assert(
					local.startsWith(`${output}${path.sep}`),
					"URL outside artifact",
				);
				const info = await stat(local);
				if (info.isDirectory()) await stat(path.join(local, "index.html"));
			}
		}
	}
}
await verifyUrls(output);
console.log(`Verified ${checked.size} same-origin URLs against the artifact`);
console.log(`Pages artifact verified: ${destination}`);
