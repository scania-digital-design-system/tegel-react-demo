/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  TdsBreadcrumb,
  TdsBreadcrumbs,
  TdsDivider,
  TdsFooter,
  TdsFooterGroup,
  TdsFooterItem,
  TdsIcon,
  TdsLink,
} from '@scania/tegel-react';
import BrandSwitcher from '../../components/BrandSwitcher/BrandSwitcher';
import './About.scss';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="about-beta-test__section">
    <h3 className="tds-headline-03 about-beta-test__section-title">{title}</h3>
    {children}
  </section>
);

const State = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="about-beta-test__state">
    <p className="tds-detail-02 about-beta-test__state-label">{label}</p>
    <div className="about-beta-test__state-body">{children}</div>
  </div>
);

const About = () => {
  return (
    <article className="about-beta-test">
      <header className="about-beta-test__intro">
        <h2 className="tds-headline-02">Variable migration test — 1.51.0-var-work-beta.7</h2>
        <p className="tds-body-01">
          Testing ground for the variable migration covering{' '}
          <strong>Link, Breadcrumbs, Divider and Footer</strong>. Toggle the brand to swap the{' '}
          <code>.scania</code> / <code>.traton</code> class on the <code>body</code> element and
          verify token output is correct across both brands.
        </p>
      </header>

      <div className="about-beta-test__brand-toggle">
        <BrandSwitcher />
        <p className="tds-detail-05">
          Adds/removes <code>.scania</code> / <code>.traton</code> on <code>body</code>.
        </p>
      </div>

      {/* -------------------------------- Link -------------------------------- */}
      <Section title="Link">
        <State label="Default link">
          <TdsLink>
            <a href="#link-default">Default link</a>
          </TdsLink>
        </State>

        <State label="Link without underline">
          <TdsLink underline={false}>
            <a href="#link-no-underline">No underline</a>
          </TdsLink>
        </State>

        <State label="Disabled link">
          <TdsLink disabled>
            <a href="#link-disabled">Disabled link</a>
          </TdsLink>
        </State>

        <State label="Disabled link without underline">
          <TdsLink disabled underline={false}>
            <a href="#link-disabled-no-underline">Disabled, no underline</a>
          </TdsLink>
        </State>

        <State label="External link (new tab)">
          <TdsLink>
            <a target="_blank" rel="noreferrer" href="https://tegel.scania.com/home">
              Open Tegel in new tab
            </a>
          </TdsLink>
        </State>

        <State label="Link inline inside a paragraph">
          <p className="tds-body-01" style={{ margin: 0 }}>
            Inline link inside text — visit{' '}
            <TdsLink>
              <a href="#link-inline">the Tegel docs</a>
            </TdsLink>{' '}
            for more info.
          </p>
        </State>
      </Section>

      {/* ----------------------------- Breadcrumbs ----------------------------- */}
      <Section title="Breadcrumbs">
        <State label="Standard breadcrumbs (3 levels, last is current)">
          <TdsBreadcrumbs>
            <TdsBreadcrumb>
              <a href="#">Level 1</a>
            </TdsBreadcrumb>
            <TdsBreadcrumb>
              <a href="#">Level 2</a>
            </TdsBreadcrumb>
            <TdsBreadcrumb current>
              <a href="#">Level 3 (current)</a>
            </TdsBreadcrumb>
          </TdsBreadcrumbs>
        </State>

        <State label="Single breadcrumb marked as current">
          <TdsBreadcrumbs>
            <TdsBreadcrumb current>
              <a href="#">Only page (current)</a>
            </TdsBreadcrumb>
          </TdsBreadcrumbs>
        </State>

        <State label="Deep breadcrumb trail (5 levels)">
          <TdsBreadcrumbs>
            <TdsBreadcrumb>
              <a href="#">Home</a>
            </TdsBreadcrumb>
            <TdsBreadcrumb>
              <a href="#">Trucks</a>
            </TdsBreadcrumb>
            <TdsBreadcrumb>
              <a href="#">Heavy duty</a>
            </TdsBreadcrumb>
            <TdsBreadcrumb>
              <a href="#">Series 770</a>
            </TdsBreadcrumb>
            <TdsBreadcrumb current>
              <a href="#">Configurator</a>
            </TdsBreadcrumb>
          </TdsBreadcrumbs>
        </State>

        <State label="Long labels — should wrap/truncate gracefully">
          <TdsBreadcrumbs>
            <TdsBreadcrumb>
              <a href="#">A very long first breadcrumb label</a>
            </TdsBreadcrumb>
            <TdsBreadcrumb>
              <a href="#">Another long breadcrumb in the middle</a>
            </TdsBreadcrumb>
            <TdsBreadcrumb current>
              <a href="#">Final long current breadcrumb label</a>
            </TdsBreadcrumb>
          </TdsBreadcrumbs>
        </State>
      </Section>

      {/* -------------------------------- Divider ------------------------------- */}
      <Section title="Divider">
        <State label="Horizontal — subtle (default)">
          <div style={{ width: '100%' }}>
            <p className="tds-body-01" style={{ margin: 0 }}>
              Content above
            </p>
            <TdsDivider />
            <p className="tds-body-01" style={{ margin: 0 }}>
              Content below
            </p>
          </div>
        </State>

        <State label="Horizontal — discrete">
          <div style={{ width: '100%' }}>
            <p className="tds-body-01" style={{ margin: 0 }}>
              Content above
            </p>
            <TdsDivider variant="discrete" />
            <p className="tds-body-01" style={{ margin: 0 }}>
              Content below
            </p>
          </div>
        </State>

        <State label="Horizontal — soft">
          <div style={{ width: '100%' }}>
            <p className="tds-body-01" style={{ margin: 0 }}>
              Content above
            </p>
            <TdsDivider variant="soft" />
            <p className="tds-body-01" style={{ margin: 0 }}>
              Content below
            </p>
          </div>
        </State>

        <State label="Horizontal — defined">
          <div style={{ width: '100%' }}>
            <p className="tds-body-01" style={{ margin: 0 }}>
              Content above
            </p>
            <TdsDivider variant="defined" />
            <p className="tds-body-01" style={{ margin: 0 }}>
              Content below
            </p>
          </div>
        </State>

        <State label="Horizontal — dark-blue">
          <div style={{ width: '100%' }}>
            <p className="tds-body-01" style={{ margin: 0 }}>
              Content above
            </p>
            <TdsDivider variant="dark-blue" />
            <p className="tds-body-01" style={{ margin: 0 }}>
              Content below
            </p>
          </div>
        </State>

        <State label="Vertical — subtle (default)">
          <div className="about-beta-test__vertical-divider-row">
            <span className="tds-body-01">Left</span>
            <TdsDivider orientation="vertical" />
            <span className="tds-body-01">Right</span>
          </div>
        </State>

        <State label="Vertical — discrete">
          <div className="about-beta-test__vertical-divider-row">
            <span className="tds-body-01">Left</span>
            <TdsDivider orientation="vertical" variant="discrete" />
            <span className="tds-body-01">Right</span>
          </div>
        </State>

        <State label="Vertical — soft">
          <div className="about-beta-test__vertical-divider-row">
            <span className="tds-body-01">Left</span>
            <TdsDivider orientation="vertical" variant="soft" />
            <span className="tds-body-01">Right</span>
          </div>
        </State>

        <State label="Vertical — defined">
          <div className="about-beta-test__vertical-divider-row">
            <span className="tds-body-01">Left</span>
            <TdsDivider orientation="vertical" variant="defined" />
            <span className="tds-body-01">Right</span>
          </div>
        </State>

        <State label="Vertical — dark-blue">
          <div className="about-beta-test__vertical-divider-row">
            <span className="tds-body-01">Left</span>
            <TdsDivider orientation="vertical" variant="dark-blue" />
            <span className="tds-body-01">Right</span>
          </div>
        </State>
      </Section>

      {/* -------------------------------- Footer -------------------------------- */}
      <Section title="Footer">
        <State label="Full footer with top, start and end slots">
          <div className="about-beta-test__footer-preview">
            <TdsFooter>
              <div slot="top">
                <TdsFooterGroup title-text="Pages">
                  <TdsFooterItem>
                    <a href="#">Home</a>
                  </TdsFooterItem>
                  <TdsFooterItem>
                    <a href="#">Form</a>
                  </TdsFooterItem>
                </TdsFooterGroup>
                <TdsFooterGroup title-text="Legals">
                  <TdsFooterItem>
                    <a href="#">Terms & Conditions</a>
                  </TdsFooterItem>
                  <TdsFooterItem>
                    <a href="#">Privacy policy</a>
                  </TdsFooterItem>
                </TdsFooterGroup>
              </div>
              <div slot="start">
                <TdsFooterGroup>
                  <TdsFooterItem>
                    <a href="#">Start slot link 1</a>
                  </TdsFooterItem>
                  <TdsFooterItem>
                    <a href="#">Start slot link 2</a>
                  </TdsFooterItem>
                </TdsFooterGroup>
              </div>
              <div slot="end">
                <TdsFooterGroup>
                  <TdsFooterItem>
                    <a href="#" aria-label="Truck icon link">
                      <TdsIcon name="truck" />
                    </a>
                  </TdsFooterItem>
                  <TdsFooterItem>
                    <a href="#" aria-label="Info icon link">
                      <TdsIcon name="info" />
                    </a>
                  </TdsFooterItem>
                </TdsFooterGroup>
              </div>
            </TdsFooter>
          </div>
        </State>

        <State label="Minimal footer (start slot only)">
          <div className="about-beta-test__footer-preview">
            <TdsFooter>
              <div slot="start">
                <TdsFooterGroup>
                  <TdsFooterItem>
                    <a href="#">Copyright © Scania</a>
                  </TdsFooterItem>
                </TdsFooterGroup>
              </div>
            </TdsFooter>
          </div>
        </State>

        <State label="Footer with only icon links in end slot">
          <div className="about-beta-test__footer-preview">
            <TdsFooter>
              <div slot="end">
                <TdsFooterGroup>
                  <TdsFooterItem>
                    <a href="#" aria-label="Truck icon link">
                      <TdsIcon name="truck" />
                    </a>
                  </TdsFooterItem>
                  <TdsFooterItem>
                    <a href="#" aria-label="Info icon link">
                      <TdsIcon name="info" />
                    </a>
                  </TdsFooterItem>
                  <TdsFooterItem>
                    <a href="#" aria-label="Error icon link">
                      <TdsIcon name="error" />
                    </a>
                  </TdsFooterItem>
                </TdsFooterGroup>
              </div>
            </TdsFooter>
          </div>
        </State>
      </Section>
    </article>
  );
};

export default About;
