import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

// Define what our custom fixtures look like
type TestFixtures = {
  loginPage: LoginPage;        // Pre-built LoginPage object
  inventoryPage: InventoryPage; // Pre-built InventoryPage object
  loggedInPage: InventoryPage;  // Already logged in, ready to test
};

// Extend the base test with our custom fixtures
export const test = base.extend<TestFixtures>({

  // Fixture 1: LoginPage — automatically created for every test
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto(); // Navigate to login page automatically
    await use(loginPage);   // Hand it to the test
  },

  // Fixture 2: InventoryPage — automatically created for every test
  inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);
    await use(inventoryPage); // Hand it to the test
  },

  // Fixture 3: loggedInPage — logs in automatically before the test
  loggedInPage: async ({ page }, use) => {
    // Set up - runs BEFORE the test
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    // Hand the already-logged-in inventory page to the test
    await use(inventoryPage);

    // Tear down - runs AFTER the test (cleanup goes here)
    console.log('✅ Test complete - fixture cleaned up');
  },

});

// Export expect so tests only need to import from fixtures
export { expect } from '@playwright/test';