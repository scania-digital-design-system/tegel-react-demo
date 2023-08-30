import { useEffect, useRef, useState } from "react";
import TabsPanels from "./TabsPanels";

const TabsButtons = () => {
  const [folderTabIndex, setFolderTabIndex] = useState(0);
  const [inlineTabIndex, setInlineTabIndex] = useState(0);
  const [navigationTabIndex, setNavigationTabIndex] = useState(0);
  const folderTabsRef = useRef<HTMLTdsFolderTabsElement>(null)
  const inlineTabsRef = useRef<HTMLTdsInlineTabsElement>(null)
  const navigationTabsRef = useRef<HTMLTdsNavigationTabsElement>(null)


  useEffect(() => {
    const folderTabsElement = folderTabsRef.current
    const inlineTabsElement = inlineTabsRef.current
    const navigationTabsElement = navigationTabsRef.current


    folderTabsElement?.addEventListener("tdsChange", (event: TdsChangeEvent) => {
      setFolderTabIndex(event.detail.selectedTabIndex);
    })
    inlineTabsElement?.addEventListener("tdsChange", (event: TdsChangeEvent) => {
      setInlineTabIndex(event.detail.selectedTabIndex);
    })
    navigationTabsElement?.addEventListener("tdsChange", (event: TdsChangeEvent) => {
      setNavigationTabIndex(event.detail.selectedTabIndex);
    })


    return () => {
      folderTabsElement?.removeEventListener("tdsChange", (event: TdsChangeEvent) => {
        setFolderTabIndex(event.detail.selectedTabIndex);
      })
      inlineTabsElement?.removeEventListener("tdsChange", (event: TdsChangeEvent) => {
        setFolderTabIndex(event.detail.selectedTabIndex);
      })
      navigationTabsElement?.removeEventListener("tdsChange", (event: TdsChangeEvent) => {
        setFolderTabIndex(event.detail.selectedTabIndex);
      })
    }

  })

  return (
    <div>
      <h3>Tabs with buttons.</h3>
      <p>
        These tabs are using buttons and can be used to show/hide content.
      </p>
      <div className="tds-u-mb3 tabs">
        <tds-folder-tabs
          mode-variant="secondary"
          ref={folderTabsRef}>
          <tds-folder-tab>
            <button>First tab</button>
          </tds-folder-tab>
          <tds-folder-tab>
            <button>Second tab is much longer</button>
          </tds-folder-tab>
          <tds-folder-tab>
            <button>Third tab</button>
          </tds-folder-tab>
          <tds-folder-tab disabled>
            <button>Fourth tab</button>
          </tds-folder-tab>
        </tds-folder-tabs>
        <TabsPanels selectedTabIndex={folderTabIndex} />
      </div>
      <div className="tds-u-mb3 tabs">
        <tds-inline-tabs
          mode-variant="secondary"
          ref={inlineTabsRef}
        >
          <tds-inline-tab>
            <button>First tab</button>
          </tds-inline-tab>
          <tds-inline-tab>
            <button>Second tab is much longer</button>
          </tds-inline-tab>
          <tds-inline-tab>
            <button>Third tab</button>
          </tds-inline-tab>
          <tds-inline-tab disabled>
            <button>Fourth tab</button>
          </tds-inline-tab>
        </tds-inline-tabs>
        <TabsPanels selectedTabIndex={inlineTabIndex} />
      </div>
      <div className="tds-u-mb3 tabs">
        <tds-navigation-tabs
          mode-variant="secondary"
          ref={navigationTabsRef}
        >
          <tds-navigation-tab>
            <button>First tab</button>
          </tds-navigation-tab>
          <tds-navigation-tab>
            <button>Second tab is much longer</button>
          </tds-navigation-tab>
          <tds-navigation-tab>
            <button>Third tab</button>
          </tds-navigation-tab>
          <tds-navigation-tab disabled>
            <button>Fourth tab</button>
          </tds-navigation-tab>
        </tds-navigation-tabs>
        <TabsPanels selectedTabIndex={navigationTabIndex} />
      </div>
    </div>
  );
};

export default TabsButtons;
