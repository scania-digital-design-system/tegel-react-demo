import {
  TdsFolderTab,
  TdsFolderTabs,
  TdsInlineTab,
  TdsInlineTabs,
  TdsNavigationTab,
  TdsNavigationTabs,
} from '@scania/tegel-react';

const Tabs = () => {
  return (
    <>
      <div className="tds-headline-02 tds-u-pb1">Tabs</div>
      <div className="tds-headline-03 tds-u-pb3 tds-u-pt3">Folder</div>

      <TdsFolderTabs>
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

      <div className="tds-headline-03 tds-u-pb3 tds-u-pt3">Inline</div>

      <TdsInlineTabs>
        <TdsInlineTab>
          <button>First tab</button>
        </TdsInlineTab>
        <TdsInlineTab>
          <button>Second tab is much longer</button>
        </TdsInlineTab>
        <TdsInlineTab>
          <button>Third tab</button>
        </TdsInlineTab>
        <TdsInlineTab disabled>
          <button>Fourth tab</button>
        </TdsInlineTab>
      </TdsInlineTabs>
      <div className="tds-headline-03 tds-u-pb3 tds-u-pt3">Navigation</div>

      <TdsNavigationTabs>
        <TdsNavigationTab>
          <a href="/">First tab</a>
        </TdsNavigationTab>
        <TdsNavigationTab>
          <a href="/">Second tab is much longer</a>
        </TdsNavigationTab>
        <TdsNavigationTab>
          <a href="/">Third tab</a>
        </TdsNavigationTab>
        <TdsNavigationTab disabled>
          <a href="/">Fourth tab</a>
        </TdsNavigationTab>
      </TdsNavigationTabs>
    </>
  );
};

export default Tabs;
