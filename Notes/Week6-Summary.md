# Week 6 Summary - Full Framework Build & CI/CD
**Dates:** March 30 - April 3, 2026
**Status:** ✅ COMPLETE

## Goal
Answer "yes" to: "Can you independently design and set up a complete
automation framework without a pre-existing framework?"

## Answer: YES ✅

---

## What I Built This Week

### The Framework (week6-framework/)
A complete professional QA automation framework built from a blank
folder in 5 days using TypeScript and Playwright.

**Folder Structure:**
```
week6-framework/
├── .github/workflows/    ← Live CI/CD pipeline
├── pages/                ← Page Object Model classes
│   ├── LoginPage.ts
│   └── InventoryPage.ts
├── tests/
│   ├── ui/               ← Browser tests
│   └── api/              ← API tests
├── utils/                ← Helper functions
├── test-data/            ← Centralized test data
│   └── users.json
├── .env                  ← Environment variables
└── playwright.config.ts  ← Framework configuration
```

---

## Day by Day Breakdown

### Day 21 — Framework Setup
- Created professional folder structure from scratch
- Configured TypeScript + Playwright
- Built LoginPage.ts — first Page Object Model class
- Wrote 3 login tests (valid, invalid password, empty)
- GitHub Actions CI/CD workflow scaffolded
- **5 tests | 100% pass rate**

### Day 22 — Data-Driven Testing & Environment Variables
- Built InventoryPage.ts — second Page Object
- Created users.json with 3 valid and 2 invalid users
- Data-driven tests looping through all users automatically
- Environment variables via .env and dotenv
- playwright.config.ts fully configured and documented
- **10 tests | 100% pass rate**

### Day 23 — API Testing Inside the Framework
- Created tests/api/users.spec.ts
- GET all users — verifies 200 and array of 10
- GET single user — verifies correct data and fields
- GET non-existent user — verifies 404 error handling
- POST create user — verifies 201 and response data
- Framework now covers BOTH UI and API
- **14 tests | 100% pass rate**

### Day 24 — Live CI/CD with GitHub Actions
- Configured .github/workflows/playwright.yml at root level
- Debugged and fixed 5 pipeline failures (learned a lot!)
- Tests now run automatically in the cloud on every push
- HTML report saved as downloadable artifact
- Pipeline runs in approximately 2 minutes
- **14 tests passing automatically in the cloud**

### Day 25 — Polish & Documentation
- Updated PORTFOLIO.md — complete rewrite
- Updated RESUME.md — added Week 6 skills and CI/CD
- Updated LINKEDIN-SUMMARY.md — current and accurate
- Created Week 6 Summary (this file)
- README.md updated throughout the week

---

## Week 6 Final Stats

| Metric | Value |
|--------|-------|
| **Days** | 5 |
| **Files Created** | 12+ |
| **Tests Written** | 14 |
| **Pass Rate** | 100% |
| **CI/CD** | Live ✅ |
| **Languages** | TypeScript |

---

## Skills Unlocked This Week

- ✅ Framework architecture from scratch
- ✅ TypeScript for test automation
- ✅ Multiple Page Objects working together
- ✅ Data-driven testing with JSON
- ✅ API testing inside a UI framework
- ✅ Environment variables with dotenv
- ✅ GitHub Actions CI/CD pipeline
- ✅ Debugging pipeline failures

---

## Interview Talking Points

**"Can you build a framework from scratch?"**
Yes — I built a complete TypeScript/Playwright framework in Week 6
including Page Object Model, data-driven testing, API tests, and
a live CI/CD pipeline. The repo is at github.com/Kingcole006.

**"What's your CI/CD experience?"**
I configured a GitHub Actions pipeline that automatically runs
14 tests every time code is pushed. I debugged 5 pipeline failures
to get it working — understanding working-directory configuration,
npm install vs npm ci, and artifact paths.

**"What testing types can you do?"**
UI automation, API testing, data-driven testing, security testing,
and negative testing — all inside a single professional framework.

---

## Key Takeaway
Week 6 transformed the portfolio from "someone learning QA" to
"someone who builds professional QA frameworks." The CI/CD pipeline
is the final piece that makes it truly production-ready.

**Total Program Progress: 6 of 12 weeks complete**
**Next: Week 7 — Advanced automation patterns**