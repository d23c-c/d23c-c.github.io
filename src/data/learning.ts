export const learningTracks = [
	{ slug: "cpp", name: "C++", units: 21, from: "2021-09", to: "2023-06", stage: "Grades 10–11", tools: "Code::Blocks · Dev-C++ · VS Code", description: "From console fundamentals to classes, inheritance and virtual functions." },
	{ slug: "python", name: "Python", units: 17, from: "2023-09", to: "2024-01", stage: "Grade 12 · Fall semester", tools: "VS Code · Linux text editors (.py scripts)", description: "Core types, collections, object references, functions and object-oriented programming." },
	{ slug: "php", name: "PHP", units: 12, from: "2023-09", to: "2024-01", stage: "Grade 12 · Fall semester", tools: "VS Code", description: "Language fundamentals through functions, arrays, abstract classes and interfaces." },
	{ slug: "csharp", name: "C#", units: 12, from: "2025-02", to: "2025-06", stage: "University year 1 · Spring semester", tools: "Visual Studio", description: "C# foundations, Windows Forms, Razor Pages and database integration." },
	{ slug: "sql", name: "SQL", units: 8, from: "2023-02", to: "2023-06", stage: "Grade 11 · Spring semester", tools: "VS Code", description: "Queries, joins, grouping, relational constraints and schema-to-ERD automation." },
] as const;

export function studyPeriod(track: typeof learningTracks[number]): string {
	const format = (date: string) => new Intl.DateTimeFormat("en", { month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}-01T00:00:00Z`));
	return `${format(track.from)} – ${format(track.to)}`;
}
