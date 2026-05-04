import { test, expect } from '@playwright/test';

test.describe('tds-block', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/web-components/block');
  });

  test('block renders with content', async ({ page }) => {
    const blocks = page.locator('tds-block');
    expect(await blocks.count()).toBeGreaterThanOrEqual(1);
  });
});
