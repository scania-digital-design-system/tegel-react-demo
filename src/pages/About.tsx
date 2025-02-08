import { TdsDivider, TdsDropdown, TdsDropdownOption } from '@scania/tegel-react';

const About = () => {
  return (
    <article>
      <h3>About this page</h3>
      <p>
        This page is a testing ground and demo for using @scania/tegel-react in a React application.
      </p>

      <TdsDivider />

      <h1>Test dropdown here:</h1>
      <h2>Open browser console and see logs when selecting dropdown options</h2>

      <TdsDropdown
        name="dropdown"
        label="Label text"
        label-position="outside"
        placeholder="Placeholder"
        helper="Helper text"
        size="lg"
        multiselect
        open-direction="auto"
        normalizeText={true}
        onTdsChange={(event) => console.log('Selected values:', event.detail.value)}
      >
        <TdsDropdownOption value="1">Option 1 (string)</TdsDropdownOption>
        <TdsDropdownOption value={2}>Option 2 (number)</TdsDropdownOption>
        <TdsDropdownOption value="3">Option 3 (string)</TdsDropdownOption>
        <TdsDropdownOption value={4}>Option 4 (number)</TdsDropdownOption>
      </TdsDropdown>
    </article>
  );
};

export default About;
