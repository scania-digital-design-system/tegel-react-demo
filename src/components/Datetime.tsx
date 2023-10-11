import {
  TdsDatetime
} from "@scania/tegel-react";

const Datetime = () => {
  return (
    <>
      <div className="tds-headline-02 tds-u-pb1">Datetime</div>
      <div className="tds-u-flex tds-u-flex-dir-col tds-u-gap2">
        <TdsDatetime type="datetime-local"></TdsDatetime>
        <TdsDatetime type="date"></TdsDatetime>
        <TdsDatetime type="time"></TdsDatetime>
      </div>
    </>
  );
};

export default Datetime;
