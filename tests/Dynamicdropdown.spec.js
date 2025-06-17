const { test, expect } = require('@playwright/test');

test('select dropdown demo', async ({ page }) => {
  // test.slow()
  await page.goto('https://www.salesforce.com/au/form/signup/freetrial-sales/');

const departfrom = page.locator('3BE_flight_origin_city')
  await departfrom.clear({delay:1000})
  await departfrom.pressSequentially('New',{delay:1000})
 await page.locator('.viewport').getByRole('listitem').filter({hasText:'New York (JFK)'}).click()


  await page.waitForTimeout(5000);
});