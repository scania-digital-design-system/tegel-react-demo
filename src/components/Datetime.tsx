import { useState, useRef } from 'react';

const Datetime = () => {
  const [typeOfState, setTypeOfState] = useState<'success' | 'error'>('success');
  const [typeOfSize, setTypeOfSize] = useState<'sm' | 'md' | 'lg'>('lg');
  const [typeOfInput, setTypeOfInput] = useState<'datetime-local' | 'date' | 'time'>('datetime-local');
  const tdsDatetimeRef = useRef<HTMLTdsDatetimeElement>(null);
  const [noMinWidth, setNoMinWidth] = useState(false); // State for noMinWidth
	const [isDatetimeDisabled, setIsDatetimeDisabled] = useState(false);

  const handleNewState = (event: Event) => {
    const newState: 'error' | 'success' = (event.target as HTMLTdsRadioButtonElement).value as 'error' | 'success';
    setTypeOfState(newState);
  };

  const handleType = (event: Event) => {
    const newTypeOfInput: 'datetime-local' | 'date' | 'time' = (event.target as HTMLTdsRadioButtonElement).value as 'datetime-local' | 'date' | 'time';
    setTypeOfInput(newTypeOfInput);
  };

  const handleSize = (event: Event) => {
    const newSize: 'sm' | 'md' | 'lg' = (event.target as HTMLTdsRadioButtonElement).value as 'sm' | 'md' | 'lg';
    setTypeOfSize(newSize);
  };

	const handleToggle = (event: CustomEvent) => {
		const { detail } = event as CustomEvent<{ checked: boolean }>;
		setNoMinWidth(detail.checked);
	};

	const handleDisabledState = (event: CustomEvent) => {
		const { checked } = event.detail;
		setIsDatetimeDisabled(checked);
	};

  return (
    <>
      <div className="tds-headline-02 tds-u-pb1">Datetime</div>
      <div>
        <div className="tds-headline-04 tds-u-pb1">State</div>
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
      <br />
      <div>
        <div className="tds-headline-04 tds-u-pb1">Type</div>
        <tds-radio-button
          name="datetime"
          value="datetime-local"
          checked={typeOfInput === 'datetime-local'}
          ref={element => {
            if (element) {
              element.addEventListener('tdsChange', handleType as unknown as EventListener);
            }
          }}
        >
          <div slot="label">Datetime</div>
        </tds-radio-button>
        <tds-radio-button
          name="date"
          value="date"
          checked={typeOfInput === 'date'}
          ref={element => {
            if (element) {
              element.addEventListener('tdsChange', handleType as unknown as EventListener);
            }
          }}
        >
          <div slot="label">Date</div>
        </tds-radio-button>
        <tds-radio-button
          name="time"
          value="time"
          checked={typeOfInput === 'time'}
          ref={element => {
            if (element) {
              element.addEventListener('tdsChange', handleType as unknown as EventListener);
            }
          }}
        >
          <div slot="label">Time</div>
        </tds-radio-button>
      </div>
      <br />
      <div>
        <div className="tds-headline-04 tds-u-pb1">Size</div>
        <tds-radio-button
          name="sm"
          value="sm"
          checked={typeOfSize === 'sm'}
          ref={element => {
            if (element) {
              element.addEventListener('tdsChange', handleSize as unknown as EventListener);
            }
          }}
        >
          <div slot="label">Sm</div>
        </tds-radio-button>
        <tds-radio-button
          name="md"
          value="md"
          checked={typeOfSize === 'md'}
          ref={element => {
            if (element) {
              element.addEventListener('tdsChange', handleSize as unknown as EventListener);
            }
          }}
        >
          <div slot="label">Md</div>
        </tds-radio-button>
        <tds-radio-button
          name="lg"
          value="lg"
          checked={typeOfSize === 'lg'}
          ref={element => {
            if (element) {
              element.addEventListener('tdsChange', handleSize as unknown as EventListener);
            }
          }}
        >
          <div slot="label">Lg</div>
        </tds-radio-button>
      </div>
			<br />
			<div className="tds-headline-04 tds-u-pb1">No minimum width</div>
      <tds-toggle
				 ref={(element) =>
          element?.addEventListener('tdsToggle', handleToggle as EventListener)
        }
      />
			<br />
			<div className="tds-headline-04 tds-u-pb1">Disable</div>
			<tds-toggle
				ref={(element) =>
					element?.addEventListener("tdsToggle", handleDisabledState as EventListener)
				}
			>
				<div slot="label">{isDatetimeDisabled ? 'Disable Datetime' : 'Enable Datetime'}</div>
			</tds-toggle>
      <h2>Primary mode</h2>
      <tds-datetime
        ref={tdsDatetimeRef}
        type={typeOfInput}
        state={typeOfState}
        size={typeOfSize}
        no-min-width={noMinWidth}
				disabled={isDatetimeDisabled}
        mode-variant="primary"
        label="Choose a datetime"
        helper="Helper text"
      ></tds-datetime>
      <h2>Secondary mode</h2>
      <tds-datetime
        ref={tdsDatetimeRef}
        type={typeOfInput}
        state={typeOfState}
				no-min-width={noMinWidth}
        size={typeOfSize}
				disabled={isDatetimeDisabled}
        mode-variant="secondary"
        label="Choose a datetime"
        helper="Helper text"
      ></tds-datetime>
    </>
  );
};

export default Datetime;
