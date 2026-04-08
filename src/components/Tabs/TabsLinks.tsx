import { Link, useLocation } from 'react-router-dom';
import TabsPanels from './TabsPanels';
import { useEffect, useRef, useState } from 'react';
import {
  TdsFolderTab,
  TdsFolderTabs,
  TdsInlineTab,
  TdsInlineTabs,
  TdsLink,
  TdsNavigationTab,
  TdsNavigationTabs,
} from '@scania/tegel-react';

const TabsLinks = () => {
  const folderTabsRef = useRef<HTMLTdsFolderTabsElement>(null);
  const inlineTabsRef = useRef<HTMLTdsInlineTabsElement>(null);
  const navigationTabsRef = useRef<HTMLTdsNavigationTabsElement>(null);
  const { pathname } = useLocation();

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const index = ['first-tab', 'second-tab', 'third-tab'].findIndex((pathSegment) =>
      pathname.includes(pathSegment),
    );

    const selectedIndex = index !== -1 ? index : 0;

    folderTabsRef.current?.selectTab(selectedIndex);
    inlineTabsRef.current?.selectTab(selectedIndex);
    navigationTabsRef.current?.selectTab(selectedIndex);
    setSelectedIndex(selectedIndex);
  }, [pathname]);

  return (
    <div>
      <h3>Tabs with links.</h3>
      <p>
        These tabs are linking to different pages (with different URLs), and this means that you can
        link to an individual tab via a URL. Try clicking this{' '}
        <TdsLink style={{ display: 'inline-block' }}>
          <a href="/tabs-links/second-tab">link</a>
        </TdsLink>{' '}
        and you'll land on a page for the second tab.
      </p>
      <div className="tds-u-pb3 tabs">
        <TdsFolderTabs ref={folderTabsRef} modeVariant="secondary" defaultSelectedIndex={0}>
          <TdsFolderTab>
            <Link to={'first-tab'}>First tab</Link>
          </TdsFolderTab>
          <TdsFolderTab>
            <Link to={'second-tab'}>Second tab</Link>
          </TdsFolderTab>
          <TdsFolderTab>
            <Link to={'third-tab'}>Third tab</Link>
          </TdsFolderTab>
        </TdsFolderTabs>
        <TabsPanels selectedTabIndex={selectedIndex} />
      </div>
      <div className="tds-u-pb3 tabs">
        <TdsInlineTabs ref={inlineTabsRef} modeVariant="secondary" defaultSelectedIndex={0}>
          <TdsInlineTab>
            <Link to={'first-tab'}>First tab</Link>
          </TdsInlineTab>
          <TdsInlineTab>
            <Link to={'second-tab'}>Second tab</Link>
          </TdsInlineTab>
          <TdsInlineTab>
            <Link to={'third-tab'}>Third tab</Link>
          </TdsInlineTab>
        </TdsInlineTabs>
        <TabsPanels selectedTabIndex={selectedIndex} />
      </div>
      <div className="tds-u-pb3 tabs">
        <TdsNavigationTabs ref={navigationTabsRef} modeVariant="secondary" defaultSelectedIndex={0}>
          <TdsNavigationTab>
            <Link to={'first-tab'}>First tab</Link>
          </TdsNavigationTab>
          <TdsNavigationTab>
            <Link to={'second-tab'}>Second tab</Link>
          </TdsNavigationTab>
          <TdsNavigationTab>
            <Link to={'third-tab'}>Third tab</Link>
          </TdsNavigationTab>
        </TdsNavigationTabs>
        <TabsPanels selectedTabIndex={selectedIndex} />
      </div>
    </div>
  );
};

export default TabsLinks;
