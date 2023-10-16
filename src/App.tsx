/* eslint-disable jsx-a11y/anchor-has-content */
import { useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { createContext } from 'react';
import MainLayout from './MainLayout'; // Import the MainLayout component
import '@scania/tegel/dist/tegel/tegel.css';

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
  const [mode] = useState<'Light' | 'Dark'>('Light');
  const [modeVariant] = useState<'Primary' | 'Secondary'>('Primary');
  const { pathname } = useLocation();
  const sideMenuRef = useRef<HTMLTdsSideMenuElement>(null);
  const [user, setUser] = useState<User>({
    userName: 'Name Namesson',
    placeOfWork: 'Scania',
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
    <UserContext.Provider value={userContextValue}>
      <MainLayout
        pathname={pathname}
        toggleMobileNav={toggleMobileNav}
        modeVariant={modeVariant}
        mode={mode}
        sideMenuRef={sideMenuRef} userContextValue={userContextValue}
        shouldRenderModeSwitcher={true}
        shouldRenderBreadcrumbs={true}>
        <Outlet />
      </MainLayout>
    </UserContext.Provider>
  );
}

export default App;