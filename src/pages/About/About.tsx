/* eslint-disable jsx-a11y/anchor-is-valid */
/** biome-ignore-all lint/a11y/useValidAnchor: Demo links */
import { useEffect, useRef, useState } from "react";
import {
	TdsAccordion,
	TdsAccordionItem,
	TdsBanner,
	TdsBodyCell,
	TdsBreadcrumb,
	TdsBreadcrumbs,
	TdsButton,
	TdsChip,
	TdsDatetime,
	TdsDropdown,
	TdsDropdownOption,
	TdsFolderTab,
	TdsFolderTabs,
	TdsFooter,
	TdsFooterGroup,
	TdsFooterItem,
	TdsHeader,
	TdsHeaderBrandSymbol,
	TdsHeaderHamburger,
	TdsHeaderTitle,
	TdsHeaderCell,
	TdsIcon,
	TdsLink,
	TdsModal,
	TdsSideMenu,
	TdsSideMenuItem,
	TdsTable,
	TdsTableBody,
	TdsTableBodyRow,
	TdsTableHeader,
	TdsTableToolbar,
	TdsTextarea,
	TdsToast,
} from "@scania/tegel-react";
import "./About.css";

type Brand = "scania" | "traton";

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
		return () => {
			body.classList.remove("scania", "traton");
		};
	}, [brand]);

	return [brand, setBrand];
};

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

type TableRow = {
	id: number;
	truck: string;
	driver: string;
	country: string;
	mileage: number;
};

const TABLE_DATA: TableRow[] = [
	{ id: 1, truck: "L-series", driver: "Sonya Bruce", country: "Brazil", mileage: 123987 },
	{ id: 2, truck: "P-series", driver: "Guerra Bowman", country: "Sweden", mileage: 2000852 },
	{ id: 3, truck: "G-series", driver: "Ferrell Wallace", country: "Germany", mileage: 564 },
	{ id: 4, truck: "R-series", driver: "Cox Burris", country: "Spain", mileage: 78342 },
];

const About = () => {
	const [brand, setBrand] = useBrand();
	const toastRef = useRef<HTMLTdsToastElement>(null);
	const [tableRows, setTableRows] = useState<TableRow[]>(TABLE_DATA);

	const handleSort = (event: CustomEvent) => {
		const key = event.detail.columnKey as keyof TableRow;
		const direction = event.detail.sortingDirection;
		const sorted = [...TABLE_DATA].sort((a, b) => {
			let comparison = 0;
			if (a[key] < b[key]) comparison = -1;
			if (a[key] > b[key]) comparison = 1;
			return direction === "desc" ? comparison * -1 : comparison;
		});
		setTableRows(sorted);
	};

	const showToast = async () => {
		await toastRef.current?.showToast();
	};

	const openModal = () => {
		const modal = document.querySelector(
			'[selector="focus-ring-modal-trigger"]',
		) as HTMLTdsModalElement | null;
		modal?.showModal();
	};

	return (
		<article className="about-page">
			<header className="about-header">
				<h2 className="tds-headline-02">Focus rings (1.53.0-focus-ring-beta.1)</h2>
				<p className="tds-body-01">
					Tab through the components below to verify the new focus rings shipped in{" "}
					<code>@scania/tegel-react 1.53.0-focus-ring-beta.1</code>. Each section renders the
					component in its primary configuration.
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

			<section className="component-section">
				<h3 className="tds-headline-03">Accordion</h3>
				<TdsAccordion>
					<TdsAccordionItem header="Item 1" expand-icon-position="end">
						Panel content for item 1.
					</TdsAccordionItem>
					<TdsAccordionItem header="Item 2" expand-icon-position="end">
						Panel content for item 2.
					</TdsAccordionItem>
					<TdsAccordionItem header="Disabled item" expand-icon-position="end" disabled>
						This item is disabled.
					</TdsAccordionItem>
				</TdsAccordion>
			</section>

			<section className="component-section">
				<h3 className="tds-headline-03">Banner</h3>
				<div className="component-section__stack">
					<TdsBanner icon="info" header="Information banner" variant="information">
						<div slot="subheader">A banner with a link action.</div>
						<TdsLink slot="actions">
							<a href="#">Link example</a>
						</TdsLink>
					</TdsBanner>
					<TdsBanner icon="error" header="Error banner" variant="error">
						<div slot="subheader">Closable banner.</div>
					</TdsBanner>
				</div>
			</section>

			<section className="component-section">
				<h3 className="tds-headline-03">Breadcrumb</h3>
				<TdsBreadcrumbs>
					<TdsBreadcrumb>
						<a href="#">Page 1</a>
					</TdsBreadcrumb>
					<TdsBreadcrumb>
						<a href="#">Page 2</a>
					</TdsBreadcrumb>
					<TdsBreadcrumb current>
						<a href="#">Page 3</a>
					</TdsBreadcrumb>
				</TdsBreadcrumbs>
			</section>

			<section className="component-section">
				<h3 className="tds-headline-03">Chip</h3>
				<div className="component-section__row">
					<TdsChip size="lg">
						<TdsIcon slot="prefix" name="lock_inactive" size="16px"></TdsIcon>
						<span slot="label">Lock</span>
					</TdsChip>
					<TdsChip size="lg" type="checkbox" name="chip-demo" value="alarm">
						<span slot="label">Alarm</span>
					</TdsChip>
					<TdsChip size="lg" type="radio" name="chip-radio" value="one">
						<span slot="label">Option one</span>
					</TdsChip>
					<TdsChip size="lg" type="radio" name="chip-radio" value="two">
						<span slot="label">Option two</span>
					</TdsChip>
				</div>
			</section>

			<section className="component-section">
				<h3 className="tds-headline-03">Datetime</h3>
				<div className="component-section__stack">
					<TdsDatetime type="datetime-local"></TdsDatetime>
					<TdsDatetime type="date"></TdsDatetime>
					<TdsDatetime type="time"></TdsDatetime>
				</div>
			</section>

			<section className="component-section">
				<h3 className="tds-headline-03">Dropdown</h3>
				<TdsDropdown
					name="dropdown-focus"
					label="Label text"
					label-position="outside"
					placeholder="Placeholder"
					helper="Helper text"
					size="lg"
					open-direction="auto"
				>
					<TdsDropdownOption value="option-1">Option 1</TdsDropdownOption>
					<TdsDropdownOption value="option-2">Option 2</TdsDropdownOption>
					<TdsDropdownOption value="option-3">Option 3</TdsDropdownOption>
					<TdsDropdownOption value="option-4" disabled>
						Option 4 (disabled)
					</TdsDropdownOption>
				</TdsDropdown>
			</section>

			<section className="component-section">
				<h3 className="tds-headline-03">Footer</h3>
				<div className="component-section__nav-frame">
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
									<a href="#">Terms</a>
								</TdsFooterItem>
								<TdsFooterItem>
									<a href="#">Privacy</a>
								</TdsFooterItem>
							</TdsFooterGroup>
						</div>
						<div slot="start">
							<TdsFooterGroup>
								<TdsFooterItem>
									<a href="#">Link 1</a>
								</TdsFooterItem>
								<TdsFooterItem>
									<a href="#">Link 2</a>
								</TdsFooterItem>
							</TdsFooterGroup>
						</div>
						<div slot="end">
							<TdsFooterGroup>
								<TdsFooterItem>
									<a href="#">
										<TdsIcon name="truck"></TdsIcon>
									</a>
								</TdsFooterItem>
							</TdsFooterGroup>
						</div>
					</TdsFooter>
				</div>
			</section>

			<section className="component-section">
				<h3 className="tds-headline-03">Header</h3>
				<div className="component-section__nav-frame">
					<TdsHeader>
						<TdsHeaderHamburger aria-label="Open menu"></TdsHeaderHamburger>
						<TdsHeaderTitle>Focus ring demo</TdsHeaderTitle>
						<TdsHeaderBrandSymbol slot="end">
							{/** biome-ignore lint/a11y/useAnchorContent: brand symbol */}
							<a aria-label="Brand" href="#"></a>
						</TdsHeaderBrandSymbol>
					</TdsHeader>
				</div>
			</section>

			<section className="component-section">
				<h3 className="tds-headline-03">Modal</h3>
				<TdsButton
					id="focus-ring-modal-trigger"
					size="md"
					text="Open modal"
					onClick={openModal}
				></TdsButton>
				<TdsModal
					selector="focus-ring-modal-trigger"
					id="focus-ring-modal"
					size="md"
					actions-position="static"
				>
					<h5 className="tds-modal-headline" slot="header">
						Modal header
					</h5>
					<span slot="body">Tab to confirm focus rings render on the buttons below.</span>
					<TdsButton slot="actions" data-dismiss-modal size="md" text="Close"></TdsButton>
				</TdsModal>
			</section>

			<section className="component-section">
				<h3 className="tds-headline-03">Side menu</h3>
				<div className="component-section__nav-frame component-section__nav-frame--side">
					<TdsSideMenu persistent open aria-label="Side menu sample">
						<TdsSideMenuItem>
							<a href="#">
								<TdsIcon name="info" size="24"></TdsIcon>
								About
							</a>
						</TdsSideMenuItem>
						<TdsSideMenuItem selected>
							<a href="#">
								<TdsIcon name="home" size="24"></TdsIcon>
								Home
							</a>
						</TdsSideMenuItem>
						<TdsSideMenuItem>
							<a href="#">
								<TdsIcon name="settings" size="24"></TdsIcon>
								Settings
							</a>
						</TdsSideMenuItem>
					</TdsSideMenu>
				</div>
			</section>

			<section className="component-section">
				<h3 className="tds-headline-03">Table</h3>
				<TdsTable tableId="focus-ring-table" noMinWidth responsive>
					<TdsTableToolbar tableTitle="Sortable table"></TdsTableToolbar>
					<TdsTableHeader>
						<TdsHeaderCell
							onTdsSort={handleSort}
							cellKey="truck"
							cellValue="Truck type"
							sortable
						></TdsHeaderCell>
						<TdsHeaderCell
							onTdsSort={handleSort}
							cellKey="driver"
							cellValue="Driver"
							sortable
						></TdsHeaderCell>
						<TdsHeaderCell
							onTdsSort={handleSort}
							cellKey="country"
							cellValue="Country"
							sortable
						></TdsHeaderCell>
						<TdsHeaderCell
							onTdsSort={handleSort}
							cellKey="mileage"
							cellValue="Mileage"
							sortable
							textAlign="right"
						></TdsHeaderCell>
					</TdsTableHeader>
					<TdsTableBody>
						{tableRows.map((row) => (
							<TdsTableBodyRow key={row.id}>
								<TdsBodyCell cellKey="truck">{row.truck}</TdsBodyCell>
								<TdsBodyCell cellKey="driver">{row.driver}</TdsBodyCell>
								<TdsBodyCell cellKey="country">{row.country}</TdsBodyCell>
								<TdsBodyCell cellKey="mileage" textAlign="right">
									{row.mileage}
								</TdsBodyCell>
							</TdsTableBodyRow>
						))}
					</TdsTableBody>
				</TdsTable>
				<p className="tds-detail-06 component-section__hint">
					Below is a row with a focusable link to verify focus inside cells.
				</p>
				<TdsTable tableId="focus-ring-table-link" noMinWidth responsive>
					<TdsTableHeader>
						<TdsHeaderCell cellKey="label" cellValue="Label"></TdsHeaderCell>
						<TdsHeaderCell cellKey="action" cellValue="Action"></TdsHeaderCell>
					</TdsTableHeader>
					<TdsTableBody>
						<TdsTableBodyRow>
							<TdsBodyCell cellKey="label">Row with link</TdsBodyCell>
							<TdsBodyCell cellKey="action">
								<a href="#">Tab to me</a>
							</TdsBodyCell>
						</TdsTableBodyRow>
					</TdsTableBody>
				</TdsTable>
			</section>

			<section className="component-section">
				<h3 className="tds-headline-03">Folder tabs</h3>
				<TdsFolderTabs>
					<TdsFolderTab>
						<button type="button">First tab</button>
					</TdsFolderTab>
					<TdsFolderTab>
						<button type="button">Second tab is much longer</button>
					</TdsFolderTab>
					<TdsFolderTab>
						<button type="button">Third tab</button>
					</TdsFolderTab>
					<TdsFolderTab disabled>
						<button type="button">Fourth tab</button>
					</TdsFolderTab>
				</TdsFolderTabs>
			</section>

			<section className="component-section">
				<h3 className="tds-headline-03">Textarea</h3>
				<div className="component-section__stack">
					<TdsTextarea
						rows={3}
						label="Default textarea"
						labelPosition="outside"
						placeholder="Type something"
						helper="Helper text"
					></TdsTextarea>
					<TdsTextarea
						rows={3}
						state="error"
						label="Error textarea"
						labelPosition="outside"
						placeholder="Type something"
						helper="Something went wrong"
					></TdsTextarea>
				</div>
			</section>

			<section className="component-section">
				<h3 className="tds-headline-03">Toast</h3>
				<TdsButton size="md" text="Show toast" onClick={showToast}></TdsButton>
				<div className="component-section__toast">
					<TdsToast
						ref={toastRef}
						variant="information"
						header="Information toast"
						subheader="Tab to focus the close button."
					>
						<div slot="subheader">Tab to focus the close button.</div>
					</TdsToast>
				</div>
			</section>

			<section className="component-section">
				<h3 className="tds-headline-03">Icons (1.53.0-icons-beta.0)</h3>
				<p className="tds-body-01">
					Every icon name from <code>@scania/tegel 1.53.0-icons-beta.0</code> (
					{ICON_NAMES.length} total).
				</p>
				<div className="icon-grid">
					{ICON_NAMES.map((name) => (
						<div className="icon-grid__cell" key={name}>
							<TdsIcon name={name} size="24px" />
							<span className="tds-detail-06 icon-grid__label">{name}</span>
						</div>
					))}
				</div>
			</section>
		</article>
	);
};

export default About;
