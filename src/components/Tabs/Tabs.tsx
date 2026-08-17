import {
	TdsFolderTab,
	TdsFolderTabs,
	TdsInlineTab,
	TdsInlineTabs,
	TdsNavigationTab,
	TdsNavigationTabs,
} from "@scania/tegel-react";

const Tabs = () => {
	return (
		<>
			<div className="tds-headline-02 tds-u-pb1">Tabs</div>
			<div className="tds-headline-03 tds-u-pb3 tds-u-pt3">Folder</div>

			<TdsFolderTabs>
				<TdsFolderTab>
					<button type="button" role="tab" aria-controls="first-folder-tab">First tab</button>
				</TdsFolderTab>
				<TdsFolderTab>
					<button type="button" role="tab" aria-controls="second-folder-tab">Second tab is much longer</button>
				</TdsFolderTab>
				<TdsFolderTab>
					<button type="button" role="tab" aria-controls="third-folder-tab">Third tab</button>
				</TdsFolderTab>
				<TdsFolderTab disabled>
					<button type="button" role="tab" aria-controls="fourth-folder-tab" disabled>Fourth tab</button>
				</TdsFolderTab>
			</TdsFolderTabs>

			<div className="tds-headline-03 tds-u-pb3 tds-u-pt3">Inline</div>

			<TdsInlineTabs>
				<TdsInlineTab>
					<button type="button" role="tab" aria-controls="first-inline-tab">First tab</button>
				</TdsInlineTab>
				<TdsInlineTab>
					<button type="button" role="tab" aria-controls="second-inline-tab">Second tab is much longer</button>
				</TdsInlineTab>
				<TdsInlineTab>
					<button type="button" role="tab" aria-controls="third-inline-tab">Third tab</button>
				</TdsInlineTab>
				<TdsInlineTab disabled>
					<button type="button" role="tab" aria-controls="fourth-inline-tab" disabled>Fourth tab</button>
				</TdsInlineTab>
			</TdsInlineTabs>
			<div className="tds-headline-03 tds-u-pb3 tds-u-pt3">Navigation</div>

			<TdsNavigationTabs>
				<TdsNavigationTab>
					<a href="/" role="tab" aria-controls="first-navigation-tab">First tab</a>
				</TdsNavigationTab>
				<TdsNavigationTab>
					<a href="/" role="tab" aria-controls="second-navigation-tab">Second tab is much longer</a>
				</TdsNavigationTab>
				<TdsNavigationTab>
					<a href="/" role="tab" aria-controls="third-navigation-tab">Third tab</a>
				</TdsNavigationTab>
				<TdsNavigationTab disabled>
					<a href="/" role="tab" aria-controls="fourth-navigation-tab">Fourth tab</a>
				</TdsNavigationTab>
			</TdsNavigationTabs>
		</>
	);
};

export default Tabs;
