import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import assert from "node:assert/strict";

const source = readFileSync(
	new URL("../src/components/features/PersonalBanner.astro", import.meta.url),
	"utf8",
)
	.split("<script is:inline define:vars={{ home, about, sources }}>")[1]
	.split("</script>")[0];
const home = "/QTpsTlZmcVVHSUxEOkpRRw/";
const about = home + "about/";
const sources = ["default", "cat", "fat_cat"].map(
	(name) => `${home}${name}.jpg`,
);

function session(initialPath = home) {
	const events = {},
		timers = new Map();
	let nextTimer = 0,
		observer;
	let now = 1000;
	const img = {
		src: "",
		alt: "",
		removeAttribute() {},
		closest() {
			return null;
		},
		getAttribute() {
			return this.src;
		},
	};
	const location = { pathname: initialPath, href: "https://example.com" + initialPath, origin: "https://example.com" };
	const document = {
		hidden: false,
		body: {},
		querySelectorAll: () => [img],
		getElementById: () => ({}),
		addEventListener: (name, fn) => {
			events[name] = fn;
		},
	};
	const context = {
		home,
		about,
		sources,
		location,
		document,
		window: {
			swup: { hooks: { on: (name, fn) => { events[name] = fn; } } },
			addEventListener: (name, fn) => {
				events[name] = fn;
			},
		},
		MutationObserver: class {
			constructor(fn) {
				observer = fn;
			}
			observe() {}
		},
		Image: class {
			set src(value) {
				this.onload();
			}
		},
		setTimeout: (fn, delay) => {
			const id = ++nextTimer;
			timers.set(id, { fn, delay });
			return id;
		},
		clearTimeout: (id) => timers.delete(id),
		Math,
		Date: class extends Date { static now() { return now; } },
		URL,
		Element: class {},
	};
	runInNewContext(source, context);
	return {
		context,
		img,
		timers,
		events,
		location,
		document,
		observe: () => observer(),
		advance: (milliseconds) => { now += milliseconds; },
	};
}

const s = session();
assert.equal(s.img.src, sources[0]);
assert.equal([...s.timers.values()][0].delay, 180000);
s.location.pathname = home + "research/";
s.events["swup:contentReplaced"]();
assert.equal(s.timers.size, 0);
s.location.pathname = home;
s.events["swup:contentReplaced"]();
assert.ok(sources.slice(1).includes(s.img.src));
s.observe();
assert.ok(sources.slice(1).includes(s.img.src));
assert.equal(session().img.src, sources[0], "full reload resets to default");
const longVisit = session();
[...longVisit.timers.values()][0].fn();
assert.ok(sources.slice(1).includes(longVisit.img.src));
const hidden = session();
hidden.document.hidden = true;
hidden.events.visibilitychange();
assert.equal(hidden.timers.size, 1);
hidden.advance(180000);
hidden.events.visibilitychange();
assert.equal([...hidden.timers.values()][0].delay, 0, "elapsed time survives tab visibility changes");
const hooked = session();
hooked.location.pathname = home + "research/";
hooked.events['page:view']();
hooked.location.pathname = home;
hooked.events['page:view']();
assert.ok(sources.slice(1).includes(hooked.img.src), "Swup 4 hooks drive banner changes");
const firstCat = hooked.img.src;
hooked.location.pathname = home + "research/";
hooked.events['page:view']();
hooked.location.pathname = home;
hooked.events['page:view']();
assert.notEqual(hooked.img.src, firstCat, "avoid visually unchanged random selections");
const deep = session(home + "research/");
assert.equal(deep.img.src, sources[0]);
deep.location.pathname = home;
deep.events["swup:contentReplaced"]();
assert.ok(sources.slice(1).includes(deep.img.src));
const resetSession = session();
[...resetSession.timers.values()][0].fn();
assert.ok(sources.slice(1).includes(resetSession.img.src));
resetSession.location.pathname = about;
resetSession.events["swup:contentReplaced"]();
assert.equal(resetSession.img.src, sources[0], "About resets the active banner");
resetSession.location.pathname = home;
resetSession.events["swup:contentReplaced"]();
assert.equal(resetSession.img.src, sources[0], "returning from About keeps default");
resetSession.location.pathname = home + "research/";
resetSession.events["swup:contentReplaced"]();
resetSession.location.pathname = home;
resetSession.events["swup:contentReplaced"]();
assert.ok(sources.slice(1).includes(resetSession.img.src), "other returns still randomize");
resetSession.location.pathname = about;
resetSession.events["swup:contentReplaced"]();
resetSession.events["swup:contentReplaced"]();
assert.equal(resetSession.img.src, sources[0], "repeat About visits reset");
const fromAbout = session(about);
fromAbout.location.pathname = home;
fromAbout.events["swup:contentReplaced"]();
assert.equal(fromAbout.img.src, sources[0], "direct About entry also resets home");
console.log(
	"Banner: initial, reload, navigation, 180s, hidden tab and responsive slot checks passed.",
);
