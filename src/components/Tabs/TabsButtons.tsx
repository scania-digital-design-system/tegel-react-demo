import { useRef, useState } from "react";
import TabsPanels from "./TabsPanels";
import {
	TdsFolderTab,
	TdsFolderTabs,
	TdsInlineTab,
	TdsInlineTabs,
	TdsNavigationTab,
	TdsNavigationTabs,
} from "@scania/tegel-react";

const TabsButtons = () => {
	const [folderTabIndex, setFolderTabIndex] = useState(0);
	const [inlineTabIndex, setInlineTabIndex] = useState(0);
	const [navigationTabIndex, setNavigationTabIndex] = useState(0);
	const folderTabsRef = useRef<HTMLTdsFolderTabsElement>(null);
	const inlineTabsRef = useRef<HTMLTdsInlineTabsElement>(null);
	const navigationTabsRef = useRef<HTMLTdsNavigationTabsElement>(null);

	return (
		<div>
			<h3>Tabs with buttons.</h3>
			<p>These tabs are using buttons and can be used to show/hide content.</p>
			<div className="tds-u-mb3 tabs">
				<TdsFolderTabs
					onTdsChange={(event) => {
						setFolderTabIndex(event.detail.selectedTabIndex);
					}}
					modeVariant="secondary"
					ref={folderTabsRef}
				>
					<TdsFolderTab>
						<button type="button" role="tab" aria-controls="first-folder-tab">First tab</button>
					</TdsFolderTab>
					<TdsFolderTab>
						<button type="button" role="tab" aria-controls="second-folder-tab">Second tab is much longer</button>
					</TdsFolderTab>
					<TdsFolderTab>
						<button type="button" role="tab" aria-controls="third-folder-tab" >Third tab</button>
					</TdsFolderTab>
					<TdsFolderTab disabled>
						<button type="button" role="tab" aria-controls="fourth-folder-tab" disabled>Fourth tab</button>
					</TdsFolderTab>
				</TdsFolderTabs>
				<TabsPanels selectedTabIndex={folderTabIndex} />
			</div>
			<div className="tds-u-mb3 tabs">
				<TdsInlineTabs
					onTdsChange={(event) => {
						setInlineTabIndex(event.detail.selectedTabIndex);
					}}
					modeVariant="secondary"
					ref={inlineTabsRef}
				>
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
				<TabsPanels selectedTabIndex={inlineTabIndex} />
			</div>
			<div className="tds-u-mb3 tabs">
				<TdsNavigationTabs
					onTdsChange={(event) => {
						setNavigationTabIndex(event.detail.selectedTabIndex);
					}}
					modeVariant="secondary"
					ref={navigationTabsRef}
				>
					<TdsNavigationTab>
						<button type="button" role="tab" aria-controls="first-navigation-tab">First tab</button>
					</TdsNavigationTab>
					<TdsNavigationTab>
						<button type="button" role="tab" aria-controls="second-navigation-tab">Second tab is much longer</button>
					</TdsNavigationTab>
					<TdsNavigationTab>
						<button type="button" role="tab" aria-controls="third-navigation-tab">Third tab</button>
					</TdsNavigationTab>
					<TdsNavigationTab disabled>
						<button type="button" role="tab" aria-controls="fourth-navigation-tab" disabled>Fourth tab</button>
					</TdsNavigationTab>
				</TdsNavigationTabs>
				<TabsPanels selectedTabIndex={navigationTabIndex} />
			</div>
		</div>
	);
};

export default TabsButtons;
