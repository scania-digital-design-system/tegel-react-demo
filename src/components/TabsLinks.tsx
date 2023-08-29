import { Link, useLocation } from "react-router-dom";
import TabsPanels from "./TabsPanels";

const TabsLinks = () => {

  const { pathname } = useLocation();
  const getSelectedIndex = () => {
    const index = ["first-tab", "second-tab", "third-tab"].findIndex((pathSegment) =>
      pathname.includes(pathSegment)
    );
    // if no index is found return 0
    return index === -1 ? 0 : index
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
        <TabsPanels selectedTabIndex={getSelectedIndex()} />
      </div>
      <div className="tds-u-pb3 tabs">
        <tds-inline-tabs
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
        <TabsPanels selectedTabIndex={getSelectedIndex()} />
      </div>
      <div className="tds-u-pb3 tabs">
        <tds-navigation-tabs
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
        <TabsPanels selectedTabIndex={getSelectedIndex()} />
      </div>
    </div>
  );
};

export default TabsLinks;
