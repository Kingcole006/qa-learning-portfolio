# Day 28 - Cross-Browser Testing
**Date:** April 8, 2026
**Week:** 7 | **Day:** 28

## What I Built
Configured the framework to run all tests across Chrome,
Firefox, and Safari simultaneously.

## Changes Made
- **playwright.config.ts** — Increased timeout to 60 seconds
- **tests/example.spec.ts** — Deleted (tested external site,
  unreliable across browsers)
- Downloaded Firefox and WebKit browsers locally

## How Cross-Browser Testing Works

Running `npx playwright test` without `--project=chromium`
runs ALL three browser projects defined in the config: