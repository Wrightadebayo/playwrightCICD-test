const { test, expect } = require('@playwright/test');

test('demo application', async ({ page }) => {

  await page.goto('https://training.rcvacademy.com', {
    waitUntil: 'domcontentloaded',
    timeout: 200000
  });

  const listproduct = page.locator('xpath=//*[@id="pricing15"]/div[2]/div/div[1]/div/div/div[2]/ul');

  // Assert that there are 4 list items
  const listItems = listproduct.getByRole('listitem');
  await expect(listItems).toHaveCount(4);

  // Filter the one with specific text
  const targetItem = listItems.filter({
    hasText: 'Access all currently published courses'
  });

  // Now assert that the filtered item has the exact text
  await expect(targetItem).toHaveText('Access all currently published courses');

});
