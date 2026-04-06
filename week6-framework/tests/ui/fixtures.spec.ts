// Import from our custom fixtures instead of @playwright/test
import { test, expect } from '../../utils/fixtures';

test.describe('Fixture Tests - Sauce Demo', () => {

  // This test uses the loginPage fixture
  // No need to create LoginPage or call goto() — fixture does it!
  test('login page loads automatically via fixture', async ({ loginPage }) => {
    // loginPage is already created AND navigated to saucedemo.com
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();
    console.log('✅ Login page loaded automatically by fixture');
  });

  // This test uses the loggedInPage fixture
  // No need to login manually — fixture handles it!
  test('inventory loads automatically when already logged in', async ({ loggedInPage }) => {
    // loggedInPage is already logged in and on the inventory page
    await expect(loggedInPage.productList).toBeVisible();
    await expect(loggedInPage.pageTitle).toBeVisible();
    console.log('✅ Already logged in via fixture - no manual login needed');
  });

  // This test uses BOTH fixtures together
  test('can use multiple fixtures in one test', async ({ loginPage, inventoryPage }) => {
    // Login using the loginPage fixture
    await loginPage.login('standard_user', 'secret_sauce');

    // Verify inventory using the inventoryPage fixture
    await expect(inventoryPage.productList).toBeVisible();
    console.log('✅ Used two fixtures together in one test');
  });

});