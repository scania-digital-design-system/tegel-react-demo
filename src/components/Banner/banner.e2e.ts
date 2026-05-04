import { test, expect } from '@playwright/test';

test.describe('tds-banner', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/web-components/banner');
  });

  test('banners are visible', async ({ page }) => {
    const banners = page.locator('tds-banner');
    expect(await banners.count()).toBeGreaterThanOrEqual(1);
  });
});
