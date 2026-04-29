# Day 38 -- Writing Bug Reports in JIRA

**Date:** April 29, 2026
**Week:** 9 of 10
**Focus:** Writing clear professional bug reports in JIRA

---

## Why Bug Reports Matter

A well written bug report is one of the most visible things a QA
engineer produces. Developers, product managers, and leads all read
your bug reports. A clear report gets fixed fast. A vague report
gets ignored or sent back to you.

---

## The Anatomy of a Perfect Bug Report

| Field | What to include |
|---|---|
| Title | Clear, specific, one line summary |
| Type | Bug |
| Priority | Based on severity and user impact |
| Environment | Browser, OS, device, version |
| Steps | Numbered, exact, reproducible |
| Expected | What should happen |
| Actual | What actually happens |
| Attachments | Screenshot, video, logs |

---

## The 5 Golden Rules

1. One bug per ticket -- never combine two bugs into one report
2. Be specific in the title -- "Login button unresponsive when
   password field is empty on Chrome" not "Login is broken"
3. Steps must be reproducible -- if a developer cannot reproduce
   it they cannot fix it
4. Expected vs Actual is not optional -- this tells the developer
   exactly what is wrong
5. Set priority based on user impact -- ask how many users does
   this affect and how badly

---

## Bugs I Filed Today

**SCRUM-8 -- High Priority**
Checkout button disabled after adding item to cart on Safari

Steps to Reproduce:
1. Open the app on Safari browser
2. Browse to any product page
3. Click Add to Cart
4. Navigate to the cart page
5. Observe the Checkout button

Expected: Checkout button is enabled and clickable
Actual: Checkout button remains greyed out and cannot be clicked
Environment: Safari 17, macOS Ventura

---

**SCRUM-9 -- Medium Priority**
Search returns no results when query contains uppercase letters

Steps to Reproduce:
1. Navigate to the search bar
2. Type "Backpack" with a capital B
3. Press Enter or click Search

Expected: Results display all items matching "backpack"
regardless of letter case
Actual: No results found message displays even though
backpack items exist in the inventory
Environment: Chrome 124, Windows 11

---

**SCRUM-10 -- High Priority**
User profile page crashes when bio field exceeds 200 characters

Steps to Reproduce:
1. Log in with any valid account
2. Navigate to the profile page
3. Click Edit Profile
4. Type more than 200 characters in the bio field
5. Click Save

Expected: Validation message displays saying bio must be
200 characters or less
Actual: Page crashes and displays a blank white screen.
User loses all unsaved profile changes.
Environment: Firefox 124, Windows 11

---

## Priority Decision Framework

When deciding priority ask these questions:

1. Does this block users from completing a core action?
   Yes -- Highest or High
2. Does this affect a major feature but have a workaround?
   Yes -- Medium
3. Is this cosmetic or low impact?
   Yes -- Low or Lowest

---

## Interview Answer -- "Walk me through how you write a bug report"

"When I find a bug I first make sure I can reproduce it consistently.
Then I create a ticket with a specific title describing exactly what
is broken and where. I write numbered steps to reproduce, clearly
state the expected vs actual result, and include the environment
details like browser and OS. I set the priority based on how many
users are affected and how severely. Then I attach a screenshot or
video so the developer can see the issue immediately without having
to reproduce it themselves."