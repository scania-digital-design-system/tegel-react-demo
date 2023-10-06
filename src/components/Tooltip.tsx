const Tooltip = () => {
  return (
    <>
      <div className="tds-headline-02 tds-u-pb1">Tooltip</div>
      <div className="tds-u-flex-center">
        <tds-tooltip
          placement="bottom"
          selector="#button-1"
          text="Text inside tooltip"
          mouse-over-tooltip="true"
        >
          <p className="tds-detail-05 tds-u-m0 tooltip-paragraph">
            Paragraph tag inside of Tooltip with
            <b>bold</b>
            and
            <i>italic</i>
            tags too.
          </p>
        </tds-tooltip>

        <tds-button size="sm" id="button-1" text="Hover me"></tds-button>
      </div>
    </>
  );
};

export default Tooltip;
