import { test, expect } from '@playwright/test';

test.describe('tds-datetime', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/web-components');
  });

  test('datetime inputs render', async ({ page }) => {
    const datetimeInputs = page.locator('tds-datetime');
    expect(await datetimeInputs.count()).toBeGreaterThanOrEqual(3);
  });

  // Attribute reflection
  test('type reflects', async ({ page }) => {
    const datetime = page.locator('tds-datetime').first();
    const attr = await datetime.getAttribute('type');
    expect(attr, 'type attribute should be reflected on the host element').not.toBeNull();
  });
});
