const { test, expect } = require('@playwright/test');

test('demo application', async ({ page }) => {
  // Go to the page and wait for DOM to load
  await page.goto('https://training.rcvacademy.com', { waitUntil: 'domcontentloaded', timeout: 200000 });

  // Get all list items
  const listItems = page.getByRole('listitem');

  // Assert total count is 27
  await expect(listItems).toHaveCount(27, { timeout: 60000 });

  // Optionally: Check if at least one has specific text
  const filteredItem = listItems.filter({ hasText: 'Access all currently published courses' });
  await expect(filteredItem).toHaveCount(3); 

});
