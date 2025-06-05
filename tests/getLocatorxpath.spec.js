const { test, expect } = require('@playwright/test');

test('launch application', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  await page.locator('.inventory_item')
    .filter({ has: page.getByText('Sauce Labs Backpack') })
    .getByRole('button', { name: 'Add to Cart' })
    .click();
});
