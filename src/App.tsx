/* eslint-disable jsx-a11y/anchor-has-content */
import { useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import ModeSwitcher from './components/ModeSwitcher';
import Footer from './components/Footer';
import Header from './components/Navigation/Header';
import SideMenu from './components/Navigation/SideMenu';
import { createContext } from 'react';
import ModeVariantSwitcher from './components/ModeVariantSwitcher';
import AppBreadcrumbs from './components/Navigation/AppBreadcrumbs/AppBreadcrumbs';

export interface User {
  userName: string;
  placeOfWork: string;
  notifications: Notification[];
}

interface UserContextValue {
  user: User;
  updateUser: (newUser: User) => void;
}

interface Notification {
  notification: string;
  type: 'error' | 'success' | 'information' | 'warning';
}

export const UserContext = createContext<UserContextValue | null>(null);

function App() {
  const [mode, setMode] = useState<'Light' | 'Dark'>('Light');
  const [modeVariant, setModeVariant] = useState<'Primary' | 'Secondary'>('Primary');
  const { pathname } = useLocation();
  const sideMenuRef = useRef<HTMLTdsSideMenuElement>(null);
  const [user, setUser] = useState<User>({
    userName: 'Marcus Åström',
    placeOfWork: 'IXCD',
    notifications: [
      {
        notification: 'You need to update your username.',
        type: 'error',
      },
      {
        notification: 'Your vacation request has been approved.',
        type: 'success',
      },
      {
        notification: 'You need to update your password.',
        type: 'error',
      },
      {
        notification: 'Your username is about to expire.',
        type: 'warning',
      },
    ],
  });

  const updateUser = (newUser: User) => {
    setUser(newUser);
  };

  const userContextValue: UserContextValue = {
    user,
    updateUser,
  };

  const toggleMobileNav = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.open = !sideMenuRef.current.open;
    }
  };

  return (
    <div className={`App tds-mode-${mode.toLowerCase()}`}>
      <div className={`tds-mode-variant-${modeVariant.toLowerCase()}`}>
        <UserContext.Provider value={userContextValue}>
          <div className="switcher-container">
            <ModeSwitcher mode={mode} setMode={setMode} />
            <ModeVariantSwitcher mode={modeVariant} setMode={setModeVariant} />
          </div>
          <div className="announcement-banner">
            <tds-banner variant="information" icon="info" header="React demo" persistent>
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
            <SideMenu
              sideMenuRef={sideMenuRef}
              pathname={pathname}
              toggleMobileNav={toggleMobileNav}
            />
            <main className="tds-u-h-100 tds-u-w-100">
              <AppBreadcrumbs />
              <div className="wrapper tds-u-h-100 tds-u-p3">
                <Outlet />
              </div>
              <Footer />
            </main>
          </div>
        </UserContext.Provider>
      </div>
    </div>
  );
}

export default App;
