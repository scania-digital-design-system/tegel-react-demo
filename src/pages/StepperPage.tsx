import Stepper from '../components/Stepper/Stepper';

const StepperPage = () => {
  return (
    <div>
      <Stepper labelPosition="aside" orientation="vertical" />
      <Stepper labelPosition="below" orientation="horizontal" />
    </div>
  );
};

export default StepperPage;
