import { useState } from "react";

const SideMenu = () => {

  const [collapse, setCollapse] = useState(false)
  return (
    <div className="side-menu-container">
      <div className="sdds-push demo-wrapper">
      <div className={`sdds-sidebar side-menu ${collapse && 'collapsed'}`}>
        <div className="sdds-sidebar-mheader">
          <button className="sdds-sidebar-mheader__close">
            <sdds-icon name="cross" size="20px"></sdds-icon>
          </button>
        </div>
        <ul className="sdds-sidebar-nav sdds-sidebar-nav--main icons-disabled">
          <li className="sdds-sidebar-nav__item sdds-sidebar-nav__extended subnav-open">
            <button className="sdds-sidebar-nav__item-link">
              <div>
                <sdds-icon
                  className="sdds-sidebar-nav__icon"
                  name="truck"
                  size="20px"
                ></sdds-icon>
              </div>
              <span className="sdds-sidebar-nav__item-text">Sub-menu</span>
              <div>
                <sdds-icon
                  className="sdds-sidebar-nav__chevron"
                  name="chevron_down"
                  size="16px"
                ></sdds-icon>
              </div>
            </button>
            <ul className="sdds-sidebar-nav-subnav">
              <li className="sdds-sidebar-nav-subnav__item">
                <span className="sdds-sidebar-nav__item-title">Sub-menu</span>
              </li>
              <li className="sdds-sidebar-nav-subnav__item">
                <a className="sdds-sidebar-nav__item-link" href="#">
                  <span className="sdds-sidebar-nav__item-text">
                    Sub Page name
                  </span>
                </a>
              </li>
              <li className="sdds-sidebar-nav-subnav__item">
                <a className="sdds-sidebar-nav__item-link" href="#">
                  <span className="sdds-sidebar-nav__item-text">
                    Sub Page name
                  </span>
                </a>
              </li>
              <li className="sdds-sidebar-nav-subnav__item">
                <a className="sdds-sidebar-nav__item-link" href="#">
                  <span className="sdds-sidebar-nav__item-text">
                    Sub Page name
                  </span>
                </a>
              </li>
            </ul>
          </li>
          <li className="sdds-sidebar-nav__item sdds-sidebar-nav__extended">
            <button className="sdds-sidebar-nav__item-link">
              <div>
                <sdds-icon
                  className="sdds-sidebar-nav__icon"
                  name="truck"
                  size="20px"
                ></sdds-icon>
              </div>
              <span className="sdds-sidebar-nav__item-text">Sub-menu</span>
              <div>
                <sdds-icon
                  className="sdds-sidebar-nav__chevron"
                  name="chevron_down"
                  size="16px"
                ></sdds-icon>
              </div>
            </button>
            <ul className="sdds-sidebar-nav-subnav">
              <li className="sdds-sidebar-nav-subnav__item">
                <span className="sdds-sidebar-nav__item-title">Sub-menu</span>
              </li>
              <li className="sdds-sidebar-nav-subnav__item">
                <a className="sdds-sidebar-nav__item-link" href="#">
                  <span className="sdds-sidebar-nav__item-text">
                    Sub Page name
                  </span>
                </a>
              </li>
              <li className="sdds-sidebar-nav-subnav__item">
                <a className="sdds-sidebar-nav__item-link" href="#">
                  <span className="sdds-sidebar-nav__item-text">
                    Sub Page name
                  </span>
                </a>
              </li>
              <li className="sdds-sidebar-nav-subnav__item">
                <a className="sdds-sidebar-nav__item-link" href="#">
                  <span className="sdds-sidebar-nav__item-text">
                    Sub Page name
                  </span>
                </a>
              </li>
            </ul>
          </li>
          <li className="sdds-sidebar-nav__item">
            <a className="sdds-sidebar-nav__item-link" href="#">
              <div>
                <sdds-icon
                  className="sdds-sidebar-nav__icon"
                  name="truck"
                  size="20px"
                ></sdds-icon>
              </div>
              <span className="sdds-sidebar-nav__item-text">Page link</span>
            </a>
          </li>
          <li className="sdds-sidebar-nav__item sdds-sidebar-nav__extended">
            <button onClick={() => {
              setCollapse(!collapse)
            }} className="sdds-sidebar-nav__item-link">

              <span className="sdds-sidebar-nav__item-text">Collapse me</span>
              <div>
                <sdds-icon
                  className="sdds-sidebar-nav__chevron"
                  name="arrow_left"
                  size="16px"
                ></sdds-icon>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default SideMenu;
