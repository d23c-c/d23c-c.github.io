import type { SidebarLayoutConfig } from "../types/sidebarConfig";
export const sidebarLayoutConfig: SidebarLayoutConfig = {
	enable: true,
	position: "left",
	tabletSidebar: "left",
	hideSidebarOnPostPage: false,
	noSidebarContentWidth: 0.8,
	leftComponents: [
		{ type: "profile", enable: true, position: "top", showOnPostPage: true },
		{ type: "tags", enable: true, position: "top", showOnPostPage: true, specificConfig: { collapseThreshold: 10 } },
		{
			type: "categories",
			enable: true,
			position: "sticky",
			showOnPostPage: false,
			specificConfig: { collapseThreshold: 5 },
		},
		{
			type: "sidebarToc",
			enable: true,
			position: "sticky",
			showOnPostPage: true,
			hideOnNonPostPage: true,
		},
	],
	rightComponents: [],
	mobileBottomComponents: [],
};
