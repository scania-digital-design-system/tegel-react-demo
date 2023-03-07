import DataTableNative from "../components/DataTableNative";

export default function NativeComponents() {
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
          <sdds-icon
              className="sdds-chip-icon"
              name="notification"
          ></sdds-icon>
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
    </>
  );
}
