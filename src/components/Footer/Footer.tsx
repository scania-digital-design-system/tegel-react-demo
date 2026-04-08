import { TdsFooter, TdsFooterGroup, TdsFooterItem, TdsIcon } from '@scania/tegel-react';

export default function Footer() {
  return (
    <TdsFooter>
      <div slot="top">
        <TdsFooterGroup title-text="Pages">
          <TdsFooterItem>
            <a href="/">Home</a>
          </TdsFooterItem>
          <TdsFooterItem>
            <a href="/form">Form</a>
          </TdsFooterItem>
        </TdsFooterGroup>
        <TdsFooterGroup title-text="Legals">
          <TdsFooterItem>
            <a href="/">Terms & Conditions</a>
          </TdsFooterItem>
          <TdsFooterItem>
            <a href="/">Privacy policy</a>
          </TdsFooterItem>
        </TdsFooterGroup>
        <TdsFooterGroup title-text="Design">
          <TdsFooterItem>
            <a href="/">Grid system</a>
          </TdsFooterItem>
          <TdsFooterItem>
            <a href="/">Icons</a>
          </TdsFooterItem>
          <TdsFooterItem>
            <a href="/">Usability testing</a>
          </TdsFooterItem>
          <TdsFooterItem>
            <a href="/">User personas</a>
          </TdsFooterItem>
        </TdsFooterGroup>
        <TdsFooterGroup title-text="Support">
          <TdsFooterItem>
            <a href="/">Contact</a>
          </TdsFooterItem>
          <TdsFooterItem>
            <a href="/">FAQ</a>
          </TdsFooterItem>
        </TdsFooterGroup>
      </div>
      <div slot="start">
        <TdsFooterGroup>
          <TdsFooterItem>
            <a href="/">Link text</a>
          </TdsFooterItem>
          <TdsFooterItem>
            <a href="/">Link text</a>
          </TdsFooterItem>
          <TdsFooterItem>
            <a href="/">Link text</a>
          </TdsFooterItem>
          <TdsFooterItem>
            <a href="/">Link text</a>
          </TdsFooterItem>
        </TdsFooterGroup>
      </div>
      <div slot="end">
        <TdsFooterGroup>
          <TdsFooterItem>
            <a href="/">
              <TdsIcon name="truck"></TdsIcon>
            </a>
          </TdsFooterItem>
          <TdsFooterItem>
            <a href="/">
              <TdsIcon name="truck"></TdsIcon>
            </a>
          </TdsFooterItem>
          <TdsFooterItem>
            <a href="/">
              <TdsIcon name="truck"></TdsIcon>
            </a>
          </TdsFooterItem>
        </TdsFooterGroup>
      </div>
    </TdsFooter>
  );
}
