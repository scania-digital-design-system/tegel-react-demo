import React, { useState } from 'react';

interface RadioButtonChangeEvent<T = any> {
  detail: T;
}

const AccordionExample = () => {
  const [expandedItem, setExpandedItem] = useState('');
  const [iconPosition, setIconPosition] = useState<'end' | 'start'>('end');
  const [isAccordionEnabled, setIsAccordionEnabled] = useState(true);

  const handleAccordionItemClick = (item: React.SetStateAction<string>) => {
    if (!isAccordionEnabled) {
      return; // Do nothing if the accordion is disabled
    }

    if (expandedItem === item) {
      setExpandedItem('');
    } else {
      setExpandedItem(item);
    }
  };

  const handleToggleChange = () => {
    setIsAccordionEnabled((prevValue) => !prevValue);
  };

  const handleIconPositionChange = (event: RadioButtonChangeEvent<{ value: string }>) => {
    const newPosition = event.detail.value as 'end' | 'start';
    setIconPosition(newPosition);

    // Dispatch the custom event 'tdsChange' when the icon position changes
    const tdsChangeEvent = new CustomEvent('tdsChange', {
      detail: {
        iconPosition: newPosition,
      },
    });
    document.dispatchEvent(tdsChangeEvent);
  };

  return (
    <div>
      <div className="tds-headline-02 tds-u-pb1">AccordionExample</div>
      <h2>Icon Position</h2>
      <div>
        <tds-radio-button
          name="icon-position"
          value="end"
          radio-id="icon-1"
          checked={iconPosition === 'end'}
          onTdsChange={handleIconPositionChange}
        >
          <div slot="label">End</div>
        </tds-radio-button>
        <tds-radio-button
          name="icon-position"
          value="start"
          radio-id="icon-2"
          checked={iconPosition === 'start'}
          onTdsChange={handleIconPositionChange}
        >
          <div slot="label">Start</div>
        </tds-radio-button>
      </div>

      <tds-toggle
        headline="Toggle Accordion"
        size="lg"
        checked={isAccordionEnabled}
        onTdsToggle={handleToggleChange}
      >
        <div slot="label">Enable/Disable Accordion</div>
      </tds-toggle>

      <h2>Accordion with Primary Mode</h2>
    
        <tds-accordion mode-variant="primary">
          <tds-accordion-item
            header="Item 1"
            expanded={expandedItem === 'item1'}
            expand-icon-position={iconPosition}
						disabled={!isAccordionEnabled}
            onTdsToggle={() => handleAccordionItemClick('item1')}
          >
            Content for Item 1
          </tds-accordion-item>
          <tds-accordion-item
            header="Item 2"
            expanded={expandedItem === 'item2'}
						expand-icon-position={iconPosition}
            onTdsToggle={() => handleAccordionItemClick('item2')}
          >
            Content for Item 2
          </tds-accordion-item>
          <tds-accordion-item
            header="Item 3"
            expanded={expandedItem === 'item3'}
						expand-icon-position={iconPosition}
            onTdsToggle={() => handleAccordionItemClick('item3')}
          >
            Content for Item 3
          </tds-accordion-item>
        </tds-accordion>


      <h2>Accordion with Secondary Mode</h2>

        <tds-accordion mode-variant="secondary">
          <tds-accordion-item
            header="Item 1"
            expanded={expandedItem === 'item1'}
						expand-icon-position={iconPosition}
            onTdsToggle={() => handleAccordionItemClick('item1')}
          >
            Content for Item 1
          </tds-accordion-item>
          <tds-accordion-item
            header="Item 2"
            expanded={expandedItem === 'item2'}
						expand-icon-position={iconPosition}
            onTdsToggle={() => handleAccordionItemClick('item2')}
          >
            Content for Item 2
          </tds-accordion-item>
          <tds-accordion-item
            header="Item 3"
            expanded={expandedItem === 'item3'}
						expand-icon-position={iconPosition}
            onTdsToggle={() => handleAccordionItemClick('item3')}
          >
            Content for Item 3
          </tds-accordion-item>
        </tds-accordion>
    </div>
  );
};

export default AccordionExample;
