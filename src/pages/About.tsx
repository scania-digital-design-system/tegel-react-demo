import React, { useEffect, useRef, useState } from 'react';
import { TdsButton, TdsDropdown, TdsDropdownOption } from '@scania/tegel-react';

// Define the type for the custom element
interface HTMLTdsDropdownElementExtended extends HTMLElement {
  focusElement: () => void;
}

const About = () => {
  // Use forwardRef pattern to correctly type the refs
  const emptyDropdownRef = useRef<HTMLTdsDropdownElementExtended>(null);
  const filterDropdownRef = useRef<HTMLTdsDropdownElementExtended>(null);
  const defaultValueDropdownRef = useRef<HTMLTdsDropdownElementExtended>(null);
  const parentDropdownRef = useRef<HTMLTdsDropdownElementExtended>(null);
  const childDropdownRef = useRef<HTMLTdsDropdownElementExtended>(null);

  const [childDisabled, setChildDisabled] = useState(true);
  const [focusEvents, setFocusEvents] = useState<string[]>([]);

  // Handle parent dropdown change
  const handleParentChange = (event: CustomEvent) => {
    setChildDisabled(false);
    // Focus the child dropdown when parent is selected
    setTimeout(() => {
      childDropdownRef.current?.focusElement();
    }, 100);
  };

  // Listen for focus events
  useEffect(() => {
    const dropdowns = [
      emptyDropdownRef.current,
      filterDropdownRef.current,
      defaultValueDropdownRef.current,
      parentDropdownRef.current,
      childDropdownRef.current,
    ];

    const handleFocus = (event: Event) => {
      const target = event.target as HTMLElement;
      setFocusEvents((prev) => [...prev, `Focus on ${target.id}`]);
    };

    dropdowns.forEach((dropdown) => {
      if (dropdown) {
        dropdown.addEventListener('tdsFocus', handleFocus);
      }
    });

    return () => {
      dropdowns.forEach((dropdown) => {
        if (dropdown) {
          dropdown.removeEventListener('tdsFocus', handleFocus);
        }
      });
    };
  }, []);

  return (
    <article className="tds-u-p4">
      <h3 className="tds-headline-02 tds-u-mb4">Dropdown Focus Feature Test</h3>

      <div className="tds-u-mb4">
        <h4 className="tds-headline-03 tds-u-mb2">1. Empty Dropdown (No Selection)</h4>
        <div className="tds-u-flex tds-u-flex-direction-row tds-u-gap-3">
          <TdsDropdown
            id="empty-dropdown"
            ref={emptyDropdownRef as any}
            label="Empty Dropdown"
            placeholder="Select an option"
          >
            <TdsDropdownOption value="option1">Option 1</TdsDropdownOption>
            <TdsDropdownOption value="option2">Option 2</TdsDropdownOption>
            <TdsDropdownOption value="option3">Option 3</TdsDropdownOption>
          </TdsDropdown>
          <TdsButton
            text="Focus Empty Dropdown"
            onClick={() => emptyDropdownRef.current?.focusElement()}
          />
        </div>
      </div>

      <div className="tds-u-mb4">
        <h4 className="tds-headline-03 tds-u-mb2">2. Filter Dropdown (With Search)</h4>
        <div className="tds-u-flex tds-u-flex-direction-row tds-u-gap-3">
          <TdsDropdown
            id="filter-dropdown"
            ref={filterDropdownRef as any}
            label="Filter Dropdown"
            placeholder="Search and select"
            filter
          >
            <TdsDropdownOption value="option1">Apple</TdsDropdownOption>
            <TdsDropdownOption value="option2">Banana</TdsDropdownOption>
            <TdsDropdownOption value="option3">Cherry</TdsDropdownOption>
            <TdsDropdownOption value="option4">Orange</TdsDropdownOption>
            <TdsDropdownOption value="option5">Pineapple</TdsDropdownOption>
          </TdsDropdown>
          <TdsButton
            text="Focus Filter Dropdown"
            onClick={() => filterDropdownRef.current?.focusElement()}
          />
        </div>
      </div>

      <div className="tds-u-mb4">
        <h4 className="tds-headline-03 tds-u-mb2">3. Dropdown With Default Value</h4>
        <div className="tds-u-flex tds-u-flex-direction-row tds-u-gap-3">
          <TdsDropdown
            id="default-value-dropdown"
            ref={defaultValueDropdownRef as any}
            label="Default Value Dropdown"
            defaultValue="option2"
          >
            <TdsDropdownOption value="option1">Option 1</TdsDropdownOption>
            <TdsDropdownOption value="option2">Option 2</TdsDropdownOption>
            <TdsDropdownOption value="option3">Option 3</TdsDropdownOption>
          </TdsDropdown>
          <TdsButton
            text="Focus Default Value Dropdown"
            onClick={() => defaultValueDropdownRef.current?.focusElement()}
          />
        </div>
      </div>

      <div className="tds-u-mb4">
        <h4 className="tds-headline-03 tds-u-mb2">4. Dependent Dropdowns (Parent-Child)</h4>
        <div className="tds-u-flex tds-u-flex-direction-row tds-u-gap-3">
          <TdsDropdown
            id="parent-dropdown"
            ref={parentDropdownRef as any}
            label="Parent Dropdown"
            placeholder="Select parent"
            onTdsChange={handleParentChange}
          >
            <TdsDropdownOption value="parent1">Parent 1</TdsDropdownOption>
            <TdsDropdownOption value="parent2">Parent 2</TdsDropdownOption>
            <TdsDropdownOption value="parent3">Parent 3</TdsDropdownOption>
          </TdsDropdown>
          <TdsDropdown
            id="child-dropdown"
            ref={childDropdownRef as any}
            label="Child Dropdown"
            placeholder="Select child"
            disabled={childDisabled}
          >
            <TdsDropdownOption value="child1">Child 1</TdsDropdownOption>
            <TdsDropdownOption value="child2">Child 2</TdsDropdownOption>
            <TdsDropdownOption value="child3">Child 3</TdsDropdownOption>
          </TdsDropdown>
          <TdsButton
            text="Focus Parent"
            onClick={() => parentDropdownRef.current?.focusElement()}
          />
        </div>
      </div>

      <div className="tds-u-mt4">
        <h4 className="tds-headline-03 tds-u-mb2">Focus Events Log</h4>
        <div
          className="tds-u-p3 tds-u-border tds-u-border-grey-500"
          style={{ minHeight: '100px', maxHeight: '200px', overflowY: 'auto' }}
        >
          {focusEvents.length > 0 ? (
            <ul>
              {focusEvents.map((event, index) => (
                <li key={index}>{event}</li>
              ))}
            </ul>
          ) : (
            <p>No focus events recorded yet. Try focusing a dropdown.</p>
          )}
        </div>
        <TdsButton
          text="Clear Log"
          variant="secondary"
          className="tds-u-mt2"
          onClick={() => setFocusEvents([])}
        />
      </div>
    </article>
  );
};

export default About;
