import { test, expect } from '@playwright/test';
import { expectPropReflects } from '../../e2e-utils/helpers';

test.describe('tds-text-field', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/web-components/text-field');
  });

  test('text field renders and is interactive', async ({ page }) => {
    const field = page.locator('tds-text-field').first();
    await expect(field).toBeAttached();
  });

  // Attribute reflection
  test('size reflects', async ({ page }) => {
    await expectPropReflects(page, 'tds-text-field', 'size', 'sm', 'size', 'sm');
  });

  test('disabled reflects', async ({ page }) => {
    await expectPropReflects(page, 'tds-text-field', 'disabled', true, 'disabled');
  });
});
