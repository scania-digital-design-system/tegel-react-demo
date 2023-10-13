import { useRef } from 'react';
import './Toggle.scss';
import { TdsButton, TdsToggle } from '@scania/tegel-react';

const Toggle = () => {
  const toggle = useRef<HTMLTdsToggleElement>(null);
  const disabledToggle = useRef<HTMLTdsToggleElement>(null);

  const handleToggle = async () => {
    if (toggle.current) {
      const toggleEvent = toggle.current.toggle();
      console.log(await toggleEvent);
    }
    if (disabledToggle.current) {
      const toggleEvent = disabledToggle.current.toggle();
      console.log(await toggleEvent);
    }
  };
  return (
    <>
      <div className="tds-headline-02 tds-u-pb1">Toggle</div>
      <div className="toggle-container">
        <TdsToggle ref={toggle} headline="Headline">
          <div slot="label">Label</div>
        </TdsToggle>
        <TdsToggle ref={disabledToggle} disabled headline="Headline">
          <div slot="label">Label</div>
        </TdsToggle>
      </div>
      <p>A toggle can also be toggle programmatically, try it by pressing the button below.</p>
      <TdsButton onClick={handleToggle} size="sm" text="Press me!"></TdsButton>
    </>
  );
};

export default Toggle;
