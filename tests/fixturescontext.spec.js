const { test, expect } = require('@playwright/test');

test('fixtures and context', async ({ browser }) => {
  
  const context = await browser.newContext({baseURL:'https://www.google.com'})
   const page = await context.newPage()
   await page.goto('/search?q=test')
});

test('Test application', async({page})=>{
  await page.goto('https://nairaland.com');
})


test.only('testing on multiple windows and tabs', async ({ browser }) => {
  
  const context = await browser.newContext()
   const page = await context.newPage()
   await page.goto('https://training.rcvacademy.com/')
   
  const [newPage] = await Promise.all([
   context.waitForEvent('page'),
  await page.locator('(//img)[3]').click(),
  ])
 await newPage.locator('//button[@aria-label="Install"]').click()
 await page.waitForTimeout(3000)
 await newPage.locator("(//button[contains(text(),'Cancel')])[2]").click()
 await page.waitForTimeout(3000)
  await newPage.close()
await page.locator("(//input[@id='name'])[1]").fill('playwright tutor')
await page.waitForTimeout(3000)
await page.locator("(//input[@id='email'])[1]").fill('wrightadebayo80@gmail.com')
await page.waitForTimeout(3000)
 await page.getByRole('link',{name:'Get Access'}).click()
 await page.waitForTimeout(3000)
 await page.close()
});
