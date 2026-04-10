# Day 29 - Test Organization & Tagging
**Date:** April 10, 2026
**Week:** 7 | **Day:** 29

## What I Built
Added tags to tests so specific groups can be run on demand
instead of always running the entire suite.

## Files Modified
- **tests/ui/login.spec.ts** — Added @smoke, @regression, @ui, @login tags
- **tests/api/users.spec.ts** — Added @smoke, @regression, @api tags

## How Tags Work in Playwright

Tags are added directly in the test name using @ symbol:
```typescript
test('successful login @smoke @ui @login', async ({ page }) => {
  // test code
});
```

Then run specific tags using --grep:
```bash
npx playwright test --grep "@smoke"
npx playwright test --grep "@api"
npx playwright test --grep "@regression"
```

Note: In PowerShell, always wrap tags in quotes:
```bash
npx playwright test --grep "@smoke"   ✅ correct
npx playwright test --grep @smoke     ❌ PowerShell error
```

## Tags Used in This Framework

**@smoke** — Quick sanity check tests (run first, run often)
- Verifies the most critical functionality works
- Should pass in under 30 seconds
- Run before every deployment

**@regression** — Full regression suite
- Tests all edge cases and error scenarios
- Takes longer to run
- Run nightly or before releases

**@api** — API tests only
- All tests in tests/api/
- Runs in under 5 seconds
- Useful for backend-only changes

**@ui** — UI/browser tests only
- All tests in tests/ui/
- Useful for frontend-only changes

**@login** — Login-specific tests
- All tests related to login functionality
- Useful when login code changes

## Results by Tag

| Tag | Tests | Time |
|-----|-------|------|
| @smoke | 3 | 9s |
| @api | 4 | 3.6s |
| @regression | 5 | ~45s |
| @ui | 11 | ~30s |
| All | 15 | 30s |

## Why This Matters in Interviews

**Interviewer:** "How do you handle test organization?"
**You:** "I use tags to categorize tests by type and criticality.
Smoke tests run in 9 seconds for quick sanity checks before
deployment. Full regression runs nightly. API and UI tests
can be run independently when only one layer changes."

## Real World Usage
- Pre-deployment: run @smoke (fast, critical only)
- Nightly builds: run all tests (full coverage)
- Backend PR: run @api (relevant tests only)
- Frontend PR: run @ui (relevant tests only)

## Key Takeaway
Tags transform a test suite from "run everything always"
to "run the right tests at the right time." This is how
professional QA teams manage test execution efficiently
without sacrificing coverage.