// @ts-check
const { test, expect } = require('@playwright/test');

test('text', async ({ page }) => {
  await page.goto('http://localhost:3000/');
});
