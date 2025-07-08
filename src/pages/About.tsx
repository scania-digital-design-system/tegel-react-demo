import React, { useRef, useEffect } from 'react';
import { TdsDropdown, TdsDropdownOption } from '@scania/tegel-react';

const About = () => {
  const dropdownRef = useRef<any>(null);
  const optionARef = useRef<any>(null);
  const optionBRef = useRef<any>(null);

  const updateDropdownTexts = () => {
    if (optionARef.current && optionBRef.current) {
      // Change textContent of both options
      optionARef.current.textContent = '3';
      optionBRef.current.textContent = '4';
      console.log('Updated dropdown option texts to 3 and 4');
    }
  };

  const resetDropdownTexts = () => {
    if (optionARef.current && optionBRef.current) {
      // Reset textContent back to original values
      optionARef.current.textContent = '1';
      optionBRef.current.textContent = '2';
      console.log('Reset dropdown option texts to 1 and 2');
    }
  };

  const getSelectedValue = () => {
    if (dropdownRef.current) {
      const selectedValue = dropdownRef.current.value;
      console.log('Current selected value:', selectedValue);
      alert(`Current selected value: ${selectedValue}`);
    }
  };

  return (
    <article style={{ padding: '20px' }}>
      <h3>Dropdown Dynamic Updates Test</h3>
      <p>
        This page tests the dropdown dynamic updates issue with tegel beta version
        1.32.2-dropdown-dynamic-updates-beta.0.
      </p>

      <div style={{ marginBottom: '20px' }}>
        <h4>Test Scenario:</h4>
        <ol>
          <li>Select option "A" (value "1") from the dropdown below</li>
          <li>Click "Update Text Content" button to change option texts to "3" and "4"</li>
          <li>Notice that the selected option text doesn't update immediately</li>
          <li>Click on the dropdown to open it - then the values get updated</li>
        </ol>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h4>Dropdown Test:</h4>
        <TdsDropdown
          ref={dropdownRef}
          placeholder="Select an option"
          size="md"
          style={{ width: '200px' }}
        >
          <TdsDropdownOption ref={optionARef} value="A">
            1
          </TdsDropdownOption>
          <TdsDropdownOption ref={optionBRef} value="B">
            2
          </TdsDropdownOption>
        </TdsDropdown>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h4>Test Controls:</h4>
        <button
          onClick={updateDropdownTexts}
          style={{
            marginRight: '10px',
            padding: '8px 16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Update Text Content (3, 4)
        </button>

        <button
          onClick={resetDropdownTexts}
          style={{
            marginRight: '10px',
            padding: '8px 16px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Reset Text Content (1, 2)
        </button>

        <button
          onClick={getSelectedValue}
          style={{
            padding: '8px 16px',
            backgroundColor: '#ffc107',
            color: 'black',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Get Selected Value
        </button>
      </div>

      <div
        style={{
          marginTop: '30px',
          padding: '15px',
          backgroundColor: '#f8f9fa',
          borderRadius: '4px',
        }}
      >
        <h4>Expected Behavior:</h4>
        <p>
          When you change the textContent of dropdown options via JavaScript, the selected option's
          display text should update immediately without requiring the user to click on the dropdown
          to open it.
        </p>

        <h4>Current Issue:</h4>
        <p>
          The selected option text doesn't update until the dropdown is clicked/opened, which means
          the UI doesn't reflect the dynamic changes immediately.
        </p>
      </div>
    </article>
  );
};

export default About;
