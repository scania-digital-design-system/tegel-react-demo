import { TdsStepper, TdsStep } from '@scania/tegel-react';

const StepperExample = () => {
  return (
    <>
      <div className="tds-headline-02 tds-u-pb1">Stepper</div>
      <TdsStepper size="lg" labelPosition="below" orientation="horizontal">
        <TdsStep state="success" index="1">
          <div slot="label">Success step</div>
        </TdsStep>
        <TdsStep state="error" index="2">
          <div slot="label">Error step</div>
        </TdsStep>
        <TdsStep state="current" index="3">
          <div slot="label">Current step</div>
        </TdsStep>
        <TdsStep index="4">
          <div slot="label">Upcoming step</div>
        </TdsStep>
      </TdsStepper>
    </>
  );
};

export default StepperExample;
