# Day 27 - Advanced Reporting with Screenshots
**Date:** April 8, 2026
**Week:** 7 | **Day:** 27

## What I Built
Updated the framework's reporting configuration to produce
professional visual reports with automatic failure evidence.

## Files Modified
- **playwright.config.ts** — Updated reporter and failure capture

## What Changed in the Config

### Before (Day 22):
```typescript
reporter: 'html',
use: {
  trace: 'on-first-retry',
  screenshot: 'only-on-failure',
}
```

### After (Day 27):
```typescript
reporter: [
  ['html', { open: 'never' }],
  ['list'],
],
use: {
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
  trace: 'on-first-retry',
}
```

## The Three Reporters

### HTML Reporter
- Generates a beautiful visual report at playwright-report/
- Shows all tests grouped by file
- Shows execution time per test
- On failure: embeds screenshots and videos directly in report
- Command to view: npx playwright show-report

### List Reporter
- Shows results in the terminal AS tests run
- Numbers each test (✓ 1, ✓ 2, etc.)
- Shows pass/fail immediately without waiting for all tests
- Great for watching tests run in real time

## The Three Failure Captures

### Screenshot on Failure
- Takes a screenshot automatically when any test fails
- Saved to test-results/ folder
- Embedded in HTML report
- Shows exactly what the browser looked like when it failed

### Video on Failure
- Records the entire test as a video
- Only saved if the test fails (saves disk space)
- Shows every click, scroll, and interaction
- Invaluable for debugging flaky tests

### Trace on First Retry
- Saves a detailed trace file on first retry
- Shows network requests, console logs, screenshots
- Can be viewed with: npx playwright show-trace
- The most powerful debugging tool in Playwright

## Test Results
- 17 tests passing
- 100% pass rate
- Professional HTML report generated
- CI/CD pipeline green ✅

## Why This Matters in Interviews
- Shows you care about debuggability
- Demonstrates professional standards
- Visual evidence makes bug reports actionable
- Video recording proves tests ran correctly

## Key Takeaway
Professional reporting turns test results from numbers into
evidence. When a test fails, a screenshot and video tell you
exactly what went wrong — no guessing, no manual reproduction
needed. This is what enterprise QA teams use every day.