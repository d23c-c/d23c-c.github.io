export function formatActivityDate(value: string): string {
	return new Intl.DateTimeFormat("en", {
		year: "numeric",
		month: "short",
		...(value.length === 10 ? { day: "numeric" as const } : {}),
		timeZone: "UTC",
	}).format(
		new Date(`${value.length === 7 ? `${value}-01` : value}T00:00:00Z`),
	);
}

export function formatActivityPeriod(start: string, end?: string): string {
	return !end || end === start
		? formatActivityDate(start)
		: `${formatActivityDate(start)} – ${formatActivityDate(end)}`;
}
