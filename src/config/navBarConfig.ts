import {
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/navBarConfig";
export const LinkPresets: Record<string, NavBarLink> = {
	Home: { name: "Home", url: "/" },
	Archive: {
		name: "Posts",
		url: "/posts/",
		children: [
			{ name: "All Posts", url: "/posts/" },
			{ name: "Tags", url: "/tags/" },
			{ name: "Categories", url: "/categories/" },
			{ name: "Timeline", url: "/archive/" },
		],
	},
	Projects: {
		name: "Projects",
		url: "/projects/",
	},
	Security: {
		name: "Lab",
		url: "/security/",
	},
	Research: {
		name: "Archive",
		url: "/research/",
	},
	About: { name: "About", url: "/about/" },
};
export const navBarConfig: NavBarConfig = { links: Object.values(LinkPresets) };
export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};
