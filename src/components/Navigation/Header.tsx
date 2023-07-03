/* eslint-disable jsx-a11y/anchor-has-content */
import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.scss';

interface HeaderProps {
  pathname: string;
  toggleMobileNav: Function;
}

const Header = ({ pathname, toggleMobileNav }: HeaderProps) => {
  const userContext = useContext(UserContext);
  const headerDropdown = useRef<HTMLTdsHeaderDropdownElement>(null);
  const closeHeaderDropdown = () => {
    if (headerDropdown.current) {
      // TODO - Need to be able to close the dropdown.
    }
  };

  return (
    <tds-header>
      <tds-header-hamburger
        onClick={() => {
          toggleMobileNav();
        }}
        aria-label="Open application drawer"
        aria-haspopup="true"
        aria-expanded="false"
      ></tds-header-hamburger>

      <tds-header-title>React Demo</tds-header-title>
      <tds-header-item selected={pathname.includes('web-components')}>
        <Link to="web-components">Components</Link>
      </tds-header-item>
      <tds-header-item selected={pathname === '/form'}>
        <Link to="form">Form</Link>
      </tds-header-item>
      <tds-header-dropdown ref={headerDropdown} selected={pathname.includes('tabs')}>
        <span slot="button-label">Tabs</span>
        <tds-header-dropdown-list>
          <tds-header-dropdown-list-item
            selected={pathname === '/tabs-buttons'}
            onClick={closeHeaderDropdown}
          >
            <Link to="/tabs-buttons">Buttons</Link>
          </tds-header-dropdown-list-item>
          <tds-header-dropdown-list-item
            selected={pathname === '/tabs-links'}
            onClick={closeHeaderDropdown}
          >
            <Link to="tabs-links">Links</Link>
          </tds-header-dropdown-list-item>
        </tds-header-dropdown-list>
      </tds-header-dropdown>
      <tds-header-item selected={pathname.startsWith('/text')}>
        <Link to="text">Text</Link>
      </tds-header-item>

      <tds-header-dropdown onClick={() => { }} slot="end" no-dropdown-icon>
        <div slot="button-icon">
          <img
            src="https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg"
            alt="User menu."
          />
          {userContext?.user.notificiations && userContext?.user.notificiations?.length > 0 && (<tds-badge size="sm"></tds-badge>)}
        </div>
        <tds-header-dropdown-list type="lg">
          <tds-header-dropdown-list-user
            heading={userContext?.user.userName}
            subheading={userContext?.user.placeOfWork}
          ></tds-header-dropdown-list-user>
          <tds-header-dropdown-list-item>
            <Link to="settings">
              <tds-icon name="settings"></tds-icon>
              <div className="tds-u-pl1">Settings</div>
            </Link>
          </tds-header-dropdown-list-item>
          <tds-header-dropdown-list-item>
            <Link to="notifications">
              <tds-badge value={userContext?.user.notificiations?.length.toString()}></tds-badge>
              <div className="tds-u-pl1">Notifications</div>
            </Link>
          </tds-header-dropdown-list-item>
        </tds-header-dropdown-list>
      </tds-header-dropdown>

      <tds-header-brand-symbol slot="end">
        <a aria-label="Scania - red gryphon on blue shield" href="/"></a>
      </tds-header-brand-symbol>
    </tds-header>
  );
};

export default Header;
