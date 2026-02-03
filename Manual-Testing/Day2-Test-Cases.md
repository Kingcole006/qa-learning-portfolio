# Day 2 – Manual Test Cases (Demo OpenCart)

## Test Case 1
Test Case ID: TC_HOME_001
Title: Verify homepage loads successfully
Preconditions: User has an active internet connection
Steps:
  1. Open a browser
  2. Navigate to https://demo.opencart.com
Expected Result:
Homepage loads successfully w/ header, menu, & featured products visible

## Test Case 2
Test Case ID: TC_SEARCH_001
Title: Verify product search returns results
Preconditions: User is on the homepage
Steps:
  1. Enter product name (e.g. "iPhone") in the search bar
  2. Click the search button
Expected Result:
Relevant products matching the search term are displayed

## Test Case 3
Test Case ID: TC_SEARCH_002
Title: Verify search w/ invalid keyword(s)
Preconditions: User is on homepage
Steps:
  1. Enter random keyword (e.g. "abc1234x")
  2. Click the search button
Expected Result:
Message displayed indicating no products were found

## Test Case 4
Test Case ID: TC_CART_001
Title: Verify user can add product to cart
Preconditions: User is on a product listing page
Steps:
  1. Click "Add to Cart" on a product
  2. Observe confirmation message
Expected Result:
Product is added to the cart and success message is displayed

## Test Case 5
Test Case ID: TC_CART_002
Title: Verify cart updates item count
Preconditions: At leat one product added to the cart
Steps:
  1. Add a product to the cart
  2. View cart icon
Expected Result:
Cart icon updates to reflect added item

## Test Case 6
Test Case ID: TC_NAV_001
Title: Verify navigation menu link works
Preconditions: User is on homepage
Steps:
  1. Click each main menu category
Expected Result:
Each category page loads w/o errors
