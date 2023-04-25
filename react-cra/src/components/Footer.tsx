import { useLocation } from "react-router-dom";

export default function Footer() {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  console.log(splitLocation);
  return splitLocation[1] === "native-components" ? (
    <div>
      <div className="sdds-footer">
        <div className="sdds-footer-main">
          <ul className="sdds-footer-main-links">
            <li>
              <a href="/">Legal link</a>
            </li>
            <li>
              <a href="/">Legal link</a>
            </li>
            <li>
              <a href="/">Legal link</a>
            </li>
          </ul>
          <ul className="sdds-footer-social-links">
            <li>
              <a href="/">Social link</a>
            </li>
            <li>
              <a href="/">Social link</a>
            </li>
            <li>
              <a href="/">Social link</a>
            </li>
          </ul>
          <div className="sdds-footer-main-brand">
            <p>Copyright &copy; 2022 Scania</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <sdds-footer>
      <div slot="main-left">
        <sdds-footer-group>
          <sdds-footer-item>
            <a href="#">Link text</a>
          </sdds-footer-item>
          <sdds-footer-item>
            <a href="#">Link text</a>
          </sdds-footer-item>
          <sdds-footer-item>
            <a href="#">Link text</a>
          </sdds-footer-item>
          <sdds-footer-item>
            <a href="#">Link text</a>
          </sdds-footer-item>
        </sdds-footer-group>
      </div>
      <div slot="main-right">
        <sdds-footer-group>
          <sdds-footer-item>
            <a href="#"><sdds-icon name="truck"></sdds-icon></a>
          </sdds-footer-item>
          <sdds-footer-item>
            <a href="#"><sdds-icon name="truck"></sdds-icon></a>
          </sdds-footer-item>
          <sdds-footer-item>
            <a href="#"><sdds-icon name="truck"></sdds-icon></a>
          </sdds-footer-item>
        </sdds-footer-group>
      </div>
    </sdds-footer>
  );
}
