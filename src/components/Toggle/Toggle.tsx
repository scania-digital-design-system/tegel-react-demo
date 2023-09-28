import { useRef } from 'react';
import './Toggle.scss';

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
        <tds-toggle ref={toggle} headline="Headline">
          <div slot="label">Label</div>
        </tds-toggle>
        <tds-toggle ref={disabledToggle} disabled headline="Headline">
          <div slot="label">Label</div>
        </tds-toggle>
      </div>
      <p>A toggle can also be toggle programmatically, try it by pressing the button below.</p>
      <tds-button onClick={handleToggle} size="sm" text="Press me!"></tds-button>
    </>
  );
};

export default Toggle;
