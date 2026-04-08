import { test, expect } from '@playwright/test';

test.describe('tds-toast', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/web-components');
  });

  test('toasts are visible with correct headers', async ({ page }) => {
    await expect(page.getByText('Successful Toast!').first()).toBeVisible();
    await expect(page.getByText('Error Toast!').first()).toBeVisible();
    await expect(page.getByText('Information Toast!').first()).toBeVisible();
    await expect(page.getByText('Warning Toast!').first()).toBeVisible();
  });

  test('toast toggle controls visibility', async ({ page }) => {
    const toggle = page.locator('tds-toggle').filter({ hasText: 'Toast' });
    await expect(toggle).toBeVisible();
  });
});
