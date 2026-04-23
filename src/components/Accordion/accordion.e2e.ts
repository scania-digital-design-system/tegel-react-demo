import { test, expect } from '@playwright/test';
import { expectPropReflects } from '../../e2e-utils/helpers';

test.describe('tds-accordion', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/web-components/accordion');
  });

  test('accordion items render', async ({ page }) => {
    const items = page.locator('tds-accordion-item');
    expect(await items.count()).toBeGreaterThanOrEqual(3);
  });

  test('clicking accordion item expands it', async ({ page }) => {
    const firstItem = page.locator('tds-accordion-item').first();
    await firstItem.click();
    await expect(page.getByText('Lorem ipsum dolor sit amet').first()).toBeVisible();
  });

  // Attribute reflection
  test('disabled reflects on accordion-item', async ({ page }) => {
    await expectPropReflects(page, 'tds-accordion-item', 'disabled', true, 'disabled');
  });
});
