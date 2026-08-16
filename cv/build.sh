#!/bin/sh
# Build the CV and drop it everywhere it's served from.
set -e
cd "$(dirname "$0")"
xelatex -interaction=nonstopmode -halt-on-error AmrAbujabal_CV.tex >/dev/null
cp AmrAbujabal_CV.pdf ../public/AmrAbujabal_CV.pdf
cp AmrAbujabal_CV.pdf "$HOME/Downloads/Resume/AmrAbujabal_CV_1.pdf"
rm -f AmrAbujabal_CV.aux AmrAbujabal_CV.log AmrAbujabal_CV.out AmrAbujabal_CV.pdf
echo "built -> public/AmrAbujabal_CV.pdf + ~/Downloads/Resume/AmrAbujabal_CV_1.pdf"
