import { TdsDropdown, TdsDropdownOption } from "@scania/tegel-react";

const Dropdown = () => {
	return (
		<>
			<div className="tds-headline-02 tds-u-pb1">Dropdown</div>
			<div className="tds-headline-03 tds-u-pb1">Simple Dropdown (Large) with Label inside</div>

			<TdsDropdown
				name="dropdown"
				label="Label text"
				label-position="inside"
				placeholder="Placeholder"
				helper="Helper text"
				size="lg"
				open-direction="auto"
				normalizeText={true}
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

			<div className="tds-headline-03 tds-u-pb1">Multiselect Dropdown (Large) with filter</div>

			<TdsDropdown
				name="multiselect-dropdown"
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

			<div className="tds-headline-03 tds-u-pb1">Dropdown (Medium) with Error State</div>

			<TdsDropdown
				name="error-dropdown"
				label="Label text"
				label-position="inside"
				placeholder="Placeholder"
				helper="Helper text error"
				size="md"
				error
				open-direction="auto"
				normalizeText={true}
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

			<div className="tds-headline-03 tds-u-pb1">Disabled Dropdown (Medium)</div>

			<TdsDropdown
				name="disabled-dropdown"
				label="Label text"
				label-position="outside"
				placeholder="Placeholder"
				helper="Helper text error"
				size="md"
				disabled
				open-direction="auto"
				normalizeText={true}
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
