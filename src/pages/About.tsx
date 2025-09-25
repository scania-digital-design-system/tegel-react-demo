import React, { useEffect, useRef, useState } from 'react';
import { TdsDropdown, TdsDropdownOption } from '@scania/tegel-react';

const About = () => {
  const singleDropdownRef = useRef<HTMLTdsDropdownElement>(null);
  const multiDropdownRef = useRef<HTMLTdsDropdownElement>(null);
  const filterDropdownRef = useRef<HTMLTdsDropdownElement>(null);
  const logRef = useRef<HTMLDivElement>(null);

  const [singleValue, setSingleValue] = useState<string>('');
  const [multiValue, setMultiValue] = useState<string[]>([]);
  const [filterValue, setFilterValue] = useState<string>('');

  useEffect(() => {
    const log = logRef.current;
    if (!log) return;

    const logEvent = (eventType: string, details: any, dropdownType: string) => {
      const timestamp = new Date().toLocaleTimeString();
      const logEntry = document.createElement('div');
      logEntry.style.marginBottom = '8px';
      logEntry.style.fontSize = '13px';
      logEntry.style.padding = '8px';
      logEntry.style.background = '#f8f9fa';
      logEntry.style.borderRadius = '4px';
      logEntry.style.borderLeft = '4px solid #007bff';
      logEntry.style.fontFamily = 'monospace';

      logEntry.innerHTML = `
        <div style="font-weight: bold; color: #007bff;">${timestamp} - ${dropdownType}</div>
        <div style="color: #28a745; margin: 2px 0;">Event: ${eventType}</div>
        <div style="color: #6c757d;">Details: ${JSON.stringify(details, null, 2)}</div>
      `;

      // Keep only last 20 entries
      const entries = log.querySelectorAll('div');
      if (entries.length >= 20) {
        entries[0].remove();
      }

      log.appendChild(logEntry);
      log.scrollTop = log.scrollHeight;
    };

    // Single Select Dropdown Events
    const singleDropdown = singleDropdownRef.current;
    if (singleDropdown) {
      const handleSingleChange = (event: CustomEvent) => {
        const value = event.detail?.value || '';
        setSingleValue(value);
        logEvent('tdsChange', { value, name: event.detail?.name }, 'Single Select');
      };

      const handleSingleFocus = (event: Event) => {
        logEvent('tdsFocus', { type: event.type }, 'Single Select');
      };

      const handleSingleBlur = (event: Event) => {
        logEvent('tdsBlur', { type: event.type }, 'Single Select');
      };

      singleDropdown.addEventListener('tdsChange', handleSingleChange);
      singleDropdown.addEventListener('tdsFocus', handleSingleFocus);
      singleDropdown.addEventListener('tdsBlur', handleSingleBlur);

      return () => {
        singleDropdown.removeEventListener('tdsChange', handleSingleChange);
        singleDropdown.removeEventListener('tdsFocus', handleSingleFocus);
        singleDropdown.removeEventListener('tdsBlur', handleSingleBlur);
      };
    }
  }, []);

  useEffect(() => {
    const log = logRef.current;
    if (!log) return;

    const logEvent = (eventType: string, details: any, dropdownType: string) => {
      const timestamp = new Date().toLocaleTimeString();
      const logEntry = document.createElement('div');
      logEntry.style.marginBottom = '8px';
      logEntry.style.fontSize = '13px';
      logEntry.style.padding = '8px';
      logEntry.style.background = '#f8f9fa';
      logEntry.style.borderRadius = '4px';
      logEntry.style.borderLeft = '4px solid #28a745';
      logEntry.style.fontFamily = 'monospace';

      logEntry.innerHTML = `
        <div style="font-weight: bold; color: #28a745;">${timestamp} - ${dropdownType}</div>
        <div style="color: #28a745; margin: 2px 0;">Event: ${eventType}</div>
        <div style="color: #6c757d;">Details: ${JSON.stringify(details, null, 2)}</div>
      `;

      // Keep only last 20 entries
      const entries = log.querySelectorAll('div');
      if (entries.length >= 20) {
        entries[0].remove();
      }

      log.appendChild(logEntry);
      log.scrollTop = log.scrollHeight;
    };

    // Multi Select Dropdown Events
    const multiDropdown = multiDropdownRef.current;
    if (multiDropdown) {
      const handleMultiChange = (event: CustomEvent) => {
        const value = event.detail?.value || '';
        const values = value ? value.split(',') : [];
        setMultiValue(values);
        logEvent('tdsChange', { value, values }, 'Multi Select');
      };

      const handleMultiFocus = (event: Event) => {
        logEvent('tdsFocus', { type: event.type }, 'Multi Select');
      };

      const handleMultiBlur = (event: Event) => {
        logEvent('tdsBlur', { type: event.type }, 'Multi Select');
      };

      multiDropdown.addEventListener('tdsChange', handleMultiChange);
      multiDropdown.addEventListener('tdsFocus', handleMultiFocus);
      multiDropdown.addEventListener('tdsBlur', handleMultiBlur);

      return () => {
        multiDropdown.removeEventListener('tdsChange', handleMultiChange);
        multiDropdown.removeEventListener('tdsFocus', handleMultiFocus);
        multiDropdown.removeEventListener('tdsBlur', handleMultiBlur);
      };
    }
  }, []);

  useEffect(() => {
    const log = logRef.current;
    if (!log) return;

    const logEvent = (eventType: string, details: any, dropdownType: string) => {
      const timestamp = new Date().toLocaleTimeString();
      const logEntry = document.createElement('div');
      logEntry.style.marginBottom = '8px';
      logEntry.style.fontSize = '13px';
      logEntry.style.padding = '8px';
      logEntry.style.background = '#f8f9fa';
      logEntry.style.borderRadius = '4px';
      logEntry.style.borderLeft = '4px solid #dc3545';
      logEntry.style.fontFamily = 'monospace';

      logEntry.innerHTML = `
        <div style="font-weight: bold; color: #dc3545;">${timestamp} - ${dropdownType}</div>
        <div style="color: #dc3545; margin: 2px 0;">Event: ${eventType}</div>
        <div style="color: #6c757d;">Details: ${JSON.stringify(details, null, 2)}</div>
      `;

      // Keep only last 20 entries
      const entries = log.querySelectorAll('div');
      if (entries.length >= 20) {
        entries[0].remove();
      }

      log.appendChild(logEntry);
      log.scrollTop = log.scrollHeight;
    };

    // Filter Dropdown Events
    const filterDropdown = filterDropdownRef.current;
    if (filterDropdown) {
      const handleFilterChange = (event: CustomEvent) => {
        const value = event.detail?.value || '';
        setFilterValue(value);
        logEvent('tdsChange', { value }, 'Filter Dropdown');
      };

      const handleFilterInput = (event: InputEvent) => {
        const inputValue = (event.target as HTMLInputElement)?.value || '';
        logEvent(
          'tdsInput',
          {
            inputValue,
            length: inputValue.length,
            target: (event.target as HTMLElement)?.tagName,
          },
          'Filter Dropdown',
        );
      };

      const handleFilterFocus = (event: Event) => {
        logEvent('tdsFocus', { type: event.type }, 'Filter Dropdown');
      };

      const handleFilterBlur = (event: Event) => {
        logEvent('tdsBlur', { type: event.type }, 'Filter Dropdown');
      };

      filterDropdown.addEventListener('tdsChange', handleFilterChange);
      filterDropdown.addEventListener('tdsInput', handleFilterInput);
      filterDropdown.addEventListener('tdsFocus', handleFilterFocus);
      filterDropdown.addEventListener('tdsBlur', handleFilterBlur);

      return () => {
        filterDropdown.removeEventListener('tdsChange', handleFilterChange);
        filterDropdown.removeEventListener('tdsInput', handleFilterInput);
        filterDropdown.removeEventListener('tdsFocus', handleFilterFocus);
        filterDropdown.removeEventListener('tdsBlur', handleFilterBlur);
      };
    }
  }, []);

  const testMethods = async () => {
    const log = logRef.current;
    if (!log) return;

    const logEvent = (eventType: string, details: any, dropdownType: string) => {
      const timestamp = new Date().toLocaleTimeString();
      const logEntry = document.createElement('div');
      logEntry.style.marginBottom = '8px';
      logEntry.style.fontSize = '13px';
      logEntry.style.padding = '8px';
      logEntry.style.background = '#fff3cd';
      logEntry.style.borderRadius = '4px';
      logEntry.style.borderLeft = '4px solid #ffc107';
      logEntry.style.fontFamily = 'monospace';

      logEntry.innerHTML = `
        <div style="font-weight: bold; color: #856404;">${timestamp} - ${dropdownType}</div>
        <div style="color: #856404; margin: 2px 0;">Method: ${eventType}</div>
        <div style="color: #6c757d;">Result: ${JSON.stringify(details, null, 2)}</div>
      `;

      log.appendChild(logEntry);
      log.scrollTop = log.scrollHeight;
    };

    // Test single dropdown methods
    if (singleDropdownRef.current) {
      try {
        await singleDropdownRef.current.setValue('option-2', 'Banana');
        logEvent('setValue', { value: 'option-2', label: 'Banana' }, 'Single Select');

        await singleDropdownRef.current.focusElement();
        logEvent('focusElement', { success: true }, 'Single Select');

        await singleDropdownRef.current.close();
        logEvent('close', { success: true }, 'Single Select');
      } catch (error) {
        logEvent(
          'setValue Error',
          { error: error instanceof Error ? error.message : String(error) },
          'Single Select',
        );
      }
    }

    // Test multi dropdown methods
    if (multiDropdownRef.current) {
      try {
        await multiDropdownRef.current.setValue(['option-1', 'option-3']);
        logEvent('setValue', { values: ['option-1', 'option-3'] }, 'Multi Select');

        await multiDropdownRef.current.focusElement();
        logEvent('focusElement', { success: true }, 'Multi Select');
      } catch (error) {
        logEvent(
          'setValue Error',
          { error: error instanceof Error ? error.message : String(error) },
          'Multi Select',
        );
      }
    }

    // Test filter dropdown methods
    if (filterDropdownRef.current) {
      try {
        await filterDropdownRef.current.setValue('option-4', 'Date');
        logEvent('setValue', { value: 'option-4', label: 'Date' }, 'Filter Dropdown');

        await filterDropdownRef.current.focusElement();
        logEvent('focusElement', { success: true }, 'Filter Dropdown');
      } catch (error) {
        logEvent(
          'setValue Error',
          { error: error instanceof Error ? error.message : String(error) },
          'Filter Dropdown',
        );
      }
    }
  };

  return (
    <article style={{ padding: '20px', maxWidth: '1200px' }}>
      <h3>Comprehensive Dropdown Testing</h3>
      <p>
        This page tests all dropdown scenarios and logs events in real-time. Test different
        interactions and watch the event log below.
      </p>

      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '30px' }}
      >
        {/* Single Select Dropdown */}
        <div>
          <h4>Single Select Dropdown</h4>
          <TdsDropdown
            ref={singleDropdownRef}
            id="single-dropdown"
            label="Choose One Option"
            placeholder="Select an option..."
            size="lg"
            helper="This is a single select dropdown"
          >
            <TdsDropdownOption value="option-1">Apple</TdsDropdownOption>
            <TdsDropdownOption value="option-2">Banana</TdsDropdownOption>
            <TdsDropdownOption value="option-3">Cherry</TdsDropdownOption>
            <TdsDropdownOption value="option-4">Date</TdsDropdownOption>
            <TdsDropdownOption value="option-5">Elderberry</TdsDropdownOption>
          </TdsDropdown>
          <div style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
            Current Value: <strong>{singleValue || 'None'}</strong>
          </div>
        </div>

        {/* Multi Select Dropdown */}
        <div>
          <h4>Multi Select Dropdown</h4>
          <TdsDropdown
            ref={multiDropdownRef}
            id="multi-dropdown"
            label="Choose Multiple Options"
            placeholder="Select multiple options..."
            multiselect
            size="lg"
            helper="This is a multi-select dropdown"
          >
            <TdsDropdownOption value="option-1">Apple</TdsDropdownOption>
            <TdsDropdownOption value="option-2">Banana</TdsDropdownOption>
            <TdsDropdownOption value="option-3">Cherry</TdsDropdownOption>
            <TdsDropdownOption value="option-4">Date</TdsDropdownOption>
            <TdsDropdownOption value="option-5">Elderberry</TdsDropdownOption>
          </TdsDropdown>
          <div style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
            Current Values: <strong>{multiValue.length ? multiValue.join(', ') : 'None'}</strong>
          </div>
        </div>
      </div>

      {/* Filter Dropdown */}
      <div style={{ marginTop: '30px' }}>
        <h4>Filter Dropdown (Input Value Testing)</h4>
        <TdsDropdown
          ref={filterDropdownRef}
          id="filter-dropdown"
          label="Search and Select"
          placeholder="Type to search..."
          filter
          size="lg"
          helper="This dropdown has filter enabled - type to see input events"
          noResultText="No matching options found"
        >
          <TdsDropdownOption value="option-1">Apple</TdsDropdownOption>
          <TdsDropdownOption value="option-2">Banana</TdsDropdownOption>
          <TdsDropdownOption value="option-3">Cherry</TdsDropdownOption>
          <TdsDropdownOption value="option-4">Date</TdsDropdownOption>
          <TdsDropdownOption value="option-5">Elderberry</TdsDropdownOption>
          <TdsDropdownOption value="option-6">Fig</TdsDropdownOption>
          <TdsDropdownOption value="option-7">Grape</TdsDropdownOption>
          <TdsDropdownOption value="option-8">Honeydew</TdsDropdownOption>
        </TdsDropdown>
        <div style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
          Current Value: <strong>{filterValue || 'None'}</strong>
        </div>
      </div>

      {/* Test Buttons */}
      <div style={{ marginTop: '30px' }}>
        <h4>Test Methods Programmatically</h4>
        <button
          onClick={testMethods}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '10px',
          }}
        >
          Test All Methods
        </button>
        <button
          onClick={() => {
            if (singleDropdownRef.current) singleDropdownRef.current.reset();
            if (multiDropdownRef.current) multiDropdownRef.current.reset();
            if (filterDropdownRef.current) filterDropdownRef.current.reset();
            setSingleValue('');
            setMultiValue([]);
            setFilterValue('');
          }}
          style={{
            padding: '10px 20px',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Reset All Dropdowns
        </button>
      </div>

      {/* Event Log */}
      <div style={{ marginTop: '40px' }}>
        <h4>Event Log</h4>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
          All dropdown events are logged here in real-time. Color coding:
          <span style={{ color: '#007bff' }}> Blue</span> = Single Select,
          <span style={{ color: '#28a745' }}> Green</span> = Multi Select,
          <span style={{ color: '#dc3545' }}> Red</span> = Filter,
          <span style={{ color: '#856404' }}> Yellow</span> = Methods
        </p>
        <div
          ref={logRef}
          style={{
            padding: '15px',
            background: '#f8f9fa',
            borderRadius: '4px',
            border: '1px solid #e0e0e0',
            minHeight: '400px',
            maxHeight: '600px',
            overflowY: 'auto',
            fontFamily: 'monospace',
            fontSize: '12px',
          }}
        >
          <div style={{ color: '#666', fontStyle: 'italic' }}>
            Event log will appear here as you interact with the dropdowns...
          </div>
        </div>
      </div>

      {/* Test Scenarios */}
      <div style={{ marginTop: '30px' }}>
        <h4>Test Scenarios to Try</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <h5>Single Select Tests:</h5>
            <ul style={{ fontSize: '14px' }}>
              <li>Click to open dropdown</li>
              <li>Select different options</li>
              <li>Use keyboard navigation (Arrow keys, Enter, Escape)</li>
              <li>Click outside to close</li>
              <li>Test focus/blur events</li>
            </ul>
          </div>
          <div>
            <h5>Multi Select Tests:</h5>
            <ul style={{ fontSize: '14px' }}>
              <li>Select multiple options</li>
              <li>Deselect options by clicking again</li>
              <li>Test keyboard navigation</li>
              <li>Verify comma-separated values</li>
            </ul>
          </div>
          <div>
            <h5>Filter Tests:</h5>
            <ul style={{ fontSize: '14px' }}>
              <li>Type in the filter input</li>
              <li>Watch tdsInput events fire</li>
              <li>Test with no matching results</li>
              <li>Clear filter and select</li>
              <li>Test special characters</li>
            </ul>
          </div>
          <div>
            <h5>Method Tests:</h5>
            <ul style={{ fontSize: '14px' }}>
              <li>Click "Test All Methods" button</li>
              <li>Watch programmatic value setting</li>
              <li>Test focusElement() method</li>
              <li>Test close() method</li>
              <li>Test reset() functionality</li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default About;
