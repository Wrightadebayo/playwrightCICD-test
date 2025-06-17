const { test, expect } = require('@playwright/test');

test('demo application', async ({ page }) => {

  await page.goto('https://training.rcvacademy.com', {
    waitUntil: 'domcontentloaded',
    timeout: 200000
  });

  const listproduct = page.locator('xpath=//*[@id="pricing15"]/div[2]/div/div[1]/div/div/div[2]/ul');

// for(const listItems of await listproduct.getByRole('listitem').all())
//   console.log(await listItems.textContent())
              // to get all list item
  // for (const listItems of await page.getByRole('listitem').all())
  //   console.log(await listItems.textContent());

  const listing = listproduct.getByRole('listitem')
const count = await listing.count()

for(let i=0; i < count;i++)
  console.log(await listing.nth(i).textContent())
});