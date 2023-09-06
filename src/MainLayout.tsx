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
  toggleMobileNav = () => { },
  userContextValue,
  sideMenuRef = React.createRef(),
  shouldRenderBreadcrumbs,
  shouldRenderModeSwitcher,
}: MainLayoutProps) => {

  const [mode, setMode] = useState<'Light' | 'Dark'>('Light');
  const [modeVariant, setModeVariant] = useState<'Primary' | 'Secondary'>('Primary');

  const wrapperClassName = shouldRenderBreadcrumbs
    ? 'wrapper tds-u-p3'
    : 'tds-u-p3 tds-u-h-100';

  return (
    <div className={`App tds-mode-${mode.toLowerCase()}`}>
      <div className={`tds-mode-variant-${modeVariant.toLowerCase()}`}>
        <UserContext.Provider value={userContextValue}>
          {shouldRenderModeSwitcher &&
            <div className="switcher-container">
              <ModeSwitcher mode={mode} setMode={setMode} />
              <ModeVariantSwitcher mode={modeVariant} setMode={setModeVariant} />
            </div>
          }
          <div className="announcement-banner">
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
          </div>
          <Header pathname={pathname} toggleMobileNav={toggleMobileNav} />
          <div className="side-menu-and-main">
            <SideMenu sideMenuRef={sideMenuRef} pathname={pathname} toggleMobileNav={toggleMobileNav} />
            <main className="tds-u-w-100">
              {shouldRenderBreadcrumbs && <AppBreadcrumbs />}
              <div className={wrapperClassName}>{children}</div>
              <Footer />
            </main>
          </div>
        </UserContext.Provider>
      </div>
    </div>
  );
};

export default MainLayout;
