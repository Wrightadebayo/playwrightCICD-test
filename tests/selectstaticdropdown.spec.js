const { test, expect } = require('@playwright/test');

test('select dropdown demo', async ({ page }) => {
  // test.slow()
  await page.goto('https://www.salesforce.com/au/form/signup/freetrial-sales/');
 await page.locator('//*[@name="CompanyEmployees"]').selectOption({value:'3'})
 await page.locator('//*[@name="CompanyEmployees"]').selectOption({value:'20'})

 await page.locator('//*[@name="CompanyEmployees"]').selectOption({label:'31 - 200 employees'})

 await page.locator('//*[@name="CompanyEmployees"]').selectOption({label:'201 - 500 employees'})

 await page.locator('//*[@name="CompanyEmployees"]').selectOption({label:'501 - 2000 employees'})

 await page.locator('//*[@name="CompanyEmployees"]').selectOption({index:6})
 

  await page.waitForTimeout(5000);
});


