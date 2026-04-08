import { useRef, useState } from 'react';
import TabsPanels from './TabsPanels';
import {
  TdsFolderTab,
  TdsFolderTabs,
  TdsNavigationTab,
  TdsNavigationTabs,
} from '@scania/tegel-react';

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
            <button>First tab</button>
          </TdsFolderTab>
          <TdsFolderTab>
            <button>Second tab is much longer</button>
          </TdsFolderTab>
          <TdsFolderTab>
            <button>Third tab</button>
          </TdsFolderTab>
          <TdsFolderTab disabled>
            <button>Fourth tab</button>
          </TdsFolderTab>
        </TdsFolderTabs>
        <TabsPanels selectedTabIndex={folderTabIndex} />
      </div>
      <div className="tds-u-mb3 tabs">
        <TdsNavigationTabs
          onTdsChange={(event) => {
            setInlineTabIndex(event.detail.selectedTabIndex);
          }}
          modeVariant="secondary"
          ref={inlineTabsRef}
        >
          <TdsNavigationTab>
            <button>First tab</button>
          </TdsNavigationTab>
          <TdsNavigationTab>
            <button>Second tab is much longer</button>
          </TdsNavigationTab>
          <TdsNavigationTab>
            <button>Third tab</button>
          </TdsNavigationTab>
          <TdsNavigationTab disabled>
            <button>Fourth tab</button>
          </TdsNavigationTab>
        </TdsNavigationTabs>
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
            <button>First tab</button>
          </TdsNavigationTab>
          <TdsNavigationTab>
            <button>Second tab is much longer</button>
          </TdsNavigationTab>
          <TdsNavigationTab>
            <button>Third tab</button>
          </TdsNavigationTab>
          <TdsNavigationTab disabled>
            <button>Fourth tab</button>
          </TdsNavigationTab>
        </TdsNavigationTabs>
        <TabsPanels selectedTabIndex={navigationTabIndex} />
      </div>
    </div>
  );
};

export default TabsButtons;
