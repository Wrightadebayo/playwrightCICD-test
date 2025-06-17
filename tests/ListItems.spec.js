const { test, expect } = require('@playwright/test');

test('launch application', async ({ page }) => {
  // Navigate to the site and wait for the DOM to load
  await page.goto('https://training.rcvacademy.com', { waitUntil: 'domcontentloaded' });

  // Define the element using a robust locator
  const listItem = page.locator('xpath=//*[@id="pricing11"]/div/div/div[1]/div/div/div[2]/div[2]/div/div/ul/li[1]');

  // Wait for the element to be visible
  await expect(listItem).toBeVisible({ timeout: 10000 });

  // (Optional) Do something with the element to confirm interaction works
  console.log(await listItem.textContent());

  // (Optional) Pause briefly just to observe the headed browser
  await page.waitForTimeout(2000);
});
