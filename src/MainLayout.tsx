import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import ModeSwitcher from './components/ModeSwitcher';
import ModeVariantSwitcher from './components/ModeVariantSwitcher';
import Footer from './components/Footer';
import Header from './components/Navigation/Header';
import SideMenu from './components/Navigation/SideMenu';
import { createContext } from 'react';
import AppBreadcrumbs from './components/Navigation/AppBreadcrumbs/AppBreadcrumbs';
import { TdsBanner, TdsLink } from '@scania/tegel-react';
import './MainLayout.css';

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
  const headerAndBannerRef = useRef<HTMLDivElement>(null);
  const [lightMode, setLightMode] = useState<'on' | 'off'>('on');
  const [primaryVariant, setPrimaryVariant] = useState<'on' | 'off'>('on');
  const [headerAndBannerHeight, setHeaderAndBannerHeight] = useState<number>();

  useEffect(() => {
    const updateHeight = () => {
      const element = headerAndBannerRef?.current;
      if (!element) return;

      const height = element.clientHeight;
      setHeaderAndBannerHeight(height);
    };

    window.addEventListener('resize', updateHeight);
    window.addEventListener('load', updateHeight); // Set height on load

    return () => {
      window.removeEventListener('resize', updateHeight);
      window.removeEventListener('load', updateHeight); // Remove the load event listener when the component unmounts
    };
  }, []);

  return (
    <div className={`App mode-wrapper tds-mode-${lightMode === 'on' ? 'light' : 'dark'}`}>
      <div
        className={`mode-variant-wrapper tds-mode-variant-${
          primaryVariant === 'on' ? 'primary' : 'secondary'
        }`}
      >
        <UserContext.Provider value={userContextValue}>
          <div className="header-and-banner" ref={headerAndBannerRef}>
            <TdsBanner variant="information" icon="info" header="React demo">
              <div slot="subheader">
                This is a demo page in React using{' '}
                <TdsLink style={{ display: 'inline-block' }}>
                  <a href="https://tegel-storybook.netlify.app/?path=/docs/components--banner">
                    @scania/tegel
                  </a>
                </TdsLink>
              </div>
            </TdsBanner>
            <Header className="app-header" pathname={pathname} toggleMobileNav={toggleMobileNav} />
          </div>
          <div className="side-menu-and-main">
            <SideMenu
              className="app-side-menu"
              style={{
                maxHeight: `calc(100vh - ${headerAndBannerHeight}px)`,
                top: `${headerAndBannerHeight}px`,
              }}
              sideMenuRef={sideMenuRef}
              pathname={pathname}
              toggleMobileNav={toggleMobileNav}
            />
            <main
              style={{
                marginTop: `${headerAndBannerHeight}px`,
              }}
            >
              {shouldRenderModeSwitcher && (
                <div className="switcher-container">
                  <ModeSwitcher mode={lightMode} setMode={setLightMode} />
                  <ModeVariantSwitcher
                    modeVariant={primaryVariant}
                    setModeVariant={setPrimaryVariant}
                  />
                </div>
              )}
              {shouldRenderBreadcrumbs && <AppBreadcrumbs />}
              <div className="content-container">{children}</div>
              <Footer />
            </main>
          </div>
        </UserContext.Provider>
      </div>
    </div>
  );
};

export default MainLayout;
