const Datetime = () => {
  return (
    <>
      <div className="tds-headline-02 tds-u-pb1">Datetime</div>
      <div className="tds-u-flex tds-u-flex-dir-col tds-u-gap2">
        <tds-datetime type="datetime-local"></tds-datetime>
        <tds-datetime type="date"></tds-datetime>
        <tds-datetime type="time"></tds-datetime>
      </div>
    </>
  );
};

export default Datetime;
