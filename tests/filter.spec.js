const {test, expect} = require('@playwright/test')

test('launch application', async({page})=>{
await page.goto('https://www.saucedemo.com/inventory.html');
await page.getByRole('link', {name: 'Forgot login info?'}).click();
})