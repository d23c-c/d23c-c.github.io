import {
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/navBarConfig";
export const LinkPresets: Record<string, NavBarLink> = {
	Home: { name: "首頁", url: "/" },
	Archive: {
		name: "學習筆記",
		url: "/archive/",
	},
	Projects: {
		name: "專案",
		url: "/projects/",
	},
	Security: {
		name: "資安實驗室",
		url: "/security/",
	},
	Research: {
		name: "簡報與筆記",
		url: "/research/",
	},
	About: { name: "關於我", url: "/about/" },
};
export const navBarConfig: NavBarConfig = { links: Object.values(LinkPresets) };
export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};
