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
        multiselect
        open-direction="auto"
      >
        <TdsDropdownOption value="option-1">Option 1</TdsDropdownOption>
        <TdsDropdownOption disabled value="option-2">
          Option 2
        </TdsDropdownOption>
        <TdsDropdownOption value="option-3">Option 3</TdsDropdownOption>
        <TdsDropdownOption value="option-4">Option 4</TdsDropdownOption>
        <TdsDropdownOption value="option-5">Option 5</TdsDropdownOption>
        <TdsDropdownOption value="option-6">Option 6</TdsDropdownOption>
        <TdsDropdownOption value="option-7">Option 7</TdsDropdownOption>
      </TdsDropdown>
    </>
  );
};

export default Dropdown;
