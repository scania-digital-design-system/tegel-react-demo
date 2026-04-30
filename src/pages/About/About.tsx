/* eslint-disable jsx-a11y/anchor-is-valid */
/** biome-ignore-all lint/a11y/useValidAnchor: Dummy links for visual testing */
import { useEffect, useState } from "react";
import {
	TdsBreadcrumb,
	TdsBreadcrumbs,
	TdsButton,
	TdsDivider,
	TdsFooter,
	TdsFooterGroup,
	TdsFooterItem,
	TdsIcon,
	TdsLink,
	TdsTag,
	TdsTooltip,
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

const BUTTON_VARIANTS = ["primary", "secondary", "ghost", "danger"] as const;
const BUTTON_SIZES = ["xs", "sm", "md", "lg"] as const;
const TAG_VARIANTS = [
	"neutral",
	"information",
	"success",
	"warning",
	"error",
	"new",
] as const;
const TOOLTIP_PLACEMENTS = ["top", "bottom", "left", "right"] as const;

const ICON_NAMES = [
	"24v_battery_inactive",
	"24v_battery",
	"acceleration_inactive",
	"acceleration",
	"adblue_inactive",
	"adblue",
	"arrow_diagonal",
	"arrow_down",
	"arrow_left",
	"arrow_right",
	"arrow_up",
	"audio_inactive",
	"audio",
	"award",
	"back",
	"backward_inactive",
	"backward",
	"bento",
	"bug_inactive",
	"bug",
	"burger",
	"bus_inactive",
	"bus",
	"cab_door",
	"calendar_inactive",
	"calendar",
	"camera_inactive",
	"camera",
	"card",
	"cart",
	"charging_complete",
	"charging_failed",
	"charging_speed_inactive",
	"charging_speed",
	"charging_stopped",
	"chevron_down",
	"chevron_left",
	"chevron_right",
	"chevron_up",
	"clock_inactive",
	"clock",
	"configurator",
	"contact_inactive",
	"contact",
	"cookie_inactive",
	"cookie",
	"coolant_level_inactive",
	"coolant_level",
	"copy",
	"cross",
	"cup_inactive",
	"cup",
	"dashboard",
	"department_inactive",
	"department",
	"departure_scheduling_inactive",
	"departure_scheduling",
	"diamond_inactive",
	"diamond",
	"document_check",
	"document_doc",
	"document_eye",
	"document_pdf",
	"document_plus_inactive",
	"document_plus",
	"document_ppt",
	"document_tool",
	"document_wrong",
	"document_xls",
	"document",
	"dollar",
	"doner",
	"double_kebab",
	"download",
	"driving_licence_inactive",
	"driving_licence",
	"drop_inactive",
	"drop",
	"edit_inactive",
	"edit",
	"email",
	"engine_inactive",
	"engine",
	"environment_inactive",
	"environment",
	"error",
	"exit",
	"expand_inactive",
	"expand",
	"export_inactive",
	"export",
	"eye_inactive",
	"eye",
	"face_dissatisfied",
	"face_neutral",
	"face_satisfied",
	"factory_inactive",
	"factory",
	"ferry_inactive",
	"ferry",
	"filters_inactive",
	"filters",
	"flash_inactive",
	"flash",
	"folder",
	"forward_inactive",
	"forward",
	"fuel_gauge_inactive",
	"fuel_gauge",
	"fuel_inactive",
	"fuel",
	"gift_inactive",
	"gift",
	"global",
	"guided_tour_inactive",
	"guided_tour",
	"hatch_open_1",
	"hatch_open_2",
	"hatch_open_inactive",
	"hatch_open",
	"heart_inactive",
	"heart",
	"heating_inactive_screen",
	"history_inactive",
	"history",
	"home_inactive",
	"home",
	"idea_inactive",
	"idea",
	"image_add",
	"image_inactive",
	"image_set",
	"image",
	"info",
	"insights",
	"kebab",
	"key_inactive",
	"key",
	"language",
	"layer_inactive",
	"layer",
	"link_broken",
	"link",
	"list_inactive",
	"list",
	"lock_inactive",
	"lock",
	"map_cursor_inactive",
	"map_cursor",
	"maximize_fullscreen",
	"meatballs",
	"merge_inactive",
	"merge",
	"message_inactive",
	"message",
	"microphone_inactive",
	"microphone",
	"mileage_inactive",
	"mileage",
	"minimize_fullscreen",
	"minus",
	"navigate_inactive",
	"navigate",
	"notification_inactive",
	"notification_snooze",
	"notification",
	"oil_level_inactive",
	"oil_level",
	"paperclip",
	"pause_inactive",
	"pause",
	"phone_inactive",
	"phone",
	"pie_chart",
	"pin_inactive",
	"pin",
	"placeholder",
	"play_inactive",
	"play",
	"plus",
	"powerplug_inactive",
	"powerplug",
	"print_inactive",
	"print",
	"privacy_inactive",
	"privacy",
	"profile_inactive",
	"profile",
	"prohibited",
	"proportions_inactive",
	"proportions",
	"range_inactive",
	"range",
	"redirect",
	"refresh_inactive",
	"refresh",
	"reload_inactive",
	"reload",
	"repeat",
	"report_inactive",
	"report",
	"route_inactive",
	"route",
	"save_inactive",
	"save",
	"search",
	"send_inactive",
	"send",
	"settings",
	"share",
	"shuffle",
	"skip_backwards",
	"skip_forward",
	"smartphone_inactive",
	"smartphone",
	"sorting",
	"speedometer_inactive",
	"speedometer",
	"star",
	"support",
	"target_inactive",
	"target",
	"temperature_inactive",
	"temperature",
	"text_inactive",
	"text",
	"thumbs_down",
	"thumbs_up",
	"tick",
	"timer",
	"tool_inactive",
	"tool",
	"trailer_inactive",
	"trailer",
	"trash_inactive",
	"trash",
	"truck_inactive",
	"truck",
	"undo_inactive",
	"undo",
	"unlock",
	"upload",
	"video_inactive",
	"video",
	"wallet",
	"warning",
	"weight_inactive",
	"weight",
	"wifi_inactive",
	"wifi",
	"windscreen_heating_inactive",
	"windscreen_heating",
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
					Variable migration beta — 1.52.0-var-develop-beta.1
				</h2>
				<p className="tds-body-01">
					Visual test ground for the components affected by the CSS variable
					migration: <strong>Link</strong>, <strong>Breadcrumbs</strong>,{" "}
					<strong>Divider</strong>, <strong>Footer</strong>,{" "}
					<strong>Button</strong>, <strong>Tooltip</strong> and{" "}
					<strong>Tag</strong>. Switch brand to verify that tokens resolve
					correctly for both Scania and Traton.
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

			<Section title="Button">
				<Case label="Variants — primary mode (lg)">
					<div className="button-row">
						<TdsButton text="Primary" variant="primary" />
						<TdsButton text="Secondary" variant="secondary" />
						<TdsButton text="Ghost" variant="ghost" />
						<TdsButton text="Danger" variant="danger" />
					</div>
				</Case>
				<Case label="Sizes — primary variant">
					<div className="button-row">
						{BUTTON_SIZES.map((size) => (
							<TdsButton key={size} text={size} variant="primary" size={size} />
						))}
					</div>
				</Case>
				<Case label="Disabled — every variant">
					<div className="button-row">
						{BUTTON_VARIANTS.map((variant) => (
							<TdsButton
								key={variant}
								text={variant}
								variant={variant}
								disabled
							/>
						))}
					</div>
				</Case>
				<Case label="With leading icon">
					<div className="button-row">
						<TdsButton text="Save" variant="primary">
							<TdsIcon slot="icon" name="save" size="16px" />
						</TdsButton>
						<TdsButton text="Delete" variant="danger">
							<TdsIcon slot="icon" name="trash" size="16px" />
						</TdsButton>
						<TdsButton text="Open" variant="secondary">
							<TdsIcon slot="icon" name="export" size="16px" />
						</TdsButton>
					</div>
				</Case>
				<Case label="Mode variant — secondary surface">
					<div className="button-row button-row--on-secondary">
						<TdsButton text="Primary" variant="primary" modeVariant="secondary" />
						<TdsButton
							text="Secondary"
							variant="secondary"
							modeVariant="secondary"
						/>
						<TdsButton text="Ghost" variant="ghost" modeVariant="secondary" />
						<TdsButton text="Danger" variant="danger" modeVariant="secondary" />
					</div>
				</Case>
				<Case label="Full bleed (fills container)">
					<div style={{ maxWidth: 320 }}>
						<TdsButton text="Full bleed" variant="primary" fullbleed />
					</div>
				</Case>
			</Section>

			<Section title="Tooltip">
				<Case label="Hover trigger — every placement">
					<div className="tooltip-grid">
						{TOOLTIP_PLACEMENTS.map((placement) => {
							const id = `tooltip-${placement}`;
							return (
								<div className="tooltip-grid__cell" key={placement}>
									<TdsButton
										text={placement}
										variant="secondary"
										size="sm"
										id={id}
									/>
									<TdsTooltip
										placement={placement}
										selector={`#${id}`}
										text={`Tooltip on ${placement}`}
									/>
								</div>
							);
						})}
					</div>
				</Case>
				<Case label="Click trigger">
					<TdsButton text="Click me" variant="primary" id="tooltip-click" />
					<TdsTooltip
						selector="#tooltip-click"
						trigger="click"
						text="Click-triggered tooltip — click again to dismiss"
					/>
				</Case>
				<Case label="Long content (wrapping)">
					<TdsButton text="Long tooltip" variant="ghost" id="tooltip-long" />
					<TdsTooltip
						selector="#tooltip-long"
						placement="bottom"
						text="This tooltip has a much longer label so we can verify how the bubble wraps and how the arrow stays anchored to the trigger across breakpoints."
					/>
				</Case>
				<Case label="Default-shown (visible from start)">
					<TdsButton text="Always on" variant="secondary" id="tooltip-default" />
					<TdsTooltip
						selector="#tooltip-default"
						placement="right"
						defaultShow
						text="Visible by default"
					/>
				</Case>
			</Section>

			<Section title="Tag">
				<Case label="Variants — large (default)">
					<div className="tag-row">
						{TAG_VARIANTS.map((variant) => (
							<TdsTag key={variant} text={variant} variant={variant} />
						))}
					</div>
				</Case>
				<Case label="Variants — small">
					<div className="tag-row">
						{TAG_VARIANTS.map((variant) => (
							<TdsTag
								key={variant}
								text={variant}
								variant={variant}
								size="sm"
							/>
						))}
					</div>
				</Case>
				<Case label="Long label">
					<div style={{ maxWidth: 240 }}>
						<TdsTag
							text="A very long tag label that should still render correctly"
							variant="information"
						/>
					</div>
				</Case>
				<Case label="Inline with body text">
					<p className="tds-body-01">
						This release ships <TdsTag text="new" variant="new" size="sm" /> a
						bunch of features and one{" "}
						<TdsTag text="warning" variant="warning" size="sm" /> behaviour
						change.
					</p>
				</Case>
			</Section>

			<Section title="Icons (all)">
				<Case label={`All icons (${ICON_NAMES.length})`}>
					<div className="icon-grid">
						{ICON_NAMES.map((name) => (
							<div className="icon-grid__cell" key={name}>
								<TdsIcon name={name} size="24px" />
								<span className="tds-detail-06 icon-grid__label">{name}</span>
							</div>
						))}
					</div>
				</Case>
			</Section>
		</article>
	);
};

export default About;
