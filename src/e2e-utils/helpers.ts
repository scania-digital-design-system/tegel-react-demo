import { expect, Page } from '@playwright/test';

/**
 * Set a JS property on a component and verify it reflects as a DOM attribute.
 *
 * This catches missing `reflect: true` on Stencil @Prop() decorators —
 * when the React wrapper sets props as JS properties (via @lit/react's
 * createComponent), they won't appear as attributes without reflection.
 */
export async function expectPropReflects(
  page: Page,
  selector: string,
  prop: string,
  value: unknown,
  expectedAttribute: string,
  expectedAttrValue?: string,
) {
  const el = page.locator(selector).first();
  await expect(el).toBeAttached();

  await el.evaluate(
    (node: any, { prop, value }) => {
      node[prop] = value;
    },
    { prop, value },
  );

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
