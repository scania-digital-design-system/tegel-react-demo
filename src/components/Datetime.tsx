import React, { useState, useRef, useEffect } from 'react';

const Datetime = () => {
  const [typeOfState, setTypeOfState] = useState<'success' | 'error'>('success');
  const tdsDatetimeRef = useRef<HTMLTdsDatetimeElement>(null);

  const handleNewState = (event: Event) => {
    const newState: 'error' | 'success' = (event.target as HTMLTdsRadioButtonElement).value as 'error' | 'success';
    setTypeOfState(newState);
  };

  return (
    <>
      <div className="tds-headline-02 tds-u-pb1">Datetime</div>
      <div>
        <tds-radio-button
          name="success"
          value="success"
          checked={typeOfState === 'success'}
					ref={element => {
            if (element) {
              element.addEventListener('tdsChange', handleNewState as unknown as EventListener);
            }
          }}
        >
          <div slot="label">Success</div>
        </tds-radio-button>
        <tds-radio-button
          name="error"
          value="error"
          checked={typeOfState === 'error'}
          ref={element => {
            if (element) {
              element.addEventListener('tdsChange', handleNewState as unknown as EventListener);
            }
          }}
        >
          <div slot="label">Error</div>
        </tds-radio-button>
      </div>
      <h2>Primary mode</h2>
      <tds-datetime
        ref={tdsDatetimeRef}
        type="datetime-local"
        state={typeOfState}
        mode-variant="primary"
        label="Choose a datetime"
        helper="Helper text"
      ></tds-datetime>
      <h2>Secondary mode</h2>
      <tds-datetime
        ref={tdsDatetimeRef}
        type="datetime-local"
        state={typeOfState}
        mode-variant="secondary"
        label="Choose a datetime"
        helper="Helper text"
      ></tds-datetime>
    </>
  );
};

export default Datetime;
