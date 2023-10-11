import { useState, useEffect, useRef } from 'react';
import {
  TdsAccordion,
  TdsAccordionItem,
  TdsRadioButton,
  TdsToggle
} from "@scania/tegel-react";

const Accordion = () => {
  const [iconPosition, setIconPosition] = useState<string>('end');
  const [disabled, setDisabeld] = useState(true);
  const [paddingReset, setPaddingReset] = useState(false);
  const paddingToggleRef = useRef<HTMLTdsToggleElement>(null);
  const disableToggleRef = useRef<HTMLTdsToggleElement>(null);
  const radioButtonEndRef = useRef<HTMLTdsRadioButtonElement>(null);
  const radioButtonStartRef = useRef<HTMLTdsRadioButtonElement>(null);

  useEffect(() => {
    const handlePaddingResetToggle = (event: TdsToggleEvent) => {
      setPaddingReset(event.detail.checked);
    };

    const handleDisableToggle = (event: TdsToggleEvent) => {
      setDisabeld(event.detail.checked);
    };

    const handleIconPositionChange = (event: TdsChangeEvent) => {
      setIconPosition(event.detail.value);
    };

    const paddingtoggleElement = paddingToggleRef.current;
    const disableToggleElement = disableToggleRef.current;
    const radioButtonEndElement = radioButtonEndRef.current;
    const radioButtonStartElement = radioButtonStartRef.current;

    radioButtonEndElement?.addEventListener('tdsChange', handleIconPositionChange);
    radioButtonStartElement?.addEventListener('tdsChange', handleIconPositionChange);
    paddingtoggleElement?.addEventListener('tdsToggle', handlePaddingResetToggle);
    disableToggleElement?.addEventListener('tdsToggle', handleDisableToggle);

    return () => {
      paddingtoggleElement?.removeEventListener('tdsToggle', handlePaddingResetToggle);
      disableToggleElement?.removeEventListener('tdsToggle', handleDisableToggle);
      radioButtonEndElement?.removeEventListener('tdsChange', handleIconPositionChange);
      radioButtonStartElement?.removeEventListener('tdsChange', handleIconPositionChange);
    };
  });

  return (
    <div>
      <div className="tds-headline-02">Accordion</div>
      <p className="tds-u-mb0">Icon position</p>
      <div>
        <TdsRadioButton
          name="icon-position"
          value="end"
          checked={iconPosition === 'end'}
          ref={radioButtonEndRef}
        >
          <div slot="label">End</div>
        </TdsRadioButton>
        <TdsRadioButton
          name="icon-position"
          value="start"
          checked={iconPosition === 'start'}
          ref={radioButtonStartRef}
        >
          <div slot="label">Start</div>
        </TdsRadioButton>
        <br />
      </div>
      <TdsToggle ref={paddingToggleRef}>
        <div slot="label">{paddingReset ? 'Disable Padding Reset' : 'Enable Padding Reset'}</div>
      </TdsToggle>
      <br />
      <TdsToggle ref={disableToggleRef} checked={disabled}>
        <div slot="label">{disabled ? 'Disable Accordion' : 'Enable Accordion'}</div>
      </TdsToggle>
      <br />
      <TdsAccordion>
        <TdsAccordionItem
          header="Item 1"
          expand-icon-position={iconPosition}
          disabled={!disabled}
          padding-reset={paddingReset}
        >
          This is the panel, which contains associated information with the header. Usually, it
          contains text, set in the same size as the header. Lorem ipsum doler sit amet.
        </TdsAccordionItem>
        <TdsAccordionItem
          header="Item 2"
          expand-icon-position={iconPosition}
          disabled={!disabled}
          padding-reset={paddingReset}
        >
          This is the panel, which contains associated information with the header. Usually, it
          contains text, set in the same size as the header. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Duis laoreet vestibulum fermentum.
        </TdsAccordionItem>
        <TdsAccordionItem
          header="Item 3"
          expand-icon-position={iconPosition}
          disabled={!disabled}
          padding-reset={paddingReset}
        >
          This is the panel, which contains associated information with the header. Usually, it
          contains text, set in the same size as the header. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Duis laoreet vestibulum fermentum.
        </TdsAccordionItem>
      </TdsAccordion>
    </div>
  );
};

export default Accordion;
