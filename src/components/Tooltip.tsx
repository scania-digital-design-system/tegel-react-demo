import { TdsButton, TdsTooltip } from '@scania/tegel-react';

const Tooltip = () => {
  return (
    <>
      <div className="tds-headline-02 tds-u-pb1">Tooltip</div>
      <div className="tds-u-flex-center">
        <TdsTooltip
          placement="bottom"
          selector="#button-1"
          text="Text inside tooltip"
          mouseOverTooltip
        >
          <p className="tds-detail-05 tds-u-m0 tooltip-paragraph">
            Paragraph tag inside of Tooltip with
            <b>bold</b>
            and
            <i>italic</i>
            tags too.
          </p>
        </TdsTooltip>

        <TdsButton size="sm" id="button-1" text="Hover me"></TdsButton>
      </div>
    </>
  );
};

export default Tooltip;
