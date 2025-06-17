const {test, expect} = require('@playwright/test')

test('launch application', async({page})=>{
await page.goto('https://parabank.parasoft.com/parabank/index.htm;jsessionid=1F6C26988520036446200EE6FF9B43EB');
await page.getByRole('link', {name: 'Forgot login info?'}).click();
})
