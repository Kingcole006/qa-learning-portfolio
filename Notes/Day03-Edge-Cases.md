# Day 3 – Edge Cases

## What is an Edge Case
An edge case tests how the system behaves at limits or unusual conditions.

## Why Edge Cases Matter
- Users don’t always follow the happy path
- Edge cases often reveal hidden bugs
- They improve software reliability

## Examples of Edge Cases
- Empty input fields
- Extremely long text
- Invalid characters
- Rapid repeated actions

## Test Scenario vs Test Case
- Test scenario: high-level feature or user flow to test
- Test case: detailed steps and expected result
- One scenario can have many test cases

## Find Your FIRST BUGS (this is big)
Now we intentionally try to break OpenCart.

## How to hunt for bugs (QA mindset)
Try things like:
- Submit forms with empty fields
- Enter very long text
- Click buttons repeatedly
- Refresh during actions
- Use browser back/forward buttons

You’re looking for:
- Confusing behavior
- Incorrect messages
- UI glitches
- Missing validation

## How to THINK before writing the title (simple process)
Ask yourself:
- What was I testing? (search, cart, login)
- What did I expect?
- What actually happened?
- What makes this wrong or confusing?