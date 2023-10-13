import { useState } from 'react';
import './Stepper.scss';
import { TdsStep, TdsStepper, TdsTextField } from '@scania/tegel-react';
import { TdsTextFieldCustomEvent } from '@scania/tegel';

interface StepperProps {
  orientation: 'vertical' | 'horizontal';
  labelPosition: 'below' | 'aside';
}

const Stepper = ({ orientation, labelPosition }: StepperProps) => {
  const [completedSteps, setCompletedSteps] = useState(0);
  const [errorStepIndex, setErrorStepIndex] = useState<number>();
  const minInputLength = 4;

  const handleInput = (event: TdsTextFieldCustomEvent<InputEvent>, index: number) => {
    const target = event.target as HTMLTdsTextFieldElement;
    if (target.value.length >= minInputLength) {
      setCompletedSteps(index + 1);
      setErrorStepIndex(undefined);
    }
  };

  const handleChange = (event: TdsTextFieldCustomEvent<any>, index: number) => {
    const target = event.target as HTMLTdsTextFieldElement;
    if (target.value.length <= minInputLength) {
      setErrorStepIndex(index);
      setCompletedSteps(index);
    }
  };

  const getState = (index: number) => {
    if (index === errorStepIndex) {
      return 'error';
    } else if (completedSteps === index) {
      return 'current';
    } else if (completedSteps < index) {
      return 'upcoming';
    } else if (completedSteps > index) {
      return 'success';
    }
  };

  return (
    <div>
      <h4>{orientation.charAt(0).toUpperCase() + orientation.slice(1)} Stepper Hej</h4>
      <section className={`${orientation}-stepper`}>
        <TdsStepper
          label-position={labelPosition}
          size={orientation === 'horizontal' ? 'sm' : 'lg'}
          orientation={`${orientation}`}
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <TdsStep key={`step-${index}`} state={getState(index)} index={(index + 1).toString()}>
              <div slot="label">Step {index + 1}</div>
            </TdsStep>
          ))}
        </TdsStepper>

        <form>
          {Array.from({ length: 4 }).map((_, index) => (
            <TdsTextField
              onTdsInput={(event) => {
                handleInput(event, index);
              }}
              onTdsChange={(event) => {
                handleChange(event, index);
              }}
              key={`text-field-${index}`}
              disabled={completedSteps < index}
              placeholder={`Step ${index + 1}`}
              state={errorStepIndex === index ? 'error' : 'default'}
              helper={errorStepIndex === index ? 'Minimum 5 letters.' : undefined}
            ></TdsTextField>
          ))}
        </form>
      </section>
    </div>
  );
};

export default Stepper;
