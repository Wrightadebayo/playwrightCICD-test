const { test, expect } = require('@playwright/test');

test('launch application', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('username').fill('standard_user');
  await page.getByPlaceholder('password').fill('secret_sauce');
  await page.getByRole('button').click();

  const productItems = page.locator('xpath=//*[@class="inventory_item"]')
   await expect(productItems).toHaveCount(6)


  await page.waitForTimeout(10000);
});

