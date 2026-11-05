# Experiences and the activity timeline

Posts now groups All Posts, Tags, Categories and Timeline. Categories contains Languages (the existing five language hubs) and Experiences. Existing learning-note and article URLs stay usable.

Each experience is an ordinary Markdown article under src/content/posts/experiences with category Experiences and structured experience metadata: start, optional end, kind and organizer. Event dates are strings to preserve month-only records; do not invent a day. Kinds are Workshop, Competition, Conference and Teaching.

All 27 retrospective articles were published on 2026-11-05. Their historical event dates appear separately in the articles, Experiences index and merged Timeline. The Timeline sorts activity dates, while the publication browser retains actual publication dates. Language study periods remain school-semester estimates. The timeline filters only change which entries are visible and are compatible with page navigation.

The article bodies use Traditional Chinese. Titles, navigation, descriptions, categories and tags use English. Source workshops are summarized independently; the Session workshop is the same event previously called OWASP analysis and practice, so it has one article.

## Editorial evidence

Personal participation and memories are based on the owner's supplied Canva record, previously confirmed activity inventory and connected email records. Official event pages and first-hand public write-ups provide supplementary context for the matching edition. Public challenge explanations are attributed to their authors; they are not the owner's solved-task list or score. No workshop completion or certificate is asserted without supporting records. Conference agenda topics are not presented as talks the owner personally attended.

The owner confirmed that a previously listed Tainan competition was registration only, so it is excluded. Unattended camps, marketing invitations and unconfirmed course completion are excluded as well. The original evidence, correspondence, access information and other participants' personal details are kept outside the repository.

The original learning record included some imprecise technical descriptions. The new articles distinguish crawler instructions from access control, encoding from encryption, Dshell network forensics from remote administration, and pwntools stream interaction from process-memory APIs.

## Maintenance and checks

Edit the committed Markdown directly. Add verified activity dates in the experience metadata rather than changing published to the event date. The Experiences page and Timeline are generated from the content collection, so no second event list needs updating.

Run pnpm check, pnpm type-check, pnpm build and node scripts/test-blog-content.mjs. The content check verifies individual article routes, category structure, timeline links, historical-date precision and exclusion of private correspondence. The Pages packaging script also checks same-origin links and files exposed by the artifact.
