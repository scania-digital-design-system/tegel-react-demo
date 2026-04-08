import { TdsButton, TdsIcon } from '@scania/tegel-react';

const Button = () => {
  return (
    <div>
      <div className="tds-headline-02 tds-u-pb1">Button</div>
      <p>
        These buttons trigger the same function on click, but the disabled button will prevent
        default and never run the function.
      </p>
      <div className="tds-u-pb1">
        <TdsButton
          onClick={() => {
            alert('Clicked button!');
          }}
          variant="primary"
          size="lg"
          fullbleed
          text="Primary fullbleed"
        ></TdsButton>
      </div>
      <div className="tds-u-pb1">
        <TdsButton
          onClick={() => {
            alert('Clicked button!');
          }}
          variant="primary"
          text="Primary fullbleed (disabled)"
          fullbleed
          disabled
        ></TdsButton>
      </div>
      <div className="tds-u-flex tds-u-flex-gap-1 tds-u-pb1">
        <TdsButton
          onClick={() => {
            alert('Clicked button!');
          }}
          fullbleed
          variant="danger"
          text="Danger"
          size="md"
        ></TdsButton>
        <TdsButton
          onClick={() => {
            alert('Clicked button!');
          }}
          fullbleed
          variant="ghost"
          text="Ghost"
          size="md"
        ></TdsButton>
        <TdsButton
          onClick={() => {
            alert('Clicked button!');
          }}
          fullbleed
          variant="secondary"
          text="Secondary"
          size="md"
        ></TdsButton>
      </div>
      <div className="tds-u-flex tds-u-flex-gap-1 tds-u-pb1">
        <TdsButton
          onClick={() => {
            alert('Clicked button!');
          }}
          fullbleed
          variant="danger"
          size="sm"
        >
          <TdsIcon slot="icon" size="16px" name="error"></TdsIcon>
        </TdsButton>
        <TdsButton
          onClick={() => {
            alert('Clicked button!');
          }}
          fullbleed
          variant="ghost"
          size="sm"
        >
          <TdsIcon slot="icon" size="16px" name="truck"></TdsIcon>
        </TdsButton>
        <TdsButton
          onClick={() => {
            alert('Clicked button!');
          }}
          fullbleed
          variant="secondary"
          size="sm"
        >
          <TdsIcon slot="icon" size="16px" name="arrow_diagonal"></TdsIcon>
        </TdsButton>
      </div>
      <div className="tds-u-pb1">
        <TdsButton
          onClick={() => {
            alert('Clicked button!');
          }}
          variant="primary"
          text="Primary"
          size="sm"
        ></TdsButton>
      </div>
      <div className="tds-u-pb1">
        <TdsButton
          onClick={() => {
            alert('Clicked button!');
          }}
          variant="primary"
          text="Primary (disabled)"
          size="sm"
          disabled
        ></TdsButton>
      </div>
      <div className="tds-u-flex tds-u-flex-gap-1 tds-u-pb1">
        <TdsButton
          onClick={() => {
            alert('Clicked button!');
          }}
          variant="danger"
          text="Danger"
          size="xs"
        ></TdsButton>
        <TdsButton
          onClick={() => {
            alert('Clicked button!');
          }}
          variant="ghost"
          text="Ghost"
          size="xs"
        ></TdsButton>
        <TdsButton
          onClick={() => {
            alert('Clicked button!');
          }}
          variant="secondary"
          text="Secondary"
          size="xs"
        ></TdsButton>
      </div>
      <div className="tds-u-flex tds-u-gap1 tds-u-pb1">
        <TdsButton
          onClick={() => {
            alert('Clicked button!');
          }}
          variant="danger"
          size="sm"
        >
          <TdsIcon slot="icon" size="16px" name="error"></TdsIcon>
        </TdsButton>
        <TdsButton
          onClick={() => {
            alert('Clicked button!');
          }}
          variant="ghost"
          size="sm"
        >
          <TdsIcon slot="icon" size="16px" name="truck"></TdsIcon>
        </TdsButton>
        <TdsButton
          onClick={() => {
            alert('Clicked button!');
          }}
          variant="secondary"
          size="sm"
        >
          <TdsIcon slot="icon" size="16px" name="arrow_diagonal"></TdsIcon>
        </TdsButton>
      </div>
    </div>
  );
};

export default Button;
