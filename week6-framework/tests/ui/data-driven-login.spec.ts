import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import testData from '../../test-data/users.json';

test.describe('Data-Driven Login Tests', () => {

  for (const user of testData.validUsers) {
    test(`valid login: ${user.username}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      const inventoryPage = new InventoryPage(page);
      await loginPage.goto();
      await loginPage.login(user.username, user.password);
      await expect(page).toHaveURL(/inventory/);
      await expect(inventoryPage.productList).toBeVisible();
    });
  }

  for (const user of testData.invalidUsers) {
    test(`invalid login: ${user.username}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.goto();
      await loginPage.login(user.username, user.password);
      await expect(loginPage.errorMessage).toBeVisible();
      await expect(loginPage.errorMessage).toContainText(user.expectedError);
    });
  }

});