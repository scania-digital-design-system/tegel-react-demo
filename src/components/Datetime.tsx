import { useState } from 'react';

const Datetime = () => {
  const [typeOfState, setTypeOfState] = useState<'success' | 'error'>('success');
  const [typeOfSize, setTypeOfSize] = useState<'sm' | 'md' | 'lg'>('lg');
  const [typeOfInput, setTypeOfInput] = useState<'datetime-local' | 'date' | 'time'>('datetime-local');
  const [noMinWidth, setNoMinWidth] = useState(false); // State for noMinWidth
	const [isDatetimeDisabled, setIsDatetimeDisabled] = useState(false);

  // Get current date and format it
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  

  const handleNewState = (event: Event) => {
    const newState = (event.target as HTMLTdsRadioButtonElement).value as 'error' | 'success';
    setTypeOfState(newState);
  };

  const handleType = (event: Event) => {
    const newTypeOfInput = (event.target as HTMLTdsRadioButtonElement).value as 'datetime-local' | 'date' | 'time';
    setTypeOfInput(newTypeOfInput);
  };

  const handleSize = (event: Event) => {
    const newSize = (event.target as HTMLTdsRadioButtonElement).value as 'sm' | 'md' | 'lg';
    setTypeOfSize(newSize);
  };

	const handleToggle = (event: CustomEvent<{ checked: boolean }>) => {
		const { detail } = event;
		setNoMinWidth(detail.checked);
	};

	const handleDisabledState = (event: CustomEvent<{ checked: boolean }>) => {
		const { detail } = event;
		setIsDatetimeDisabled(detail.checked);
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
              element.addEventListener('tdsChange', handleNewState);
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
              element.addEventListener('tdsChange', handleNewState);
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
              element.addEventListener('tdsChange', handleType);
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
              element.addEventListener('tdsChange', handleType);
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
              element.addEventListener('tdsChange', handleType);
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
              element.addEventListener('tdsChange', handleSize);
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
              element.addEventListener('tdsChange', handleSize);
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
              element.addEventListener('tdsChange', handleSize);
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
        mode-variant="secondary"
        label="Date of birth"
        name="dateOfBirth"
        type="date"
        default-value={formattedDate}
      ></tds-datetime>
    </>
  );
};

export default Datetime;
