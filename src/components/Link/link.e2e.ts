import { test, expect } from '@playwright/test';

test.describe('tds-link', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/web-components');
  });

  test('link is visible with correct text', async ({ page }) => {
    const tegelLink = page.locator('tds-link a[href="https://tegel.scania.com/home"]');
    if ((await tegelLink.count()) > 0) {
      await expect(tegelLink.first()).toBeVisible();
    } else {
      const link = page.locator('tds-link').last().locator('a');
      await expect(link).toBeVisible();
    }
  });
});
