export default function Footer() {
  return(
      <sdds-footer>
        <div slot="main-left">
          <sdds-footer-link-group>
            <sdds-footer-link link-href="#">Link text</sdds-footer-link>
            <sdds-footer-link link-href="#">Link text</sdds-footer-link>
            <sdds-footer-link link-href="#">Link text</sdds-footer-link>
          </sdds-footer-link-group>
        </div>
        <div slot="main-right">
          <sdds-footer-link-group>
            <sdds-footer-link link-href="#">
              <sdds-icon name="truck"></sdds-icon>
            </sdds-footer-link>
            <sdds-footer-link link-href="#">
              <sdds-icon name="truck"></sdds-icon>
            </sdds-footer-link>
            <sdds-footer-link link-href="#">
              <sdds-icon name="truck"></sdds-icon>
            </sdds-footer-link>
          </sdds-footer-link-group>
        </div>
      </sdds-footer>
  );
}
