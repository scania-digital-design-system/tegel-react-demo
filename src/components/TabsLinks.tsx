import { Link, useLocation } from 'react-router-dom';
import TabsPanels from './TabsPanels';
import { useEffect, useRef, useState } from 'react';

const TabsLinks = () => {
  const folderTabsRef = useRef<HTMLTdsFolderTabsElement>(null)
  const inlineTabsRef = useRef<HTMLTdsInlineTabsElement>(null)
  const navigationTabsRef = useRef<HTMLTdsNavigationTabsElement>(null)
  const { pathname } = useLocation();

  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    const index = ['first-tab', 'second-tab', 'third-tab'].findIndex((pathSegment) =>
      pathname.includes(pathSegment),
    );
    setSelectedIndex(index === -1 ? 0 : index)
  }, [pathname])

  return (
    <div>
      <h3>Tabs with links.</h3>
      <p>
        These tabs are linking to different pages (with different URLs), and this means that you can
        link to an individual tab via a URL. Try clicking this{' '}
        <tds-link style={{ display: 'inline-block' }}>
          <a href="/tabs-links/second-tab">link</a>
        </tds-link>{' '}
        and you'll land on a page for the second tab.
      </p>
      <div className="tds-u-pb3 tabs">
        <tds-folder-tabs ref={folderTabsRef} mode-variant="secondary" selected-index={selectedIndex}>
          <tds-folder-tab>
            <Link to={'first-tab'}>First tab</Link>
          </tds-folder-tab>
          <tds-folder-tab>
            <Link to={'second-tab'}>Second tab</Link>
          </tds-folder-tab>
          <tds-folder-tab>
            <Link to={'third-tab'}>Third tab</Link>
          </tds-folder-tab>
        </tds-folder-tabs>
        <TabsPanels selectedTabIndex={selectedIndex} />
      </div>
      <div className="tds-u-pb3 tabs">
        <tds-inline-tabs ref={inlineTabsRef} mode-variant="secondary" selected-index={selectedIndex}>
          <tds-inline-tab>
            <Link to={'first-tab'}>First tab</Link>
          </tds-inline-tab>
          <tds-inline-tab>
            <Link to={'second-tab'}>Second tab</Link>
          </tds-inline-tab>
          <tds-inline-tab>
            <Link to={'third-tab'}>Third tab</Link>
          </tds-inline-tab>
        </tds-inline-tabs>
        <TabsPanels selectedTabIndex={selectedIndex} />
      </div>
      <div className="tds-u-pb3 tabs">
        <tds-navigation-tabs ref={navigationTabsRef} mode-variant="secondary" selected-index={selectedIndex}>
          <tds-navigation-tab>
            <Link to={'first-tab'}>First tab</Link>
          </tds-navigation-tab>
          <tds-navigation-tab>
            <Link to={'second-tab'}>Second tab</Link>
          </tds-navigation-tab>
          <tds-navigation-tab>
            <Link to={'third-tab'}>Third tab</Link>
          </tds-navigation-tab>
        </tds-navigation-tabs>
        <TabsPanels selectedTabIndex={selectedIndex} />
      </div>
    </div>
  );
};

export default TabsLinks;
