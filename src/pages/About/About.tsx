/* eslint-disable jsx-a11y/anchor-is-valid */
/** biome-ignore-all lint/a11y/useValidAnchor: Dummy links for visual testing */
import { useEffect, useState } from "react";
import {
	TdsBreadcrumb,
	TdsBreadcrumbs,
	TdsDivider,
	TdsFooter,
	TdsFooterGroup,
	TdsFooterItem,
	TdsIcon,
	TdsLink,
} from "@scania/tegel-react";
import "./About.css";

type Brand = "scania" | "traton";

const DIVIDER_VARIANTS = [
	"discrete",
	"subtle",
	"soft",
	"defined",
	"dark-blue",
] as const;

const useBrand = (): [Brand, (next: Brand) => void] => {
	const [brand, setBrand] = useState<Brand>(() => {
		if (typeof document === "undefined") return "scania";
		if (document.body.classList.contains("traton")) return "traton";
		return "scania";
	});

	useEffect(() => {
		const body = document.body;
		body.classList.remove("scania", "traton");
		body.classList.add(brand);
	}, [brand]);

	return [brand, setBrand];
};

const Section = ({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) => (
	<section className="about-section">
		<h3 className="tds-headline-03">{title}</h3>
		<div className="about-section__body">{children}</div>
	</section>
);

const Case = ({
	label,
	children,
}: {
	label: string;
	children: React.ReactNode;
}) => (
	<div className="about-case">
		<div className="tds-detail-05 about-case__label">{label}</div>
		<div className="about-case__demo">{children}</div>
	</div>
);

const About = () => {
	const [brand, setBrand] = useBrand();

	return (
		<article className="about-page">
			<header className="about-header">
				<h2 className="tds-headline-02">
					Variable migration beta — 1.52.0-var-work-beta.0
				</h2>
				<p className="tds-body-01">
					Visual test ground for the components affected by the CSS variable
					migration: <strong>Link</strong>, <strong>Breadcrumbs</strong>,{" "}
					<strong>Divider</strong> and <strong>Footer</strong>. Switch brand to
					verify that tokens resolve correctly for both Scania and Traton.
				</p>
				<fieldset className="brand-toggle">
					<legend className="brand-toggle__legend tds-detail-05">Brand</legend>
					<label
						className={`brand-toggle__btn${brand === "scania" ? " brand-toggle__btn--active" : ""}`}
					>
						<input
							type="radio"
							name="brand"
							value="scania"
							checked={brand === "scania"}
							onChange={() => setBrand("scania")}
						/>
						Scania
					</label>
					<label
						className={`brand-toggle__btn${brand === "traton" ? " brand-toggle__btn--active" : ""}`}
					>
						<input
							type="radio"
							name="brand"
							value="traton"
							checked={brand === "traton"}
							onChange={() => setBrand("traton")}
						/>
						Traton
					</label>
					<span className="brand-toggle__hint tds-detail-06">
						body classname: <code>.{brand}</code>
					</span>
				</fieldset>
			</header>

			<Section title="Link">
				<Case label="Default (inline, underlined)">
					<p className="tds-body-01">
						Read more about{" "}
						<TdsLink>
							<a href="#">the design system</a>
						</TdsLink>{" "}
						in the documentation.
					</p>
				</Case>
				<Case label="Inline without underline">
					<p className="tds-body-01">
						Read more about{" "}
						<TdsLink underline={false}>
							<a href="#">the design system</a>
						</TdsLink>{" "}
						in the documentation.
					</p>
				</Case>
				<Case label="Standalone (default)">
					<TdsLink standalone>
						<a href="#">Standalone link</a>
					</TdsLink>
				</Case>
				<Case label="Standalone, no underline">
					<TdsLink standalone underline={false}>
						<a href="#">Standalone link</a>
					</TdsLink>
				</Case>
				<Case label="Disabled (inline)">
					<p className="tds-body-01">
						This{" "}
						<TdsLink disabled>
							<a href="#">link is disabled</a>
						</TdsLink>{" "}
						and should not be interactive.
					</p>
				</Case>
				<Case label="Disabled standalone">
					<TdsLink standalone disabled>
						<a href="#">Disabled standalone</a>
					</TdsLink>
				</Case>
				<Case label="External target">
					<TdsLink standalone>
						<a target="_blank" rel="noreferrer" href="https://tegel.scania.com">
							Open Tegel docs
						</a>
					</TdsLink>
				</Case>
				<Case label="With icon slot">
					<TdsLink standalone>
						<a href="#">
							<TdsIcon name="truck" size="16px" slot="icon" />
							Link with leading icon
						</a>
					</TdsLink>
				</Case>
				<Case label="Very long label (wrapping)">
					<div style={{ maxWidth: 220 }}>
						<TdsLink standalone>
							<a href="#">
								This is a very long link label that must wrap across multiple
								lines to verify underline and focus handling
							</a>
						</TdsLink>
					</div>
				</Case>
			</Section>

			<Section title="Breadcrumbs">
				<Case label="Single item">
					<TdsBreadcrumbs>
						<TdsBreadcrumb current>
							<a href="#">Home</a>
						</TdsBreadcrumb>
					</TdsBreadcrumbs>
				</Case>
				<Case label="Two items">
					<TdsBreadcrumbs>
						<TdsBreadcrumb>
							<a href="#">Home</a>
						</TdsBreadcrumb>
						<TdsBreadcrumb current>
							<a href="#">About</a>
						</TdsBreadcrumb>
					</TdsBreadcrumbs>
				</Case>
				<Case label="Three items (typical)">
					<TdsBreadcrumbs>
						<TdsBreadcrumb>
							<a href="#">Home</a>
						</TdsBreadcrumb>
						<TdsBreadcrumb>
							<a href="#">Components</a>
						</TdsBreadcrumb>
						<TdsBreadcrumb current>
							<a href="#">Breadcrumbs</a>
						</TdsBreadcrumb>
					</TdsBreadcrumbs>
				</Case>
				<Case label="Many items (overflow)">
					<TdsBreadcrumbs tdsAriaLabel="Deep navigation">
						<TdsBreadcrumb>
							<a href="#">Home</a>
						</TdsBreadcrumb>
						<TdsBreadcrumb>
							<a href="#">Products</a>
						</TdsBreadcrumb>
						<TdsBreadcrumb>
							<a href="#">Heavy trucks</a>
						</TdsBreadcrumb>
						<TdsBreadcrumb>
							<a href="#">R series</a>
						</TdsBreadcrumb>
						<TdsBreadcrumb>
							<a href="#">Specifications</a>
						</TdsBreadcrumb>
						<TdsBreadcrumb current>
							<a href="#">Powertrain</a>
						</TdsBreadcrumb>
					</TdsBreadcrumbs>
				</Case>
				<Case label="Long labels (clipping)">
					<div style={{ maxWidth: 420 }}>
						<TdsBreadcrumbs>
							<TdsBreadcrumb>
								<a href="#">Scania Digital Design System</a>
							</TdsBreadcrumb>
							<TdsBreadcrumb>
								<a href="#">A very long intermediate breadcrumb item title</a>
							</TdsBreadcrumb>
							<TdsBreadcrumb current>
								<a href="#">Current page with a particularly long title</a>
							</TdsBreadcrumb>
						</TdsBreadcrumbs>
					</div>
				</Case>
			</Section>

			<Section title="Divider">
				<Case label="Horizontal — all variants">
					<div className="divider-grid">
						{DIVIDER_VARIANTS.map((variant) => (
							<div className="divider-grid__row" key={variant}>
								<span className="tds-detail-06 divider-grid__label">
									{variant}
								</span>
								<TdsDivider variant={variant} />
							</div>
						))}
					</div>
				</Case>
				<Case label="Vertical — all variants">
					<div className="divider-vertical">
						{DIVIDER_VARIANTS.map((variant) => (
							<div className="divider-vertical__cell" key={variant}>
								<span className="tds-detail-06">Left</span>
								<TdsDivider orientation="vertical" variant={variant} />
								<span className="tds-detail-06">{variant}</span>
							</div>
						))}
					</div>
				</Case>
				<Case label="Horizontal between paragraphs (default)">
					<p className="tds-body-01">Paragraph above the divider.</p>
					<TdsDivider />
					<p className="tds-body-01">Paragraph below the divider.</p>
				</Case>
				<Case label="Vertical inline with text">
					<div className="divider-inline">
						<span className="tds-body-01">Item A</span>
						<TdsDivider orientation="vertical" />
						<span className="tds-body-01">Item B</span>
						<TdsDivider orientation="vertical" variant="defined" />
						<span className="tds-body-01">Item C</span>
					</div>
				</Case>
			</Section>

			<Section title="Footer">
				<Case label="Full footer (top + start + end)">
					<TdsFooter>
						<div slot="top">
							<TdsFooterGroup title-text="Pages">
								<TdsFooterItem>
									<a href="#">Home</a>
								</TdsFooterItem>
								<TdsFooterItem>
									<a href="#">Form</a>
								</TdsFooterItem>
							</TdsFooterGroup>
							<TdsFooterGroup title-text="Legals">
								<TdsFooterItem>
									<a href="#">Terms &amp; Conditions</a>
								</TdsFooterItem>
								<TdsFooterItem>
									<a href="#">Privacy policy</a>
								</TdsFooterItem>
							</TdsFooterGroup>
							<TdsFooterGroup title-text="Design">
								<TdsFooterItem>
									<a href="#">Grid system</a>
								</TdsFooterItem>
								<TdsFooterItem>
									<a href="#">Icons</a>
								</TdsFooterItem>
								<TdsFooterItem>
									<a href="#">User personas</a>
								</TdsFooterItem>
							</TdsFooterGroup>
							<TdsFooterGroup title-text="Support">
								<TdsFooterItem>
									<a href="#">Contact</a>
								</TdsFooterItem>
								<TdsFooterItem>
									<a href="#">FAQ</a>
								</TdsFooterItem>
							</TdsFooterGroup>
						</div>
						<div slot="start">
							<TdsFooterGroup>
								<TdsFooterItem>
									<a href="#">Imprint</a>
								</TdsFooterItem>
								<TdsFooterItem>
									<a href="#">Cookies</a>
								</TdsFooterItem>
								<TdsFooterItem>
									<a href="#">Sitemap</a>
								</TdsFooterItem>
							</TdsFooterGroup>
						</div>
						<div slot="end">
							<TdsFooterGroup>
								<TdsFooterItem>
									<a href="#">
										<TdsIcon name="truck" />
									</a>
								</TdsFooterItem>
								<TdsFooterItem>
									<a href="#">
										<TdsIcon name="truck" />
									</a>
								</TdsFooterItem>
								<TdsFooterItem>
									<a href="#">
										<TdsIcon name="truck" />
									</a>
								</TdsFooterItem>
							</TdsFooterGroup>
						</div>
					</TdsFooter>
				</Case>
				<Case label="Minimal (start + end only, no top)">
					<TdsFooter>
						<div slot="start">
							<TdsFooterGroup>
								<TdsFooterItem>
									<a href="#">Imprint</a>
								</TdsFooterItem>
								<TdsFooterItem>
									<a href="#">Privacy</a>
								</TdsFooterItem>
								<TdsFooterItem>
									<a href="#">Cookies</a>
								</TdsFooterItem>
							</TdsFooterGroup>
						</div>
						<div slot="end">
							<TdsFooterGroup>
								<TdsFooterItem>
									<a href="#">
										<TdsIcon name="truck" />
									</a>
								</TdsFooterItem>
							</TdsFooterGroup>
						</div>
					</TdsFooter>
				</Case>
				<Case label="Start slot only">
					<TdsFooter>
						<div slot="start">
							<TdsFooterGroup>
								<TdsFooterItem>
									<a href="#">
										Copyright &copy; {new Date().getFullYear()} Scania
									</a>
								</TdsFooterItem>
							</TdsFooterGroup>
						</div>
					</TdsFooter>
				</Case>
				<Case label="End slot only (icons)">
					<TdsFooter>
						<div slot="end">
							<TdsFooterGroup>
								<TdsFooterItem>
									<a href="#">
										<TdsIcon name="truck" />
									</a>
								</TdsFooterItem>
								<TdsFooterItem>
									<a href="#">
										<TdsIcon name="truck" />
									</a>
								</TdsFooterItem>
							</TdsFooterGroup>
						</div>
					</TdsFooter>
				</Case>
				<Case label="Top slot only (many groups)">
					<TdsFooter>
						<div slot="top">
							{["Products", "Services", "About", "Support", "Legal"].map(
								(group) => (
									<TdsFooterGroup title-text={group} key={group}>
										<TdsFooterItem>
											<a href="#">Link one</a>
										</TdsFooterItem>
										<TdsFooterItem>
											<a href="#">Link two</a>
										</TdsFooterItem>
										<TdsFooterItem>
											<a href="#">Link three</a>
										</TdsFooterItem>
									</TdsFooterGroup>
								),
							)}
						</div>
					</TdsFooter>
				</Case>
			</Section>
		</article>
	);
};

export default About;
