import { test, expect } from '@playwright/test';

test.describe('tds-tooltip', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/web-components');
  });

  test('tooltip trigger button is visible', async ({ page }) => {
    const hoverButton = page.getByText('Hover me').first();
    await expect(hoverButton).toBeVisible();
  });
});
