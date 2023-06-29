import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

interface SideMenuProps {
  pathname: string;
  toggleMobileNav: Function;
  sideMenuRef: React.RefObject<HTMLTdsSideMenuElement>;
}

const SideMenu = ({
  pathname,
  toggleMobileNav,
  sideMenuRef,
}: SideMenuProps) => {
  const userContext = useContext(UserContext);
  return (
    <tds-side-menu
      ref={sideMenuRef}
      id="demo-side-menu"
      aria-label="Side menu"
      persistent
    >
      <tds-side-menu-overlay
        onClick={() => toggleMobileNav()}
        slot="overlay"
      ></tds-side-menu-overlay>
      <tds-side-menu-close-button
        onClick={() => toggleMobileNav()}
        slot="close-button"
      ></tds-side-menu-close-button>
      <tds-side-menu-item selected={pathname === "/about"}>
        <Link to={"/about"} onClick={() => toggleMobileNav()}>
          <tds-icon name="info" size="24"></tds-icon>
          About us
        </Link>
      </tds-side-menu-item>
      <tds-side-menu-item selected={pathname === "/stepper"}>
        <Link to={"/stepper"} onClick={() => toggleMobileNav()}>
          <tds-icon name="report" size="24"></tds-icon>
          Stepper
        </Link>
      </tds-side-menu-item>
      <tds-side-menu-item selected={pathname === "/table"}>
        <Link to={"/table"} onClick={() => toggleMobileNav()}>
          <tds-icon name="document_tool" size="24"></tds-icon>
          Table
        </Link>
      </tds-side-menu-item>
      <div className="mobile-nav-item">
        <tds-side-menu-item selected={pathname === "/web-components"}>
          <Link to={"/web-components"} onClick={() => toggleMobileNav()}>
            <tds-icon name="tool" size="24"></tds-icon>
            Components
          </Link>
        </tds-side-menu-item>
      </div>
      <div className="mobile-nav-item">
        <tds-side-menu-item selected={pathname === "/form"}>
          <Link to={"/form"} onClick={() => toggleMobileNav()}>
            <tds-icon name="edit" size="24"></tds-icon>
            Form
          </Link>
        </tds-side-menu-item>
      </div>

      <div className="mobile-nav-item">
        <tds-side-menu-dropdown
          default-open={pathname.includes("/tabs")}
          selected={pathname.includes("/tabs")}
        >
          <tds-icon slot="button-icon" name="folder" size="24"></tds-icon>
          <span slot="button-label">Tabs</span>
          <tds-side-menu-dropdown-list>
            <tds-side-menu-dropdown-list-item
              selected={pathname.includes("/tabs-button")}
            >
              <Link to="/tabs-buttons">Button</Link>
            </tds-side-menu-dropdown-list-item>
            <tds-side-menu-dropdown-list-item
              selected={pathname.includes("tabs-links")}
            >
              <Link to="/tabs-links">Link</Link>
            </tds-side-menu-dropdown-list-item>
          </tds-side-menu-dropdown-list>
        </tds-side-menu-dropdown>
      </div>

      <div className="mobile-nav-item">
        <tds-side-menu-item selected={pathname === "/text"}>
          <Link to={"/text"} onClick={() => toggleMobileNav()}>
            <tds-icon name="document" size="24"></tds-icon>
            Text
          </Link>
        </tds-side-menu-item>
      </div>
      <div slot="end" >
        <tds-side-menu-dropdown selected={pathname.includes('settings')}>
          <tds-side-menu-user
            slot="button-label"
            heading={userContext?.user.userName}
            subheading={userContext?.user.placeOfWork}
            img-src="https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg"
            img-alt=""
          ></tds-side-menu-user>
          <tds-side-menu-dropdown-list>
            <tds-side-menu-dropdown-list-item selected={pathname.includes('settings')}>
              <Link to="settings">
                <tds-icon name="settings"></tds-icon>
                <div className="tds-u-pl1">Settings</div>
              </Link>
            </tds-side-menu-dropdown-list-item>

          </tds-side-menu-dropdown-list>
        </tds-side-menu-dropdown>
      </div>
      <tds-side-menu-collapse-button slot="sticky-end"></tds-side-menu-collapse-button>
    </tds-side-menu>
  );
};

export default SideMenu;
