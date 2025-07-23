const {test, expect} = require('@playwright/test')

test('Mouse over ', async({page})=>{
await page.goto('https://www.flipkart.com/')
await page.locator('//span[contains(text(), "Login")]').hover()
// to check for the same element in a particular page
// const matches=await page.getByText('Login').allTextContents()
// console.log(matches)

})

test('slider demo ', async({page})=>{
  await page.goto('https://www.flipkart.com/')
await page.locator('(//*[@id="container"]//div[2])[12]').getByRole('img').first().click()
await page.waitForTimeout(4000)
const sl = await page.locator("//*[@id='container']/div/div[3]/div/div[1]")
await page.waitForTimeout(3000)
const bb = sl.boundingBox(bb.x + bb.width / 2,bb.y + bb.height / 2)
await page.waitForTimeout(3000)
await page.mouse.down()
await page.waitForTimeout(3000)
await page.mouse.move(bb.x + 40, bb.y + bb.height / 2)
await page.waitForTimeout(3000)
await page.mouse.up()
await page.waitForTimeout(3000)
})

