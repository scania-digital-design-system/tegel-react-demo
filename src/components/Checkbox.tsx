const Checkbox = () => {
  return (
    <>
      <div className="tds-headline-02 tds-u-pb1">Checkbox</div>
      <tds-checkbox value="checkbox-value">
        <div slot="label">Enabled</div>
      </tds-checkbox>
      <tds-checkbox disabled value="checkbox-value">
        <div slot="label">Disabled</div>
      </tds-checkbox>
      <tds-checkbox checked value="checkbox-value">
        <div slot="label">Checked</div>
      </tds-checkbox>
      <tds-checkbox disabled checked value="checkbox-value">
        <div slot="label">Checked & Disabled</div>
      </tds-checkbox>
    </>
  );
};

export default Checkbox;
