# Day 39 -- Agile Ceremonies and QA Role

**Date:** April 30, 2026
**Week:** 9 of 10
**Focus:** The 4 Agile ceremonies and how QA participates in each

---

## The 4 Core Ceremonies

### 1. Sprint Planning
**When:** Start of every sprint
**Who:** Entire team
**What happens:** Team pulls stories from the backlog into the
sprint and estimates the work.

**QA Role:**
- Review acceptance criteria for each story
- Flag stories that are not testable or missing details
- Estimate testing effort
- Ask: "How will we know this is done?" and "What are the edge cases?"

---

### 2. Daily Standup
**When:** Every day, 15 minutes max
**Who:** Entire team
**What happens:** Everyone answers 3 questions:
1. What did I do yesterday?
2. What am I doing today?
3. Is anything blocking me?

**QA Role:**
- Report on testing progress
- Flag bugs found so the team knows early
- Surface blockers like missing test data or environment issues

**Example QA standup:**
"Yesterday I finished testing the login feature and filed 2 bugs,
SCRUM-8 and SCRUM-9. Today I am picking up the checkout flow for
testing. No blockers right now."

---

### 3. Sprint Review
**When:** End of every sprint
**Who:** Team plus stakeholders
**What happens:** Team demos what was built during the sprint.

**QA Role:**
- Confirm which stories passed QA and are ready to demo
- Flag any stories that did not pass and explain why
- Support the demo by confirming quality

---

### 4. Sprint Retrospective
**When:** End of every sprint, after the review
**Who:** Entire team, no stakeholders
**What happens:** Team reflects on the sprint and discusses
improvements.

**Three questions:**
1. What went well?
2. What did not go well?
3. What will we do differently next sprint?

**QA Role:**
- Raise quality issues that slowed the team down
- Suggest process improvements
- Celebrate wins like zero bugs in production

---

## The Full Sprint Timeline
Day 1     -- Sprint Planning
Day 1-9   -- Daily Standups, development and testing
Day 10    -- Sprint Review
Day 10    -- Retrospective
Day 11    -- Next Sprint Planning begins

---

## What I Practiced Today

- Added a QA comment to SCRUM-9 documenting findings
- Moved SCRUM-9 to Testing column to simulate active QA work
- Board now shows 2 tickets in Testing -- SCRUM-6 and SCRUM-9

---

## Interview Answers

**"What is your role in sprint planning?"**
"In sprint planning I review the acceptance criteria for each
story coming into the sprint. I ask questions to make sure stories
are testable before development starts. I also help estimate how
long testing will take so the team can plan accurately."

**"What do you say in a daily standup?"**
"I report what I tested yesterday, what I am testing today, and
whether anything is blocking me -- like a bug in the environment
or missing test data. I also flag any bugs I filed so the team
knows about them early."

**"What do you bring to a retrospective?"**
"I raise any quality issues that came up during the sprint --
like stories that were moved to testing before they were ready,
or bugs that could have been caught earlier with better acceptance
criteria. I also suggest process improvements for the next sprint."