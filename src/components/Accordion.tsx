import React, { useState, useEffect, useRef, ChangeEvent } from 'react';

const Accordion = () => {
  const [expandedItem, setExpandedItem] = useState('');
  const [iconPosition, setIconPosition] = useState<'end' | 'start'>('end');
  const [checkboxState, setCheckboxState] = useState(true);
  const [paddingReset, setPaddingReset] = useState(false);
  const toggleRef = useRef<HTMLTdsToggleElement>(null);
  const accordionToggleRef = useRef<HTMLTdsToggleElement>(null);

  useEffect(() => {
    const handlePaddingResetToggle = (event: Event) => {
      const { detail } = event as CustomEvent<{ checked: boolean }>;
      setPaddingReset(detail.checked);
    };

    const handleAccordionToggle = (event: CustomEvent) => {
      const { detail } = event as CustomEvent<{ checked: boolean }>;
      setCheckboxState(detail.checked);
    };

    const toggleElement = toggleRef.current;
    const accordionToggleElement = accordionToggleRef.current;

    if (toggleElement) {
      toggleElement.addEventListener('tdsToggle', handlePaddingResetToggle);
    }

    if (accordionToggleElement) {
      accordionToggleElement.addEventListener('tdsToggle', handleAccordionToggle as EventListener);
    }

    return () => {
      if (toggleElement) {
        toggleElement.removeEventListener('tdsToggle', handlePaddingResetToggle);
      }

      if (accordionToggleElement) {
        accordionToggleElement.removeEventListener('tdsToggle', handleAccordionToggle as EventListener);
      }
    };
  }, []);

  useEffect(() => {
    const accordionItems = document.querySelectorAll('tds-accordion-item');
    accordionItems.forEach((item) => {
      item.setAttribute('expand-icon-position', iconPosition);
    });
  }, [iconPosition]);

  const handleAccordionItemClick = (item: string) => {
    if (!checkboxState) {
      return; // Do nothing if the accordion is disabled
    }

    if (expandedItem === item) {
      setExpandedItem('');
    } else {
      setExpandedItem(item);
    }
  };

  const handleIconPositionChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newPosition = event.target.value as 'end' | 'start';
    setIconPosition(newPosition);
  };


  const handleAccordionToggleChange = () => {
    const tdsToggleEvent = new CustomEvent('tdsToggle', {
      detail: {
        checked: checkboxState,
      },
    });

    if (accordionToggleRef.current) {
      accordionToggleRef.current.dispatchEvent(tdsToggleEvent);
    }
  };

  return (
    <div>
      <div className="tds-headline-02 tds-u-pb1">Accordion</div>
      <tds-toggle ref={toggleRef}>
        <div slot="label">{paddingReset ? 'Disable Padding Reset' : 'Enable Padding Reset'}</div>
      </tds-toggle>
      <br />
      <tds-toggle ref={accordionToggleRef} checked={checkboxState} onTdsToggle={handleAccordionToggleChange}>
        <div slot="label">{checkboxState ? 'Disable Accordion' : 'Enable Accordion'}</div>
      </tds-toggle>
      <h2>Icon Position</h2>
      <div>
      <label>
          <input
            type="radio"
            name="icon-position"
            value="end"
            checked={iconPosition === 'end'}
            onChange={handleIconPositionChange}
          />
          End
        </label>
        <label>
          <input
            type="radio"
            name="icon-position"
            value="start"
            checked={iconPosition === 'start'}
            onChange={handleIconPositionChange}
          />
          Start
        </label>
      </div>

      <h2>Accordion with Primary Mode</h2>

      <tds-accordion mode-variant="primary">
        <tds-accordion-item
          header="Item 1"
          expanded={expandedItem === 'item1'}
          expand-icon-position={iconPosition}
          disabled={!checkboxState}
          padding-reset={paddingReset}
          onTdsToggle={() => handleAccordionItemClick('item1')}
        >
          This is the panel, which contains associated information with the header. Usually, it contains text, set in the same size as the header. Lorem ipsum doler sit amet.
        </tds-accordion-item>
        <tds-accordion-item
          header="Item 2"
          expanded={expandedItem === 'item2'}
          expand-icon-position={iconPosition}
          disabled={!checkboxState}
          padding-reset={paddingReset}
          onTdsToggle={() => handleAccordionItemClick('item2')}
        >
          This is the panel, which contains associated information with the header. Usually, it contains text, set in the same size as the header. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet vestibulum fermentum.
        </tds-accordion-item>
        <tds-accordion-item
          header="Item 3"
          expanded={expandedItem === 'item3'}
          expand-icon-position={iconPosition}
          disabled={!checkboxState}
          padding-reset={paddingReset}
          onTdsToggle={() => handleAccordionItemClick('item3')}
        >
          This is the panel, which contains associated information with the header. Usually, it contains text, set in the same size as the header. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet vestibulum fermentum.
        </tds-accordion-item>
      </tds-accordion>

      <h2>Accordion with Secondary Mode</h2>

      <tds-accordion mode-variant="secondary">
        <tds-accordion-item
          header="Item 1"
          expanded={expandedItem === 'item1'}
          disabled={!checkboxState}
          expand-icon-position={iconPosition}
          onTdsToggle={() => handleAccordionItemClick('item1')}
        >
          Content for Item 1
        </tds-accordion-item>
        <tds-accordion-item
          header="Item 2"
          expanded={expandedItem === 'item2'}
          disabled={!checkboxState}
          expand-icon-position={iconPosition}
          onTdsToggle={() => handleAccordionItemClick('item2')}
        >
          Content for Item 2
        </tds-accordion-item>
        <tds-accordion-item
          header="Item 3"
          expanded={expandedItem === 'item3'}
          expand-icon-position={iconPosition}
          disabled={!checkboxState}
          onTdsToggle={() => handleAccordionItemClick('item3')}
        >
          Content for Item 3
        </tds-accordion-item>
      </tds-accordion>
    </div>
  );
};

export default Accordion;
