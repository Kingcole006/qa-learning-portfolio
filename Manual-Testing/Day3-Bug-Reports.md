# Day 3 – Bug Reports

## Bug 1
Bug ID: BUG_SEARCH_001
Title: Search allows empty submission without user feedback
Environment: Chrome, Windows
Steps to Reproduce:
 1. Open homepage
 2. Leave search field empty
 3. Click search button
Expected Result:
User should see a validation message
Actual Result:
Search page loads without validation message or user guidance
Severity: Medium
Priority: Medium

## Bug 2
Bug ID: BUG_LOGIN_001
Title: Account creation message not displayed after creating new account
Environment: Chrome, Windows
Steps to Reproduce:
  1. Open homepage
  2. Click "My Account"
  3. Click Register
  4. Input new login info
  5. Click Continue
Expected Result:
User is moved to the confirmation of account creation page
Actual Result:
User remains on registration page with no confirmation message, leaving it unclear whether the account was successfully created 
Severity: High
Priority: High

## Bug 3
Bug ID: BUG_NAV_001
Title: After multiple clicks on the navagtion menu users receive a rate limitation error message
Environment: Chrome, Windows
Steps to Reproduce:
  1. Click each of different menu tabs multiple times
Expected Result:
System should handle rapid navigation gracefully or display a clear, user-friendly message explaining the limitation
Actual Result:
Users receive error message "Error 1015", causing the users to be temporarily banned from accessing the site
Severity: High
Priority: High