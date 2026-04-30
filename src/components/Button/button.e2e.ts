import { test, expect } from '@playwright/test';
import { expectPropReflects } from '../../e2e-utils/helpers';

test.describe('tds-button', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/web-components/button');
  });

  test('buttons are visible with expected labels', async ({ page }) => {
    await expect(page.getByText('Primary fullbleed').first()).toBeVisible();
    await expect(page.getByText('Danger').first()).toBeVisible();
    await expect(page.getByText('Ghost').first()).toBeVisible();
    await expect(page.getByText('Secondary').first()).toBeVisible();
  });

  test('clicking a button triggers alert', async ({ page }) => {
    page.on('dialog', (d) => d.dismiss());
    const dialogPromise = page.waitForEvent('dialog');
    await page.getByText('Primary fullbleed', { exact: true }).first().click();
    const dialog = await dialogPromise;
    expect(dialog.message()).toBe('Clicked button!');
  });

  test('disabled button does not trigger alert', async ({ page }) => {
    let dialogFired = false;
    page.on('dialog', () => {
      dialogFired = true;
    });
    const disabledButton = page.getByText('Primary fullbleed (disabled)');
    await expect(disabledButton).toBeVisible();
    await disabledButton.click({ force: true });
    await page.waitForTimeout(500);
    expect(dialogFired).toBe(false);
  });

  test('buttons render in different sizes', async ({ page }) => {
    const buttons = page.locator('tds-button');
    expect(await buttons.count()).toBeGreaterThan(5);
  });

  // Attribute reflection
  test('size reflects', async ({ page }) => {
    await expectPropReflects(page, 'tds-button', 'size', 'sm', 'size', 'sm');
  });

  test('variant reflects', async ({ page }) => {
    await expectPropReflects(page, 'tds-button', 'variant', 'secondary', 'variant', 'secondary');
  });

  test('disabled reflects', async ({ page }) => {
    await expectPropReflects(page, 'tds-button', 'disabled', true, 'disabled');
  });

  test('fullbleed reflects', async ({ page }) => {
    await expectPropReflects(page, 'tds-button', 'fullbleed', true, 'fullbleed');
  });

  test('type reflects', async ({ page }) => {
    await expectPropReflects(page, 'tds-button', 'type', 'submit', 'type', 'submit');
  });

  test('modeVariant reflects', async ({ page }) => {
    await expectPropReflects(
      page,
      'tds-button',
      'modeVariant',
      'secondary',
      'mode-variant',
      'secondary',
    );
  });
});
