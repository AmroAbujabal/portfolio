<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# The CV tracks the site

`cv/AmrAbujabal_CV.tex` is the source of the CV PDF. Its PROJECTS section must
mirror `src/data/content.ts` — same projects, same order.

Change one, change the other, then run `cv/build.sh`. That rebuilds the PDF and
writes it to both `public/AmrAbujabal_CV.pdf` (the site's download) and
`~/Downloads/Resume/AmrAbujabal_CV_1.pdf` (the local copy). Commit the PDF —
the site serves it from `public/`.
