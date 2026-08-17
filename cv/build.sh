#!/bin/sh
# Build the CV and drop it everywhere it's served from.
#
# Both destinations are mandatory. The Downloads copy is the one Amro
# actually sends people; it lives outside the repo, so nothing else in the
# project would notice it going stale. This script is the only way the CV
# should be built — don't call xelatex directly.
set -e
cd "$(dirname "$0")"

SITE=../public/AmrAbujabal_CV.pdf
LOCAL=$HOME/Downloads/Resume/AmrAbujabal_CV_1.pdf

# Pin the PDF's embedded timestamp to the source's mtime, so rebuilding
# without editing the .tex yields byte-identical output. Otherwise every
# build dirties public/*.pdf in git and "the PDF changed" stops meaning
# "the CV changed".
SOURCE_DATE_EPOCH=$(stat -f %m AmrAbujabal_CV.tex)
export SOURCE_DATE_EPOCH FORCE_SOURCE_DATE=1

xelatex -interaction=nonstopmode -halt-on-error AmrAbujabal_CV.tex >/dev/null

mkdir -p "$(dirname "$LOCAL")"
cp AmrAbujabal_CV.pdf "$SITE"
cp AmrAbujabal_CV.pdf "$LOCAL"

# Prove both landed rather than trusting cp's exit code.
BUILT=$(md5 -q AmrAbujabal_CV.pdf)
[ "$(md5 -q "$SITE")" = "$BUILT" ] || { echo "FAILED: $SITE is stale" >&2; exit 1; }
[ "$(md5 -q "$LOCAL")" = "$BUILT" ] || { echo "FAILED: $LOCAL is stale" >&2; exit 1; }

rm -f AmrAbujabal_CV.aux AmrAbujabal_CV.log AmrAbujabal_CV.out AmrAbujabal_CV.pdf
echo "built $BUILT"
echo "  -> public/AmrAbujabal_CV.pdf        (site download, commit this)"
echo "  -> ~/Downloads/Resume/AmrAbujabal_CV_1.pdf"
