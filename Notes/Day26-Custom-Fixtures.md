# Day 26 - Custom Fixtures & Hooks
**Date:** April 6, 2026
**Week:** 7 | **Day:** 26

## What I Built
Added custom Playwright fixtures to the Week 6 framework,
eliminating repetitive setup code across all tests.

## Files Created
- **utils/fixtures.ts** — Custom fixture definitions
- **tests/ui/fixtures.spec.ts** — 3 tests using fixtures

## What Are Fixtures?

Fixtures are reusable setup and teardown functions that run
automatically before and after each test.

**Before fixtures — every test did this manually:**
- Create LoginPage object
- Navigate to the login URL
- Sometimes log in manually
- Repeat for every single test

**After fixtures — tests just request what they need:**
- Ask for loginPage → already created and navigated
- Ask for loggedInPage → already logged in
- Test focuses only on what it's actually testing

## The 3 Fixtures Built

**loginPage** — Creates LoginPage and navigates to saucedemo.com
automatically before every test that requests it

**inventoryPage** — Creates InventoryPage automatically before
every test that requests it

**loggedInPage** — Logs in completely before the test starts,
hands the test an already-authenticated inventory page, then
runs cleanup after the test completes

## Setup and Teardown
```typescript
loggedInPage: async ({ page }, use) => {
  // SETUP - runs before the test
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  
  // TEST runs here
  await use(inventoryPage);
  
  // TEARDOWN - runs after the test
  console.log('Test complete - fixture cleaned up');
}
```

## Test Results
- 3 fixture tests added
- 17 total tests passing
- 100% pass rate
- CI/CD pipeline green ✅

## Why This Matters in Interviews
Fixtures show you understand:
- DRY principle (Don't Repeat Yourself)
- Test isolation and consistency
- Professional test architecture
- Setup/teardown patterns

## Key Takeaway
Fixtures are how professional QA teams eliminate repetitive
setup code. Instead of every test doing the same setup, you
define it once and every test gets it automatically. This
makes tests cleaner, more maintainable, and more reliable.