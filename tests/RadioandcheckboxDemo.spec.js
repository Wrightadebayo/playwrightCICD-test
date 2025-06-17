const { test, expect } = require('@playwright/test');

test('select dropdown demo', async ({ page }) => {
  test.slow()
  await page.goto('https://login.salesforce.com/');
 await page.locator('#rememberUn').click()
 expect(page.locator('#rememberUn')).toBeChecked()

//  await page.locator("#input[@type='radio']").first().click()
//  await page.locator("#input[@type='radio']").nth(2).click()
//  await page.locator("#input[@type='radio']").end().click()


  await page.waitForTimeout(5000);
});


