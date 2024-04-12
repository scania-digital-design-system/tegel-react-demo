/* eslint-disable jsx-a11y/anchor-has-content */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  TdsHeader,
  TdsHeaderHamburger,
  TdsHeaderTitle,
  TdsHeaderDropdown,
  TdsHeaderDropdownList,
  TdsBadge,
  TdsHeaderDropdownListItem,
  TdsHeaderDropdownListUser,
  TdsHeaderBrandSymbol,
  TdsIcon,
} from '@scania/tegel-react';
import { UserContext } from '../../App';
import './Header.scss';

interface HeaderProps {
  className?: string;
  pathname: string;
  toggleMobileNav: Function;
}

const Header = ({ className, toggleMobileNav, pathname }: HeaderProps) => {
  const userContext = useContext(UserContext);
  return (
    <div className={className}>
      <TdsHeader>
        <TdsHeaderHamburger
          onClick={() => {
            toggleMobileNav();
          }}
          aria-label="Open application drawer"
          aria-haspopup="true"
          aria-expanded="false"
        ></TdsHeaderHamburger>

        <TdsHeaderTitle>React Demo</TdsHeaderTitle>

        <TdsHeaderDropdown>
          <span slot="label">Wheel types</span>
          <TdsHeaderDropdownList>
            <TdsHeaderDropdownListItem selected={pathname === '/about'}>
              <Link to="about">About</Link>
            </TdsHeaderDropdownListItem>
            <TdsHeaderDropdownListItem>Just a title</TdsHeaderDropdownListItem>
            <TdsHeaderDropdownListItem selected={pathname === '/table'}>
              <Link to="table">Table</Link>
            </TdsHeaderDropdownListItem>
          </TdsHeaderDropdownList>
        </TdsHeaderDropdown>

        <TdsHeaderDropdown onClick={() => {}} slot="end" no-dropdown-icon>
          <div slot="icon">
            <img
              src="https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg"
              alt="User menu."
            />
            {userContext?.user.notifications && userContext?.user.notifications?.length > 0 && (
              <TdsBadge size="sm"></TdsBadge>
            )}
          </div>
          <TdsHeaderDropdownList size="lg">
            <TdsHeaderDropdownListUser
              header={userContext?.user.userName}
              subheader={userContext?.user.placeOfWork}
            ></TdsHeaderDropdownListUser>
            <TdsHeaderDropdownListItem>
              <Link to="settings">
                <TdsIcon name="settings"></TdsIcon>
                <div className="tds-u-pl1">Settings</div>
              </Link>
            </TdsHeaderDropdownListItem>
            <TdsHeaderDropdownListItem>
              <Link to="notifications">
                <TdsBadge value={userContext?.user.notifications?.length.toString()}></TdsBadge>
                <div className="tds-u-pl1">Notifications</div>
              </Link>
            </TdsHeaderDropdownListItem>
          </TdsHeaderDropdownList>
        </TdsHeaderDropdown>

        <TdsHeaderBrandSymbol slot="end">
          <a aria-label="Scania - red gryphon on blue shield" href="/"></a>
        </TdsHeaderBrandSymbol>
      </TdsHeader>
    </div>
  );
};

export default Header;
