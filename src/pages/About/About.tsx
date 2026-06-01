import { useState } from "react";
import { TdsCheckbox, TdsRadioButton, TdsToggle } from "@scania/tegel-react";
import "./About.css";

type Brand = "scania" | "traton";

const meals = [
	{ value: "salmon", label: "Salmon" },
	{ value: "veal", label: "Veal" },
	{ value: "chicken", label: "Chicken" },
];

const About = () => {
	const [brand, setBrand] = useState<Brand>("scania");
	const [meal, setMeal] = useState("salmon");

	return (
		<article className={`about ${brand}`}>
			<header className="about__header">
				<h3 className="tds-headline-02">Component test ground</h3>
				<p className="tds-detail-02">
					Testing <strong>@scania/tegel-react@1.55.0-var-batch-8-beta</strong>:
					checkbox, radio button and toggle. Flip the brand to confirm each
					component themes correctly in Scania and Traton.
				</p>
			</header>

			<section className="component-section about__brand">
				<h4 className="tds-headline-06">Brand</h4>
				<p className="about__note tds-detail-05">
					Toggles the <code>.scania</code> / <code>.traton</code> theme class on the
					demo area below.
				</p>
				<TdsToggle
					checked={brand === "traton"}
					onTdsToggle={(e) => setBrand(e.detail.checked ? "traton" : "scania")}
				>
					<div slot="label">
						Brand: {brand === "traton" ? "Traton" : "Scania"}
					</div>
				</TdsToggle>
			</section>

			<section className="component-section">
				<h4 className="tds-headline-06">Checkbox</h4>
				<p className="about__note tds-detail-05">
					<code>tds-checkbox</code> in its core states.
				</p>
				<div className="demo-column">
					<TdsCheckbox>
						<div slot="label">Default</div>
					</TdsCheckbox>
					<TdsCheckbox checked>
						<div slot="label">Checked</div>
					</TdsCheckbox>
					<TdsCheckbox indeterminate>
						<div slot="label">Indeterminate</div>
					</TdsCheckbox>
					<TdsCheckbox disabled>
						<div slot="label">Disabled</div>
					</TdsCheckbox>
					<TdsCheckbox disabled checked>
						<div slot="label">Disabled & checked</div>
					</TdsCheckbox>
				</div>
			</section>

			<section className="component-section">
				<h4 className="tds-headline-06">Radio button</h4>
				<p className="about__note tds-detail-05">
					<code>tds-radio-button</code> as a single-select group.
				</p>
				<fieldset className="demo-column about__fieldset">
					<legend className="tds-detail-05">Choose a meal</legend>
					{meals.map(({ value, label }) => (
						<TdsRadioButton
							key={value}
							name="meal"
							value={value}
							radio-id={`meal-${value}`}
							checked={meal === value}
							onTdsChange={() => setMeal(value)}
						>
							<span slot="label">{label}</span>
						</TdsRadioButton>
					))}
					<TdsRadioButton name="meal" value="soldout" radio-id="meal-soldout" disabled>
						<span slot="label">Sold out (disabled)</span>
					</TdsRadioButton>
				</fieldset>
			</section>

			<section className="component-section">
				<h4 className="tds-headline-06">Toggle</h4>
				<p className="about__note tds-detail-05">
					<code>tds-toggle</code> in both sizes and states.
				</p>
				<div className="demo-column">
					<TdsToggle headline="Large">
						<div slot="label">Off by default</div>
					</TdsToggle>
					<TdsToggle headline="Large" checked>
						<div slot="label">On by default</div>
					</TdsToggle>
					<TdsToggle size="sm" headline="Small">
						<div slot="label">Small size</div>
					</TdsToggle>
					<TdsToggle headline="Disabled" disabled>
						<div slot="label">Disabled</div>
					</TdsToggle>
				</div>
			</section>
		</article>
	);
};

export default About;
