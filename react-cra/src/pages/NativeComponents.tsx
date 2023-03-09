import { useState } from "react";
import DataTableNative from "../components/DataTableNative";

export default function NativeComponents() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
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
        <div className="sdds-headline-02 sdds-u-pb1">Chip</div>
        <button className="sdds-chip">
          <span className="sdds-chip-text">Chip text</span>
        </button>
        <button className="sdds-chip sdds-chip-active">
          <span className="sdds-chip-text">Chip text</span>
        </button>
        <button className="sdds-chip sdds-chip-icon-left">
          <sdds-icon className="sdds-chip-icon" name="notification"></sdds-icon>
          <span className="sdds-chip-text">Chip text</span>
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
        <div className="sdds-headline-02 sdds-u-pb1">Modal</div>
        <sdds-button
          onClick={() => {
            setModalOpen(true);
          }}
          text="Open modal"
        ></sdds-button>
        <div
          id="my-modal"
          className={`sdds-modal-backdrop demo-styles ${
            modalOpen ? "show" : "hide"
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
