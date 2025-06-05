const {test, expect} = require('@playwright/test')

test('Test application', async({page})=>{
await page.goto('https://www.nairaland.com/');
await page.getByText('Register').click();

})