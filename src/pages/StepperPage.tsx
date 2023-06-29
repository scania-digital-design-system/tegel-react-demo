import Stepper from '../components/Stepper';

const StepperPage = () => {
    return (
        <div>
            <Stepper labelPosition="below" orientation="vertical" />
            <Stepper labelPosition="aside" orientation="horizontal" />
        </div>
    );
};

export default StepperPage;
