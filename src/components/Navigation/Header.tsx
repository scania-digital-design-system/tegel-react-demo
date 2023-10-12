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
  pathname: string;
  toggleMobileNav: Function;
}

const Header = ({ toggleMobileNav }: HeaderProps) => {
  const userContext = useContext(UserContext);
  return (
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
  );
};

export default Header;
