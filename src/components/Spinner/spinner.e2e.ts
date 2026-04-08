import { test, expect } from '@playwright/test';
import { expectPropReflects } from '../../e2e-utils/helpers';

test.describe('tds-spinner', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/web-components');
  });

  test('standard and inverted spinners are visible', async ({ page }) => {
    await expect(page.getByText('Standard').first()).toBeVisible();
    await expect(page.getByText('Inverted').first()).toBeVisible();
    const spinners = page.locator('tds-spinner');
    expect(await spinners.count()).toBeGreaterThanOrEqual(2);
  });

  // Attribute reflection
  test('size reflects', async ({ page }) => {
    await expectPropReflects(page, 'tds-spinner', 'size', 'lg', 'size', 'lg');
  });

  test('variant reflects', async ({ page }) => {
    await expectPropReflects(page, 'tds-spinner', 'variant', 'inverted', 'variant', 'inverted');
  });
});
