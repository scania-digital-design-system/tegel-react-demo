import { useState } from "react";
import { Outlet } from "react-router-dom";
import ModeSwitcher from "./components/ModeSwitcher";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState<"Light" | "Dark">("Light");
  let sideMenu: any;
  return (
    <div className={`App sdds-mode-${mode.toLowerCase()}`}>
      <ModeSwitcher mode={mode} setMode={setMode} />
      <sdds-header className="demo-header">
        <sdds-header-hamburger
            aria-expanded="false"
            aria-label="Open application drawer"
            aria-haspopup="true"
            onClick={() => {
              sideMenu.open = true;
            }}
        ></sdds-header-hamburger>

        <sdds-header-title>My Application</sdds-header-title>
        <sdds-header-brand-symbol
            slot="end"
            link-href="https://scania.com"
            aria-label="Scania - red gryphon on blue shield"
        ></sdds-header-brand-symbol>
      </sdds-header>

      <div className="container">
        <sdds-side-menu ref={(element) => sideMenu = element} aria-label="Side menu" id="demo-side-menu" persistent>
          <sdds-side-menu-overlay
              slot="overlay"
          ></sdds-side-menu-overlay>

          <sdds-side-menu-close-button
              slot="close-button"
              aria-label="Close drawer menu"
              onClick={() => {
                sideMenu.open = false;
              }}
          ></sdds-side-menu-close-button>

          <sdds-side-menu-item>
            <button>
              <sdds-icon name="timer" size="24"></sdds-icon>
              About us
            </button>
          </sdds-side-menu-item>

          <sdds-side-menu-item>
            <button>
              <sdds-icon name="truck" size="24"></sdds-icon>
              Trucks
            </button>
          </sdds-side-menu-item>

          <sdds-side-menu-dropdown default-open selected>
            <sdds-icon slot="button-icon" name="profile" size="24"></sdds-icon>
            <span slot="button-label">Wheel types</span>
            <sdds-side-menu-dropdown-list>
              <sdds-side-menu-dropdown-list-item>
                <a href="https://www.scania.com">Hub-centric wheel</a>
              </sdds-side-menu-dropdown-list-item>
              <sdds-side-menu-dropdown-list-item selected>
                <a href="https://www.scania.com" aria-current="page">
                  Rim wheel
                </a>
              </sdds-side-menu-dropdown-list-item>
            </sdds-side-menu-dropdown-list>
          </sdds-side-menu-dropdown>

          <sdds-side-menu-item>
            <button>
              <sdds-icon name="star" size="24"></sdds-icon>
              Values
            </button>
          </sdds-side-menu-item>
        </sdds-side-menu>
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
