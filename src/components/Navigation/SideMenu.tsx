import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  TdsSideMenu,
  TdsSideMenuCloseButton,
  TdsSideMenuDropdown,
  TdsSideMenuDropdownList,
  TdsSideMenuDropdownListItem,
  TdsSideMenuItem,
  TdsSideMenuOverlay,
  TdsSideMenuCollapseButton,
  TdsSideMenuUser,
  TdsIcon,
} from '@scania/tegel-react';
import { UserContext } from '../../App';

interface SideMenuProps {
  className?: string;
  style?: React.CSSProperties;
  pathname: string;
  toggleMobileNav: Function;
  sideMenuRef: React.RefObject<HTMLTdsSideMenuElement>;
}

const SideMenu = ({ style, className, pathname, toggleMobileNav, sideMenuRef }: SideMenuProps) => {
  const userContext = useContext(UserContext);
  return (
    <div className={className} style={style}>
      <TdsSideMenu ref={sideMenuRef} id="demo-side-menu" aria-label="Side menu" persistent>
        <TdsSideMenuOverlay onClick={() => toggleMobileNav()} slot="overlay"></TdsSideMenuOverlay>
        <TdsSideMenuCloseButton
          onClick={() => toggleMobileNav()}
          slot="close-button"
        ></TdsSideMenuCloseButton>
        <TdsSideMenuItem selected={pathname === '/about'}>
          <Link to={'/about'} onClick={() => toggleMobileNav()}>
            <TdsIcon name="info" size="24"></TdsIcon>
            About us
          </Link>
        </TdsSideMenuItem>
        <TdsSideMenuItem selected={pathname === '/stepper'}>
          <Link to={'/stepper'} onClick={() => toggleMobileNav()}>
            <TdsIcon name="report" size="24"></TdsIcon>
            Stepper
          </Link>
        </TdsSideMenuItem>
        <TdsSideMenuItem selected={pathname === '/table'}>
          <Link to={'/table'} onClick={() => toggleMobileNav()}>
            <TdsIcon name="document_tool" size="24"></TdsIcon>
            Table
          </Link>
        </TdsSideMenuItem>
        <TdsSideMenuItem selected={pathname === '/web-components'}>
          <Link to={'/web-components'} onClick={() => toggleMobileNav()}>
            <TdsIcon name="tool" size="24"></TdsIcon>
            Components
          </Link>
        </TdsSideMenuItem>
        <TdsSideMenuItem selected={pathname === '/form'}>
          <Link to={'/form'} onClick={() => toggleMobileNav()}>
            <TdsIcon name="edit" size="24"></TdsIcon>
            Form
          </Link>
        </TdsSideMenuItem>
        <TdsSideMenuDropdown
          default-open={pathname.includes('/tabs')}
          selected={pathname.includes('/tabs')}
        >
          <TdsIcon slot="icon" name="folder" size="24"></TdsIcon>
          <span slot="label">Tabs</span>
          <TdsSideMenuDropdownList>
            <TdsSideMenuDropdownListItem selected={pathname.includes('/tabs-button')}>
              <Link to="/tabs-buttons">Button</Link>
            </TdsSideMenuDropdownListItem>
            <TdsSideMenuDropdownListItem selected={pathname.includes('tabs-links')}>
              <Link to="/tabs-links">Link</Link>
            </TdsSideMenuDropdownListItem>
          </TdsSideMenuDropdownList>
        </TdsSideMenuDropdown>
        <TdsSideMenuItem selected={pathname === '/text'}>
          <Link to={'/text'} onClick={() => toggleMobileNav()}>
            <TdsIcon name="document" size="24"></TdsIcon>
            Text
          </Link>
        </TdsSideMenuItem>
        <div slot="end">
          <TdsSideMenuDropdown selected={pathname.includes('settings')}>
            <TdsSideMenuUser
              slot="label"
              heading={userContext?.user.userName || 'Name Namesson'}
              subheading={userContext?.user.placeOfWork}
              img-src="https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg"
              img-alt=""
            ></TdsSideMenuUser>
            <TdsSideMenuDropdownList>
              <TdsSideMenuDropdownListItem selected={pathname.includes('settings')}>
                <Link to="settings">
                  <TdsIcon name="settings"></TdsIcon>
                  <div className="tds-u-pl1">Settings</div>
                </Link>
              </TdsSideMenuDropdownListItem>
            </TdsSideMenuDropdownList>
          </TdsSideMenuDropdown>
        </div>
        <TdsSideMenuCollapseButton slot="sticky-end"></TdsSideMenuCollapseButton>
      </TdsSideMenu>
    </div>
  );
};

export default SideMenu;
