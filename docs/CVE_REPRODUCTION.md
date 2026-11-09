# CVE reproduction publication

Three case studies live in the projects collection and the CVE Reproduction category. The category landing page is /cve-reproduction/. Titles, metadata and navigation use English; case-study bodies use Traditional Chinese.

The public reports are new summary editions derived from the case-study text, not copies of original private reports. Original Markdown, HTML, PDF, screenshots and scripts remain outside this repository and were not modified. Public evidence is presented as labeled, de-identified text excerpts. No original screenshot pixels, raw logs, credentials or executable proof-of-concept files are included.

## Evidence scope

- CVE-2021-41773: existing terminal records and images show execution inside a test container. Container root is not evidence of control of the host. HTTP status codes alone do not prove file disclosure.
- CVE-2021-34527: an existing target terminal image records a SYSTEM shell. This does not establish every low-privilege authentication scenario; an RPC error alone is not evidence of successful execution.
- CVE-2016-5195: preparation only, confirmed by the owner. Sample outputs from the old draft are excluded. The case remains Evidence pending.

No patch retest is claimed. Documentation publication dates and historical lab/preparation dates are separate.

## Privacy and PDF handling

The public editions omit source IP addresses, host identifiers, personal accounts, credentials, local source paths and original attachments. PDFs were built from the de-identified public text, then reopened to check extracted/searchable text, metadata, external links and absence of attachments. All pages were rendered for visual review. Evidence excerpts are transcriptions, not recreated terminal screenshots.

The PDF allowlist in src/data/cve-publication.json records the hashes of the three reviewed files. Deployment blocks every other PDF, and blocks a reviewed report if its bytes no longer match. This complements local text/metadata review; a matching hash is not a substitute for reviewing newly created content. Repeat the privacy and rendering checks when a report changes, then update the allowlist.

The website build never starts a vulnerable service or runs the local exploitation scripts. The published PDFs contain summaries and defensive analysis; they do not embed private source documents.
