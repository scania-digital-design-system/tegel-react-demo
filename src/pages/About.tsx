import React, { useState } from 'react';
import { TdsDropdown, TdsDropdownOption } from '@scania/tegel-react';

const About = () => {
  const [selectedValues, setSelectedValues] = useState<{ [key: string]: any }>({});

  const handleDropdownChange = (event: Event, dropdownName: string) => {
    const target = event.target as HTMLTdsDropdownElement;
    setSelectedValues((prev) => ({
      ...prev,
      [dropdownName]: target.value,
    }));
  };

  return (
    <article style={{ padding: '20px', maxWidth: '1200px' }}>
      <h3>Dropdown Testing Page</h3>
      <p>
        This page contains multiple dropdowns with different features for manual testing of the
        @scania/tegel-react dropdown component.
      </p>

      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}
      >
        {/* Basic Dropdown */}
        <section>
          <h4>1. Basic Dropdown</h4>
          <TdsDropdown
            name="basic-dropdown"
            label="Basic Dropdown"
            labelPosition="outside"
            placeholder="Select an option"
            size="lg"
            onTdsChange={(e) => handleDropdownChange(e, 'basic')}
          >
            <TdsDropdownOption value="option1">Option 1</TdsDropdownOption>
            <TdsDropdownOption value="option2">Option 2</TdsDropdownOption>
            <TdsDropdownOption value="option3">Option 3</TdsDropdownOption>
          </TdsDropdown>
          <p>Selected: {selectedValues.basic || 'None'}</p>
        </section>

        {/* Dropdown with Filter */}
        <section>
          <h4>2. Dropdown with Filter</h4>
          <TdsDropdown
            name="filter-dropdown"
            label="Filterable Dropdown"
            labelPosition="outside"
            placeholder="Type to filter..."
            size="lg"
            filter
            onTdsChange={(e) => handleDropdownChange(e, 'filter')}
          >
            <TdsDropdownOption value="apple">Apple</TdsDropdownOption>
            <TdsDropdownOption value="banana">Banana</TdsDropdownOption>
            <TdsDropdownOption value="cherry">Cherry</TdsDropdownOption>
            <TdsDropdownOption value="date">Date</TdsDropdownOption>
            <TdsDropdownOption value="elderberry">Elderberry</TdsDropdownOption>
            <TdsDropdownOption value="fig">Fig</TdsDropdownOption>
            <TdsDropdownOption value="grape">Grape</TdsDropdownOption>
            <TdsDropdownOption value="honeydew">Honeydew</TdsDropdownOption>
          </TdsDropdown>
          <p>Selected: {selectedValues.filter || 'None'}</p>
        </section>

        {/* Multi-select Dropdown */}
        <section>
          <h4>3. Multi-select Dropdown</h4>
          <TdsDropdown
            name="multiselect-dropdown"
            label="Multi-select Dropdown"
            labelPosition="outside"
            placeholder="Select multiple options"
            size="lg"
            multiselect
            onTdsChange={(e) => handleDropdownChange(e, 'multiselect')}
          >
            <TdsDropdownOption value="red">Red</TdsDropdownOption>
            <TdsDropdownOption value="green">Green</TdsDropdownOption>
            <TdsDropdownOption value="blue">Blue</TdsDropdownOption>
            <TdsDropdownOption value="yellow">Yellow</TdsDropdownOption>
            <TdsDropdownOption value="purple">Purple</TdsDropdownOption>
          </TdsDropdown>
          <p>
            Selected:{' '}
            {Array.isArray(selectedValues.multiselect)
              ? selectedValues.multiselect.join(', ')
              : 'None'}
          </p>
        </section>

        {/* Dropdown with Disabled Options */}
        <section>
          <h4>4. Dropdown with Disabled Options</h4>
          <TdsDropdown
            name="disabled-options-dropdown"
            label="Dropdown with Disabled Options"
            labelPosition="outside"
            placeholder="Select an option"
            size="lg"
            onTdsChange={(e) => handleDropdownChange(e, 'disabled')}
          >
            <TdsDropdownOption value="active1">Active Option 1</TdsDropdownOption>
            <TdsDropdownOption value="active2">Active Option 2</TdsDropdownOption>
            <TdsDropdownOption disabled value="disabled1">
              Disabled Option 1
            </TdsDropdownOption>
            <TdsDropdownOption value="active3">Active Option 3</TdsDropdownOption>
            <TdsDropdownOption disabled value="disabled2">
              Disabled Option 2
            </TdsDropdownOption>
          </TdsDropdown>
          <p>Selected: {selectedValues.disabled || 'None'}</p>
        </section>

        {/* Different Sizes */}
        <section>
          <h4>5. Different Sizes</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <TdsDropdown
              name="small-dropdown"
              label="Small Size"
              labelPosition="outside"
              placeholder="Small"
              size="sm"
              onTdsChange={(e) => handleDropdownChange(e, 'small')}
            >
              <TdsDropdownOption value="small1">Small Option 1</TdsDropdownOption>
              <TdsDropdownOption value="small2">Small Option 2</TdsDropdownOption>
            </TdsDropdown>

            <TdsDropdown
              name="medium-dropdown"
              label="Medium Size"
              labelPosition="outside"
              placeholder="Medium"
              size="md"
              onTdsChange={(e) => handleDropdownChange(e, 'medium')}
            >
              <TdsDropdownOption value="medium1">Medium Option 1</TdsDropdownOption>
              <TdsDropdownOption value="medium2">Medium Option 2</TdsDropdownOption>
            </TdsDropdown>

            <TdsDropdown
              name="large-dropdown"
              label="Large Size"
              labelPosition="outside"
              placeholder="Large"
              size="lg"
              onTdsChange={(e) => handleDropdownChange(e, 'large')}
            >
              <TdsDropdownOption value="large1">Large Option 1</TdsDropdownOption>
              <TdsDropdownOption value="large2">Large Option 2</TdsDropdownOption>
            </TdsDropdown>
          </div>
        </section>

        {/* Dropdown with Helper Text */}
        <section>
          <h4>6. Dropdown with Helper Text</h4>
          <TdsDropdown
            name="helper-dropdown"
            label="Dropdown with Helper"
            labelPosition="outside"
            placeholder="Select your department"
            helper="This will help us route your request to the correct team"
            size="lg"
            onTdsChange={(e) => handleDropdownChange(e, 'helper')}
          >
            <TdsDropdownOption value="engineering">Engineering</TdsDropdownOption>
            <TdsDropdownOption value="marketing">Marketing</TdsDropdownOption>
            <TdsDropdownOption value="sales">Sales</TdsDropdownOption>
            <TdsDropdownOption value="support">Support</TdsDropdownOption>
          </TdsDropdown>
          <p>Selected: {selectedValues.helper || 'None'}</p>
        </section>

        {/* Dropdown with Different Open Directions */}
        <section>
          <h4>7. Different Open Directions</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <TdsDropdown
              name="up-dropdown"
              label="Opens Up"
              labelPosition="outside"
              placeholder="Up direction"
              size="md"
              openDirection="up"
              onTdsChange={(e) => handleDropdownChange(e, 'up')}
            >
              <TdsDropdownOption value="up1">Up Option 1</TdsDropdownOption>
              <TdsDropdownOption value="up2">Up Option 2</TdsDropdownOption>
            </TdsDropdown>

            <TdsDropdown
              name="down-dropdown"
              label="Opens Down"
              labelPosition="outside"
              placeholder="Down direction"
              size="md"
              openDirection="down"
              onTdsChange={(e) => handleDropdownChange(e, 'down')}
            >
              <TdsDropdownOption value="down1">Down Option 1</TdsDropdownOption>
              <TdsDropdownOption value="down2">Down Option 2</TdsDropdownOption>
            </TdsDropdown>

            <TdsDropdown
              name="auto-dropdown"
              label="Auto Direction"
              labelPosition="outside"
              placeholder="Auto direction"
              size="md"
              openDirection="auto"
              onTdsChange={(e) => handleDropdownChange(e, 'auto')}
            >
              <TdsDropdownOption value="auto1">Auto Option 1</TdsDropdownOption>
              <TdsDropdownOption value="auto2">Auto Option 2</TdsDropdownOption>
            </TdsDropdown>
          </div>
        </section>

        {/* Dropdown with Default Value */}
        <section>
          <h4>8. Dropdown with Default Value</h4>
          <TdsDropdown
            name="default-dropdown"
            label="Dropdown with Default"
            labelPosition="outside"
            placeholder="Select a country"
            size="lg"
            defaultValue="sweden"
            onTdsChange={(e) => handleDropdownChange(e, 'default')}
          >
            <TdsDropdownOption value="sweden">Sweden</TdsDropdownOption>
            <TdsDropdownOption value="norway">Norway</TdsDropdownOption>
            <TdsDropdownOption value="denmark">Denmark</TdsDropdownOption>
            <TdsDropdownOption value="finland">Finland</TdsDropdownOption>
          </TdsDropdown>
          <p>Selected: {selectedValues.default || 'Sweden (default)'}</p>
        </section>

        {/* Disabled Dropdown */}
        <section>
          <h4>9. Disabled Dropdown</h4>
          <TdsDropdown
            name="disabled-dropdown"
            label="Disabled Dropdown"
            labelPosition="outside"
            placeholder="This dropdown is disabled"
            size="lg"
            disabled
            onTdsChange={(e) => handleDropdownChange(e, 'disabled-dropdown')}
          >
            <TdsDropdownOption value="disabled1">Disabled Option 1</TdsDropdownOption>
            <TdsDropdownOption value="disabled2">Disabled Option 2</TdsDropdownOption>
          </TdsDropdown>
          <p>This dropdown should be disabled and non-interactive</p>
        </section>

        {/* Dropdown with Special Characters */}
        <section>
          <h4>10. Dropdown with Special Characters</h4>
          <TdsDropdown
            name="special-chars-dropdown"
            label="Special Characters Test"
            labelPosition="outside"
            placeholder="Test with special chars"
            size="lg"
            filter
            normalizeText={true}
            onTdsChange={(e) => handleDropdownChange(e, 'special')}
          >
            <TdsDropdownOption value="optión-1">Äptión 1</TdsDropdownOption>
            <TdsDropdownOption value="optîón-2">Optîon 2</TdsDropdownOption>
            <TdsDropdownOption value="optiôn-3">Öptiôn 3</TdsDropdownOption>
            <TdsDropdownOption value="åptiõn-4">Åptiõn 4</TdsDropdownOption>
            <TdsDropdownOption value="optiöñ-5">Optiöñ 5</TdsDropdownOption>
            <TdsDropdownOption value="optiôñ-6">Optiôñ 6</TdsDropdownOption>
            <TdsDropdownOption value="optiõñ-7">Optiõñ 7</TdsDropdownOption>
          </TdsDropdown>
          <p>Selected: {selectedValues.special || 'None'}</p>
        </section>

        {/* Dropdown with Many Options */}
        <section>
          <h4>11. Dropdown with Many Options</h4>
          <TdsDropdown
            name="many-options-dropdown"
            label="Many Options (50+)"
            labelPosition="outside"
            placeholder="Select from many options"
            size="lg"
            filter
            onTdsChange={(e) => handleDropdownChange(e, 'many')}
          >
            {Array.from({ length: 50 }, (_, i) => (
              <TdsDropdownOption key={i} value={`option-${i + 1}`}>
                Option {i + 1} - Lorem ipsum dolor sit amet
              </TdsDropdownOption>
            ))}
          </TdsDropdown>
          <p>Selected: {selectedValues.many || 'None'}</p>
        </section>

        {/* Dropdown with Mode Variant */}
        <section>
          <h4>12. Dropdown with Secondary Mode</h4>
          <TdsDropdown
            name="secondary-dropdown"
            label="Secondary Mode Variant"
            labelPosition="outside"
            placeholder="Secondary style"
            size="lg"
            modeVariant="secondary"
            onTdsChange={(e) => handleDropdownChange(e, 'secondary')}
          >
            <TdsDropdownOption value="primary">Primary Option</TdsDropdownOption>
            <TdsDropdownOption value="secondary">Secondary Option</TdsDropdownOption>
            <TdsDropdownOption value="tertiary">Tertiary Option</TdsDropdownOption>
          </TdsDropdown>
          <p>Selected: {selectedValues.secondary || 'None'}</p>
        </section>
      </div>

      <div
        style={{
          marginTop: '40px',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
        }}
      >
        <h4>Test Results Summary</h4>
        <pre
          style={{
            backgroundColor: 'white',
            padding: '10px',
            borderRadius: '4px',
            overflow: 'auto',
          }}
        >
          {JSON.stringify(selectedValues, null, 2)}
        </pre>
      </div>
    </article>
  );
};

export default About;
