# Day 21 - Week 6 Framework Setup
**Date:** March 30, 2026
**Week:** 6 | **Day:** 21

## What I Built
Set up a complete professional QA automation framework from scratch.

## Folder Structure Created
```
week6-framework/
├── .github/workflows/    ← CI/CD pipeline config
├── pages/                ← Page Object Model classes
├── tests/
│   ├── ui/               ← Browser/UI tests
│   └── api/              ← API tests (coming Day 23)
├── utils/                ← Helper functions
├── test-data/            ← Centralized test data
├── .env                  ← Environment variables
└── playwright.config.ts  ← Framework configuration
```

## Files Created
- **LoginPage.ts** - First Page Object Model class
- **login.spec.ts** - 3 login tests using POM
- **playwright.config.ts** - Playwright configuration

## Key Concepts Learned
- **Framework architecture** - How professional QA teams organize projects
- **TypeScript** - Strongly typed version of JavaScript
- **Page Object Model** - Separating page elements from test logic
- **GitHub Actions** - CI/CD workflow scaffolded automatically

## Tests Results
- 2 tests passed (example.spec.ts)
- 3 tests passed (login.spec.ts)
- **Total: 5 tests, 100% pass rate**

## Key Takeaway
A professional framework isn't just tests — it's organized, 
maintainable, and scalable code that a whole team can work with.