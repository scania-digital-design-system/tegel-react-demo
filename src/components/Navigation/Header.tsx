/* eslint-disable jsx-a11y/anchor-has-content */
import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.scss';

interface HeaderProps {
  pathname: string;
  toggleMobileNav: Function;
}

const Header = ({ toggleMobileNav }: HeaderProps) => {
  const userContext = useContext(UserContext);
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


      <tds-header-dropdown onClick={() => { }} slot="end" no-dropdown-icon>
        <div slot="icon">
          <img
            src="https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg"
            alt="User menu."
          />
          {userContext?.user.notifications && userContext?.user.notifications?.length > 0 && (
            <tds-badge size="sm"></tds-badge>
          )}
        </div>
        <tds-header-dropdown-list size="lg">
          <tds-header-dropdown-list-user
            header={userContext?.user.userName}
            subheader={userContext?.user.placeOfWork}
          ></tds-header-dropdown-list-user>
          <tds-header-dropdown-list-item>
            <Link to="settings">
              <tds-icon name="settings"></tds-icon>
              <div className="tds-u-pl1">Settings</div>
            </Link>
          </tds-header-dropdown-list-item>
          <tds-header-dropdown-list-item>
            <Link to="notifications">
              <tds-badge value={userContext?.user.notifications?.length.toString()}></tds-badge>
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
