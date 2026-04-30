import { test, expect } from '@playwright/test';
import { expectPropReflects } from '../../e2e-utils/helpers';

test.describe('tds-chip', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/web-components/chip');
  });

  test('button chips are visible', async ({ page }) => {
    await expect(page.getByText('Lock').first()).toBeVisible();
    await expect(page.getByText('Set alarm').first()).toBeVisible();
  });

  test('clicking button chip triggers alert', async ({ page }) => {
    page.on('dialog', (d) => d.dismiss());
    const dialogPromise = page.waitForEvent('dialog');
    await page.getByText('Set alarm').first().click();
    const dialog = await dialogPromise;
    expect(dialog.message()).toBe('clicked');
  });

  test('checkbox chips can be selected', async ({ page }) => {
    const svelteChip = page.getByText('Svelte').first();
    await svelteChip.click();
  });

  test('radio chips allow single selection', async ({ page }) => {
    const smChip = page.getByText('sm', { exact: true }).first();
    await smChip.click();
  });

  test('chip form submits selected values', async ({ page }) => {
    await page.getByText('md', { exact: true }).first().click();
    const submitButton = page
      .locator('tds-button[type="submit"], tds-button')
      .filter({ hasText: 'Submit' })
      .first();
    await submitButton.click();
    const pre = page.locator('pre').first();
    await expect(pre).toContainText('size');
  });

  // Attribute reflection
  test('type reflects', async ({ page }) => {
    await expectPropReflects(page, 'tds-chip', 'type', 'radio', 'type', 'radio');
  });

  test('size reflects', async ({ page }) => {
    await expectPropReflects(page, 'tds-chip', 'size', 'sm', 'size', 'sm');
  });

  test('checked reflects', async ({ page }) => {
    await expectPropReflects(page, 'tds-chip', 'checked', true, 'checked');
  });

  test('disabled reflects', async ({ page }) => {
    await expectPropReflects(page, 'tds-chip', 'disabled', true, 'disabled');
  });
});
