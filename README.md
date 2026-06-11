# Cole Brown | QA Automation Engineer

> Transitioning into QA Automation Engineering through intensive, hands-on self-directed training.
> Built production-ready automation frameworks and a fully functional personal AI agent — from scratch.

[![GitHub](https://img.shields.io/badge/GitHub-Kingcole006-blue)](https://github.com/Kingcole006/qa-learning-portfolio)
[![Status](https://img.shields.io/badge/Status-Actively%20Applying-green)]()
[![Tests](https://img.shields.io/badge/Tests-110%2B%20Passing-brightgreen)]()
[![Pass Rate](https://img.shields.io/badge/Pass%20Rate-100%25-success)]()
[![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-blue)]()

---

## Who I Am

I'm **Cole Brown**, a QA Automation Engineer in training based in Sugar Hill, GA. I don't just follow tutorials — I build real things and ship them. In the past 2+ months I've gone from zero automation experience to building production-grade test frameworks and deploying a fully operational personal AI agent with Google integrations, a live dashboard, notifications, and file system access.

**Background:** Claims Adjuster (Allstate, State Farm) → Client Care Advisor (Decisely) → QA Automation Engineering

**Education:** Lipscomb University — Division I Soccer Scholarship

---

## Tech Stack

| Category | Technologies |
|---|---|
| Test Automation | Playwright, TypeScript, JavaScript |
| CI/CD | GitHub Actions |
| Architecture | Page Object Model |
| API Testing | REST, HTTP, JSON |
| Database | SQL, Supabase |
| Backend | Node.js, Netlify Serverless Functions |
| Frontend | HTML, CSS, JavaScript, PWA |
| Tools | Git, GitHub, JIRA, Agile/Scrum |
| Integrations | Google Calendar API, Gmail API, Google Drive API, GitHub API, Anthropic API |

---

## Projects

---

### 1. TypeScript Playwright Automation Framework

**Production-ready E2E test framework built from scratch**

**Live CI/CD:** GitHub Actions — auto-runs on every push

**Technologies:** TypeScript, Playwright, GitHub Actions, Page Object Model

**What I Built:**
- Full Page Object Model architecture across multiple page classes
- Cross-browser testing: Chromium, Firefox, WebKit
- API test suite alongside UI tests
- Parallel test execution with Playwright's built-in runner
- HTML test reports auto-generated on every run
- GitHub Actions workflow — tests run automatically on push and pull request

**Results:**
- 110+ automated tests at 100% pass rate
- 7,200+ lines of code
- Zero manual intervention required — fully automated pipeline

**Skills Demonstrated:** TypeScript, POM architecture, CI/CD pipelines, cross-browser testing, API automation, test reporting

---

### 2. Anisa — Personal AI Agent (Live Project)

**A fully operational personal AI assistant built across 5 development phases and deployed as a PWA**

**Live:** https://anisa-ai-00.netlify.app
**Repo:** https://github.com/Kingcole006/anisa

**Technologies:** HTML, CSS, JavaScript, Anthropic API (Claude), Netlify Serverless Functions, Supabase, Google Cloud (Calendar API, Gmail API, Drive API), GitHub API, Web Notifications API, PWA

---

**Phase 1 — Core AI + Google Read/Write**

- Custom UI with animated breathing orb, Cormorant Garamond typography, aurora color palette
- Netlify serverless function as secure API proxy — API key never exposed to client
- Persistent memory via Supabase (conversations + knowledge tables)
- Voice input (Web Speech API) and voice output (Speech Synthesis)
- Google OAuth with secure cookie-based token management
- Read Google Calendar and Gmail — events and emails injected into AI context automatically
- Write to Google Calendar — structured JSON ACTION_BLOCK system triggers confirmation cards before executing
- Send emails via Gmail — full send capability with preview and confirm UI

*Architecture highlight: instead of fragile string matching, Anisa returns a typed JSON ACTION_BLOCK when write actions are requested. The front-end detects, strips, and renders a confirmation card — zero ambiguity, zero false triggers. Server-side write intent detection in `chat.js` enforces the pattern even if the model tries to skip it.*

---

**Phase 2 — GitHub Integration + Slash Commands + Daily Briefing**

- Daily briefing banner on startup — time-aware greeting, today's calendar, unread email count, GitHub activity
- 9 slash commands: `/brief`, `/calendar`, `/email`, `/github`, `/resume`, `/test`, `/focus`, `/jobs`, `/dashboard`
- Slash command autocomplete popup — type `/` to see all commands with descriptions
- GitHub integration via public API — live repo list and recent push events, no auth required

---

**Phase 3 — Dashboard + File Upload + Job Search Mode**

- Responsive dashboard panel — slide-in sidebar on desktop, full overlay on mobile
- Dashboard shows career stats, upcoming events, unread emails, GitHub repos, quick action buttons
- File upload via 📎 button or drag and drop onto chat — supports .txt, .md, .js, .ts, .json, .csv, .py
- Job Search Mode — paste any job posting, automatically receive tailored resume bullets, a cover letter draft, and a skills gap analysis in one response

---

**Phase 4 — Notifications + Reminders**

- Browser notification system using Web Notifications API
- Meeting alerts — fires 30 minutes and 5 minutes before any Google Calendar event
- Daily briefing reminder at 9am if Anisa hasn't been opened
- GitHub streak reminder at 6pm — checks if you've pushed today via GitHub API, only fires if you haven't
- Job application follow-up reminder at 10am (toggleable)
- Settings panel with toggle switches — preferences persist via localStorage
- Smart deduplication — never fires the same alert twice per session

---

**Phase 5 — Google Drive Integration**

- `/drive` slash command opens a search prompt — returns a file picker with Open and Read buttons
- Read Google Docs and text files directly into chat — Anisa reviews the content and responds
- Auto-context injection — mentions of "resume", "cover letter", or "my notes" automatically search Drive and surface matching files
- Dashboard includes a Recent Drive Files section
- Supports Google Docs, Sheets, PDFs, and plain text files

---

**Netlify Functions (backend):**
- `chat.js` — Anthropic API proxy with Supabase memory enrichment and write intent enforcement
- `google-auth.js` — OAuth initiation
- `google-callback.js` — OAuth token exchange and cookie setting
- `google-calendar.js` — Calendar read
- `google-calendar-write.js` — Calendar event create/delete
- `google-gmail.js` — Gmail unread fetch
- `google-gmail-send.js` — Gmail draft and send
- `google-drive.js` — Drive search, file read, recent files

---

### 3. SQL for QA

**Comprehensive SQL practice for database validation in QA workflows**

- SELECT, WHERE, JOIN, GROUP BY, aggregate functions
- Database validation queries for test assertions
- Understanding relational data structures for API testing

---

## Stats

| Metric | Value |
|---|---|
| Training Duration | 10 weeks |
| Automated Tests | 110+ |
| Pass Rate | 100% |
| Lines of Code | 7,200+ |
| CI/CD Pipelines | Active |
| Live Projects Deployed | 2 |
| Anisa Development Phases | 5 complete |
| Netlify Functions Built | 8 |
| Google APIs Integrated | 3 (Calendar, Gmail, Drive) |

---

## Contact

- **GitHub:** [Kingcole006](https://github.com/Kingcole006)
- **Portfolio:** [kingcole006.github.io/qa-learning-portfolio](https://kingcole006.github.io/qa-learning-portfolio)
- **Location:** Sugar Hill, GA
