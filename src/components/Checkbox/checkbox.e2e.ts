import { test, expect } from '@playwright/test';
import { expectPropReflects } from '../../e2e-utils/helpers';

test.describe('tds-checkbox', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/web-components');
  });

  test('checkboxes render with correct labels', async ({ page }) => {
    await expect(page.getByText('Enabled').first()).toBeVisible();
    await expect(page.getByText('Disabled').first()).toBeVisible();
    await expect(page.getByText('Checked').first()).toBeVisible();
  });

  test('enabled checkbox can be toggled', async ({ page }) => {
    const checkbox = page.locator('tds-checkbox').first();
    await checkbox.click();
    const isChecked = await checkbox.evaluate((el: any) => el.checked);
    expect(isChecked).toBe(true);
  });

  test('disabled checkbox is not interactive', async ({ page }) => {
    const disabledCheckbox = page.locator('tds-checkbox').nth(1);
    const isDisabled = await disabledCheckbox.evaluate((el: any) => el.disabled);
    expect(isDisabled).toBe(true);
  });

  // Attribute reflection
  test('disabled reflects', async ({ page }) => {
    const checkbox = page.locator('tds-checkbox').nth(1);
    const attr = await checkbox.getAttribute('disabled');
    expect(attr, 'disabled attribute should be reflected on the host element').not.toBeNull();
  });

  test('checked reflects', async ({ page }) => {
    await expectPropReflects(page, 'tds-checkbox', 'checked', true, 'checked');
  });
});
