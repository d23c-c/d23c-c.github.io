import type { APIRoute } from "astro";
import { siteBasePath } from "@/config/sitePath";

export const prerender = true;

const robotsTxt = `
User-agent: *
Disallow: /_astro/
Disallow: /archive/?tag=
Disallow: /archive/?category=
Disallow: /archive/?uncategorized=

Sitemap: ${new URL(`${siteBasePath}sitemap-index.xml`, import.meta.env.SITE).href}
`.trim();

export const GET: APIRoute = () => {
	return new Response(robotsTxt, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
};
