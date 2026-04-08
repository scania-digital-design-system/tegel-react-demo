import { test, expect } from '@playwright/test';

test.describe('tds-tag', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/web-components');
  });

  test('tags render with correct labels', async ({ page }) => {
    await expect(page.getByText('Success', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('Warning', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('Error', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('Information', { exact: true }).first()).toBeVisible();
  });
});
