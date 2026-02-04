# Day 2 – Manual Test Cases (Demo OpenCart)

Test case 1-Homepage loads correctly
## Test Case 1
Test Case ID: TC_HOME_001
Title: Verify homepage loads successfully
Preconditions: User has an active internet connection
Steps:
  1. Open a browser
  2. Navigate to https://demo.opencart.com
Expected Result:
Homepage loads successfully w/ header, menu, & featured products visible

Test Case 2-Search functionality
## Test Case 2
Test Case ID: TC_SEARCH_001
Title: Verify product search returns results
Preconditions: User is on the homepage
Steps:
  1. Enter product name (e.g. "iPhone") in the search bar
  2. Click the search button
Expected Result:
Relevant products matching the search term are displayed

Test Case 3-Invalid search
## Test Case 3
Test Case ID: TC_SEARCH_002
Title: Verify search w/ invalid keyword(s)
Preconditions: User is on homepage
Steps:
  1. Enter random keyword (e.g. "abc1234x")
  2. Click the search button
Expected Result:
Message displayed indicating no products were found

Test Case 4-Add item to cart
## Test Case 4
Test Case ID: TC_CART_001
Title: Verify user can add product to cart
Preconditions: User is on a product listing page
Steps:
  1. Click "Add to Cart" on a product
  2. Observe confirmation message
Expected Result:
Product is added to the cart and success message is displayed

Test Case 5-Cart updates correctly
## Test Case 5
Test Case ID: TC_CART_002
Title: Verify cart updates item count
Preconditions: At leat one product added to the cart
Steps:
  1. Add a product to the cart
  2. View cart icon
Expected Result:
Cart icon updates to reflect added item

Test Case 6-Navigation menu
## Test Case 6
Test Case ID: TC_NAV_001
Title: Verify navigation menu link works
Preconditions: User is on homepage
Steps:
  1. Click each main menu category
Expected Result:
Each category page loads w/o errors

Edge Case 1 - Empty search
## Test Case 7
Test Case ID: TC_SEARCH_003
Title: Verify search w/ empty input
Preconditions: User is on homepage
Steps:
  1. Leave search fierld empty
  2. Click the search button
Expected Result:
User is prompted to enter a search term or no results are shown

Edge Case 2 - Special characters
## Test Case 8
Test Case ID: TC_SEARCH_004
Title: Verify search w/ special characters
Preconditions: User is on homepage
Steps:
  1. Enter special characters (e.g. !@#$%)
  2. Click search button
Expected Result:
System handles input gracefully w/o error

Edge Case 3-Cart qunatity (if available)
## Test Case 9
Test Case ID: TC_CART_003
Title: Verify cart behavior w/ large quantity
Preconditions: Product is added to cart
Steps:
  1. Select "view cart"
  2. Increase product quantity to a higher number (e.g. 50)
  3. Update cart
Expected Result:
Cart updates correctly or displays validation message

Test Case 7-New Account Creation
## Test Case 10
Test Case ID: TC_LOGIN_001
Title: Verify users can register/create a new account
Preconditions: User is on hompeage
Steps:
  1. Click "My Account"
  2. Click "Register"
  3. Enter valid data in all required fields
  4. Click the "Continue" button
Expected Results:
User is successfully registered and redirected to the account confirmation page with a success message displayed

Test Case 8-Navigation to Monitors
## Test Case 11
Test Case ID: TC_NAV_002
Title: Verify user can navigate to Monitors category from navigation menu
Preconditions: User is on homepage
Steps:
  1. Click "Components" in the navigation menu
  2. Click "Monitors"
Expected Results:
User is redirected to the Monitors category page displaying a list of monitor products without any errors

Edge Case 4-Invalid login error message
## Test Case 12
Test Case ID: TC_LOGIN_002
Title: Verify invalid login error message appears when users input the incorrect login information
Precondtions: User is on homepage
Steps:
  1. Click "My Account"
  2. Click "Login"
  3. Enter a valid email and an incorrect password
  4. Click the "Login" button
Expecteds Results:
User remains on the login page and an invalid login error message is displayed

Test Case 9-Users prompted to select required options when add certain products
## Test Case 13
Test Case ID: TC_CART_004
Title: Verify user is prompted to select required options before adding product to cart
Preconditions: User is on the product listing page
Steps:
  1. Navigate to Components->Monitors
  2. Select "Apple Cinema 30""
  3. Click "Add to Cart" without selecting required options
Expected Result:
User is redirected to the product detail page and prompted to select required options before the product can be added to the cart