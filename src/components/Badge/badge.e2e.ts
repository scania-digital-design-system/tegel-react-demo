import { test, expect } from '@playwright/test';
import { expectPropReflects } from '../../e2e-utils/helpers';

test.describe('tds-badge', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/web-components/badge');
  });

  test('badges render with values', async ({ page }) => {
    const badges = page.locator('tds-badge');
    expect(await badges.count()).toBeGreaterThanOrEqual(2);
  });

  test('text input updates badge value', async ({ page }) => {
    const input = page.locator('tds-text-field[label="Number of emails"]');
    await expect(input).toBeVisible();
  });

  // Attribute reflection
  test('size reflects', async ({ page }) => {
    await expectPropReflects(page, 'tds-badge', 'size', 'sm', 'size', 'sm');
  });
});
