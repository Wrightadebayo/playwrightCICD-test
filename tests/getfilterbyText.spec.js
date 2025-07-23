const { test, expect } = require('@playwright/test');

test('launch application', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('username').fill('standard_user');
  await page.getByPlaceholder('password').fill('secret_sauce');
  await page.getByRole('button').click();

  await page.locator('xpath=//*[@class="inventory_item"]').filter({hasText:'Sauce Labs Bike Light'}).getByRole('button',{name:'Add to cart'}).click()
  

  await page.locator('xpath=//*[@class="inventory_item"]').filter({hasText:'Sauce Labs Fleece Jacket'}).getByRole('button',{name:'Add to cart'}).click()



  await page.locator('xpath=//*[@class="inventory_item"]')
  .filter({ hasText: 'Sauce Labs Fleece Jacket' })
  .getByRole('button', { name: 'Remove' }) // Changed from "Add to cart"
  .click();


});
