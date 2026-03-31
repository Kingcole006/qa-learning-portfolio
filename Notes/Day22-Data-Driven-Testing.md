# Day 22 - Data-Driven Testing & Environment Variables
**Date:** March 31, 2026
**Week:** 6 | **Day:** 22

## What I Built
Added data-driven testing, a second Page Object, and environment
variable configuration to the Week 6 framework.

## Files Created
- **InventoryPage.ts** - Second Page Object Model class
- **data-driven-login.spec.ts** - Tests that loop through user data
- **users.json** - Centralized test data for all users
- **.env** - Environment variables (BASE_URL, TEST_TIMEOUT)
- **playwright.config.ts** - Updated to use environment variables

## Key Concepts Learned

### Data-Driven Testing
Instead of hardcoding test values, store them in a JSON file
and loop through them automatically:
- One test covers multiple users/scenarios
- Add new test cases by updating JSON only
- No changes needed to test code

### Environment Variables
Store configuration in .env file instead of hardcoding:
- BASE_URL=https://www.saucedemo.com
- Switch environments (dev/staging/prod) without changing code
- Loaded automatically via dotenv package

### Multiple Page Objects
- LoginPage.ts - handles login form interactions
- InventoryPage.ts - handles product list verification
- Page Objects work together inside the same test

## Test Results
- 5 tests passed (data-driven-login.spec.ts)
- 3 tests passed (login.spec.ts)
- 2 tests passed (example.spec.ts)
- **Total: 10 tests, 100% pass rate**

## Key Takeaway
Data-driven testing is one of the most asked-about skills in
QA interviews. Writing one test that covers multiple scenarios
automatically is what separates junior from mid-level engineers.