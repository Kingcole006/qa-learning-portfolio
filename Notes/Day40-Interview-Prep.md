# Day 40 -- Agile and JIRA Interview Prep

**Date:** May 1, 2026
**Week:** 9 of 10
**Focus:** Interview questions for Agile and JIRA

---

## Q1: Are you familiar with Agile methodology?

Yes. Agile is a way of building software in short cycles called
sprints, usually two weeks long. The team pulls work from the
backlog into a sprint, builds and tests it, and ships working
software at the end. I am familiar with all four ceremonies --
sprint planning, daily standup, sprint review, and retrospective --
and I understand how QA fits into each one.

---

## Q2: What is a user story and how does QA use it?

A user story is a feature written from the user's perspective
using the format: As a user I want to do something so that I get
a benefit. As a QA engineer I use the acceptance criteria attached
to each story to write my test cases. If a story does not have
clear acceptance criteria I flag it in sprint planning before
development starts.

---

## Q3: How do you write a bug report?

I write a specific title describing exactly what is broken and
where. Then I include numbered steps to reproduce the bug, the
expected result, the actual result, and the environment details
like browser and OS. I set the priority based on how many users
are affected and how severely. I also attach a screenshot or video
so the developer can see the issue immediately.

---

## Q4: What is the difference between severity and priority?

Severity is how bad the bug is technically. Priority is how
urgently it needs to be fixed based on business impact. For
example a typo on the homepage has low severity but could be
high priority because millions of users see it. A crash on an
admin page no one uses has high severity but low priority. As
a QA engineer I consider both when filing a bug.

---

## Q5: What do you do when a developer says they cannot reproduce your bug?

I go back and verify my steps are complete and accurate. Then
I add more detail to the ticket -- more specific environment
info, a screen recording, or additional steps I may have missed.
I also check if it is environment specific, like only happening
on a certain browser or device. If needed I pair with the
developer directly to walk through the steps together.

---

## Q6: What is the QA role in a retrospective?

In a retrospective I raise any quality issues that slowed the
sprint down -- like stories that came to testing too late,
missing acceptance criteria, or bugs that could have been caught
earlier. I also suggest process improvements for next sprint
and celebrate wins like zero bugs in production.

---

## Week 9 Summary

| Day | Topic | Status |
|---|---|---|
| Day 36 | Agile Fundamentals | Complete |
| Day 37 | JIRA Basics | Complete |
| Day 38 | Writing Bug Reports | Complete |
| Day 39 | Agile Ceremonies | Complete |
| Day 40 | Interview Prep | Complete |

## What I Built This Week

- JIRA board at colebrownqa.atlassian.net
- 5 columns: To Do, In Progress, In Review, Testing, Done
- 1 User Story (SCRUM-5)
- 3 Bug reports (SCRUM-6, SCRUM-8, SCRUM-9, SCRUM-10)
- QA comments documenting findings
- Moved tickets through the full workflow

## Key Concepts Mastered

- Agile sprint cycle and ceremonies
- User stories and acceptance criteria
- JIRA ticket types: Story, Task, Bug
- Priority vs severity
- Writing professional bug reports
- QA role in every Agile ceremony