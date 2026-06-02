import { useMemo, useState } from "react";
import { TdsIcon, TdsToggle } from "@scania/tegel-react";
import { ICON_NAMES } from "./icons";
import "./About.css";

type Brand = "scania" | "traton";

const About = () => {
	const [brand, setBrand] = useState<Brand>("scania");
	const [query, setQuery] = useState("");

	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase();
		return q ? ICON_NAMES.filter((name) => name.includes(q)) : ICON_NAMES;
	}, [query]);

	return (
		<article className={`about ${brand}`}>
			<header className="about__header">
				<h3 className="tds-headline-02">Icon test ground</h3>
				<p className="tds-detail-02">
					Testing <strong>@scania/tegel-react@1.55.0-traton-icons</strong>. All{" "}
					{ICON_NAMES.length} icon names are rendered below. Flip the brand to
					confirm each <code>tds-icon</code> resolves to the correct
					Scania/Traton asset — icons without an asset in the active brand render
					empty.
				</p>
			</header>

			<section className="component-section about__controls">
				<div className="about__brand">
					<TdsToggle
						checked={brand === "traton"}
						onTdsToggle={(e) => setBrand(e.detail.checked ? "traton" : "scania")}
					>
						<div slot="label">Brand: {brand === "traton" ? "Traton" : "Scania"}</div>
					</TdsToggle>
				</div>
				<input
					type="search"
					className="about__search"
					placeholder="Filter icons by name…"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					aria-label="Filter icons by name"
				/>
				<span className="about__count tds-detail-05">
					{filtered.length} / {ICON_NAMES.length}
				</span>
			</section>

			<section className="icon-grid">
				{filtered.map((name) => (
					<figure key={name} className="icon-cell" title={name}>
						<TdsIcon name={name} size="32px" />
						<figcaption className="icon-cell__name">{name}</figcaption>
					</figure>
				))}
			</section>
		</article>
	);
};

export default About;
