/** biome-ignore-all lint/suspicious/noExplicitAny: for now */
import { test, expect } from "@playwright/test";
import { expectPropReflects } from "../../e2e-utils/helpers";

test.describe("tds-toggle", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/web-components/toggle");
	});

	test("toggles render with labels", async ({ page }) => {
		const toggleSection = page.getByText("Toggle").first();
		await expect(toggleSection).toBeVisible();
	});

	test("toggle headline text is visible in the DOM", async ({ page }) => {
		const toggle = page.locator(".toggle-container tds-toggle").first();
		await expect(toggle).toBeAttached();

		const headlineVisible = await toggle
			.getByText("Headline")
			.isVisible()
			.catch(() => false);
		expect(headlineVisible, 'tds-toggle headline "Headline" should be visible to the user').toBe(
			true,
		);

		const attr = await toggle.getAttribute("headline");
		expect(
			attr,
			"headline attribute should be reflected on the host element for CSS selectors",
		).toBe("Headline");
	});

	test("disabled toggle is not interactive", async ({ page }) => {
		const toggles = page.locator(".toggle-container tds-toggle");
		if ((await toggles.count()) >= 2) {
			const disabledToggle = toggles.nth(1);
			const isDisabled = await disabledToggle.evaluate((el: any) => el.disabled);
			expect(isDisabled).toBe(true);
		}
	});

	test("programmatic toggle button works", async ({ page }) => {
		const pressMe = page.getByText("Press me!").first();
		await expect(pressMe).toBeVisible();
		await pressMe.click();
	});

	// Attribute reflection
	test("headline reflects", async ({ page }) => {
		const toggle = page.locator(".toggle-container tds-toggle").first();
		const attr = await toggle.getAttribute("headline");
		expect(attr, "headline attribute should be reflected on the host element").toBe("Headline");
	});

	test("size reflects", async ({ page }) => {
		await expectPropReflects(page, "tds-toggle", "size", "sm", "size", "sm");
	});

	test("disabled reflects", async ({ page }) => {
		const toggle = page.locator(".toggle-container tds-toggle").nth(1);
		const attr = await toggle.getAttribute("disabled");
		expect(attr, "disabled attribute should be reflected on the host element").not.toBeNull();
	});
});
