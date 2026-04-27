# Day 36 -- Agile Fundamentals

**Date:** April 27, 2026
**Week:** 9 of 10
**Focus:** Understanding Agile and where QA fits in

---

## What is Agile?

Agile is a way of building software in short cycles called sprints
instead of one big release. The team ships working software at the
end of every sprint and adjusts based on feedback.

---

## Key Terms

**Sprint** -- A set timeframe where a team builds certain features,
usually 2 weeks long.

**Backlog** -- A prioritized list of all work that needs to be done.
The Product Owner manages this.

**User Story** -- An explanation of a feature written from the user's
point of view. Format is always:
"As a [user], I want to [do something], so that [benefit]."

Example:
"As a shopper, I want to filter products by price, so that I can
find items within my budget."

**Acceptance Criteria** -- The conditions that must be met for a story
to be considered done. This is where QA lives. QA uses acceptance
criteria to write test cases.

Example acceptance criteria for the story above:
- Filter options display correctly on the page
- Selecting a price range returns only matching products
- Selecting an invalid range shows an appropriate message
- Filter works on mobile and desktop

**Definition of Done** -- The checklist a team agrees on before calling
something complete. Usually includes QA sign off, code review, and
no open bugs.

**Standup** -- A daily 15 minute meeting where everyone answers:
1. What did I do yesterday?
2. What am I doing today?
3. Is anything blocking me?

**Sprint Review** -- End of sprint demo to stakeholders showing what
was built.

**Retrospective** -- End of sprint meeting where the team discusses
what went well and what to improve.

---

## Where QA Fits in Agile

| Sprint Phase | QA Role |
|---|---|
| Sprint Planning | Help estimate testing effort for each story |
| During Sprint | Write test cases, test features as they are built |
| End of Sprint | Sign off on stories before they are marked done |
| Retrospective | Flag quality issues and suggest process improvements |

---

## The 5 Questions in My Own Words

**What is a sprint?**
A set timeframe where a team builds certain features, usually 2 weeks.

**What is a user story?**
An explanation of a feature written from the user's point of view.
Format: "As a [user], I want to [do something], so that [benefit]."

**What is acceptance criteria?**
The conditions that must be met for a story to be considered done.
This is where QA lives.

**What does QA do during a sprint?**
During a sprint a QA is writing test cases and testing features as
they are built.

**What does QA do at the end of a sprint?**
QA signs off on stories before they are marked done and raises any
quality concerns in the retrospective.

---

## Interview Answer -- "Tell me about your experience with Agile"

"I have studied Agile methodology as part of my QA training program.
I understand the sprint cycle, how user stories and acceptance criteria
are used to define scope, and how QA fits into each phase. In practice,
I know that QA should be involved from sprint planning -- not just at
the end -- so that testing is built into the process rather than bolted
on. I am familiar with standups, sprint reviews, and retrospectives and
understand the QA role in each."