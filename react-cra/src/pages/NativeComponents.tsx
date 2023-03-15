import { useState } from "react";
import DataTableNative from "../components/DataTableNative";

export default function NativeComponents() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Banner</div>
        <div className="sdds-banner sdds-banner-error">
          <span className="sdds-banner-prefix">
            <sdds-icon name="error" size="20px"></sdds-icon>
          </span>
          <div className="sdds-banner-body">
            <h6 className="sdds-banner-header">Warning</h6>
            <div className="sdds-banner-subheader">
              Insufficient amount of memory
            </div>
            <a
              className="sdds-link sdds-banner-link"
              href="https://www.scania.com"
              target="_self"
              rel="noreferrer"
            >
              Click her to read more
            </a>
          </div>
          <button
            type="button"
            aria-label="close"
            className="sdds-banner-close"
          >
            <sdds-icon name="cross" size="20px"></sdds-icon>
          </button>
        </div>
        <div className="sdds-banner sdds-banner-default">
          <span className="sdds-banner-prefix">
            <sdds-icon name="truck" size="20px"></sdds-icon>
          </span>
          <div className="sdds-banner-body">
            <h6 className="sdds-banner-header">This is a header text area</h6>
            <div className="sdds-banner-subheader">SubHeader text area</div>
            <a href="/" className="sdds-link sdds-banner-link">
              Learn more
            </a>
          </div>
          <button
            type="button"
            aria-label="close"
            className="sdds-banner-close"
          >
            <sdds-icon name="cross" size="20px"></sdds-icon>
          </button>
        </div>
        <div className="sdds-banner sdds-banner-info">
          <span className="sdds-banner-prefix">
            <sdds-icon name="truck" size="20px"></sdds-icon>
          </span>
          <div className="sdds-banner-body">
            <h6 className="sdds-banner-header">This is a header text area</h6>
            <div className="sdds-banner-subheader">SubHeader text area</div>
            <a href="/" className="sdds-link sdds-banner-link">
              Learn more
            </a>
          </div>
          <button
            type="button"
            aria-label="close"
            className="sdds-banner-close"
          >
            <sdds-icon name="cross" size="20px"></sdds-icon>
          </button>
        </div>
      </div>
      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Block</div>
        <div className="sdds-block">
          <h2 className="sdds-headline-02">Block</h2>
          <p className="sdds-body-01">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            condimentum nisi ut eleifend ultrices. Nunc venenatis maximus
            sapien, ac bibendum nisl aliquam in. Morbi ac velit et ligula
            consectetur interdum. Vestibulum condimentum, augue vitae lobortis
            rhoncus, mi est ultricies mi, sed tincidunt magna nibh in lectus.
            Pellentesque vel vulputate orci, vel lacinia orci. Sed suscipit leo
            at diam ullamcorper, vitae volutpat neque dapibus. Maecenas sit amet
            rhoncus arcu. Sed sed molestie elit. Nullam in interdum est, vitae
            aliquam ipsum. Nunc rutrum nibh ut arcu egestas egestas.
          </p>
          <div className="sdds-block">
            <h3 className="sdds-headline-04">Nested block</h3>
            <p className="sdds-detail-03">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              condimentum nisi ut eleifend ultrices. Nunc venenatis maximus
              sapien, ac bibendum nisl aliquam in. Morbi ac velit et ligula
              consectetur interdum. Vestibulum condimentum, augue vitae lobortis
              rhoncus, mi est ultricies mi, sed tincidunt magna nibh in lectus.
              Pellentesque vel vulputate orci, vel lacinia orci. Sed suscipit
              leo at diam ullamcorper, vitae volutpat neque dapibus. Maecenas
              sit amet rhoncus arcu. Sed sed molestie elit. Nullam in interdum
              est, vitae aliquam ipsum. Nunc rutrum nibh ut arcu egestas
              egestas.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Breadcrumb</div>
        <div className="sdds-breadcrumb">
          <div className="sdds-breadcrumb-item">
            <a href="https://www.scania.com">Page 1</a>
          </div>
          <div className="sdds-breadcrumb-item">
            <a href="https://www.scania.com">Page 2</a>
          </div>
          <div className="sdds-breadcrumb-item sdds-breadcrumb-item-current">
            <a href="https://www.scania.com" aria-current="page">
              Page 3
            </a>
          </div>
        </div>
      </div>

      <div className="sdds-u-w-100">
        <div className="sdds-headline-02 sdds-u-pb1">Buttons</div>
        <button className="sdds-btn sdds-btn-primary sdds-btn-lg sdds-btn-fullbleed">
          <span className="sdds-btn-text">Primary fullbleed button</span>
        </button>
        <div
          className="sdds-u-mt2 sdds-u-flex"
          style={{ justifyContent: "space-around" }}
        >
          <button className="sdds-btn sdds-btn-danger sdds-btn-md">
            <span className="sdds-btn-text">Delete file</span>
            <i className="sdds-btn-icon sdds-icon trash"></i>
          </button>
          <button className="sdds-btn sdds-btn-ghost sdds-btn-sm sdds-btn-icon sdds-btn-only-icon">
            <i className="sdds-btn-icon sdds-icon save"></i>
          </button>
        </div>
      </div>

      <div>
        <div className="sdds-card">
          <img
            className="sdds-card-img"
            src="https://images.unsplash.com/photo-1670509295484-df0c2512fec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5494&q=80"
            alt="Truck on the road"
          />
          <div className="sdds-card-header-avatar">
            <div className="sdds-card-avatar">
              <img
                src="https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                alt="Person avatar"
              />
            </div>
            <div className="sdds-card-headlines">
              <h6 className="sdds-card-headline">Header text</h6>
              <h6 className="sdds-card-sub-headline">Subheader text</h6>
            </div>
          </div>
          <div className="sdds-card-body">Hello in a body text</div>
          <div className="sdds-card-footer">
            <sdds-icon
              style={{ fontSize: "20px" }}
              name="arrow_right"
            ></sdds-icon>
          </div>
        </div>
      </div>

      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Checkbox</div>
        <div className="sdds-checkbox-item">
          <input
            className="sdds-form-input"
            type="checkbox"
            id="native-checkbox"
          />
          <label className="sdds-form-label" htmlFor="native-checkbox">
            Label
          </label>
        </div>
      </div>

      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Chip</div>
        <button className="sdds-chip">
          <span className="sdds-chip-text">Chip text</span>
        </button>
        <button className="sdds-chip sdds-chip-active">
          <span className="sdds-chip-text">Chip text</span>
        </button>
        <button className="sdds-chip sdds-chip-icon-right">
          <div className="sdds-chip-icon">
            <sdds-icon name="notification" size="16px"></sdds-icon>
          </div>
          <span className="sdds-chip-text">Icon right</span>
        </button>
        <button className="sdds-chip sdds-chip-icon-left">
          <div className="sdds-chip-icon">
            <sdds-icon name="notification" size="16px"></sdds-icon>
          </div>
          <span className="sdds-chip-text">Icon left</span>
        </button>
      </div>

      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Data table</div>
        <DataTableNative />
      </div>

      <div className="sdds-headline-02 sdds-u-pb1">Dropdown</div>
      <div className="sdds-dropdown">
        <select name="nativeDropdown" id="mySelect">
          <option value="truck">Truck</option>
          <option value="bus">Bus</option>
          <option value="car">Car</option>
        </select>
      </div>

      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Link</div>
        <a href="/" className="sdds-link">
          This is a link.
        </a>
      </div>

      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Message</div>
        <div className="sdds-message sdds-message-type-error sdds-message-icon-active sdds-message-extended-active">
          <div>
            <sdds-icon
              className="sdds-message-icon sdds-message-icon-error"
              name="error"
              size="20"
            ></sdds-icon>
          </div>
          <h4 className="sdds-message-single">
            Single line message goes here.
          </h4>
          <p className="sdds-message-extended">
            Longer message text can be placed here. Longer message text can be
            placed here.
          </p>
        </div>
      </div>
      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Modal</div>
        <sdds-button
          onClick={() => {
            setModalOpen(true);
          }}
          text="Open modal"
        ></sdds-button>
        <div
          id="my-modal"
          className={`sdds-modal-backdrop demo-styles ${modalOpen ? "show" : "hide"
            }`}
        >
          <div className="sdds-modal sdds-modal-lg sdds-modal__actions-static">
            <div className="sdds-modal-header">
              <h5 className="sdds-modal-headline">
                The buttons for the modal only works in the canvas tab
              </h5>
              <button
                className="sdds-modal-close"
                aria-label="close"
                onClick={() => setModalOpen(false)}
              >
                <sdds-icon name="cross" size="20px"></sdds-icon>
              </button>
            </div>
            <div className="sdds-modal-body">
              <p className="sdds-u-mb0 sdds-u-mt0">
                The steps fell lightly and oddly, with a certain swing, for all
                they went so slowly; it was different indeed from the heavy
                creaking tread of Henry Jekyll. Utterson sighed. “Is there never
                anything else?” he asked.
              </p>
            </div>
            <div className="sdds-modal-actions">
              <button
                className="sdds-btn sdds-btn-primary sdds-btn-md"
                onClick={() => setModalOpen(false)}
              >
                Save
              </button>
              <button
                className="sdds-btn sdds-btn-secondary sdds-btn-md"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Radio Button</div>
        <div className="sdds-radio-button-group">
          <div className="sdds-radio-item">
            <input
              className="sdds-form-input"
              type="radio"
              name="rb-example"
              id="rb-option-1"
              defaultChecked={true}
            />
            <label className="sdds-form-label" htmlFor="rb-option-1">
              Label text 1
            </label>
          </div>
        </div>
        <div className="sdds-radio-button-group">
          <div className="sdds-radio-item">
            <input
              className="sdds-form-input"
              type="radio"
              name="rb-example"
              id="rb-option-2"
            />
            <label className="sdds-form-label" htmlFor="rb-option-2">
              Label text 2
            </label>
          </div>
        </div>
      </div>

      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Stepper</div>
        <div className="sdds-stepper">
          <div className="sdds-stepper__step sdds-stepper__step--value">
            <div className="sdds-stepper__step-icon">
              <span className="sdds-stepper__step-icon-value">1</span>
            </div>
            <label className="sdds-stepper__step_label">Step value</label>
          </div>

          <div className="sdds-stepper__step sdds-stepper__step--warning">
            <div className="sdds-stepper__step-icon">
              <i className="sdds-icon warning"></i>
            </div>
            <label className="sdds-stepper__step_label">Step warning</label>
          </div>

          <div className="sdds-stepper__step sdds-stepper__step--inactive">
            <div className="sdds-stepper__step-icon">
              <span className="sdds-stepper__step-icon-value">3</span>
            </div>
            <label className="sdds-stepper__step_label">
              Step inactive with text
            </label>
          </div>

          <div className="sdds-stepper__step sdds-stepper__step--success">
            <div className="sdds-stepper__step-icon">
              <i className="sdds-icon tick"></i>
            </div>
            <label className="sdds-stepper__step_label">Step success</label>
          </div>
        </div>
      </div>

      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Toast</div>
        <div className="sdds-toast sdds-toast-success">
          <div className="sdds-toast-icon">
            <sdds-icon name="tick" size="20px"></sdds-icon>
          </div>

          <div className="sdds-toast-content">
            <div className="sdds-toast-header">
              <span className="sdds-toast-headline">Header</span>
              <button
                type="button"
                aria-label="close"
                className="sdds-toast-close"
              >
                <sdds-icon name="cross" size="20px"></sdds-icon>
              </button>
            </div>

            <div className="sdds-toast-body">
              <span className="sdds-toast-subheadline">Longer message</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Toggle</div>
        <div className="sdds-toggle">
          <div className="sdds-toggle-headline">Headline</div>
          <input
            type="checkbox"
            className="sdds-toggle-input"
            id="customSwitch1"
          />
          <span className="sdds-toggle-switch"></span>
          <label className="sdds-toggle-label" htmlFor="customSwitch1">
            Toggle this switch element
          </label>
        </div>
      </div>
    </>
  );
}
