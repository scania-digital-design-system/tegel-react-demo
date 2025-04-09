import { TdsDropdown, TdsDropdownOption } from '@scania/tegel-react';

const Dropdown = () => {
  return (
    <>
      <div className="tds-headline-02 tds-u-pb1">Dropdown</div>
      <TdsDropdown
        name="dropdown"
        label="Label text"
        label-position="outside"
        placeholder="Placeholder"
        helper="Helper text"
        size="lg"
        filter
        value={0}
        open-direction="auto"
      >
        <TdsDropdownOption value={0}>Option 0</TdsDropdownOption>
        <TdsDropdownOption value={1}>Option 1</TdsDropdownOption>
        <TdsDropdownOption disabled value={2}>
          Option 2
        </TdsDropdownOption>
        <TdsDropdownOption value={3}>Option 3</TdsDropdownOption>
        <TdsDropdownOption value={4}>Option 4</TdsDropdownOption>
        <TdsDropdownOption value={5}>Option 5</TdsDropdownOption>
        <TdsDropdownOption value={6}>Option 6</TdsDropdownOption>
        <TdsDropdownOption value={7}>Option 7</TdsDropdownOption>
      </TdsDropdown>
    </>
  );
};

export default Dropdown;
