import { useEffect, useState } from "react";
import { TdsAccordion, TdsAccordionItem, TdsBlock } from "@scania/tegel-react";
import "./About.css";

type Brand = "scania" | "traton";

const useBrand = (): [Brand, (next: Brand) => void] => {
  const [brand, setBrand] = useState<Brand>(() => {
    if (typeof document === "undefined") return "scania";
    if (document.body.classList.contains("traton")) return "traton";
    return "scania";
  });

  useEffect(() => {
    const body = document.body;
    body.classList.remove("scania", "traton");
    body.classList.add(brand);
    return () => {
      body.classList.remove("scania", "traton");
    };
  }, [brand]);

  return [brand, setBrand];
};

const MODE_VARIANTS = [null, "primary", "secondary"] as const;
const COMPONENT_TAGS = ["section", "div", "article", "aside", "header", "footer", "nav", "main"] as const;

const About = () => {
  const [brand, setBrand] = useBrand();

  return (
    <article className="about-page">
      <header className="about-header">
        <h2 className="tds-headline-02">Block &amp; Accordion (1.54.0-block-acc-beta.0)</h2>
        <p className="tds-body-01">
          Test ground for <code>tds-block</code> and <code>tds-accordion</code> shipped in{" "}
          <code>@scania/tegel 1.54.0-block-acc-beta.0</code>. Each section isolates one prop axis so
          you can visually verify each combination across brands.
        </p>
        <fieldset className="brand-toggle">
          <legend className="brand-toggle__legend tds-detail-05">Brand</legend>
          <label
            className={`brand-toggle__btn${brand === "scania" ? " brand-toggle__btn--active" : ""}`}
          >
            <input
              type="radio"
              name="brand"
              value="scania"
              checked={brand === "scania"}
              onChange={() => setBrand("scania")}
            />
            Scania
          </label>
          <label
            className={`brand-toggle__btn${brand === "traton" ? " brand-toggle__btn--active" : ""}`}
          >
            <input
              type="radio"
              name="brand"
              value="traton"
              checked={brand === "traton"}
              onChange={() => setBrand("traton")}
            />
            Traton
          </label>
          <span className="brand-toggle__hint tds-detail-06">
            body classname: <code>.{brand}</code>
          </span>
        </fieldset>
      </header>

      <h2 className="tds-headline-03 section-divider">tds-block</h2>

      <section className="component-section">
        <h3 className="tds-headline-04">Mode variants</h3>
        <p className="component-section__hint tds-detail-06">
          <code>modeVariant</code>: null (default), primary, secondary. Sets the layer background.
        </p>
        <div className="variant-grid">
          {MODE_VARIANTS.map((mv) => (
            <div className="variant-grid__cell" key={`block-mode-${mv ?? "null"}`}>
              <span className="variant-grid__caption tds-detail-06">{mv ?? "null"}</span>
              <TdsBlock modeVariant={mv}>
                <h4 className="tds-headline-05">Block heading</h4>
                <p className="tds-body-02">
                  Block content rendered with <code>modeVariant={mv ?? "null"}</code>.
                </p>
              </TdsBlock>
            </div>
          ))}
        </div>
      </section>

      <section className="component-section">
        <h3 className="tds-headline-04">Nesting (primary)</h3>
        <p className="component-section__hint tds-detail-06">
          Nested blocks alternate backgrounds automatically based on their nesting level.
        </p>
        <TdsBlock modeVariant="primary">
          <h4 className="tds-headline-05">Outer block</h4>
          <p className="tds-body-02">Top-level content.</p>
          <TdsBlock>
            <h5 className="tds-headline-06">Middle block</h5>
            <p className="tds-body-02">First level of nesting.</p>
            <TdsBlock>
              <h6 className="tds-headline-07">Inner block</h6>
              <p className="tds-body-02">Second level of nesting.</p>
            </TdsBlock>
          </TdsBlock>
        </TdsBlock>
      </section>

      <section className="component-section">
        <h3 className="tds-headline-04">Nesting (secondary)</h3>
        <p className="component-section__hint tds-detail-06">
          Same nesting structure with <code>modeVariant=&quot;secondary&quot;</code> on the outer block.
        </p>
        <TdsBlock modeVariant="secondary">
          <h4 className="tds-headline-05">Outer block</h4>
          <p className="tds-body-02">Top-level content.</p>
          <TdsBlock>
            <h5 className="tds-headline-06">Middle block</h5>
            <p className="tds-body-02">First level of nesting.</p>
            <TdsBlock>
              <h6 className="tds-headline-07">Inner block</h6>
              <p className="tds-body-02">Second level of nesting.</p>
            </TdsBlock>
          </TdsBlock>
        </TdsBlock>
      </section>

      <section className="component-section">
        <h3 className="tds-headline-04">Component tags</h3>
        <p className="component-section__hint tds-detail-06">
          <code>componentTag</code> swaps the rendered HTML element. Useful for landmarks and semantic structure.
        </p>
        <div className="variant-grid">
          {COMPONENT_TAGS.map((tag) => (
            <div className="variant-grid__cell" key={`block-tag-${tag}`}>
              <span className="variant-grid__caption tds-detail-06">{tag}</span>
              <TdsBlock componentTag={tag}>
                <p className="tds-body-02">
                  Rendered as <code>&lt;{tag}&gt;</code>.
                </p>
              </TdsBlock>
            </div>
          ))}
        </div>
      </section>

      <h2 className="tds-headline-03 section-divider">tds-accordion</h2>

      <section className="component-section">
        <h3 className="tds-headline-04">Mode variants</h3>
        <p className="component-section__hint tds-detail-06">
          <code>modeVariant</code>: null (default), primary, secondary.
        </p>
        <div className="variant-grid">
          {MODE_VARIANTS.map((mv) => (
            <div className="variant-grid__cell" key={`acc-mode-${mv ?? "null"}`}>
              <span className="variant-grid__caption tds-detail-06">{mv ?? "null"}</span>
              <TdsAccordion modeVariant={mv}>
                <TdsAccordionItem header="Section 1">
                  <p className="tds-body-02">Content for section 1.</p>
                </TdsAccordionItem>
                <TdsAccordionItem header="Section 2">
                  <p className="tds-body-02">Content for section 2.</p>
                </TdsAccordionItem>
                <TdsAccordionItem header="Section 3" disabled>
                  <p className="tds-body-02">This item is disabled.</p>
                </TdsAccordionItem>
              </TdsAccordion>
            </div>
          ))}
        </div>
      </section>

      <section className="component-section">
        <h3 className="tds-headline-04">Expanded by default</h3>
        <p className="component-section__hint tds-detail-06">
          <code>expanded</code> on an item opens it on mount.
        </p>
        <TdsAccordion>
          <TdsAccordionItem header="Pre-expanded" expanded>
            <p className="tds-body-02">This item is open on mount.</p>
          </TdsAccordionItem>
          <TdsAccordionItem header="Collapsed">
            <p className="tds-body-02">This item starts collapsed.</p>
          </TdsAccordionItem>
        </TdsAccordion>
      </section>

      <section className="component-section">
        <h3 className="tds-headline-04">Expand-icon position</h3>
        <p className="component-section__hint tds-detail-06">
          <code>expandIconPosition</code>: end (default), start.
        </p>
        <TdsAccordion>
          <TdsAccordionItem header="Icon end (default)" expandIconPosition="end">
            <p className="tds-body-02">Chevron icon on the right.</p>
          </TdsAccordionItem>
          <TdsAccordionItem header="Icon start" expandIconPosition="start">
            <p className="tds-body-02">Chevron icon on the left.</p>
          </TdsAccordionItem>
        </TdsAccordion>
      </section>

      <section className="component-section">
        <h3 className="tds-headline-04">Padding reset</h3>
        <p className="component-section__hint tds-detail-06">
          <code>paddingReset</code> drops the right padding from 64px to 16px — useful for wide content.
        </p>
        <TdsAccordion>
          <TdsAccordionItem header="Default padding">
            <p className="tds-body-02">Default 64px right padding.</p>
          </TdsAccordionItem>
          <TdsAccordionItem header="Padding reset" paddingReset>
            <p className="tds-body-02">Reduced 16px right padding.</p>
          </TdsAccordionItem>
        </TdsAccordion>
      </section>

      <section className="component-section">
        <h3 className="tds-headline-04">Hide last border</h3>
        <p className="component-section__hint tds-detail-06">
          <code>hideLastBorder</code> on the parent removes the divider after the last item.
        </p>
        <TdsAccordion hideLastBorder>
          <TdsAccordionItem header="Section 1">
            <p className="tds-body-02">No border after the last item.</p>
          </TdsAccordionItem>
          <TdsAccordionItem header="Section 2">
            <p className="tds-body-02">No border after the last item.</p>
          </TdsAccordionItem>
        </TdsAccordion>
      </section>

      <section className="component-section">
        <h3 className="tds-headline-04">Heading level (aria-level)</h3>
        <p className="component-section__hint tds-detail-06">
          <code>ariaLevelValue</code>: 1–6 — sets the heading semantics for assistive tech.
        </p>
        <TdsAccordion>
          <TdsAccordionItem header="Level 2" ariaLevelValue="2">
            <p className="tds-body-02">Header is announced as h2.</p>
          </TdsAccordionItem>
          <TdsAccordionItem header="Level 4" ariaLevelValue="4">
            <p className="tds-body-02">Header is announced as h4.</p>
          </TdsAccordionItem>
        </TdsAccordion>
      </section>

      <section className="component-section">
        <h3 className="tds-headline-04">Accordion inside Block</h3>
        <p className="component-section__hint tds-detail-06">
          The two components combine cleanly — accordions sit on the block&apos;s layered surface.
        </p>
        <TdsBlock modeVariant="primary">
          <h4 className="tds-headline-05">Section group</h4>
          <p className="tds-body-02">Accordion content rendered on a primary block.</p>
          <TdsAccordion>
            <TdsAccordionItem header="Details" expanded>
              <p className="tds-body-02">Open by default.</p>
            </TdsAccordionItem>
            <TdsAccordionItem header="More details">
              <p className="tds-body-02">Click to expand.</p>
            </TdsAccordionItem>
          </TdsAccordion>
        </TdsBlock>
      </section>
    </article>
  );
};

export default About;
