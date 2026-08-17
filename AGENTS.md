<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# The CV and the site move together

`cv/AmrAbujabal_CV.tex` is the source of the CV PDF. Its PROJECTS section must
mirror `src/data/content.ts` — same projects, same order.

**This is a two-way rule, and it is not optional.** Change either side and
change the other in the same pass, without being asked:

- edited `src/data/content.ts` → update the .tex, rebuild
- edited the .tex → update `src/data/content.ts`

Then run `cv/build.sh`. It rebuilds the PDF and writes it to both
`public/AmrAbujabal_CV.pdf` (the site's download) and
`~/Downloads/Resume/AmrAbujabal_CV_1.pdf` (Amro's local copy — outside the
repo, so it is easy to forget; don't). Commit the PDF, the site serves it
from `public/`.

Scope is projects: which ones, their order, what they claim. The CV's skills
and education sections are deliberately a superset and don't need to track the
site. If a change really belongs to only one side, make it and say which side
you skipped and why.
