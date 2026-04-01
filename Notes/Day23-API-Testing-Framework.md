# Day 23 - API Testing Inside the Framework
**Date:** April 1, 2026
**Week:** 6 | **Day:** 23

## What I Built
Added API tests directly into the Week 6 framework, making it
a complete framework that tests both UI and API in one place.

## File Created
- **tests/api/users.spec.ts** — 4 API tests using Playwright's
  built-in request context

## Key Concepts Learned

### API Testing with Playwright
Playwright has built-in API testing — no extra libraries needed:
- `request.newContext()` creates an API client
- Works alongside UI tests in the same framework
- Same assertions (expect) used for both UI and API

### The 4 Tests Written

**GET all users** — Verifies the endpoint returns 200 and an
array of 10 users

**GET single user** — Verifies a specific user returns correct
data with required fields (id, name, email)

**GET non-existent user** — Verifies the API returns 404 for
users that don't exist (error handling)

**POST create user** — Verifies new users can be created and
the response contains the submitted data

### Why This Matters
A complete professional framework tests BOTH layers:
- **UI layer** — what the user sees and interacts with
- **API layer** — what the data looks like underneath
Most junior candidates only test one. Testing both makes you
stand out immediately.

## Test Results
- 4 API tests passed
- 10 UI tests passed
- **Total: 14 tests, 100% pass rate**

## Key Takeaway
Your framework is now a full-stack testing solution. UI tests
catch visual and interaction bugs. API tests catch data and
backend bugs. Together they give complete coverage.