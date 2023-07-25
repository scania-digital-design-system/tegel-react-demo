import { FormEvent, Fragment, useRef, useState } from 'react';
import './RadioButton.scss';

const data = {
  starters: {
    name: 'starters',
    title: 'What would you like to start?',
    required: false,
    fields: [
      {
        name: 'Cucumber salad',
        id: 'cakdse8sf234',
      },
      {
        name: 'Garlic bread',
        id: 'cakdse8sd234',
      },
    ],
  },
  mains: {
    name: 'mains',
    title: 'What would you like for your main?',
    required: false,
    fields: [
      {
        name: 'Salmon',
        id: 'cakdse8234',
      },
      {
        name: 'Veal',
        id: 'iceCrdseam8234',
        disabled: true,
      },
      {
        name: 'Chicken',
        id: 'iceCrssddfeam8234',
        preselected: true,
      },
    ],
  },
  desserts: {
    name: 'desserts',
    title: 'What would you like for dessert?',
    required: true,
    fields: [
      {
        name: 'Cake',
        id: 'cake8234',
      },
      {
        name: 'Pudding',
        id: 'pudding8234',
      },
      {
        name: 'Ice cream',
        id: 'iceCream8234',
      },
      {
        name: 'Tiramisu',
        id: 'iceCrsdfeam8234',
      },
    ],
  },
};

const RadioButton = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [submittedData, setSubmittedData] = useState<any>();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formEl = e.target as HTMLFormElement;

    const elements = formEl.elements;

    setSubmittedData([
      (elements as any)['starters'].value,
      (elements as any)['mains'].value,
      (elements as any)['desserts'].value,
    ]);
  };

  return (
    <form onSubmit={onSubmit} ref={formRef}>
      {Object.values(data).map((fieldset: any) => (
        <fieldset key={fieldset.name} className="tds-u-pb2">
          <legend className="tds-headline-05 tds-u-pb1">{fieldset.title}</legend>
          {fieldset.fields.map((field: any) => {
            const uid = `${fieldset.name}-${field.name}`;
            return (
              <tds-radio-button
                key={uid}
                name={fieldset.name}
                value={field.name}
                radio-id={uid}
                required={fieldset.required}
                disabled={field.disabled}
                checked={field.preselected}
                ref={(ref) => {
                  if (ref) {
                    // Note: workaround for React, in a real world app
                    // listeners should be removed as well to prevent memory leaks
                    ref.addEventListener('tdsChange', (e: any) => {
                      console.log('tdsChange event.detail', e.detail);
                    });

                    (ref as any).handleChange = () => {
                      console.log('should not work');
                    };
                  }
                }}
              >
                <span slot="label">
                  {field.name}
                  {field.disabled && ' (out of stock!)'}
                </span>
              </tds-radio-button>
            );
          })}
        </fieldset>
      ))}
      <tds-button text="Place order" type="submit"></tds-button>
      {submittedData && (
        <>
          <p className="tds-headline-03">Thank you for your order.</p>
          <pre>
            Reciept:
            <br />
            {submittedData.map((dish: any, idx: any) => (
              <Fragment key={dish}>
                {dish}: {(idx + 1) * 10000} SEK
                <br />
              </Fragment>
            ))}
          </pre>
        </>
      )}
    </form>
  );
};

export default RadioButton;
