# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal site for Young Re Song, served by GitHub Pages at yrsong.com (see `CNAME`). It is hand-written static HTML and CSS. There is no package manager, build step, test suite, linter, or CI config, so there are no build, lint, or test commands to run. To check a change, open the HTML file in a browser.

## Architecture

- **Pages are standalone HTML.** `index.html` is the homepage. Most inner pages live in `posts/` (`me`, `research`, `journeys`, `projects`, `thoughts`, `construction`). The `posts/thoughts/` subfolder holds the individual blog posts (`hoops`, `tech`, `more_thoughts`, `sandbox`).
- **Styles are split by page family.** Each page includes its own `<style>` block, plus one of the shared sheets in `stylesheets/`:
  - `basicpage.css`, for the simple pages
  - `listpage.css`, for the list-style pages
  - `thoughts.css`, for the blog posts under `posts/thoughts/`, which share a top nav (`ul.topnav`)
  
  Before changing a style, check whether the page loads a shared sheet, a page-level `<style>` block, or both, and edit the one that actually applies.
- **Asset paths are relative.** Pages in `posts/` reference `../images/`, `../icons/`, and `../stylesheets/`. Pages in `posts/thoughts/` use `../../`. Keep this in mind when you add or move a page.
- **Images are pre-resized.** Large photos in `images/` were downsized for page speed. When adding photos, resize them to match (about 1080px wide, or 150px square for avatars) rather than committing full-size originals.
- **Resume.** `docs/Resume-Young-Re-Song.tex` is the LaTeX source and `docs/Resume-Young-Re-Song.pdf` is the compiled output that the homepage links to. The repo has no build script for the PDF, so regenerate it locally and commit both files together.
- **`REVIEW.md`** is an untracked checklist of pending site fixes. Check it before larger cleanups so you don't duplicate or undo work already listed there.

## Conventions

- Keep the existing visual language: orange `rgb(250, 105, 0)` text and links, and a `rgb(105, 210, 231)` hover color. The Google Fonts "Rancho" (headings) and "Gudea" (body) are loaded from `fonts.googleapis.com` in each page's `<head>`.
- Many pages carry commented-out HTML from earlier designs. Leave these alone unless you're doing a cleanup, and don't copy them into new code.
- Avoid adding Bootstrap or jQuery. `REVIEW.md` records the decision to replace them with flexbox and plain CSS.

## Git

Work directly on `main`, which is what GitHub Pages deploys. Pushing to `main` publishes the site, so check the result locally before pushing.
