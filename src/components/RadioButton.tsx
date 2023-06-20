const data = {
  desserts: {
    name: "desserts",
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

const RadioButton = () => {
  return (
    <form>
      {Object.values(data).map((fieldset) => (
        <fieldset>
          {fieldset.fields.map((field) => (
            <tds-radio-button
              name={fieldset.name}
              value={field.name}
              radioId={`${fieldset.name}-${field.name}`}
              required={fieldset.required}
            ></tds-radio-button>
          ))}
        </fieldset>
      ))}
    </form>
  );
};

export default RadioButton;
