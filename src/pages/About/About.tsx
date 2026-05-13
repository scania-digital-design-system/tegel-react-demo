import { useEffect, useRef, useState } from "react";
import {
  TdsBanner,
  TdsButton,
  TdsCard,
  TdsIcon,
  TdsMessage,
  TdsModal,
  TdsToast,
} from "@scania/tegel-react";
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

const ICONS = [
  "truck",
  "bus",
  "engine",
  "fuel",
  "settings",
  "info",
  "warning",
  "tick",
  "cross",
  "search",
  "filters",
  "calendar",
  "clock",
  "email",
  "phone",
  "profile",
  "notification",
  "download",
  "upload",
  "save",
] as const;

const About = () => {
  const [brand, setBrand] = useBrand();
  const [modalOpen, setModalOpen] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const modalTriggerRef = useRef<HTMLTdsButtonElement | null>(null);
  const overlayTriggerRef = useRef<HTMLTdsButtonElement | null>(null);

  return (
    <article className="about-page">
      <header className="about-header">
        <h2 className="tds-headline-02">Component test ground (1.53.0-var-pre-beta.0)</h2>
        <p className="tds-body-01">
          Visual test ground for component behavior in{" "}
          <code>@scania/tegel 1.53.0-var-pre-beta.0</code>. Each section below isolates one
          component so you can verify rendering, interaction, and the brand-aware tokens.
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

      <h2 className="tds-headline-03 section-divider">tds-card</h2>

      <section className="component-section">
        <h3 className="tds-headline-04">Variants</h3>
        <p className="component-section__hint tds-detail-06">
          Default, clickable, with image, and expandable.
        </p>
        <div className="variant-grid">
          <div className="variant-grid__cell">
            <span className="variant-grid__caption tds-detail-06">default</span>
            <TdsCard header="Default card" subheader="A standard card">
              <p slot="body" className="tds-body-02">
                Cards group related content. Set the header and subheader, and put body content in
                the default slot.
              </p>
            </TdsCard>
          </div>
          <div className="variant-grid__cell">
            <span className="variant-grid__caption tds-detail-06">clickable</span>
            <TdsCard clickable header="Clickable card" subheader="Hover and click me">
              <p slot="body" className="tds-body-02">
                <code>clickable</code> turns the entire card surface into an interactive target.
              </p>
            </TdsCard>
          </div>
          <div className="variant-grid__cell">
            <span className="variant-grid__caption tds-detail-06">image (above header)</span>
            <TdsCard
              header="Card with image"
              subheader="Image above header"
              imagePlacement="above-header"
              bodyImg="https://images.unsplash.com/photo-1493238792000-8113da705763?w=480&q=60"
              bodyImgAlt="Truck on a mountain road"
            >
              <p slot="body" className="tds-body-02">Body content sits below the image.</p>
            </TdsCard>
          </div>
        </div>
      </section>

      <h2 className="tds-headline-03 section-divider">tds-modal</h2>

      <section className="component-section">
        <h3 className="tds-headline-04">Trigger</h3>
        <p className="component-section__hint tds-detail-06">
          Click the button to open. The modal includes its own backdrop overlay.
        </p>
        <div className="variant-grid">
          <div className="variant-grid__cell">
            <TdsButton
              ref={modalTriggerRef}
              text="Open modal"
              size="md"
              onClick={() => setModalOpen(true)}
            />
            <TdsModal
              header="Example modal"
              size="md"
              show={modalOpen}
              referenceEl={modalTriggerRef.current}
              onTdsClose={() => setModalOpen(false)}
            >
              <p slot="body" className="tds-body-02">
                Modal body content. Modals render on top of an overlay that dims the page behind
                them.
              </p>
              <div slot="actions">
                <TdsButton
                  size="md"
                  text="Close"
                  modeVariant="secondary"
                  onClick={() => setModalOpen(false)}
                />
              </div>
            </TdsModal>
          </div>
        </div>
      </section>

      <h2 className="tds-headline-03 section-divider">overlay</h2>

      <section className="component-section">
        <h3 className="tds-headline-04">Modal-as-overlay</h3>
        <p className="component-section__hint tds-detail-06">
          Tegel does not ship a standalone <code>tds-overlay</code>; the overlay/backdrop is a
          built-in part of <code>tds-modal</code>. The button below opens a minimal, header-less
          modal so the overlay treatment is easy to inspect.
        </p>
        <div className="variant-grid">
          <div className="variant-grid__cell">
            <TdsButton
              ref={overlayTriggerRef}
              text="Show overlay"
              size="md"
              modeVariant="secondary"
              onClick={() => setOverlayOpen(true)}
            />
            <TdsModal
              size="sm"
              closable
              show={overlayOpen}
              referenceEl={overlayTriggerRef.current}
              onTdsClose={() => setOverlayOpen(false)}
            >
              <p slot="body" className="tds-body-02">
                Click outside this surface to dismiss — that&apos;s the overlay catching the click.
              </p>
            </TdsModal>
          </div>
        </div>
      </section>

      <h2 className="tds-headline-03 section-divider">scrollbar</h2>

      <section className="component-section">
        <h3 className="tds-headline-04">Scrollable container</h3>
        <p className="component-section__hint tds-detail-06">
          Tegel does not ship a standalone <code>tds-scrollbar</code>; native browser scrollbars
          appear on any container with overflow. The box below has fixed height + long content so
          the scrollbar appears.
        </p>
        <div className="variant-grid">
          <div className="variant-grid__cell scrollable-box">
            {Array.from({ length: 30 }).map((_, i) => (
              <p key={`scroll-row-${i}`} className="tds-body-02 scrollable-box__row">
                Row {i + 1}: lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            ))}
          </div>
        </div>
      </section>

      <h2 className="tds-headline-03 section-divider">tds-banner</h2>

      <section className="component-section">
        <h3 className="tds-headline-04">Variants</h3>
        <p className="component-section__hint tds-detail-06">
          <code>variant</code>: default, information, error.
        </p>
        <div className="variant-stack">
          <TdsBanner
            variant="default"
            header="Default banner"
            subheader="Use for neutral page-level messaging."
          />
          <TdsBanner
            variant="information"
            header="Information banner"
            subheader="Use for context the user should know about."
          />
          <TdsBanner
            variant="error"
            header="Error banner"
            subheader="Use for blocking problems."
          />
        </div>
      </section>

      <h2 className="tds-headline-03 section-divider">tds-message</h2>

      <section className="component-section">
        <h3 className="tds-headline-04">Variants</h3>
        <p className="component-section__hint tds-detail-06">
          <code>variant</code>: information, success, warning, error.
        </p>
        <div className="variant-stack">
          <TdsMessage variant="information" header="Information message">
            Inline message variant — information.
          </TdsMessage>
          <TdsMessage variant="success" header="Success message">
            Inline message variant — success.
          </TdsMessage>
          <TdsMessage variant="warning" header="Warning message">
            Inline message variant — warning.
          </TdsMessage>
          <TdsMessage variant="error" header="Error message">
            Inline message variant — error.
          </TdsMessage>
        </div>
      </section>

      <h2 className="tds-headline-03 section-divider">tds-toast</h2>

      <section className="component-section">
        <h3 className="tds-headline-04">Variants</h3>
        <p className="component-section__hint tds-detail-06">
          Toasts render in a fixed corner. Click to spawn a fresh one; it appears in the top-right
          of the page.
        </p>
        <div className="variant-stack">
          <TdsToast
            variant="information"
            header="Information toast"
            subheader="Use for general notifications."
          />
          <TdsToast
            variant="success"
            header="Success toast"
            subheader="Use to confirm completed actions."
          />
          <TdsToast
            variant="warning"
            header="Warning toast"
            subheader="Use for non-blocking warnings."
          />
          <TdsToast
            variant="error"
            header="Error toast"
            subheader="Use for failures that need attention."
          />
        </div>
        <div className="variant-grid" style={{ marginTop: "var(--tds-spacing-element-16)" }}>
          <div className="variant-grid__cell">
            <span className="variant-grid__caption tds-detail-06">spawn dynamic toast</span>
            <TdsButton
              text={toastVisible ? "Hide toast" : "Show toast"}
              size="md"
              onClick={() => setToastVisible((v) => !v)}
            />
            {toastVisible && (
              <div className="toast-floater">
                <TdsToast
                  variant="success"
                  header="Toast spawned"
                  subheader="Triggered from a button click."
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <h2 className="tds-headline-03 section-divider">tds-icon</h2>

      <section className="component-section">
        <h3 className="tds-headline-04">Icon grid</h3>
        <p className="component-section__hint tds-detail-06">
          Common icon names rendered at 24px.
        </p>
        <div className="icon-grid">
          {ICONS.map((name) => (
            <div className="icon-grid__cell" key={`icon-${name}`}>
              <TdsIcon name={name} size="24px" />
              <span className="tds-detail-06">{name}</span>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default About;
