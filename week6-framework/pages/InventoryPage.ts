import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly productList: Locator;
  readonly pageTitle: Locator;
  readonly cartIcon: Locator;
  readonly menuButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productList = page.locator('.inventory_list');
    this.pageTitle = page.locator('.title');
    this.cartIcon = page.locator('.shopping_cart_link');
    this.menuButton = page.locator('#react-burger-menu-btn');
  }

  async getProductCount(): Promise<number> {
    return await this.page.locator('.inventory_item').count();
  }

  async getTitle(): Promise<string> {
    return await this.pageTitle.innerText();
  }

  async isLoaded(): Promise<boolean> {
    return await this.productList.isVisible();
  }
}