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
        filter
        open-direction="auto"
        normalizeText={true}
      >
        <TdsDropdownOption value="optión-1">Äptión 1</TdsDropdownOption>
        <TdsDropdownOption disabled value="optîón-2">
          Optîon 2
        </TdsDropdownOption>
        <TdsDropdownOption value="optiôn-3">Öptiôn 3</TdsDropdownOption>
        <TdsDropdownOption value="åptiõn-4">Åptiõn 4</TdsDropdownOption>
        <TdsDropdownOption value="optiöñ-5">Optiöñ 5</TdsDropdownOption>
        <TdsDropdownOption value="optiôñ-6">Optiôñ 6</TdsDropdownOption>
        <TdsDropdownOption value="optiõñ-7">Optiõñ 7</TdsDropdownOption>
      </TdsDropdown>
    </>
  );
};

export default Dropdown;
