const Tabs = () => {
    return (
        <>
            <div className="tds-headline-02 tds-u-pb1">Tabs</div>
            <div className="tds-headline-03 tds-u-pb3 tds-u-pt3">Folder</div>

            <tds-folder-tabs>
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

            <div className="tds-headline-03 tds-u-pb3 tds-u-pt3">Inline</div>

            <tds-inline-tabs>
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
            <div className="tds-headline-03 tds-u-pb3 tds-u-pt3">Navigation</div>

            <tds-navigation-tabs>
                <tds-navigation-tab>
                    <a href="/">First tab</a>
                </tds-navigation-tab>
                <tds-navigation-tab>
                    <a href="/">Second tab is much longer</a>
                </tds-navigation-tab>
                <tds-navigation-tab>
                    <a href="/">Third tab</a>
                </tds-navigation-tab>
                <tds-navigation-tab disabled>
                    <a href="/">Fourth tab</a>
                </tds-navigation-tab>
            </tds-navigation-tabs></>
    )
}

export default Tabs;