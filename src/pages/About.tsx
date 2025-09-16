import { TdsDropdown, TdsDropdownOption } from '@scania/tegel-react';
import { useState } from 'react';

const About = () => {
  const [selectedValues, setSelectedValues] = useState({
    basic: '',
    multiselect: [],
    filter: '',
    size: '',
    disabled: '',
    labelPosition: '',
    validation: '',
    custom: '',
  });

  // Event handler with console logging
  const handleDropdownChange = (dropdownType: string, event: any) => {
    console.log(`${dropdownType} dropdown changed:`, {
      type: dropdownType,
      value: event.detail.value,
      selectedOptions: event.detail.selectedOptions,
      event: event,
    });

    setSelectedValues((prev) => ({
      ...prev,
      [dropdownType]: event.detail.value,
    }));
  };

  return (
    <article>
      <h3>About this page</h3>
      <p>
        This page is a testing ground and demo for using @scania/tegel-react in a React application.
      </p>

      <div style={{ marginTop: '2rem' }}>
        <h4>Dropdown Testing Scenarios</h4>
        <p>Open browser console to see event logs when interacting with dropdowns below.</p>

        {/* Basic Dropdown */}
        <div style={{ marginBottom: '2rem' }}>
          <h5>1. Basic Single Selection Dropdown</h5>
          <TdsDropdown
            name="basic-dropdown"
            label="Basic Dropdown"
            label-position="outside"
            placeholder="Select an option"
            helper="This is a basic single selection dropdown"
            size="md"
            onTdsChange={(e) => handleDropdownChange('basic', e)}
          >
            <TdsDropdownOption value="option1">Option 1</TdsDropdownOption>
            <TdsDropdownOption value="option2">Option 2</TdsDropdownOption>
            <TdsDropdownOption value="option3">Option 3</TdsDropdownOption>
            <TdsDropdownOption value="option4">Option 4</TdsDropdownOption>
          </TdsDropdown>
          <p>
            <strong>Selected:</strong> {selectedValues.basic || 'None'}
          </p>
        </div>

        {/* Multiselect Dropdown */}
        <div style={{ marginBottom: '2rem' }}>
          <h5>2. Multiselect Dropdown</h5>
          <TdsDropdown
            name="multiselect-dropdown"
            label="Multiselect Dropdown"
            label-position="outside"
            placeholder="Select multiple options"
            helper="This dropdown allows multiple selections"
            size="md"
            multiselect
            onTdsChange={(e) => handleDropdownChange('multiselect', e)}
          >
            <TdsDropdownOption value="multi1">Multi Option 1</TdsDropdownOption>
            <TdsDropdownOption value="multi2">Multi Option 2</TdsDropdownOption>
            <TdsDropdownOption value="multi3">Multi Option 3</TdsDropdownOption>
            <TdsDropdownOption value="multi4">Multi Option 4</TdsDropdownOption>
            <TdsDropdownOption value="multi5">Multi Option 5</TdsDropdownOption>
          </TdsDropdown>
          <p>
            <strong>Selected:</strong>{' '}
            {Array.isArray(selectedValues.multiselect)
              ? selectedValues.multiselect.join(', ') || 'None'
              : 'None'}
          </p>
        </div>

        {/* Filter Dropdown */}
        <div style={{ marginBottom: '2rem' }}>
          <h5>3. Dropdown with Filter</h5>
          <TdsDropdown
            name="filter-dropdown"
            label="Filter Dropdown"
            label-position="outside"
            placeholder="Type to filter options"
            helper="This dropdown has a built-in filter"
            size="md"
            filter
            onTdsChange={(e) => handleDropdownChange('filter', e)}
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
          <p>
            <strong>Selected:</strong> {selectedValues.filter || 'None'}
          </p>
        </div>

        {/* Different Sizes */}
        <div style={{ marginBottom: '2rem' }}>
          <h5>4. Different Sizes</h5>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div>
              <TdsDropdown
                name="size-sm"
                label="Small Size"
                label-position="outside"
                placeholder="Small"
                size="sm"
                onTdsChange={(e) => handleDropdownChange('size', e)}
              >
                <TdsDropdownOption value="sm1">Small Option 1</TdsDropdownOption>
                <TdsDropdownOption value="sm2">Small Option 2</TdsDropdownOption>
              </TdsDropdown>
            </div>
            <div>
              <TdsDropdown
                name="size-md"
                label="Medium Size"
                label-position="outside"
                placeholder="Medium"
                size="md"
                onTdsChange={(e) => handleDropdownChange('size', e)}
              >
                <TdsDropdownOption value="md1">Medium Option 1</TdsDropdownOption>
                <TdsDropdownOption value="md2">Medium Option 2</TdsDropdownOption>
              </TdsDropdown>
            </div>
            <div>
              <TdsDropdown
                name="size-lg"
                label="Large Size"
                label-position="outside"
                placeholder="Large"
                size="lg"
                onTdsChange={(e) => handleDropdownChange('size', e)}
              >
                <TdsDropdownOption value="lg1">Large Option 1</TdsDropdownOption>
                <TdsDropdownOption value="lg2">Large Option 2</TdsDropdownOption>
              </TdsDropdown>
            </div>
          </div>
        </div>

        {/* Disabled Options */}
        <div style={{ marginBottom: '2rem' }}>
          <h5>5. Dropdown with Disabled Options</h5>
          <TdsDropdown
            name="disabled-dropdown"
            label="Dropdown with Disabled Options"
            label-position="outside"
            placeholder="Some options are disabled"
            helper="Notice that some options are disabled and cannot be selected"
            size="md"
            onTdsChange={(e) => handleDropdownChange('disabled', e)}
          >
            <TdsDropdownOption value="enabled1">Enabled Option 1</TdsDropdownOption>
            <TdsDropdownOption value="enabled2">Enabled Option 2</TdsDropdownOption>
            <TdsDropdownOption disabled value="disabled1">
              Disabled Option 1
            </TdsDropdownOption>
            <TdsDropdownOption value="enabled3">Enabled Option 3</TdsDropdownOption>
            <TdsDropdownOption disabled value="disabled2">
              Disabled Option 2
            </TdsDropdownOption>
            <TdsDropdownOption value="enabled4">Enabled Option 4</TdsDropdownOption>
          </TdsDropdown>
          <p>
            <strong>Selected:</strong> {selectedValues.disabled || 'None'}
          </p>
        </div>

        {/* Different Label Positions */}
        <div style={{ marginBottom: '2rem' }}>
          <h5>6. Different Label Positions</h5>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div>
              <TdsDropdown
                name="label-inside"
                label="Label Inside"
                label-position="inside"
                placeholder="Label inside"
                size="md"
                onTdsChange={(e) => handleDropdownChange('labelPosition', e)}
              >
                <TdsDropdownOption value="inside1">Inside Option 1</TdsDropdownOption>
                <TdsDropdownOption value="inside2">Inside Option 2</TdsDropdownOption>
              </TdsDropdown>
            </div>
            <div>
              <TdsDropdown
                name="label-outside"
                label="Label Outside"
                label-position="outside"
                placeholder="Label outside"
                size="md"
                onTdsChange={(e) => handleDropdownChange('labelPosition', e)}
              >
                <TdsDropdownOption value="outside1">Outside Option 1</TdsDropdownOption>
                <TdsDropdownOption value="outside2">Outside Option 2</TdsDropdownOption>
              </TdsDropdown>
            </div>
          </div>
        </div>

        {/* Validation States */}
        <div style={{ marginBottom: '2rem' }}>
          <h5>7. Validation States</h5>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div>
              <TdsDropdown
                name="error-dropdown"
                label="Error State (Visual Only)"
                label-position="outside"
                placeholder="This simulates an error state"
                helper="This dropdown simulates an error state (no actual validation)"
                size="md"
                onTdsChange={(e) => handleDropdownChange('validation', e)}
              >
                <TdsDropdownOption value="error1">Error Option 1</TdsDropdownOption>
                <TdsDropdownOption value="error2">Error Option 2</TdsDropdownOption>
              </TdsDropdown>
            </div>
            <div>
              <TdsDropdown
                name="success-dropdown"
                label="Success State (Visual Only)"
                label-position="outside"
                placeholder="This simulates a success state"
                helper="This dropdown simulates a success state (no actual validation)"
                size="md"
                onTdsChange={(e) => handleDropdownChange('validation', e)}
              >
                <TdsDropdownOption value="success1">Success Option 1</TdsDropdownOption>
                <TdsDropdownOption value="success2">Success Option 2</TdsDropdownOption>
              </TdsDropdown>
            </div>
          </div>
        </div>

        {/* Custom Styling and Features */}
        <div style={{ marginBottom: '2rem' }}>
          <h5>8. Custom Features Dropdown</h5>
          <TdsDropdown
            name="custom-dropdown"
            label="Custom Features Dropdown"
            label-position="outside"
            placeholder="Custom dropdown with all features"
            helper="This dropdown has multiselect, filter, and normalize text features"
            size="lg"
            multiselect
            filter
            normalizeText={true}
            open-direction="auto"
            onTdsChange={(e) => handleDropdownChange('custom', e)}
          >
            <TdsDropdownOption value="custom1">Custom Option 1</TdsDropdownOption>
            <TdsDropdownOption value="custom2">Custom Option 2</TdsDropdownOption>
            <TdsDropdownOption disabled value="custom3">
              Disabled Custom Option
            </TdsDropdownOption>
            <TdsDropdownOption value="custom4">Custom Option 4</TdsDropdownOption>
            <TdsDropdownOption value="custom5">Custom Option 5</TdsDropdownOption>
            <TdsDropdownOption value="custom6">Custom Option 6</TdsDropdownOption>
            <TdsDropdownOption value="custom7">Custom Option 7</TdsDropdownOption>
            <TdsDropdownOption value="custom8">Custom Option 8</TdsDropdownOption>
          </TdsDropdown>
          <p>
            <strong>Selected:</strong>{' '}
            {Array.isArray(selectedValues.custom)
              ? selectedValues.custom.join(', ') || 'None'
              : selectedValues.custom || 'None'}
          </p>
        </div>

        {/* Event Log Summary */}
        <div
          style={{
            marginTop: '2rem',
            padding: '1rem',
            backgroundColor: '#f5f5f5',
            borderRadius: '4px',
          }}
        >
          <h5>Event Log Summary</h5>
          <p>
            All dropdown selection changes are logged to the browser console. Check the console to
            see:
          </p>
          <ul>
            <li>
              <strong>onTdsChange:</strong> When selection changes (includes value, selectedOptions,
              and full event details)
            </li>
          </ul>
          <p>
            Each event includes the dropdown type, selected values, and full event details for
            comprehensive testing. Note: Only the onTdsChange event is supported by the TdsDropdown
            component.
          </p>
        </div>
      </div>
    </article>
  );
};

export default About;
