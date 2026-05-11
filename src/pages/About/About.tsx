import { useEffect, useState } from "react";
import { TdsIcon, TdsTextField, TdsTextarea } from "@scania/tegel-react";
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

const SIZES = ["sm", "md", "lg"] as const;
const LABEL_POSITIONS = ["no-label", "inside", "outside"] as const;
const STATES = ["default", "success", "error"] as const;
const MODE_VARIANTS = [null, "primary", "secondary"] as const;

const About = () => {
  const [brand, setBrand] = useBrand();

  return (
    <article className="about-page">
      <header className="about-header">
        <h2 className="tds-headline-02">Text field variants (1.53.0-field-var.0)</h2>
        <p className="tds-body-01">
          Test ground for <code>tds-text-field</code> and <code>tds-textarea</code> variants in{" "}
          <code>@scania/tegel 1.53.0-field-var.0</code>. Every section below isolates one prop axis
          so you can visually verify each combination.
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

      <h2 className="tds-headline-03 section-divider">tds-text-field</h2>

      <section className="component-section">
        <h3 className="tds-headline-04">Label positions</h3>
        <p className="component-section__hint tds-detail-06">
          <code>labelPosition</code>: no-label (default), inside, outside.
        </p>
        <div className="variant-grid">
          {LABEL_POSITIONS.map((pos) => (
            <div className="variant-grid__cell" key={`tf-label-${pos}`}>
              <span className="variant-grid__caption tds-detail-06">{pos}</span>
              <TdsTextField
                labelPosition={pos}
                label="Label text"
                placeholder="Placeholder"
                helper="Helper text"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="component-section">
        <h3 className="tds-headline-04">Sizes</h3>
        <p className="component-section__hint tds-detail-06">
          <code>size</code>: sm, md, lg (default).
        </p>
        <div className="variant-grid">
          {SIZES.map((size) => (
            <div className="variant-grid__cell" key={`tf-size-${size}`}>
              <span className="variant-grid__caption tds-detail-06">{size}</span>
              <TdsTextField
                size={size}
                labelPosition="outside"
                label={`Size ${size}`}
                placeholder="Placeholder"
                helper="Helper text"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="component-section">
        <h3 className="tds-headline-04">States</h3>
        <p className="component-section__hint tds-detail-06">
          <code>state</code>: default, success, error.
        </p>
        <div className="variant-grid">
          {STATES.map((state) => (
            <div className="variant-grid__cell" key={`tf-state-${state}`}>
              <span className="variant-grid__caption tds-detail-06">{state}</span>
              <TdsTextField
                state={state}
                labelPosition="outside"
                label={`State: ${state}`}
                placeholder="Placeholder"
                helper={
                  state === "error"
                    ? "Something is wrong"
                    : state === "success"
                      ? "Looks good!"
                      : "Helper text"
                }
                value={state === "default" ? "" : "Some value"}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="component-section">
        <h3 className="tds-headline-04">Disabled and read-only</h3>
        <p className="component-section__hint tds-detail-06">
          <code>disabled</code>, <code>readOnly</code>, <code>readOnly + hideReadOnlyIcon</code>.
        </p>
        <div className="variant-grid">
          <div className="variant-grid__cell">
            <span className="variant-grid__caption tds-detail-06">disabled</span>
            <TdsTextField
              disabled
              labelPosition="outside"
              label="Disabled"
              placeholder="Placeholder"
              value="Disabled value"
              helper="Helper text"
            />
          </div>
          <div className="variant-grid__cell">
            <span className="variant-grid__caption tds-detail-06">readOnly</span>
            <TdsTextField
              readOnly
              labelPosition="outside"
              label="Read only"
              value="Read-only value"
              helper="Helper text"
            />
          </div>
          <div className="variant-grid__cell">
            <span className="variant-grid__caption tds-detail-06">readOnly + hideReadOnlyIcon</span>
            <TdsTextField
              readOnly
              hideReadOnlyIcon
              labelPosition="outside"
              label="Read only (no icon)"
              value="Read-only value"
              helper="Helper text"
            />
          </div>
        </div>
      </section>

      <section className="component-section">
        <h3 className="tds-headline-04">Mode variants</h3>
        <p className="component-section__hint tds-detail-06">
          <code>modeVariant</code>: null (default), primary, secondary. Rendered on alternating
          backgrounds.
        </p>
        <div className="variant-grid">
          {MODE_VARIANTS.map((mv, i) => (
            <div
              className={`variant-grid__cell variant-grid__cell--${i % 2 === 0 ? "light" : "dark"}`}
              key={`tf-mode-${mv ?? "null"}`}
            >
              <span className="variant-grid__caption tds-detail-06">{mv ?? "null"}</span>
              <TdsTextField
                modeVariant={mv}
                labelPosition="outside"
                label={`Mode ${mv ?? "null"}`}
                placeholder="Placeholder"
                helper="Helper text"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="component-section">
        <h3 className="tds-headline-04">Prefix and suffix slots</h3>
        <p className="component-section__hint tds-detail-06">
          Icons in <code>slot="prefix"</code> and <code>slot="suffix"</code>.
        </p>
        <div className="variant-grid">
          <div className="variant-grid__cell">
            <span className="variant-grid__caption tds-detail-06">prefix only</span>
            <TdsTextField labelPosition="outside" label="Prefix" placeholder="Search">
              <TdsIcon slot="prefix" name="search" size="20px" />
            </TdsTextField>
          </div>
          <div className="variant-grid__cell">
            <span className="variant-grid__caption tds-detail-06">suffix only</span>
            <TdsTextField
              labelPosition="outside"
              label="Suffix"
              placeholder="Amount"
              helper="With suffix icon"
            >
              <TdsIcon slot="suffix" name="info" size="20px" />
            </TdsTextField>
          </div>
          <div className="variant-grid__cell">
            <span className="variant-grid__caption tds-detail-06">prefix + suffix</span>
            <TdsTextField
              labelPosition="outside"
              label="Both"
              placeholder="Placeholder"
              helper="Both slots filled"
            >
              <TdsIcon slot="prefix" name="search" size="20px" />
              <TdsIcon slot="suffix" name="cross" size="20px" />
            </TdsTextField>
          </div>
        </div>
      </section>

      <section className="component-section">
        <h3 className="tds-headline-04">Input types</h3>
        <p className="component-section__hint tds-detail-06">
          <code>type</code>: text (default), password, number, email, tel.
        </p>
        <div className="variant-grid">
          <div className="variant-grid__cell">
            <span className="variant-grid__caption tds-detail-06">text</span>
            <TdsTextField
              type="text"
              labelPosition="outside"
              label="Text"
              placeholder="Free text"
            />
          </div>
          <div className="variant-grid__cell">
            <span className="variant-grid__caption tds-detail-06">password</span>
            <TdsTextField
              type="password"
              labelPosition="outside"
              label="Password"
              placeholder="••••••••"
              value="secretvalue"
            />
          </div>
          <div className="variant-grid__cell">
            <span className="variant-grid__caption tds-detail-06">number</span>
            <TdsTextField
              type="number"
              labelPosition="outside"
              label="Number"
              placeholder="0"
              min={0}
              max={100}
              step={1}
            />
          </div>
          <div className="variant-grid__cell">
            <span className="variant-grid__caption tds-detail-06">number (hideNumberArrows)</span>
            <TdsTextField
              type="number"
              hideNumberArrows
              labelPosition="outside"
              label="Number, no arrows"
              placeholder="0"
            />
          </div>
          <div className="variant-grid__cell">
            <span className="variant-grid__caption tds-detail-06">email</span>
            <TdsTextField
              type="email"
              labelPosition="outside"
              label="Email"
              placeholder="user@example.com"
            />
          </div>
          <div className="variant-grid__cell">
            <span className="variant-grid__caption tds-detail-06">tel</span>
            <TdsTextField
              type="tel"
              labelPosition="outside"
              label="Phone"
              placeholder="+46 70 000 00 00"
            />
          </div>
        </div>
      </section>

      <section className="component-section">
        <h3 className="tds-headline-04">Required, maxLength, noMinWidth</h3>
        <p className="component-section__hint tds-detail-06">Misc prop axes.</p>
        <div className="variant-grid">
          <div className="variant-grid__cell">
            <span className="variant-grid__caption tds-detail-06">required</span>
            <TdsTextField
              required
              labelPosition="outside"
              label="Required"
              placeholder="Required input"
              helper="Field is required"
            />
          </div>
          <div className="variant-grid__cell">
            <span className="variant-grid__caption tds-detail-06">maxLength=20</span>
            <TdsTextField
              labelPosition="outside"
              label="Max length"
              placeholder="Up to 20 chars"
              maxLength={20}
              value="Twelve chars"
            />
          </div>
          <div className="variant-grid__cell">
            <span className="variant-grid__caption tds-detail-06">noMinWidth</span>
            <TdsTextField
              noMinWidth
              labelPosition="outside"
              label="No min width"
              placeholder="Narrow"
            />
          </div>
        </div>
      </section>

      <h2 className="tds-headline-03 section-divider">tds-textarea</h2>

      <section className="component-section">
        <h3 className="tds-headline-04">Label positions</h3>
        <p className="component-section__hint tds-detail-06">
          <code>labelPosition</code>: no-label (default), inside, outside.
        </p>
        <div className="variant-grid">
          {LABEL_POSITIONS.map((pos) => (
            <div className="variant-grid__cell" key={`ta-label-${pos}`}>
              <span className="variant-grid__caption tds-detail-06">{pos}</span>
              <TdsTextarea
                labelPosition={pos}
                label="Label text"
                placeholder="Type something"
                helper="Helper text"
                rows={3}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="component-section">
        <h3 className="tds-headline-04">States</h3>
        <p className="component-section__hint tds-detail-06">
          <code>state</code>: default, success, error.
        </p>
        <div className="variant-grid">
          {STATES.map((state) => (
            <div className="variant-grid__cell" key={`ta-state-${state}`}>
              <span className="variant-grid__caption tds-detail-06">{state}</span>
              <TdsTextarea
                state={state}
                labelPosition="outside"
                label={`State: ${state}`}
                placeholder="Type something"
                helper={
                  state === "error"
                    ? "Something is wrong"
                    : state === "success"
                      ? "Looks good!"
                      : "Helper text"
                }
                value={state === "default" ? "" : "Some text in the textarea"}
                rows={3}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="component-section">
        <h3 className="tds-headline-04">Disabled and read-only</h3>
        <p className="component-section__hint tds-detail-06">
          <code>disabled</code>, <code>readOnly</code>, <code>readOnly + hideReadOnlyIcon</code>.
        </p>
        <div className="variant-grid">
          <div className="variant-grid__cell">
            <span className="variant-grid__caption tds-detail-06">disabled</span>
            <TdsTextarea
              disabled
              labelPosition="outside"
              label="Disabled"
              value="Disabled value"
              helper="Helper text"
              rows={3}
            />
          </div>
          <div className="variant-grid__cell">
            <span className="variant-grid__caption tds-detail-06">readOnly</span>
            <TdsTextarea
              readOnly
              labelPosition="outside"
              label="Read only"
              value="Read-only value"
              helper="Helper text"
              rows={3}
            />
          </div>
          <div className="variant-grid__cell">
            <span className="variant-grid__caption tds-detail-06">readOnly + hideReadOnlyIcon</span>
            <TdsTextarea
              readOnly
              hideReadOnlyIcon
              labelPosition="outside"
              label="Read only (no icon)"
              value="Read-only value"
              helper="Helper text"
              rows={3}
            />
          </div>
        </div>
      </section>

      <section className="component-section">
        <h3 className="tds-headline-04">Mode variants</h3>
        <p className="component-section__hint tds-detail-06">
          <code>modeVariant</code>: null (default), primary, secondary. Rendered on alternating
          backgrounds.
        </p>
        <div className="variant-grid">
          {MODE_VARIANTS.map((mv, i) => (
            <div
              className={`variant-grid__cell variant-grid__cell--${i % 2 === 0 ? "light" : "dark"}`}
              key={`ta-mode-${mv ?? "null"}`}
            >
              <span className="variant-grid__caption tds-detail-06">{mv ?? "null"}</span>
              <TdsTextarea
                modeVariant={mv}
                labelPosition="outside"
                label={`Mode ${mv ?? "null"}`}
                placeholder="Type something"
                helper="Helper text"
                rows={3}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="component-section">
        <h3 className="tds-headline-04">Rows, cols and maxLength</h3>
        <p className="component-section__hint tds-detail-06">
          <code>rows</code>, <code>cols</code>, <code>maxLength</code>.
        </p>
        <div className="variant-grid">
          <div className="variant-grid__cell">
            <span className="variant-grid__caption tds-detail-06">rows=2</span>
            <TdsTextarea
              labelPosition="outside"
              label="Short"
              placeholder="2 rows"
              rows={2}
            />
          </div>
          <div className="variant-grid__cell">
            <span className="variant-grid__caption tds-detail-06">rows=6</span>
            <TdsTextarea
              labelPosition="outside"
              label="Tall"
              placeholder="6 rows"
              rows={6}
            />
          </div>
          <div className="variant-grid__cell">
            <span className="variant-grid__caption tds-detail-06">cols=20</span>
            <TdsTextarea
              labelPosition="outside"
              label="Narrow cols"
              placeholder="20 cols"
              cols={20}
              rows={3}
            />
          </div>
          <div className="variant-grid__cell">
            <span className="variant-grid__caption tds-detail-06">maxLength=50</span>
            <TdsTextarea
              labelPosition="outside"
              label="Max length"
              placeholder="Up to 50 chars"
              maxLength={50}
              value="A textarea with a maximum length set."
              helper="Counter shown when maxLength is set"
              rows={3}
            />
          </div>
          <div className="variant-grid__cell">
            <span className="variant-grid__caption tds-detail-06">noMinWidth</span>
            <TdsTextarea
              noMinWidth
              labelPosition="outside"
              label="No min width"
              placeholder="Narrow"
              rows={3}
            />
          </div>
        </div>
      </section>
    </article>
  );
};

export default About;
