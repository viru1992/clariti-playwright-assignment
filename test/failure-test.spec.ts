import { test, expect } from '@playwright/test';

test.describe('Deliberate Fail Test', () => {

  test('This test will fail to capture screenshot/video', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // Intentionally fail: looking for a non-existent element
    await expect(page.locator('text=ThisElementDoesNotExist')).toBeVisible();
  });

});
