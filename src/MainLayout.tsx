import React, { useState } from 'react';
import ModeSwitcher from './components/ModeSwitcher';
import ModeVariantSwitcher from './components/ModeVariantSwitcher';
import Footer from './components/Footer';
import Header from './components/Navigation/Header';
import SideMenu from './components/Navigation/SideMenu';
import { createContext } from 'react';
import AppBreadcrumbs from './components/Navigation/AppBreadcrumbs/AppBreadcrumbs';

interface MainLayoutProps {
    children?: React.ReactNode;
    pathname?: string;
    toggleMobileNav?: () => void;
    userContextValue?: any; // Define the type for userContextValue
    mode?: string;
    modeVariant?: string; // Define the type for modeVariant
    sideMenuRef?: React.RefObject<any>; // Define the type for sideMenuRef
    shouldRenderBreadcrumbs?: boolean; // Define the type for shouldRenderBreadcrumbs
    shouldRenderModeSwitcher?: boolean; // Define the type for shouldRenderBreadcrumbs
}

export const UserContext = createContext<any | null>(null);

const MainLayout = ({
    children,
    pathname = '/',
    toggleMobileNav = () => {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        sideMenuRef.current.open = !sideMenuRef.current.open;
    },
    userContextValue,
    sideMenuRef = React.createRef(),
    shouldRenderBreadcrumbs,
    shouldRenderModeSwitcher,
}: MainLayoutProps) => {
    const [lightMode, setLightMode] = useState<'on' | 'off'>('on');
    const [primaryVariant, setPrimaryVariant] = useState<'on' | 'off'>('on');

    const wrapperClassName = shouldRenderBreadcrumbs
        ? 'wrapper tds-u-p3 tds-u-h-100'
        : 'tds-u-p3 tds-u-h-100';

    return (
        <div className={`App mode-wrapper tds-mode-${lightMode === 'on' ? 'light' : 'dark'}`}>
            <div className={`mode-variant-wrapper tds-mode-variant-${primaryVariant === 'on' ? 'primary' : 'secondary'}`}>
                <UserContext.Provider value={userContextValue}>
                    <tds-banner variant="information" icon="info" header="React demo">
                        <div slot="subheader">
                            This is a demo page in React using{' '}
                            <tds-link style={{ display: 'inline-block' }}>
                                <a href="https://tegel-storybook.netlify.app/?path=/docs/components--banner">
                                    @scania/tegel
                                </a>
                            </tds-link>
                        </div>
                    </tds-banner>
                    <Header pathname={pathname} toggleMobileNav={toggleMobileNav} />
                    <div className="side-menu-and-main">
                        <SideMenu
                            sideMenuRef={sideMenuRef}
                            pathname={pathname}
                            toggleMobileNav={toggleMobileNav}
                        />
                        <main className="tds-u-h-100">
                            {shouldRenderModeSwitcher && (
                                <div className="switcher-container">
                                    <ModeSwitcher mode={lightMode} setMode={setLightMode} />
                                    <ModeVariantSwitcher mode={primaryVariant} setMode={setPrimaryVariant} />
                                </div>
                            )}
                            {shouldRenderBreadcrumbs && <AppBreadcrumbs />}
                            <div className="main-container">
                                <div className={wrapperClassName}>{children}</div>
                            </div>
                            <Footer />
                        </main>
                    </div>
                </UserContext.Provider>
            </div>
        </div>
    );
};

export default MainLayout;
