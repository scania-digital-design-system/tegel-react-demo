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
        accordionToggleElement.removeEventListener(
          'tdsToggle',
          handleAccordionToggle as EventListener,
        );
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
    const newPosition: 'end' | 'start' = event.target.value as 'end' | 'start';
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
      <div className="tds-headline-02">Accordion</div>
      <p className='tds-u-mb0'>Icon position</p>
      <div>
        <tds-radio-button
          name="icon-position"
          value="end"
          checked={iconPosition === 'end'}
          ref={(element) => {
            if (element) {
              element.addEventListener(
                'tdsChange',
                handleIconPositionChange as unknown as EventListener,
              );
            }
          }}
        >
          <div slot="label">End</div>
        </tds-radio-button>
        <tds-radio-button
          name="icon-position"
          value="start"
          checked={iconPosition === 'start'}
          ref={(element) => {
            if (element) {
              element.addEventListener(
                'tdsChange',
                handleIconPositionChange as unknown as EventListener,
              );
            }
          }}
        >
          <div slot="label">Start</div>
        </tds-radio-button>
        <br />
      </div>
      <tds-toggle ref={toggleRef}>
        <div slot="label">{paddingReset ? 'Disable Padding Reset' : 'Enable Padding Reset'}</div>
      </tds-toggle>
      <br />
      <tds-toggle
        ref={accordionToggleRef}
        checked={checkboxState}
        onTdsToggle={handleAccordionToggleChange}
      >
        <div slot="label">{checkboxState ? 'Disable Accordion' : 'Enable Accordion'}</div>
      </tds-toggle>
      <br />
      <tds-accordion>
        <tds-accordion-item
          header="Item 1"
          expanded={expandedItem === 'item1'}
          expand-icon-position={iconPosition}
          disabled={!checkboxState}
          padding-reset={paddingReset}
          onTdsToggle={() => handleAccordionItemClick('item1')}
        >
          This is the panel, which contains associated information with the header. Usually, it
          contains text, set in the same size as the header. Lorem ipsum doler sit amet.
        </tds-accordion-item>
        <tds-accordion-item
          header="Item 2"
          expanded={expandedItem === 'item2'}
          expand-icon-position={iconPosition}
          disabled={!checkboxState}
          padding-reset={paddingReset}
        >
          This is the panel, which contains associated information with the header. Usually, it
          contains text, set in the same size as the header. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Duis laoreet vestibulum fermentum.
        </tds-accordion-item>
        <tds-accordion-item
          header="Item 3"
          expanded={expandedItem === 'item3'}
          expand-icon-position={iconPosition}
          disabled={!checkboxState}
          padding-reset={paddingReset}
        >
          This is the panel, which contains associated information with the header. Usually, it
          contains text, set in the same size as the header. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Duis laoreet vestibulum fermentum.
        </tds-accordion-item>
      </tds-accordion>
    </div>
  );
};

export default Accordion;
