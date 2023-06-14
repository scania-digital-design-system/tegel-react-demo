/* eslint-disable jsx-a11y/anchor-has-content */
import { useRef } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  pathname: string;
  toggleMobileNav: Function;
}
const Header = ({
  pathname,
  toggleMobileNav,
}: HeaderProps) => {
    const headerDropdown = useRef<HTMLTdsHeaderDropdownElement>(null);
    const closeHeaderDropdown = () => {
        if(headerDropdown.current){
          // TODO - Need to be able to close the dropdown.
        }
      }
  return (
    <tds-header>
      <tds-header-hamburger
        onClick={() => {
            toggleMobileNav()
        }}
        aria-label="Open application drawer"
        aria-haspopup="true"
        aria-expanded="false"
      ></tds-header-hamburger>

      <tds-header-title>React Demo</tds-header-title>
      <tds-header-item selected={pathname.includes("web-components")}>
        <Link to="web-components">Components</Link>
      </tds-header-item>
      <tds-header-item selected={pathname === "/form"}>
        <Link to="form">Form</Link>
      </tds-header-item>
      <tds-header-dropdown
        ref={headerDropdown}
        selected={pathname.includes("tabs")}
      >
        <span slot="button-label">Tabs</span>
        <tds-header-dropdown-list>
          <tds-header-dropdown-list-item onClick={closeHeaderDropdown}>
            <Link to="/tabs-buttons">Buttons</Link>
          </tds-header-dropdown-list-item>
          <tds-header-dropdown-list-item onClick={closeHeaderDropdown}>
            <Link to="tabs-links">Links</Link>
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
