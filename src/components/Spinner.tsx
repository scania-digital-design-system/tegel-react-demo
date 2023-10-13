import { TdsSpinner } from "@scania/tegel-react";

const Spinner = () => {
  return (
    <>
      <div className="tds-headline-02 tds-u-pb1">Spinner</div>
      <div className="tds-headline-03 tds-u-pb1">Standard</div>
      <TdsSpinner variant="standard"></TdsSpinner>
      <div className="tds-headline-03 tds-u-pb1">Inverted</div>
      <TdsSpinner variant="inverted"></TdsSpinner>
    </>
  );
};
export default Spinner;
