/* eslint-disable jsx-a11y/anchor-has-content */
import { useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ModeSwitcher from "./components/ModeSwitcher";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState<"Light" | "Dark">("Light");
  const { pathname } = useLocation();
  const sideMenu = useRef<HTMLTdsSideMenuElement>(null);

  const toggleMobileNav = () => {
    if (sideMenu.current) {
      sideMenu.current.open = !sideMenu.current.open;
    }
  };
  return (
    <div className={`App tds-mode-${mode.toLowerCase()}`}>
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
      <tds-header>
        <tds-header-hamburger
          onClick={toggleMobileNav}
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
        <tds-header-item selected={pathname === "/text-page"}>
          <Link to="text-page">Text</Link>
        </tds-header-item>
        <tds-header-item selected={pathname === "/tabs"}>
          <Link to="tabs">Tabs Buttons</Link>
        </tds-header-item>
        <tds-header-item selected={pathname.includes("/tabs-links")}>
          <Link to="tabs-links">Tabs Links</Link>
        </tds-header-item>
        <tds-header-item selected={pathname === '/table'}>
          <Link to="table">Table</Link>
        </tds-header-item>
        <tds-header-brand-symbol
          slot="end"
          link-href="https://scania.com"
          aria-label="Scania - red gryphon on blue shield"
        ></tds-header-brand-symbol>
        <tds-header-brand-symbol slot="end">
          <a aria-label="Scania - red gryphon on blue shield" href="/"></a>
        </tds-header-brand-symbol>
      </tds-header>
      <div className="side-menu-and-main">
        <tds-side-menu
          ref={sideMenu}
          id="demo-side-menu"
          aria-label="Side menu"
          persistent
        >
          <tds-side-menu-overlay
            onClick={toggleMobileNav}
            slot="overlay"
          ></tds-side-menu-overlay>
          <tds-side-menu-close-button
            onClick={toggleMobileNav}
            slot="close-button"
          ></tds-side-menu-close-button>
          <tds-side-menu-item>
            <Link to={"/about"} onClick={toggleMobileNav}>
              <tds-icon name="info" size="24"></tds-icon>
              About us
            </Link>
          </tds-side-menu-item>
          <div className="mobile-nav-item">
            <tds-side-menu-item>
              <Link to={"/web-components"} onClick={toggleMobileNav}>
                <tds-icon name="tool" size="24"></tds-icon>
                Components
              </Link>
            </tds-side-menu-item>
          </div>
          <div className="mobile-nav-item">
            <tds-side-menu-item>
              <Link to={"/form"} onClick={toggleMobileNav}>
                <tds-icon name="edit" size="24"></tds-icon>
                Form
              </Link>
            </tds-side-menu-item>
          </div>
          <tds-side-menu-collapse-button slot="sticky-end"></tds-side-menu-collapse-button>
        </tds-side-menu>

        <main className="tds-u-h-100 tds-u-p3">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
