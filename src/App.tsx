import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ModeSwitcher from "./components/ModeSwitcher";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";


function App() {
  const [mode, setMode] = useState<"Light" | "Dark">("Light");
  const { pathname } = useLocation();  
  let sideMenu: any;
  return (
    <div className={`App tds-mode-${mode.toLowerCase()}`}>
      <ModeSwitcher mode={mode} setMode={setMode} />
      <tds-header className="demo-header">
        <tds-header-hamburger
            aria-expanded="false"
            aria-label="Open application drawer"
            aria-haspopup="true"
            onClick={() => {
              sideMenu.open = true;
            }}
        ></tds-header-hamburger>

        <tds-header-title>My Application</tds-header-title>

        <tds-header-item selected={pathname.includes('web-components')}>
          <Link to="web-components">Components</Link>
        </tds-header-item>

        <tds-header-item selected={pathname.includes('form')}>
          <Link to="form">Form</Link>
        </tds-header-item>
        <tds-header-brand-symbol
            slot="end"
            link-href="https://scania.com"
            aria-label="Scania - red gryphon on blue shield"
        ></tds-header-brand-symbol>
      </tds-header>

      <div className="container">
        <tds-side-menu ref={(element) => sideMenu = element} aria-label="Side menu" id="demo-side-menu" persistent>
          <tds-side-menu-overlay
              slot="overlay"
          ></tds-side-menu-overlay>

          <tds-side-menu-close-button
              slot="close-button"
              aria-label="Close drawer menu"
              onClick={() => {
                sideMenu.open = false;
              }}
          ></tds-side-menu-close-button>

          <tds-side-menu-item>
            <button>
              <tds-icon name="timer" size="24"></tds-icon>
              About us
            </button>
          </tds-side-menu-item>

          <tds-side-menu-item>
            <button>
              <tds-icon name="truck" size="24"></tds-icon>
              Trucks
            </button>
          </tds-side-menu-item>

          <tds-side-menu-dropdown default-open selected>
            <tds-icon slot="button-icon" name="profile" size="24"></tds-icon>
            <span slot="button-label">Wheel types</span>
            <tds-side-menu-dropdown-list>
              <tds-side-menu-dropdown-list-item>
                <a href="https://www.scania.com">Hub-centric wheel</a>
              </tds-side-menu-dropdown-list-item>
              <tds-side-menu-dropdown-list-item selected>
                <a href="https://www.scania.com" aria-current="page">
                  Rim wheel
                </a>
              </tds-side-menu-dropdown-list-item>
            </tds-side-menu-dropdown-list>
          </tds-side-menu-dropdown>

          <tds-side-menu-item>
            <button>
              <tds-icon name="star" size="24"></tds-icon>
              Values
            </button>
          </tds-side-menu-item>
        </tds-side-menu>
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
