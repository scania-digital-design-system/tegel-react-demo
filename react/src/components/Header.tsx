const Header = () => {
  return (
    <>
      <nav className="sdds-nav sdds-u-sticky sdds-u-top0">
        <div className="sdds-nav__left">
          <div className="sdds-nav__app-name">React Demo</div>
        </div>
        <div className="sdds-nav__center">
          <ul className="sdds-nav__inline-menu">
            <li className="sdds-nav__item">
              <a className="sdds-nav__item-core" href="/web-components">
                <span className="sdds-nav__item-core-text">Web</span>
              </a>
            </li>
            <li className="sdds-nav__item">
              <a className="sdds-nav__item-core" href="/native-components">
                <span className="sdds-nav__item-core-text">Native</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="sdds-nav__right">
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
          <a
            className="sdds-nav__item sdds-nav__app-logo"
            href="https://www.scania.com"
          ></a>
        </div>
      </nav>

    </>
  );
};

export default Header;
