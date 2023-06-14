import { Link, useLocation } from "react-router-dom";
import TabsPanels from "./TabsPanels";
import { useState } from "react";

const TabsLinks = () => {
  const [navigationTabIndex, setNavigationTabIndex] = useState(0);
  const [folderTabIndex, setFolderTabIndex] = useState(0);
  const [inlineTabIndex, setInlineTabIndex] = useState(0);

  const { pathname } = useLocation();
  const getSelectedIndex = () => {
    return ["first-tab", "second-tab", "third-tab"].findIndex((pathSegment) =>
      pathname.includes(pathSegment)
    );
  };

  return (
    <div>
      <h3>Tabs with links.</h3>
      <p>
        These tabs are linking to different pages (with different URLs), and
        this means that you can link to an individual tab via a URL. Try
        clicking this{" "}
        <tds-link style={{ display: "inline-block" }}>
          <a href="/tabs-links/second-tab">link</a>
        </tds-link>{" "}
        and you'll land on a page for the second tab.
      </p>
      <div className="tds-u-pb3 tabs">
        <tds-folder-tabs
          ref={(element) =>
            element?.addEventListener("tdsChange", (event: any) => {
              setFolderTabIndex(event.detail.selectedTabIndex);
              console.log(event);
            })
          }
          mode-variant="secondary"
          default-selected-index={getSelectedIndex()}
        >
          <tds-folder-tab>
            <Link to={"first-tab"}>First tab</Link>
          </tds-folder-tab>
          <tds-folder-tab>
            <Link to={"second-tab"}>Second tab</Link>
          </tds-folder-tab>
          <tds-folder-tab>
            <Link to={"third-tab"}>Third tab</Link>
          </tds-folder-tab>
        </tds-folder-tabs>
        <TabsPanels selectedTabIndex={folderTabIndex} />
      </div>
      <div className="tds-u-pb3 tabs">
        <tds-inline-tabs
          ref={(element) =>
            element?.addEventListener("tdsChange", (event: any) => {
              setInlineTabIndex(event.detail.selectedTabIndex);
              console.log(event);
            })
          }
          mode-variant="secondary"
          default-selected-index={getSelectedIndex()}
        >
          <tds-inline-tab>
            <Link to={"first-tab"}>First tab</Link>
          </tds-inline-tab>
          <tds-inline-tab>
            <Link to={"second-tab"}>Second tab</Link>
          </tds-inline-tab>
          <tds-inline-tab>
            <Link to={"third-tab"}>Third tab</Link>
          </tds-inline-tab>
        </tds-inline-tabs>
        <TabsPanels selectedTabIndex={inlineTabIndex} />
      </div>
      <div className="tds-u-pb3 tabs">
        <tds-navigation-tabs
          ref={(element) =>
            element?.addEventListener("tdsChange", (event: any) => {
              setNavigationTabIndex(event.detail.selectedTabIndex);
              console.log(event);
            })
          }
          mode-variant="secondary"
          default-selected-index={getSelectedIndex()}
        >
          <tds-navigation-tab>
            <Link to={"first-tab"}>First tab</Link>
          </tds-navigation-tab>
          <tds-navigation-tab>
            <Link to={"second-tab"}>Second tab</Link>
          </tds-navigation-tab>
          <tds-navigation-tab>
            <Link to={"third-tab"}>Third tab</Link>
          </tds-navigation-tab>
        </tds-navigation-tabs>
        <TabsPanels selectedTabIndex={navigationTabIndex} />
      </div>
    </div>
  );
};

export default TabsLinks;
