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

I'm **Cole Brown**, a QA Automation Engineer in training based in Sugar Hill, GA. I don't just follow tutorials — I build real things and ship them. In the past 2+ months I've gone from zero automation experience to building production-grade test frameworks and deploying a fully operational AI agent with Google integrations, a live dashboard, and write capabilities.

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
| Integrations | Google Calendar API, Gmail API, GitHub API, Anthropic API |

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

**A fully operational personal AI assistant built from scratch and deployed as a PWA**

**Live:** https://anisa-ai-00.netlify.app
**Repo:** https://github.com/Kingcole006/anisa

**Technologies:** HTML, CSS, JavaScript, Anthropic API (Claude), Netlify Serverless Functions, Supabase, Google Cloud (Calendar API, Gmail API), GitHub API, PWA

**What I Built:**

*Core AI*
- Custom UI with animated breathing orb, Cormorant Garamond typography, and aurora color palette
- Netlify serverless function as a secure API proxy — API key never exposed to client
- Persistent memory across sessions via Supabase database (conversations + knowledge tables)
- Streaming-style responses, voice input (Web Speech API), and voice output (Speech Synthesis)
- Web search capability for real-time information

*Google Integrations (Read + Write)*
- Google OAuth flow with token management via secure cookies
- Read Google Calendar — fetches upcoming events and injects them into AI context
- **Write to Google Calendar** — creates events with a structured JSON confirmation system
- Read Gmail — fetches unread emails with sender, subject, and preview
- **Send emails via Gmail** — full send capability with confirmation card UI before executing

*Phase 2 Features*
- Daily briefing banner on startup — time-aware greeting, today's events, unread email count, GitHub activity
- 9 slash commands: `/brief`, `/calendar`, `/email`, `/github`, `/resume`, `/test`, `/focus`, `/jobs`, `/dashboard`
- GitHub integration — live repo list and recent commit activity from GitHub public API

*Phase 3 Features*
- Responsive dashboard panel — slide-in sidebar on desktop, full overlay on mobile
- Career stats, upcoming events, unread emails, GitHub repos, and quick action buttons
- File upload (📎 button + drag and drop) — attach .txt, .md, .js, .ts, .json, .csv, .py files
- Job Search Mode — paste any job posting, get tailored resume bullets, a cover letter draft, and a skills gap analysis automatically

**Architecture Highlights:**
- ACTION_BLOCK JSON system: AI returns structured JSON for write actions; front-end detects, strips, and renders confirmation cards — no fragile string matching
- Server-side write intent detection in `chat.js` with enforcement injection — guarantees AI includes action blocks for calendar/email requests
- Supabase memory enrichment on every API call — Anisa gets smarter over time
- Service worker with versioned cache for reliable PWA updates

**Installed as a desktop PWA on Windows**

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

---

## Contact

- **GitHub:** [Kingcole006](https://github.com/Kingcole006)
- **Portfolio:** [kingcole006.github.io/qa-learning-portfolio](https://kingcole006.github.io/qa-learning-portfolio)
- **Location:** Sugar Hill, GA
