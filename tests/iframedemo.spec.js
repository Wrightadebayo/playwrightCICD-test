const { test, expect } = require('@playwright/test');

test('select dropdown demo', async ({ page }) => {
  // test.slow()
  // await page.goto('https://www.w3schools.com/jsref/tryit.asp?filename=tryjs');

  
// const locator = page.locator(xpath)
// const iframe = locator.contentFrame()
// await iframe.locator(click).click()



  await page.waitForTimeout(5000);
});