import { test, expect } from '@playwright/test';
import { expectPropReflects } from '../../e2e-utils/helpers';

test.describe('tds-divider', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/web-components/divider');
  });

  test('divider renders', async ({ page }) => {
    const divider = page.locator('tds-divider').first();
    await expect(divider).toBeAttached();
  });

  // Attribute reflection
  test('orientation reflects', async ({ page }) => {
    await expectPropReflects(
      page,
      'tds-divider',
      'orientation',
      'vertical',
      'orientation',
      'vertical',
    );
  });
});
