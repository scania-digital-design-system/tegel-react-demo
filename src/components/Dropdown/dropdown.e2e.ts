import { test, expect } from "@playwright/test";
import { expectPropReflects } from "../../e2e-utils/helpers";

test.describe("tds-dropdown", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/web-components/dropdown");
	});

	test("dropdown renders with label", async ({ page }) => {
		const dropdown = page.locator("tds-dropdown").first();
		await expect(dropdown).toBeAttached();
	});

	test("dropdown has multiple options", async ({ page }) => {
		const options = page.locator("tds-dropdown-option");
		expect(await options.count()).toBeGreaterThanOrEqual(5);
	});

	// Attribute reflection
	test("size reflects", async ({ page }) => {
		await expectPropReflects(page, "tds-dropdown", "size", "sm", "size", "sm");
	});

	test("disabled reflects", async ({ page }) => {
		await expectPropReflects(page, "tds-dropdown", "disabled", true, "disabled");
	});

	test("multiselect reflects", async ({ page }) => {
		const dropdown = (await page.locator("tds-dropdown").all())[1];
		const attr = await dropdown.getAttribute("multiselect");
		expect(attr, "multiselect attribute should be reflected on the host element").not.toBeNull();
	});

	test("filter reflects", async ({ page }) => {
		const dropdown = (await page.locator("tds-dropdown").all())[1];
		const attr = await dropdown.getAttribute("filter");
		expect(attr, "filter attribute should be reflected on the host element").not.toBeNull();
	});
});
