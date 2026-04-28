# Day 37 -- JIRA Basics

**Date:** April 28, 2026
**Week:** 9 of 10
**Focus:** JIRA setup, ticket types, and board workflow

---

## What is JIRA?

JIRA is a project management tool made by Atlassian that most tech
companies use to track work, bugs, and features. As a QA engineer
you will use JIRA every day to file bugs, update ticket statuses,
and track test progress.

---

## JIRA Setup

- Site: colebrownqa.atlassian.net
- Project: QA Practice Board
- Board columns: To Do, In Progress, In Review, Testing, Done

---

## Ticket Types

| Type | What it is |
|---|---|
| Story | A user-facing feature written from the user's perspective |
| Task | A technical piece of work |
| Bug | A defect found during testing |
| Subtask | A smaller piece of work under a story or bug |

---

## Priority Levels

| Priority | When to use it |
|---|---|
| Highest | Blocks everything, fix immediately |
| High | Major feature broken, fix ASAP |
| Medium | Important but has a workaround |
| Low | Small issue, low impact |
| Lowest | Cosmetic issue, fix when time allows |

---

## Tickets I Created Today

**SCRUM-5 -- User Story (Medium)**
"As a user I want to log in with my email and password so that
I can access my account"

Acceptance Criteria:
- User can enter email and password on the login page
- Valid credentials redirect the user to the dashboard
- Invalid credentials show an error message
- Empty fields show a validation message
- Login button is disabled while the request is processing

---

**SCRUM-6 -- Bug (Highest)**
"Login button unresponsive when password field is empty"

Steps to Reproduce:
1. Navigate to the login page
2. Enter a valid email address
3. Leave the password field empty
4. Click the Login button

Expected Result:
An error message displays saying "Password is required"

Actual Result:
Nothing happens. The button does not respond and no error
message is shown.

Environment: Chrome 124, Windows 11

---

## The QA Workflow on a JIRA Board