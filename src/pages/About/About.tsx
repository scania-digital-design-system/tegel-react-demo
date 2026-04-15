import { TdsButton, TdsIcon, TdsTag, TdsTooltip } from '@scania/tegel-react';
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

const noop = () => {};

const About = () => {
  return (
    <article className="about-beta-test">
      <header className="about-beta-test__intro">
        <h2 className="tds-headline-02">Variable migration test — 1.51.0-var-work-beta.3</h2>
        <p className="tds-body-01">
          Testing ground for the variable migration covering{' '}
          <strong>Button, Tooltip and Tag</strong>. Toggle the brand to swap the{' '}
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

      {/* -------------------------------- Button -------------------------------- */}
      <Section title="Button">
        <State label="Variants — size lg">
          <TdsButton onClick={noop} variant="primary" size="lg" text="Primary lg" />
          <TdsButton onClick={noop} variant="secondary" size="lg" text="Secondary lg" />
          <TdsButton onClick={noop} variant="ghost" size="lg" text="Ghost lg" />
          <TdsButton onClick={noop} variant="danger" size="lg" text="Danger lg" />
        </State>

        <State label="Variants — size md">
          <TdsButton onClick={noop} variant="primary" size="md" text="Primary md" />
          <TdsButton onClick={noop} variant="secondary" size="md" text="Secondary md" />
          <TdsButton onClick={noop} variant="ghost" size="md" text="Ghost md" />
          <TdsButton onClick={noop} variant="danger" size="md" text="Danger md" />
        </State>

        <State label="Variants — size sm">
          <TdsButton onClick={noop} variant="primary" size="sm" text="Primary sm" />
          <TdsButton onClick={noop} variant="secondary" size="sm" text="Secondary sm" />
          <TdsButton onClick={noop} variant="ghost" size="sm" text="Ghost sm" />
          <TdsButton onClick={noop} variant="danger" size="sm" text="Danger sm" />
        </State>

        <State label="Variants — size xs">
          <TdsButton onClick={noop} variant="primary" size="xs" text="Primary xs" />
          <TdsButton onClick={noop} variant="secondary" size="xs" text="Secondary xs" />
          <TdsButton onClick={noop} variant="ghost" size="xs" text="Ghost xs" />
          <TdsButton onClick={noop} variant="danger" size="xs" text="Danger xs" />
        </State>

        <State label="Disabled state — all variants">
          <TdsButton onClick={noop} variant="primary" size="md" text="Primary disabled" disabled />
          <TdsButton
            onClick={noop}
            variant="secondary"
            size="md"
            text="Secondary disabled"
            disabled
          />
          <TdsButton onClick={noop} variant="ghost" size="md" text="Ghost disabled" disabled />
          <TdsButton onClick={noop} variant="danger" size="md" text="Danger disabled" disabled />
        </State>

        <State label="Fullbleed">
          <div style={{ width: '100%' }}>
            <TdsButton
              onClick={noop}
              variant="primary"
              size="lg"
              fullbleed
              text="Primary fullbleed"
            />
          </div>
        </State>

        <State label="With icon — text + icon">
          <TdsButton onClick={noop} variant="primary" size="md" text="With icon">
            <TdsIcon slot="icon" size="16px" name="arrow_diagonal" />
          </TdsButton>
          <TdsButton onClick={noop} variant="secondary" size="md" text="With icon">
            <TdsIcon slot="icon" size="16px" name="truck" />
          </TdsButton>
          <TdsButton onClick={noop} variant="ghost" size="md" text="With icon">
            <TdsIcon slot="icon" size="16px" name="info" />
          </TdsButton>
          <TdsButton onClick={noop} variant="danger" size="md" text="With icon">
            <TdsIcon slot="icon" size="16px" name="error" />
          </TdsButton>
        </State>

        <State label="Icon-only buttons (no text)">
          <TdsButton onClick={noop} variant="primary" size="md">
            <TdsIcon slot="icon" size="16px" name="truck" />
          </TdsButton>
          <TdsButton onClick={noop} variant="secondary" size="md">
            <TdsIcon slot="icon" size="16px" name="truck" />
          </TdsButton>
          <TdsButton onClick={noop} variant="ghost" size="md">
            <TdsIcon slot="icon" size="16px" name="truck" />
          </TdsButton>
          <TdsButton onClick={noop} variant="danger" size="md">
            <TdsIcon slot="icon" size="16px" name="error" />
          </TdsButton>
        </State>
      </Section>

      {/* -------------------------------- Tooltip ------------------------------- */}
      <Section title="Tooltip">
        <State label="Placement — top / right / bottom / left (hover the buttons)">
          <div className="about-beta-test__tooltip-row">
            <div className="about-beta-test__tooltip-anchor">
              <TdsTooltip
                placement="top"
                selector="#tt-btn-top"
                text="Tooltip on top"
                mouseOverTooltip
              />
              <TdsButton id="tt-btn-top" size="sm" text="Top" />
            </div>
            <div className="about-beta-test__tooltip-anchor">
              <TdsTooltip
                placement="right"
                selector="#tt-btn-right"
                text="Tooltip on right"
                mouseOverTooltip
              />
              <TdsButton id="tt-btn-right" size="sm" text="Right" />
            </div>
            <div className="about-beta-test__tooltip-anchor">
              <TdsTooltip
                placement="bottom"
                selector="#tt-btn-bottom"
                text="Tooltip on bottom"
                mouseOverTooltip
              />
              <TdsButton id="tt-btn-bottom" size="sm" text="Bottom" />
            </div>
            <div className="about-beta-test__tooltip-anchor">
              <TdsTooltip
                placement="left"
                selector="#tt-btn-left"
                text="Tooltip on left"
                mouseOverTooltip
              />
              <TdsButton id="tt-btn-left" size="sm" text="Left" />
            </div>
          </div>
        </State>

        <State label="Tooltip with rich slotted content (bold, italic)">
          <div className="about-beta-test__tooltip-anchor">
            <TdsTooltip placement="bottom" selector="#tt-btn-rich" mouseOverTooltip>
              <p className="tds-detail-05" style={{ margin: 0 }}>
                Rich content with <b>bold</b> and <i>italic</i> tags.
              </p>
            </TdsTooltip>
            <TdsButton id="tt-btn-rich" size="sm" text="Hover for rich content" />
          </div>
        </State>

        <State label="Tooltip with long text (wrapping edge case)">
          <div className="about-beta-test__tooltip-anchor">
            <TdsTooltip
              placement="bottom"
              selector="#tt-btn-long"
              text="This is a much longer tooltip text meant to verify that wrapping, padding and line-height render correctly after the variable migration across both brands."
              mouseOverTooltip
            />
            <TdsButton id="tt-btn-long" size="sm" text="Hover for long tooltip" />
          </div>
        </State>

        <State label="Tooltip anchored to a disabled button">
          <div className="about-beta-test__tooltip-anchor">
            <TdsTooltip
              placement="top"
              selector="#tt-btn-disabled"
              text="Anchored to a disabled button"
              mouseOverTooltip
            />
            <TdsButton id="tt-btn-disabled" size="sm" text="Disabled anchor" disabled />
          </div>
        </State>
      </Section>

      {/* --------------------------------- Tag ---------------------------------- */}
      <Section title="Tag">
        <State label="Default size — all variants">
          <TdsTag text="Tag Label" />
          <TdsTag text="Information" variant="Information" />
          <TdsTag text="Success" variant="Success" />
          <TdsTag text="Warning" variant="Warning" />
          <TdsTag text="Error" variant="Error" />
          <TdsTag text="New" variant="New" />
        </State>

        <State label="Small size — all variants">
          <TdsTag text="Tag Label" size="sm" />
          <TdsTag text="Information" size="sm" variant="Information" />
          <TdsTag text="Success" size="sm" variant="Success" />
          <TdsTag text="Warning" size="sm" variant="Warning" />
          <TdsTag text="Error" size="sm" variant="Error" />
          <TdsTag text="New" size="sm" variant="New" />
        </State>

        <State label="Tags with prefix icon">
          <TdsTag text="Info with icon" variant="Information">
            <TdsIcon slot="prefix" name="info" size="16px" />
          </TdsTag>
          <TdsTag text="Success with icon" variant="Success">
            <TdsIcon slot="prefix" name="tick" size="16px" />
          </TdsTag>
          <TdsTag text="Warning with icon" variant="Warning">
            <TdsIcon slot="prefix" name="warning" size="16px" />
          </TdsTag>
          <TdsTag text="Error with icon" variant="Error">
            <TdsIcon slot="prefix" name="error" size="16px" />
          </TdsTag>
        </State>

        <State label="Tags with long labels (truncation edge case)">
          <TdsTag text="A much longer tag label than usual" />
          <TdsTag text="A much longer tag label than usual" variant="Information" />
          <TdsTag text="A much longer tag label than usual" size="sm" variant="Success" />
        </State>
      </Section>
    </article>
  );
};

export default About;
