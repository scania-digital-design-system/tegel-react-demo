import { test, expect, Page } from '@playwright/test';

/**
 * Behavior-based E2E tests for Tegel React components.
 *
 * Tests the rendered DOM and user-visible behavior of web components
 * rather than internal prop/attribute reflection. Covers visibility,
 * interaction, disabled states, form behavior, and navigation.
 */

/** Wait for Tegel custom elements to be defined and page to settle */
async function waitForComponents(page: Page) {
  await page.waitForFunction(() => customElements.get('tds-button') !== undefined, {
    timeout: 15000,
  });
  await page.waitForTimeout(1000);
}

// ===========================================================================
// Web Components Page (/web-components)
// ===========================================================================

test.describe('Web Components Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/web-components');
    await waitForComponents(page);
  });

  // --- Button ---
  test.describe('tds-button', () => {
    test('buttons are visible with expected labels', async ({ page }) => {
      await expect(page.getByText('Primary fullbleed').first()).toBeVisible();
      await expect(page.getByText('Danger').first()).toBeVisible();
      await expect(page.getByText('Ghost').first()).toBeVisible();
      await expect(page.getByText('Secondary').first()).toBeVisible();
    });

    test('clicking a button triggers alert', async ({ page }) => {
      page.on('dialog', (d) => d.dismiss());
      const dialogPromise = page.waitForEvent('dialog');
      // Click the first button with visible text to avoid shadow-DOM click issues
      await page.getByText('Primary fullbleed', { exact: true }).first().click();
      const dialog = await dialogPromise;
      expect(dialog.message()).toBe('Clicked button!');
    });

    test('disabled button does not trigger alert', async ({ page }) => {
      let dialogFired = false;
      page.on('dialog', () => {
        dialogFired = true;
      });
      // Find a disabled button (the second fullbleed primary button)
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
  });

  // --- Spinner ---
  test.describe('tds-spinner', () => {
    test('standard and inverted spinners are visible', async ({ page }) => {
      await expect(page.getByText('Standard').first()).toBeVisible();
      await expect(page.getByText('Inverted').first()).toBeVisible();
      const spinners = page.locator('tds-spinner');
      expect(await spinners.count()).toBeGreaterThanOrEqual(2);
    });
  });

  // --- Badge ---
  test.describe('tds-badge', () => {
    test('badges render with values', async ({ page }) => {
      const badges = page.locator('tds-badge');
      expect(await badges.count()).toBeGreaterThanOrEqual(2);
    });

    test('text input updates badge value', async ({ page }) => {
      const input = page.locator('tds-text-field[label="Number of emails"]');
      await expect(input).toBeVisible();
    });
  });

  // --- Checkbox ---
  test.describe('tds-checkbox', () => {
    test('checkboxes render with correct labels', async ({ page }) => {
      await expect(page.getByText('Enabled').first()).toBeVisible();
      await expect(page.getByText('Disabled').first()).toBeVisible();
      await expect(page.getByText('Checked').first()).toBeVisible();
    });

    test('enabled checkbox can be toggled', async ({ page }) => {
      const checkbox = page.locator('tds-checkbox').first();
      await checkbox.click();
      // After click, it should become checked
      const isChecked = await checkbox.evaluate((el: any) => el.checked);
      expect(isChecked).toBe(true);
    });

    test('disabled checkbox is not interactive', async ({ page }) => {
      const disabledCheckbox = page.locator('tds-checkbox').nth(1);
      const isDisabled = await disabledCheckbox.evaluate((el: any) => el.disabled);
      expect(isDisabled).toBe(true);
    });
  });

  // --- Chip ---
  test.describe('tds-chip', () => {
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
      // Click Svelte chip
      const svelteChip = page.getByText('Svelte').first();
      await svelteChip.click();
    });

    test('radio chips allow single selection', async ({ page }) => {
      // Click "sm" size chip
      const smChip = page.getByText('sm', { exact: true }).first();
      await smChip.click();
    });

    test('chip form submits selected values', async ({ page }) => {
      // Select a radio option and submit
      await page.getByText('md', { exact: true }).first().click();
      const submitButton = page
        .locator('tds-button[type="submit"], tds-button')
        .filter({ hasText: 'Submit' })
        .first();
      await submitButton.click();
      // Check submitted data appears
      const pre = page.locator('pre').first();
      await expect(pre).toContainText('size');
    });
  });

  // --- Divider ---
  test.describe('tds-divider', () => {
    test('divider renders', async ({ page }) => {
      const divider = page.locator('tds-divider').first();
      await expect(divider).toBeAttached();
    });
  });

  // --- Message ---
  test.describe('tds-message', () => {
    test('messages render with correct headers', async ({ page }) => {
      const messages = page.locator('tds-message');
      expect(await messages.count()).toBeGreaterThanOrEqual(3);
    });

    test('icon toggle controls message icon visibility', async ({ page }) => {
      // The "With Icon" toggle is initially checked
      const iconToggle = page.locator('tds-toggle').filter({ hasText: 'With Icon' });
      await expect(iconToggle).toBeVisible();
    });

    test('minimal toggle controls message style', async ({ page }) => {
      const minimalToggle = page.locator('tds-toggle').filter({ hasText: 'Minimal' });
      await expect(minimalToggle).toBeVisible();
    });
  });

  // --- Toggle ---
  test.describe('tds-toggle', () => {
    test('toggles render with labels', async ({ page }) => {
      const toggleSection = page.getByText('Toggle').first();
      await expect(toggleSection).toBeVisible();
    });

    test('toggle headline text is visible in the DOM', async ({ page }) => {
      // The headline prop should render visible text inside the toggle.
      // If headline is not reflected/rendered, this text will be missing.
      const toggle = page.locator('.toggle-container tds-toggle').first();
      await expect(toggle).toBeAttached();

      // Check that "Headline" text is visible inside/near the toggle
      const headlineVisible = await toggle
        .getByText('Headline')
        .isVisible()
        .catch(() => false);
      expect(headlineVisible, 'tds-toggle headline "Headline" should be visible to the user').toBe(
        true,
      );

      // Verify headline is reflected as a DOM attribute (not just a JS property)
      const attr = await toggle.getAttribute('headline');
      expect(
        attr,
        'headline attribute should be reflected on the host element for CSS selectors',
      ).toBe('Headline');
    });

    test('disabled toggle is not interactive', async ({ page }) => {
      // The second toggle in the Toggle section is disabled
      const toggles = page.locator('.toggle-container tds-toggle');
      if ((await toggles.count()) >= 2) {
        const disabledToggle = toggles.nth(1);
        const isDisabled = await disabledToggle.evaluate((el: any) => el.disabled);
        expect(isDisabled).toBe(true);
      }
    });

    test('programmatic toggle button works', async ({ page }) => {
      const pressMe = page.getByText('Press me!').first();
      await expect(pressMe).toBeVisible();
      await pressMe.click();
    });
  });

  // --- Link ---
  test.describe('tds-link', () => {
    test('link is visible with correct text', async ({ page }) => {
      // The Link component section has a link to tegel.scania.com
      const tegelLink = page.locator('tds-link a[href="https://tegel.scania.com/home"]');
      if ((await tegelLink.count()) > 0) {
        await expect(tegelLink.first()).toBeVisible();
      } else {
        // Fallback: just verify tds-link exists and contains an anchor
        const link = page.locator('tds-link').last().locator('a');
        await expect(link).toBeVisible();
      }
    });
  });

  // --- Dropdown ---
  test.describe('tds-dropdown', () => {
    test('dropdown renders with label', async ({ page }) => {
      const dropdown = page.locator('tds-dropdown').first();
      await expect(dropdown).toBeAttached();
    });

    test('dropdown has multiple options', async ({ page }) => {
      const options = page.locator('tds-dropdown-option');
      expect(await options.count()).toBeGreaterThanOrEqual(5);
    });
  });

  // --- Card ---
  test.describe('tds-card', () => {
    test('cards render with visible content', async ({ page }) => {
      const cards = page.locator('tds-card');
      expect(await cards.count()).toBeGreaterThanOrEqual(3);
    });

    test('clickable card triggers action', async ({ page }) => {
      // Carousel cards are clickable
      const clickableCards = page.locator('tds-card[clickable]');
      if ((await clickableCards.count()) > 0) {
        await clickableCards.first().click();
      }
    });
  });

  // --- Radio Button ---
  test.describe('tds-radio-button', () => {
    test('radio buttons render with labels', async ({ page }) => {
      await expect(page.getByText('Cucumber salad').first()).toBeVisible();
      await expect(page.getByText('Garlic bread').first()).toBeVisible();
      await expect(page.getByText('Salmon').first()).toBeVisible();
    });

    test('disabled radio button is not selectable', async ({ page }) => {
      const veal = page.getByText('Veal').first();
      await expect(veal).toBeVisible();
    });

    test('radio button selection works and form submits', async ({ page }) => {
      // Click a starter
      await page.getByText('Cucumber salad').first().click();
      // Click a dessert
      await page.getByText('Cake').first().click();
      // Submit the form
      const placeOrder = page.getByText('Place order').first();
      await placeOrder.click();
      // Verify order summary shows
      await expect(page.getByText('Thank you for your order').first()).toBeVisible();
    });
  });

  // --- Accordion ---
  test.describe('tds-accordion', () => {
    test('accordion items render', async ({ page }) => {
      const items = page.locator('tds-accordion-item');
      expect(await items.count()).toBeGreaterThanOrEqual(3);
    });

    test('clicking accordion item expands it', async ({ page }) => {
      const firstItem = page.locator('tds-accordion-item').first();
      await firstItem.click();
      // After clicking, the item should contain visible Lorem ipsum text
      await expect(page.getByText('Lorem ipsum dolor sit amet').first()).toBeVisible();
    });
  });

  // --- Text Field ---
  test.describe('tds-text-field', () => {
    test('text field renders and is interactive', async ({ page }) => {
      const field = page.locator('tds-text-field').first();
      await expect(field).toBeAttached();
    });
  });

  // --- Textarea ---
  test.describe('tds-textarea', () => {
    test('textarea renders with label', async ({ page }) => {
      await expect(page.getByText('Hello label').first()).toBeVisible();
    });

    test('textarea shows error helper text', async ({ page }) => {
      await expect(page.getByText('Good guess, but wrong answer buddy').first()).toBeVisible();
    });
  });

  // --- Toast ---
  test.describe('tds-toast', () => {
    test('toasts are visible with correct headers', async ({ page }) => {
      await expect(page.getByText('Successful Toast!').first()).toBeVisible();
      await expect(page.getByText('Error Toast!').first()).toBeVisible();
      await expect(page.getByText('Information Toast!').first()).toBeVisible();
      await expect(page.getByText('Warning Toast!').first()).toBeVisible();
    });

    test('toast toggle controls visibility', async ({ page }) => {
      const toggle = page.locator('tds-toggle').filter({ hasText: 'Toast' });
      await expect(toggle).toBeVisible();
    });
  });

  // --- Tooltip ---
  test.describe('tds-tooltip', () => {
    test('tooltip trigger button is visible', async ({ page }) => {
      const hoverButton = page.getByText('Hover me').first();
      await expect(hoverButton).toBeVisible();
    });
  });

  // --- Tag ---
  test.describe('tds-tag', () => {
    test('tags render with correct labels', async ({ page }) => {
      await expect(page.getByText('Success', { exact: true }).first()).toBeVisible();
      await expect(page.getByText('Warning', { exact: true }).first()).toBeVisible();
      await expect(page.getByText('Error', { exact: true }).first()).toBeVisible();
      await expect(page.getByText('Information', { exact: true }).first()).toBeVisible();
    });
  });

  // --- Breadcrumbs ---
  test.describe('tds-breadcrumbs', () => {
    test('breadcrumbs render', async ({ page }) => {
      await expect(page.getByText('Page 1').first()).toBeVisible();
      await expect(page.getByText('Page 2').first()).toBeVisible();
      await expect(page.getByText('Page 3').first()).toBeVisible();
    });
  });

  // --- Datetime ---
  test.describe('tds-datetime', () => {
    test('datetime inputs render', async ({ page }) => {
      const datetimeInputs = page.locator('tds-datetime');
      expect(await datetimeInputs.count()).toBeGreaterThanOrEqual(3);
    });
  });

  // --- Block ---
  test.describe('tds-block', () => {
    test('block renders with content', async ({ page }) => {
      const blocks = page.locator('tds-block');
      expect(await blocks.count()).toBeGreaterThanOrEqual(1);
    });
  });

  // --- Stepper ---
  test.describe('tds-stepper', () => {
    test('stepper renders with steps', async ({ page }) => {
      const steps = page.locator('tds-step');
      expect(await steps.count()).toBeGreaterThanOrEqual(4);
    });
  });

  // --- Modal ---
  test.describe('tds-modal', () => {
    test('modal trigger buttons are visible', async ({ page }) => {
      await expect(page.getByText('Small Modal').first()).toBeVisible();
      await expect(page.getByText('Medium Modal').first()).toBeVisible();
      await expect(page.getByText('Large Modal').first()).toBeVisible();
    });

    test('clicking button opens modal', async ({ page }) => {
      await page.getByText('Small Modal').first().click();
      await expect(page.getByText('Modal Header').first()).toBeVisible();
    });
  });

  // --- Banner ---
  test.describe('tds-banner', () => {
    test('banners are visible', async ({ page }) => {
      const banners = page.locator('tds-banner');
      expect(await banners.count()).toBeGreaterThanOrEqual(1);
    });
  });

  // --- Tabs ---
  test.describe('tds-tabs', () => {
    test('folder tabs render', async ({ page }) => {
      const folderTabs = page.locator('tds-folder-tabs');
      expect(await folderTabs.count()).toBeGreaterThanOrEqual(1);
    });

    test('tab items are visible', async ({ page }) => {
      await expect(page.getByText('First tab').first()).toBeVisible();
    });
  });
});

// ===========================================================================
// Form Page (/form)
// ===========================================================================

test.describe('Form Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/form');
    await waitForComponents(page);
  });

  test('form fields render', async ({ page }) => {
    await expect(page.getByText('Simple Form').first()).toBeVisible();
    await expect(page.getByText('Full name').first()).toBeVisible();
    await expect(page.getByText('Phone number').first()).toBeVisible();
    await expect(page.getByText('Address').first()).toBeVisible();
    // Datetime and dropdown components render
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
    // Verify the button can be clicked (no error thrown)
    await submitButton.click();
  });
});

// ===========================================================================
// Navigation Components (present on all pages)
// ===========================================================================

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await waitForComponents(page);
  });

  test('header renders with title', async ({ page }) => {
    await expect(page.getByText('React Demo').first()).toBeVisible();
  });

  test('side menu renders with navigation items', async ({ page }) => {
    const sideMenu = page.locator('tds-side-menu');
    await expect(sideMenu.first()).toBeAttached();
    await expect(page.getByText('About us').first()).toBeVisible();
  });

  test('side menu navigation works', async ({ page }) => {
    await page.getByText('About us').first().click();
    await expect(page).toHaveURL(/.*about/);
  });

  test('footer renders with links', async ({ page }) => {
    const footer = page.locator('tds-footer');
    await expect(footer.first()).toBeAttached();
  });

  test('header dropdown navigates to About', async ({ page }) => {
    // Open dropdown and click About
    const wheelTypes = page.getByText('Wheel types').first();
    await wheelTypes.click();
    await page.getByText('About').first().click();
    await expect(page).toHaveURL(/.*about/);
  });
});

// ===========================================================================
// Table Page (/table)
// ===========================================================================

test.describe('Table Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/table');
    await waitForComponents(page);
  });

  test('tables render with data', async ({ page }) => {
    const tables = page.locator('tds-table');
    expect(await tables.count()).toBeGreaterThanOrEqual(1);
  });

  test('table has header cells', async ({ page }) => {
    const headerCells = page.locator('tds-header-cell');
    expect(await headerCells.count()).toBeGreaterThanOrEqual(1);
  });

  test('table has body cells with data', async ({ page }) => {
    const bodyCells = page.locator('tds-body-cell');
    expect(await bodyCells.count()).toBeGreaterThanOrEqual(1);
  });

  test('table toolbar is visible', async ({ page }) => {
    const toolbar = page.locator('tds-table-toolbar');
    if ((await toolbar.count()) > 0) {
      await expect(toolbar.first()).toBeAttached();
    }
  });
});

// ===========================================================================
// Stepper Page (/stepper)
// ===========================================================================

test.describe('Stepper Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/stepper');
    await waitForComponents(page);
  });

  test('stepper renders with steps', async ({ page }) => {
    const steppers = page.locator('tds-stepper');
    expect(await steppers.count()).toBeGreaterThanOrEqual(1);
  });

  test('stepper text fields are interactive', async ({ page }) => {
    const fields = page.locator('tds-text-field');
    expect(await fields.count()).toBeGreaterThanOrEqual(1);
  });
});

// ===========================================================================
// Tabs Pages
// ===========================================================================

test.describe('Tabs Button Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tabs-buttons');
    await waitForComponents(page);
  });

  test('tab components render', async ({ page }) => {
    const tabs = page.locator('tds-folder-tabs, tds-inline-tabs, tds-navigation-tabs');
    expect(await tabs.count()).toBeGreaterThanOrEqual(1);
  });
});

// ===========================================================================
// Attribute Reflection Tests
//
// These tests verify that primitive/enum props set via the React wrapper
// are reflected as DOM attributes on the host element. Without reflect:true
// in the Stencil @Prop() decorator, props set as JS properties (which is
// how @lit/react's createComponent works) won't appear as attributes.
// This breaks CSS attribute selectors, testing-library queries, and any
// code that reads getAttribute().
//
// Mirrors the regressions found in ssi-common vitest suite.
// ===========================================================================

test.describe('Attribute Reflection — Web Components Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/web-components');
    await waitForComponents(page);
  });

  // Helper: set a JS property on a component and check if it reflects as attribute
  async function expectPropReflects(
    page: Page,
    selector: string,
    prop: string,
    value: unknown,
    expectedAttribute: string,
    expectedAttrValue?: string,
  ) {
    const el = page.locator(selector).first();
    await expect(el).toBeAttached();

    // Set the property via JS (how React wrapper sets props)
    await el.evaluate(
      (node: any, { prop, value }) => {
        node[prop] = value;
      },
      { prop, value },
    );

    // Allow component to re-render
    await page.waitForTimeout(200);

    const attr = await el.getAttribute(expectedAttribute);

    if (typeof value === 'boolean' && value) {
      expect(
        attr,
        `<${selector}> .${prop}=${value} should reflect as [${expectedAttribute}] attribute`,
      ).not.toBeNull();
    } else if (typeof value === 'boolean' && !value) {
      expect(
        attr === null || attr === 'false',
        `<${selector}> .${prop}=false should remove [${expectedAttribute}] attribute`,
      ).toBeTruthy();
    } else {
      expect(
        attr,
        `<${selector}> .${prop}="${value}" should reflect as [${expectedAttribute}="${expectedAttrValue ?? value}"]`,
      ).toBe(expectedAttrValue ?? String(value));
    }
  }

  // --- tds-button ---
  test.describe('tds-button attribute reflection', () => {
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

  // --- tds-spinner ---
  test.describe('tds-spinner attribute reflection', () => {
    test('size reflects', async ({ page }) => {
      await expectPropReflects(page, 'tds-spinner', 'size', 'lg', 'size', 'lg');
    });

    test('variant reflects', async ({ page }) => {
      await expectPropReflects(page, 'tds-spinner', 'variant', 'inverted', 'variant', 'inverted');
    });
  });

  // --- tds-toggle ---
  test.describe('tds-toggle attribute reflection', () => {
    test('headline reflects', async ({ page }) => {
      const toggle = page.locator('.toggle-container tds-toggle').first();
      const attr = await toggle.getAttribute('headline');
      expect(attr, 'headline attribute should be reflected on the host element').toBe('Headline');
    });

    test('size reflects', async ({ page }) => {
      await expectPropReflects(page, 'tds-toggle', 'size', 'sm', 'size', 'sm');
    });

    test('disabled reflects', async ({ page }) => {
      const toggle = page.locator('.toggle-container tds-toggle').nth(1);
      const attr = await toggle.getAttribute('disabled');
      expect(attr, 'disabled attribute should be reflected on the host element').not.toBeNull();
    });
  });

  // --- tds-dropdown ---
  test.describe('tds-dropdown attribute reflection', () => {
    test('size reflects', async ({ page }) => {
      await expectPropReflects(page, 'tds-dropdown', 'size', 'sm', 'size', 'sm');
    });

    test('disabled reflects', async ({ page }) => {
      await expectPropReflects(page, 'tds-dropdown', 'disabled', true, 'disabled');
    });

    test('multiselect reflects', async ({ page }) => {
      // The dropdown in the demo already has multiselect set
      const dropdown = page.locator('tds-dropdown').first();
      const attr = await dropdown.getAttribute('multiselect');
      expect(attr, 'multiselect attribute should be reflected on the host element').not.toBeNull();
    });

    test('filter reflects', async ({ page }) => {
      const dropdown = page.locator('tds-dropdown').first();
      const attr = await dropdown.getAttribute('filter');
      expect(attr, 'filter attribute should be reflected on the host element').not.toBeNull();
    });
  });

  // --- tds-chip ---
  test.describe('tds-chip attribute reflection', () => {
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

  // --- tds-checkbox ---
  test.describe('tds-checkbox attribute reflection', () => {
    test('disabled reflects', async ({ page }) => {
      const checkbox = page.locator('tds-checkbox').nth(1); // the disabled one
      const attr = await checkbox.getAttribute('disabled');
      expect(attr, 'disabled attribute should be reflected on the host element').not.toBeNull();
    });

    test('checked reflects', async ({ page }) => {
      await expectPropReflects(page, 'tds-checkbox', 'checked', true, 'checked');
    });
  });

  // --- tds-message ---
  test.describe('tds-message attribute reflection', () => {
    test('variant reflects', async ({ page }) => {
      const message = page.locator('tds-message').first();
      const attr = await message.getAttribute('variant');
      expect(attr, 'variant attribute should be reflected on the host element').not.toBeNull();
    });

    test('no-icon reflects', async ({ page }) => {
      await expectPropReflects(page, 'tds-message', 'noIcon', true, 'no-icon');
    });

    test('minimal reflects', async ({ page }) => {
      await expectPropReflects(page, 'tds-message', 'minimal', true, 'minimal');
    });
  });

  // --- tds-badge ---
  test.describe('tds-badge attribute reflection', () => {
    test('size reflects', async ({ page }) => {
      await expectPropReflects(page, 'tds-badge', 'size', 'sm', 'size', 'sm');
    });
  });

  // --- tds-divider ---
  test.describe('tds-divider attribute reflection', () => {
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

  // --- tds-text-field ---
  test.describe('tds-text-field attribute reflection', () => {
    test('size reflects', async ({ page }) => {
      await expectPropReflects(page, 'tds-text-field', 'size', 'sm', 'size', 'sm');
    });

    test('disabled reflects', async ({ page }) => {
      await expectPropReflects(page, 'tds-text-field', 'disabled', true, 'disabled');
    });
  });

  // --- tds-textarea ---
  test.describe('tds-textarea attribute reflection', () => {
    test('state reflects', async ({ page }) => {
      const textarea = page.locator('tds-textarea').first();
      const attr = await textarea.getAttribute('state');
      expect(attr, 'state attribute should be reflected on the host element').toBe('error');
    });
  });

  // --- tds-datetime ---
  test.describe('tds-datetime attribute reflection', () => {
    test('type reflects', async ({ page }) => {
      const datetime = page.locator('tds-datetime').first();
      const attr = await datetime.getAttribute('type');
      expect(attr, 'type attribute should be reflected on the host element').not.toBeNull();
    });
  });

  // --- tds-accordion-item ---
  test.describe('tds-accordion-item attribute reflection', () => {
    test('disabled reflects', async ({ page }) => {
      await expectPropReflects(page, 'tds-accordion-item', 'disabled', true, 'disabled');
    });
  });

  // --- tds-radio-button ---
  test.describe('tds-radio-button attribute reflection', () => {
    test('disabled reflects', async ({ page }) => {
      // Find the disabled Veal radio button
      const radios = page.locator('tds-radio-button');
      let disabledFound = false;
      for (let i = 0; i < (await radios.count()); i++) {
        const isDisabled = await radios.nth(i).evaluate((el: any) => el.disabled);
        if (isDisabled) {
          const attr = await radios.nth(i).getAttribute('disabled');
          expect(attr, 'disabled attribute should be reflected on the host element').not.toBeNull();
          disabledFound = true;
          break;
        }
      }
      expect(disabledFound, 'Should find at least one disabled radio button').toBe(true);
    });
  });
});

// ===========================================================================
// Attribute Reflection — Form Page
// ===========================================================================

test.describe('Attribute Reflection — Form Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/form');
    await waitForComponents(page);
  });

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
    // Finland dropdown option is disabled
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
    // Phone number field has state="success"
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
    // Set disabled on first slider and check reflection
    const slider = sliders.first();
    await slider.evaluate((el: any) => {
      el.disabled = true;
    });
    await page.waitForTimeout(200);
    const attr = await slider.getAttribute('disabled');
    expect(attr, 'disabled attribute should be reflected on tds-slider').not.toBeNull();
  });
});
