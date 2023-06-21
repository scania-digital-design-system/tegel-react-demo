import { FormEvent, useRef } from "react";
import "./RadioButton.scss";

const data = {
  desserts: {
    name: "desserts",
    title: "What would you like for dessert?",
    required: true,
    fields: [
      {
        name: "cake",
        id: "cake8234",
      },
      {
        name: "pudding",
        id: "pudding8234",
      },
      {
        name: "ice cream",
        id: "iceCream8234",
      },
      {
        name: "tiramisu",
        id: "iceCrsdfeam8234",
      },
    ],
  },
};

const onSubmit = (e: FormEvent) => {
  e.preventDefault();

  console.log("onSubmit, event", e);
};

const RadioButton = () => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form onSubmit={onSubmit} ref={formRef}>
      {Object.values(data).map((fieldset) => (
        <fieldset>
          <legend className="tds-headline-05">{fieldset.title}</legend>
          {fieldset.fields.map((field) => (
            <tds-radio-button
              name={fieldset.name}
              value={field.name}
              radio-id={`${fieldset.name}-${field.name}`}
              required={fieldset.required}
            >
              <span slot="label">{field.name}</span>
            </tds-radio-button>
          ))}
        </fieldset>
      ))}
      <tds-button
        text="Place Order"
        onClick={() => {
          formRef?.current?.requestSubmit();
        }}
      ></tds-button>
    </form>
  );
};

export default RadioButton;
