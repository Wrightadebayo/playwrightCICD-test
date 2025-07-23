import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://jqueryui.com/droppable/');
const iframe = await page.frameLocator('//*[@id="content"]/iframe')
const todrag = await iframe.locator('//*[@id="draggable"]')
const todrop = await iframe.locator('//*[@id="draggable"]')
await todrag.dragTo(todrop)
  
},);
