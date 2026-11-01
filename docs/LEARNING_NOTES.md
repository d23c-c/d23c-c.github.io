# Learning Notes

The site has 70 independent notes, grouped under five language pages:

| Language | Units | Study period (estimated from school semesters) | Authoring tools |
|---|---:|---|---|
| C++ | 21 | Sep 2021–Jun 2023 | Code::Blocks, Dev-C++, VS Code |
| Python | 17 | Sep 2023–Jan 2024 | VS Code; Linux text editors and .py files |
| PHP | 12 | Sep 2023–Jan 2024 | VS Code |
| C# | 12 | Feb–Jun 2025 | Visual Studio |
| SQL | 8 | Feb–Jun 2023 | VS Code |

Study periods come from the author's grade/semester history and education dates. They are not exact start/end dates or note publication dates.
Article bodies stay in Traditional Chinese; navigation, titles, metadata, categories and tags use English.

## Content and verification

The curriculum follows the two supplied learning-notes design files. Explanations, examples and exercises are original.
The examples are demonstrations, not solutions to recommended online-judge problems.
Exercises are locally authored tasks; no account progress, question difficulty or accepted submissions are claimed.
GrandmaCan video chapter mappings have not been independently established and are not fabricated.

`src/data/learning-verification.json` records the actual verification results:

- 55 examples executed (C++, Python, C# console, Razor HTTP and SQLite/schema generation).
- 2 Windows Forms examples compiled on Windows; interactive UI behavior was not tested.
- 12 PHP examples were not executed because PHP CLI was unavailable.
- 1 EF Core example was not built/run because its SQLite provider was not installed.
- Incorrect-code pitfalls are explained but not individually executed; undefined behavior is not deliberately triggered.
- The ERD generator ran and its output was rendered to SVG with the site's Mermaid-compatible renderer, not mmdc.

Unverified examples are labelled in the articles. The current verification versions are distinct from the tools used during the author's original study period.

## Maintenance

- Edit content directly in `src/content/posts/learning-notes/`.
- Language tools and study periods are in `src/data/learning.ts`.
- Authoring data is in `scripts/learning-content.mjs` and `scripts/learning-syntax.mjs`.
- `node scripts/verify-learning-examples.mjs` reruns local examples. It needs g++, Python, .NET 10 and Windows desktop reference packs. It does not install PHP or submit anything to judges.
- `node scripts/generate-learning-notes.mjs` regenerates the notes and overwrites their Markdown files; keep hand edits in the authoring data first if using this command.
- Neither generation nor local-language verification runs during normal website builds. Committed Markdown is the deployment source.
- `node scripts/test-blog-content.mjs` checks the production HTML for note counts, English interface, presentations, timeline and footer behavior.

Search uses one Chinese-segmented index so English navigation can find both English headings and Traditional Chinese article text.
Hot Tags count distinct tags per learning note and display the ten most frequent tags.
