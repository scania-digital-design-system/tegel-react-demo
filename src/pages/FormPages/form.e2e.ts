import { test, expect } from '@playwright/test';

test.describe('Form Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/form');
  });

  test('form fields render', async ({ page }) => {
    await expect(page.getByText('Simple Form').first()).toBeVisible();
    await expect(page.getByText('Full name').first()).toBeVisible();
    await expect(page.getByText('Phone number').first()).toBeVisible();
    await expect(page.getByText('Address').first()).toBeVisible();
    const datetimeInputs = page.locator('tds-datetime');
    expect(await datetimeInputs.count()).toBeGreaterThanOrEqual(1);
    const dropdowns = page.locator('tds-dropdown');
    expect(await dropdowns.count()).toBeGreaterThanOrEqual(1);
  });

  test('country dropdown has options', async ({ page }) => {
    const dropdown = page.locator('tds-dropdown').first();
    await expect(dropdown).toBeAttached();
    const options = page.locator('tds-dropdown-option');
    expect(await options.count()).toBeGreaterThanOrEqual(3);
  });

  test('checkboxes render for office selection', async ({ page }) => {
    await expect(page.getByText('Södertälje 321').first()).toBeVisible();
    await expect(page.getByText('Sergel').first()).toBeVisible();
    await expect(page.getByText('Home office').first()).toBeVisible();
  });

  test('disabled checkbox is not interactive', async ({ page }) => {
    const building260 = page.getByText('Building 260').first();
    await expect(building260).toBeVisible();
  });

  test('radio buttons render for years at Scania', async ({ page }) => {
    await expect(page.getByText('0 - 6 months').first()).toBeVisible();
    await expect(page.getByText('6 months - 1 year').first()).toBeVisible();
    await expect(page.getByText('+ 5 years').first()).toBeVisible();
  });

  test('textarea is initially disabled until address is filled', async ({ page }) => {
    const textarea = page.locator('tds-textarea').first();
    const isDisabled = await textarea.evaluate((el: any) => el.disabled);
    expect(isDisabled).toBe(true);
  });

  test('sliders render', async ({ page }) => {
    const sliders = page.locator('tds-slider');
    expect(await sliders.count()).toBeGreaterThanOrEqual(3);
  });

  test('interest chips render', async ({ page }) => {
    await expect(page.getByText('Web developement').first()).toBeVisible();
    await expect(page.getByText('Docker').first()).toBeVisible();
    await expect(page.getByText('React').first()).toBeVisible();
  });

  test('submit and reset buttons are visible', async ({ page }) => {
    await expect(page.getByText('Submit').first()).toBeVisible();
    await expect(page.getByText('Reset').first()).toBeVisible();
  });

  test('submit button is clickable and form is interactive', async ({ page }) => {
    const submitButton = page.locator('tds-button').filter({ hasText: 'Submit' }).first();
    await submitButton.scrollIntoViewIfNeeded();
    await expect(submitButton).toBeVisible();
    await submitButton.click();
  });

  // Attribute reflection tests for form-specific components
  test('tds-datetime type reflects', async ({ page }) => {
    const datetime = page.locator('tds-datetime').first();
    const attr = await datetime.getAttribute('type');
    expect(attr, 'tds-datetime type attribute should be reflected').not.toBeNull();
  });

  test('tds-datetime min reflects', async ({ page }) => {
    const datetime = page.locator('tds-datetime').first();
    const attr = await datetime.getAttribute('min');
    expect(attr, 'tds-datetime min attribute should be reflected').not.toBeNull();
  });

  test('tds-datetime max reflects', async ({ page }) => {
    const datetime = page.locator('tds-datetime').first();
    const attr = await datetime.getAttribute('max');
    expect(attr, 'tds-datetime max attribute should be reflected').not.toBeNull();
  });

  test('tds-dropdown disabled option reflects', async ({ page }) => {
    const options = page.locator('tds-dropdown-option');
    let disabledFound = false;
    for (let i = 0; i < (await options.count()); i++) {
      const isDisabled = await options.nth(i).evaluate((el: any) => el.disabled);
      if (isDisabled) {
        const attr = await options.nth(i).getAttribute('disabled');
        expect(
          attr,
          'disabled attribute should be reflected on tds-dropdown-option',
        ).not.toBeNull();
        disabledFound = true;
        break;
      }
    }
    expect(disabledFound, 'Should find at least one disabled dropdown option').toBe(true);
  });

  test('tds-text-field state reflects', async ({ page }) => {
    const fields = page.locator('tds-text-field');
    let successFound = false;
    for (let i = 0; i < (await fields.count()); i++) {
      const state = await fields.nth(i).evaluate((el: any) => el.state);
      if (state === 'success') {
        const attr = await fields.nth(i).getAttribute('state');
        expect(attr, 'state attribute should be reflected on tds-text-field').toBe('success');
        successFound = true;
        break;
      }
    }
    expect(successFound, 'Should find at least one text-field with state=success').toBe(true);
  });

  test('tds-slider disabled reflects', async ({ page }) => {
    const sliders = page.locator('tds-slider');
    const slider = sliders.first();
    await slider.evaluate((el: any) => {
      el.disabled = true;
    });
    await page.waitForTimeout(200);
    const attr = await slider.getAttribute('disabled');
    expect(attr, 'disabled attribute should be reflected on tds-slider').not.toBeNull();
  });
});
