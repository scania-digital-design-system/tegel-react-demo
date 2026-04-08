import { TdsCheckbox } from '@scania/tegel-react';
const Checkbox = () => {
  return (
    <>
      <div className="tds-headline-02 tds-u-pb1">Checkbox</div>
      <TdsCheckbox value="checkbox-value">
        <div slot="label">Enabled</div>
      </TdsCheckbox>
      <TdsCheckbox disabled value="checkbox-value">
        <div slot="label">Disabled</div>
      </TdsCheckbox>
      <TdsCheckbox checked value="checkbox-value">
        <div slot="label">Checked</div>
      </TdsCheckbox>
      <TdsCheckbox disabled checked value="checkbox-value">
        <div slot="label">Checked & Disabled</div>
      </TdsCheckbox>
    </>
  );
};

export default Checkbox;
