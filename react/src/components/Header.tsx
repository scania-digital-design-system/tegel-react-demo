const Header = () => {
  return (
    <>
      <nav className="sdds-nav">
        <div className="sdds-nav__left">
          <div className="sdds-nav__app-name">React Demo</div>
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
