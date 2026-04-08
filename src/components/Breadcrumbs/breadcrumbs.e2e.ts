import { test, expect } from '@playwright/test';

test.describe('tds-breadcrumbs', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/web-components');
  });

  test('breadcrumbs render', async ({ page }) => {
    await expect(page.getByText('Page 1').first()).toBeVisible();
    await expect(page.getByText('Page 2').first()).toBeVisible();
    await expect(page.getByText('Page 3').first()).toBeVisible();
  });
});
