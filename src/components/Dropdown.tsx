import { TdsDropdown, TdsDropdownOption } from '@scania/tegel-react';

const Dropdown = () => {
  return (
    <>
      <div className="tds-headline-02 tds-u-pb1">Dropdown</div>
      <TdsDropdown
        name="dropdown"
        label="Label text"
        labelPosition="outside"
        placeholder="Placeholder"
        helper="Helper text"
        size="lg"
        value="1"
        openDirection="auto"
      >
        <TdsDropdownOption value="1">Äptión 1</TdsDropdownOption>
        <TdsDropdownOption value="2">Option 2</TdsDropdownOption>
        <TdsDropdownOption value="3">Option 3</TdsDropdownOption>
        <TdsDropdownOption value="4">Option 4</TdsDropdownOption>
      </TdsDropdown>
    </>
  );
};

export default Dropdown;
