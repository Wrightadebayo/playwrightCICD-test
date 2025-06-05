const {test, expect} = require('@playwright/test')

test('launch application', async({page})=>{
await page.goto('https://www.nairaland.com/');
await page.locator('xpath=//*[@id="up"]/tbody/tr/td/a[1]').click();
await page.locator("css=#up > tbody > tr > td > a:nth-child(4)")

})