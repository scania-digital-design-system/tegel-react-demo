/** biome-ignore-all lint/a11y/useSemanticElements: tegel-lite footer uses div[role="list"] per spec */
/** biome-ignore-all lint/a11y/useAnchorContent: icon-only tl-footer links rely on aria-label */
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
import type { ReactNode } from "react";
import "./About.scss";

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
	<section className="about-beta-test__section">
		<h3 className="tds-headline-03 about-beta-test__section-title">{title}</h3>
		{children}
	</section>
);

const Subsection = ({ title, children }: { title: string; children: ReactNode }) => (
	<div className="about-beta-test__subsection">
		<h4 className="tds-headline-05 about-beta-test__subsection-title">{title}</h4>
		{children}
	</div>
);

const State = ({ label, children }: { label: string; children: ReactNode }) => (
	<div className="about-beta-test__state">
		<p className="tds-detail-02 about-beta-test__state-label">{label}</p>
		<div className="about-beta-test__state-body">{children}</div>
	</div>
);

const About = () => {
	return (
		<article className="about-beta-test">
			<header className="about-beta-test__intro">
				<h2 className="tds-headline-02">
					Variable migration test — 1.52.0-var-batch-4-beta.0
				</h2>
				<p className="tds-body-01">
					Testing ground covering <strong>Link, Breadcrumbs, Divider and Footer</strong> for
					both <code>@scania/tegel-react</code> (web components) and{" "}
					<code>@scania/tegel-lite</code> (pure CSS).
				</p>
			</header>

			{/* -------------------------------- Link -------------------------------- */}
			<Section title="Link">
				<Subsection title="Tegel React (tds-link)">
					<State label="Default link">
						<TdsLink>
							<a href="#link-default">Default link</a>
						</TdsLink>
					</State>

					<State label="Link without underline">
						<TdsLink underline={false}>
							<a href="#link-no-underline">No underline</a>
						</TdsLink>
					</State>

					<State label="Standalone link">
						<TdsLink standalone>
							<a href="#link-standalone">Standalone link</a>
						</TdsLink>
					</State>

					<State label="Standalone link without underline">
						<TdsLink standalone underline={false}>
							<a href="#link-standalone-no-underline">Standalone, no underline</a>
						</TdsLink>
					</State>

					<State label="Disabled link">
						<TdsLink disabled>
							<a href="#link-disabled">Disabled link</a>
						</TdsLink>
					</State>

					<State label="Disabled link without underline">
						<TdsLink disabled underline={false}>
							<a href="#link-disabled-no-underline">Disabled, no underline</a>
						</TdsLink>
					</State>

					<State label="External link (new tab)">
						<TdsLink>
							<a target="_blank" rel="noreferrer" href="https://tegel.scania.com/home">
								Open Tegel in new tab
							</a>
						</TdsLink>
					</State>

					<State label="Link inline inside a paragraph">
						<p className="tds-body-01" style={{ margin: 0 }}>
							Inline link inside text — visit{" "}
							<TdsLink>
								<a href="#link-inline">the Tegel docs</a>
							</TdsLink>{" "}
							for more info.
						</p>
					</State>
				</Subsection>

				<Subsection title="Tegel Lite (tl-link)">
					<State label="Default link">
						<a href="#tl-link-default" className="tl-link">
							Default link
						</a>
					</State>

					<State label="Link with underline">
						<a href="#tl-link-underline" className="tl-link tl-link--underline">
							Underlined link
						</a>
					</State>

					<State label="Standalone link">
						<a href="#tl-link-standalone" className="tl-link tl-link--standalone">
							Standalone link
						</a>
					</State>

					<State label="Standalone link with underline">
						<a
							href="#tl-link-standalone-underline"
							className="tl-link tl-link--standalone tl-link--underline"
						>
							Standalone, underlined
						</a>
					</State>

					<State label="Disabled link">
						<a href="#tl-link-disabled" className="tl-link tl-link--disabled">
							Disabled link
						</a>
					</State>

					<State label="Disabled link with underline">
						<a
							href="#tl-link-disabled-underline"
							className="tl-link tl-link--disabled tl-link--underline"
						>
							Disabled, underlined
						</a>
					</State>

					<State label="Standalone link with trailing icon">
						<a
							href="https://tegel.scania.com"
							target="_blank"
							rel="noreferrer"
							className="tl-link tl-link--standalone"
						>
							Tegel
							<span className="tl-link__icon">
								<span
									className="tl-icon tl-icon--arrow_right tl-icon--16"
									aria-hidden="true"
								/>
							</span>
						</a>
					</State>

					<State label="Link inline inside a paragraph">
						<p className="tl-link-text" style={{ margin: 0 }}>
							The{" "}
							<a href="#tl-link-inline" className="tl-link tl-link--underline">
								Tegel
							</a>{" "}
							Design System is for digital products and services at Scania.
						</p>
					</State>
				</Subsection>
			</Section>

			{/* ----------------------------- Breadcrumbs ----------------------------- */}
			<Section title="Breadcrumbs">
				<Subsection title="Tegel React (tds-breadcrumbs)">
					<State label="Standard breadcrumbs (3 levels, last is current)">
						<TdsBreadcrumbs>
							<TdsBreadcrumb>
								<a href="#bc-l1">Level 1</a>
							</TdsBreadcrumb>
							<TdsBreadcrumb>
								<a href="#bc-l2">Level 2</a>
							</TdsBreadcrumb>
							<TdsBreadcrumb current>
								<a href="#bc-l3">Level 3 (current)</a>
							</TdsBreadcrumb>
						</TdsBreadcrumbs>
					</State>

					<State label="Single breadcrumb marked as current">
						<TdsBreadcrumbs>
							<TdsBreadcrumb current>
								<a href="#bc-only">Only page (current)</a>
							</TdsBreadcrumb>
						</TdsBreadcrumbs>
					</State>

					<State label="Deep breadcrumb trail (5 levels)">
						<TdsBreadcrumbs>
							<TdsBreadcrumb>
								<a href="#bc-home">Home</a>
							</TdsBreadcrumb>
							<TdsBreadcrumb>
								<a href="#bc-trucks">Trucks</a>
							</TdsBreadcrumb>
							<TdsBreadcrumb>
								<a href="#bc-heavy">Heavy duty</a>
							</TdsBreadcrumb>
							<TdsBreadcrumb>
								<a href="#bc-770">Series 770</a>
							</TdsBreadcrumb>
							<TdsBreadcrumb current>
								<a href="#bc-config">Configurator</a>
							</TdsBreadcrumb>
						</TdsBreadcrumbs>
					</State>

					<State label="Long labels — should wrap/truncate gracefully">
						<TdsBreadcrumbs>
							<TdsBreadcrumb>
								<a href="#bc-long-1">A very long first breadcrumb label</a>
							</TdsBreadcrumb>
							<TdsBreadcrumb>
								<a href="#bc-long-2">Another long breadcrumb in the middle</a>
							</TdsBreadcrumb>
							<TdsBreadcrumb current>
								<a href="#bc-long-3">Final long current breadcrumb label</a>
							</TdsBreadcrumb>
						</TdsBreadcrumbs>
					</State>
				</Subsection>

				<Subsection title="Tegel Lite (tl-breadcrumbs)">
					<State label="Standard breadcrumbs (3 levels, last is current)">
						<nav className="tl-breadcrumbs">
							<ol>
								<li>
									<a href="#tl-bc-l1">Level 1</a>
								</li>
								<li>
									<a href="#tl-bc-l2">Level 2</a>
								</li>
								<li>
									<a href="#tl-bc-l3" aria-current="page">
										Level 3 (current)
									</a>
								</li>
							</ol>
						</nav>
					</State>

					<State label="Single breadcrumb marked as current">
						<nav className="tl-breadcrumbs">
							<ol>
								<li>
									<a href="#tl-bc-only" aria-current="page">
										Only page (current)
									</a>
								</li>
							</ol>
						</nav>
					</State>

					<State label="Deep breadcrumb trail (5 levels)">
						<nav className="tl-breadcrumbs">
							<ol>
								<li>
									<a href="#tl-bc-home">Home</a>
								</li>
								<li>
									<a href="#tl-bc-trucks">Trucks</a>
								</li>
								<li>
									<a href="#tl-bc-heavy">Heavy duty</a>
								</li>
								<li>
									<a href="#tl-bc-770">Series 770</a>
								</li>
								<li>
									<a href="#tl-bc-config" aria-current="page">
										Configurator
									</a>
								</li>
							</ol>
						</nav>
					</State>

					<State label="Long labels — should wrap/truncate gracefully">
						<nav className="tl-breadcrumbs">
							<ol>
								<li>
									<a href="#tl-bc-long-1">A very long first breadcrumb label</a>
								</li>
								<li>
									<a href="#tl-bc-long-2">Another long breadcrumb in the middle</a>
								</li>
								<li>
									<a href="#tl-bc-long-3" aria-current="page">
										Final long current breadcrumb label
									</a>
								</li>
							</ol>
						</nav>
					</State>
				</Subsection>
			</Section>

			{/* -------------------------------- Divider ------------------------------- */}
			<Section title="Divider">
				<Subsection title="Tegel React (tds-divider)">
					<State label="Horizontal — subtle (default)">
						<div style={{ width: "100%" }}>
							<p className="tds-body-01" style={{ margin: 0 }}>
								Content above
							</p>
							<TdsDivider />
							<p className="tds-body-01" style={{ margin: 0 }}>
								Content below
							</p>
						</div>
					</State>

					<State label="Horizontal — discrete">
						<div style={{ width: "100%" }}>
							<TdsDivider variant="discrete" />
						</div>
					</State>

					<State label="Horizontal — soft">
						<div style={{ width: "100%" }}>
							<TdsDivider variant="soft" />
						</div>
					</State>

					<State label="Horizontal — defined">
						<div style={{ width: "100%" }}>
							<TdsDivider variant="defined" />
						</div>
					</State>

					<State label="Horizontal — dark-blue">
						<div style={{ width: "100%" }}>
							<TdsDivider variant="dark-blue" />
						</div>
					</State>

					<State label="Vertical — subtle (default)">
						<div className="about-beta-test__vertical-divider-row">
							<span className="tds-body-01">Left</span>
							<TdsDivider orientation="vertical" />
							<span className="tds-body-01">Right</span>
						</div>
					</State>

					<State label="Vertical — discrete">
						<div className="about-beta-test__vertical-divider-row">
							<span className="tds-body-01">Left</span>
							<TdsDivider orientation="vertical" variant="discrete" />
							<span className="tds-body-01">Right</span>
						</div>
					</State>

					<State label="Vertical — soft">
						<div className="about-beta-test__vertical-divider-row">
							<span className="tds-body-01">Left</span>
							<TdsDivider orientation="vertical" variant="soft" />
							<span className="tds-body-01">Right</span>
						</div>
					</State>

					<State label="Vertical — defined">
						<div className="about-beta-test__vertical-divider-row">
							<span className="tds-body-01">Left</span>
							<TdsDivider orientation="vertical" variant="defined" />
							<span className="tds-body-01">Right</span>
						</div>
					</State>

					<State label="Vertical — dark-blue">
						<div className="about-beta-test__vertical-divider-row">
							<span className="tds-body-01">Left</span>
							<TdsDivider orientation="vertical" variant="dark-blue" />
							<span className="tds-body-01">Right</span>
						</div>
					</State>
				</Subsection>

				<Subsection title="Tegel Lite (tl-divider)">
					<State label="Horizontal — discrete (default)">
						<div style={{ width: "100%" }}>
							<p className="tds-body-01" style={{ margin: 0 }}>
								Content above
							</p>
							<div className="tl-divider tl-divider--horizontal tl-divider--discrete" />
							<p className="tds-body-01" style={{ margin: 0 }}>
								Content below
							</p>
						</div>
					</State>

					<State label="Horizontal — expressive">
						<div style={{ width: "100%" }}>
							<div className="tl-divider tl-divider--horizontal tl-divider--expressive" />
						</div>
					</State>

					<State label="Vertical — discrete">
						<div className="about-beta-test__vertical-divider-row">
							<span className="tds-body-01">Left</span>
							<div className="tl-divider tl-divider--vertical tl-divider--discrete" />
							<span className="tds-body-01">Right</span>
						</div>
					</State>

					<State label="Vertical — expressive">
						<div className="about-beta-test__vertical-divider-row">
							<span className="tds-body-01">Left</span>
							<div className="tl-divider tl-divider--vertical tl-divider--expressive" />
							<span className="tds-body-01">Right</span>
						</div>
					</State>
				</Subsection>
			</Section>

			{/* -------------------------------- Footer -------------------------------- */}
			<Section title="Footer">
				<Subsection title="Tegel React (tds-footer)">
					<State label="Full footer with top, start and end slots">
						<div className="about-beta-test__footer-preview">
							<TdsFooter>
								<div slot="top">
									<TdsFooterGroup title-text="Pages">
										<TdsFooterItem>
											<a href="#footer-home">Home</a>
										</TdsFooterItem>
										<TdsFooterItem>
											<a href="#footer-form">Form</a>
										</TdsFooterItem>
									</TdsFooterGroup>
									<TdsFooterGroup title-text="Legals">
										<TdsFooterItem>
											<a href="#footer-terms">Terms & Conditions</a>
										</TdsFooterItem>
										<TdsFooterItem>
											<a href="#footer-privacy">Privacy policy</a>
										</TdsFooterItem>
									</TdsFooterGroup>
								</div>
								<div slot="start">
									<TdsFooterGroup>
										<TdsFooterItem>
											<a href="#footer-start-1">Start slot link 1</a>
										</TdsFooterItem>
										<TdsFooterItem>
											<a href="#footer-start-2">Start slot link 2</a>
										</TdsFooterItem>
									</TdsFooterGroup>
								</div>
								<div slot="end">
									<TdsFooterGroup>
										<TdsFooterItem>
											<a href="#footer-truck" aria-label="Truck icon link">
												<TdsIcon name="truck" />
											</a>
										</TdsFooterItem>
										<TdsFooterItem>
											<a href="#footer-info" aria-label="Info icon link">
												<TdsIcon name="info" />
											</a>
										</TdsFooterItem>
									</TdsFooterGroup>
								</div>
							</TdsFooter>
						</div>
					</State>

					<State label="Minimal footer (start slot only)">
						<div className="about-beta-test__footer-preview">
							<TdsFooter>
								<div slot="start">
									<TdsFooterGroup>
										<TdsFooterItem>
											<a href="#footer-copyright">Copyright © Scania</a>
										</TdsFooterItem>
									</TdsFooterGroup>
								</div>
							</TdsFooter>
						</div>
					</State>

					<State label="Footer with only icon links in end slot">
						<div className="about-beta-test__footer-preview">
							<TdsFooter>
								<div slot="end">
									<TdsFooterGroup>
										<TdsFooterItem>
											<a href="#footer-truck-2" aria-label="Truck icon link">
												<TdsIcon name="truck" />
											</a>
										</TdsFooterItem>
										<TdsFooterItem>
											<a href="#footer-info-2" aria-label="Info icon link">
												<TdsIcon name="info" />
											</a>
										</TdsFooterItem>
										<TdsFooterItem>
											<a href="#footer-error" aria-label="Error icon link">
												<TdsIcon name="error" />
											</a>
										</TdsFooterItem>
									</TdsFooterGroup>
								</div>
							</TdsFooter>
						</div>
					</State>
				</Subsection>

				<Subsection title="Tegel Lite (tl-footer) — primary">
					<State label="Full footer with top groups, start/end links and copyright">
						<div className="about-beta-test__footer-preview">
							<footer className="tl-footer tl-footer--primary">
								<div className="tl-footer__top">
									<div className="tl-footer__group" role="list">
										<button className="tl-footer__top-title" type="button">
											Pages
										</button>
										<a href="#tl-footer-home" className="tl-footer__link">
											Home
										</a>
										<a href="#tl-footer-form" className="tl-footer__link">
											Form
										</a>
									</div>
									<div className="tl-footer__group" role="list">
										<button className="tl-footer__top-title" type="button">
											Legals
										</button>
										<a href="#tl-footer-terms" className="tl-footer__link">
											Terms & Conditions
										</a>
										<a href="#tl-footer-privacy" className="tl-footer__link">
											Privacy policy
										</a>
									</div>
								</div>
								<div className="tl-footer__main">
									<div className="tl-footer__main-top">
										<div className="tl-footer__main-top--start">
											<div className="tl-footer__group" role="list">
												<a href="#tl-footer-start-1" className="tl-footer__link">
													Start slot link 1
												</a>
												<a href="#tl-footer-start-2" className="tl-footer__link">
													Start slot link 2
												</a>
											</div>
										</div>
										<div className="tl-footer__main-top--end">
											<div className="tl-footer__group" role="list">
												<a
													href="#tl-footer-truck"
													className="tl-footer__link"
													aria-label="Truck icon link"
												>
													<span
														className="tl-icon tl-icon--truck tl-icon--16"
														aria-hidden="true"
													/>
												</a>
												<a
													href="#tl-footer-info"
													className="tl-footer__link"
													aria-label="Info icon link"
												>
													<span
														className="tl-icon tl-icon--info tl-icon--16"
														aria-hidden="true"
													/>
												</a>
											</div>
										</div>
									</div>
									<div className="tl-footer__main-bottom">
										<small className="tl-footer__copyright">
											© Copyright 2026 All rights reserved.
										</small>
										<p className="tl-footer__brand">Scania</p>
									</div>
								</div>
							</footer>
						</div>
					</State>
				</Subsection>

				<Subsection title="Tegel Lite (tl-footer) — secondary">
					<State label="Secondary mode variant">
						<div className="about-beta-test__footer-preview">
							<footer className="tl-footer tl-footer--secondary">
								<div className="tl-footer__top">
									<div className="tl-footer__group" role="list">
										<button className="tl-footer__top-title" type="button">
											Pages
										</button>
										<a href="#tl-footer-sec-home" className="tl-footer__link">
											Home
										</a>
										<a href="#tl-footer-sec-about" className="tl-footer__link">
											About
										</a>
									</div>
								</div>
								<div className="tl-footer__main">
									<div className="tl-footer__main-bottom">
										<small className="tl-footer__copyright">
											© Copyright 2026 All rights reserved.
										</small>
										<p className="tl-footer__brand">Scania</p>
									</div>
								</div>
							</footer>
						</div>
					</State>
				</Subsection>

				<Subsection title="Tegel Lite (tl-footer) — expanded mobile group">
					<State label="Footer group in expanded state (mobile accordion)">
						<div className="about-beta-test__footer-preview">
							<footer className="tl-footer tl-footer--primary">
								<div className="tl-footer__top">
									<div
										className="tl-footer__group tl-footer__group--expanded"
										role="list"
									>
										<button className="tl-footer__top-title" type="button">
											Pages (expanded)
										</button>
										<a href="#tl-footer-exp-home" className="tl-footer__link">
											Home
										</a>
										<a href="#tl-footer-exp-form" className="tl-footer__link">
											Form
										</a>
										<a href="#tl-footer-exp-about" className="tl-footer__link">
											About
										</a>
									</div>
								</div>
							</footer>
						</div>
					</State>
				</Subsection>
			</Section>
		</article>
	);
};

export default About;
