const Button = () => {
  return (
    <div>
      <div className="tds-headline-02 tds-u-pb1">Button</div>
      <p>
        These buttons trigger the same function on click, but the disabled
        button will prevent default and never run the function.
      </p>
      <div className="tds-u-pb1">
        <tds-button
          onClick={() => {
            alert("Clicked button!");
          }}
          type="primary"
          size="lg"
          fullbleed
          text="Primary fullbleed"
        ></tds-button>
      </div>
      <div className="tds-u-pb1">
        <tds-button
          onClick={() => {
            alert("Clicked button!");
          }}
          type="primary"
          text="Primary fullbleed (disabled)"
          fullbleed
          disabled
        ></tds-button>
      </div>
      <div className="tds-u-flex tds-u-pb1">
        <tds-button
          onClick={() => {
            alert("Clicked button!");
          }}
          fullbleed
          type="danger"
          text="Danger"
          size="md"
        ></tds-button>
        <tds-button
          onClick={() => {
            alert("Clicked button!");
          }}
          fullbleed
          type="ghost"
          text="Ghost"
          size="md"
        ></tds-button>
        <tds-button
          onClick={() => {
            alert("Clicked button!");
          }}
          fullbleed
          type="secondary"
          text="Secondary"
          size="md"
        ></tds-button>
      </div>
      <div className="tds-u-flex tds-u-pb1">
        <tds-button
          onClick={() => {
            alert("Clicked button!");
          }}
          fullbleed
          type="danger"
          size="sm"
        >
          <tds-icon slot="icon" size="16px" name="error"></tds-icon>
        </tds-button>
        <tds-button
          onClick={() => {
            alert("Clicked button!");
          }}
          fullbleed
          type="ghost"
          size="sm"
        >
          <tds-icon slot="icon" size="16px" name="truck"></tds-icon>
        </tds-button>
        <tds-button
          onClick={() => {
            alert("Clicked button!");
          }}
          fullbleed
          type="secondary"
          size="sm"
        >
          <tds-icon slot="icon" size="16px" name="arrow_diagonal"></tds-icon>
        </tds-button>
      </div>
      <div className="tds-u-pb1">
        <tds-button
          onClick={() => {
            alert("Clicked button!");
          }}
          type="primary"
          text="Primary"
          size="sm"
        ></tds-button>
      </div>
      <div className="tds-u-pb1">
        <tds-button
          onClick={() => {
            alert("Clicked button!");
          }}
          type="primary"
          text="Primary (disabled)"
          size="sm"
          disabled
        ></tds-button>
      </div>
      <div className="tds-u-flex tds-u-pb1">
        <tds-button
          onClick={() => {
            alert("Clicked button!");
          }}
          type="danger"
          text="Danger"
          size="xs"
        ></tds-button>
        <tds-button
          onClick={() => {
            alert("Clicked button!");
          }}
          type="ghost"
          text="Ghost"
          size="xs"
        ></tds-button>
        <tds-button
          onClick={() => {
            alert("Clicked button!");
          }}
          type="secondary"
          text="Secondary"
          size="xs"
        ></tds-button>
      </div>
      <div className="tds-u-flex tds-u-pb1">
        <tds-button
          onClick={() => {
            alert("Clicked button!");
          }}
          type="danger"
          size="sm"
        >
          <tds-icon slot="icon" size="16px" name="error"></tds-icon>
        </tds-button>
        <tds-button
          onClick={() => {
            alert("Clicked button!");
          }}
          type="ghost"
          size="sm"
        >
          <tds-icon slot="icon" size="16px" name="truck"></tds-icon>
        </tds-button>
        <tds-button
          onClick={() => {
            alert("Clicked button!");
          }}
          type="secondary"
          size="sm"
        >
          <tds-icon slot="icon" size="16px" name="arrow_diagonal"></tds-icon>
        </tds-button>
      </div>
    </div>
  );
};

export default Button;
