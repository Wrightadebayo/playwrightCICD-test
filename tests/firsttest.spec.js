const {test, expect} = require('@playwright/test')

test('launch application', async({page})=>{
await page.goto('https://www.udemy.com/')
await expect(page).toHaveTitle('Online Courses - Learn Anything, On Your Schedule | Udemy')
})