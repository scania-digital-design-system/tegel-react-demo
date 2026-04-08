import { test, expect } from '@playwright/test';

test.describe('tds-modal', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/web-components');
  });

  test('modal trigger buttons are visible', async ({ page }) => {
    await expect(page.getByText('Small Modal').first()).toBeVisible();
    await expect(page.getByText('Medium Modal').first()).toBeVisible();
    await expect(page.getByText('Large Modal').first()).toBeVisible();
  });

  test('clicking button opens modal', async ({ page }) => {
    await page.getByText('Small Modal').first().click();
    await expect(page.getByText('Modal Header').first()).toBeVisible();
  });
});
