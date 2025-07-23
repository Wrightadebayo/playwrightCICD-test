import { test, expect } from '@playwright/test';

test('keyboard', async ({ page }) => {
  await page.goto('https://textbox.johnjago.com/');
  
  // await page.locator('//textarea').pressSequentially('wright',{delay:500})
  // await page.getByPlaceholder("Welcome! You can use this textbox for anything. It does not save any data.").pressSequentially('my name is yousefwright i am an SDET', {delay:300})
  // await page.waitForTimeout(3000)
  // await page.getByPlaceholder("Welcome! You can use this textbox for anything. It does not save any data.").press('Control+A')
  // await page.waitForTimeout(3000)
  // await page.getByPlaceholder("Welcome! You can use this textbox for anything. It does not save any data.").press('Backspace')
  
  await page.keyboard.type('Hello World!');
await page.keyboard.press('ArrowLeft');

await page.keyboard.down('Shift');
for (let i = 0; i < ' World'.length; i++)
  await page.keyboard.press('ArrowLeft');
await page.keyboard.up('Shift');

await page.keyboard.press('Backspace');
// Result text will end up saying 'Hello!
},);
