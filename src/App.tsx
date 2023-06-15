/* eslint-disable jsx-a11y/anchor-has-content */
import {  useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ModeSwitcher from "./components/ModeSwitcher";
import Footer from "./components/Footer";
import Header from "./components/Navigation/Header";
import SideMenu from "./components/Navigation/SideMenu";
import { createContext } from 'react';

export interface User {
  userName: string;
  placeOfWork: string;
}

interface UserContextValue {
  user: User;
  updateUser: (newUser: User) => void;
}

export const UserContext = createContext<UserContextValue | null>(null);


function App() {
  const [mode, setMode] = useState<"Light" | "Dark">("Light");
  const { pathname } = useLocation();
  const sideMenuRef = useRef<HTMLTdsSideMenuElement>(null);  
  const [user, setUser] = useState<User>({
    userName: 'Marcus Åström',
    placeOfWork: 'IXCD',
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
      <UserContext.Provider value={userContextValue}>
      <ModeSwitcher mode={mode} setMode={setMode} />
      <div className="announcement-banner">
        <tds-banner
          type="information"
          icon="info"
          header="React demo"
          persistent
        >
          <div slot="banner-subheader">
            This is a demo page in React using{" "}
            <tds-link style={{ display: "inline-block" }}>
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
        <main className="tds-u-h-100 tds-u-p3">
          <Outlet />
        </main>
      </div>
      <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
