# Day 24 - CI/CD with GitHub Actions
**Date:** April 2, 2026
**Week:** 6 | **Day:** 24

## What I Built
Configured a live CI/CD pipeline using GitHub Actions that
automatically runs all 14 tests every time code is pushed to GitHub.

## File Created/Modified
- **.github/workflows/playwright.yml** — GitHub Actions workflow
  at the ROOT level of the repository

## What is CI/CD?
**CI = Continuous Integration**
Every time you push code, tests run automatically to make sure
nothing is broken.

**CD = Continuous Delivery**
If tests pass, code can be automatically deployed to production.

Think of it like a robot friend who tests your code every time
you send an update — immediately telling you if something broke.

## How the Pipeline Works
Every time code is pushed to GitHub:

1. GitHub spins up a fresh Ubuntu server in the cloud
2. Downloads your code onto that server
3. Installs Node.js
4. Runs npm install to get all packages
5. Downloads Playwright browsers (Chrome, Firefox, Safari)
6. Runs all 14 tests automatically
7. Saves HTML report as a downloadable artifact
8. Reports green (pass) or red (fail)

## Key Problems Solved Today

**Problem 1 - Wrong folder**
GitHub Actions only reads workflows from the ROOT level
.github/workflows/ — not from inside subfolders.
Fix: Copied playwright.yml to the root level.

**Problem 2 - Wrong working directory**
Tests and package.json are inside week6-framework/ but the
server was looking in the root folder.
Fix: Added working-directory: week6-framework to every step.

**Problem 3 - npm ci vs npm install**
npm ci requires a package-lock.json to already exist on GitHub.
Ours was blocked by .gitignore so it kept failing.
Fix: Changed to npm install which works without a lockfile.

## Final Workflow Structure
```yaml
- Install Node.js
- npm install (inside week6-framework/)
- npx playwright install --with-deps
- npx playwright test
- Upload HTML report as artifact
```

## Why This Matters for Your Career
- Every professional QA team uses CI/CD
- Proves code works before it reaches production
- Team can see test results without running anything locally
- You can now honestly say "Intermediate" for CI/CD experience
  on job applications

## Test Results
- 14 tests passed automatically in the cloud
- HTML report saved as downloadable artifact
- Pipeline runs in approximately 2 minutes

## Key Takeaway
CI/CD turns your local tests into a professional automated
quality gate. Every push is now automatically verified —
exactly what real software teams do every day.