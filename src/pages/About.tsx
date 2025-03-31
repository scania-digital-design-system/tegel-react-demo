import { TdsDropdown, TdsDropdownOption } from '@scania/tegel-react';
import { useState } from 'react';

const About = () => {
  const [selected, setSelected] = useState('1');

  const handleChange = (e: any) => {
    console.log('onChange was called');
    const newValue = e.detail.value;
    setSelected(newValue);
  };
  return (
    <article>
      <TdsDropdown
        name="dropdown"
        label="Label"
        labelPosition="outside"
        placeholder="Placeholder"
        openDirection="auto"
        value={selected}
        onTdsChange={handleChange}
      >
        <TdsDropdownOption value="1">Option 1</TdsDropdownOption>
        <TdsDropdownOption value="1">Option 2</TdsDropdownOption>
      </TdsDropdown>
    </article>
  );
};

export default About;
