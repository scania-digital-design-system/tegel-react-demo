import { useEffect, useRef, useState } from 'react';
import './Stepper.scss';

interface StepperProps {
  orientation: 'vertical' | 'horizontal';
  labelPosition: 'below' | 'aside';
}

const Stepper = ({ orientation, labelPosition }: StepperProps) => {
  const [completedSteps, setCompletedSteps] = useState(0);
  const [errorStepIndex, setErrorStepIndex] = useState<number>();
  const textFieldRefs = useRef<HTMLTdsTextFieldElement[]>([]);
  const minInputLength = 4;
  console.log('hej')

  useEffect(() => {
    const handleInput = (event: TdsInputEvent, index: number) => {
      const target = event.target as HTMLTdsTextFieldElement;
      if (target.value.length >= minInputLength) {
        setCompletedSteps(index + 1);
        setErrorStepIndex(undefined);
      }
    };

    const handleChange = (event: TdsChangeEvent, index: number) => {
      const target = event.target as HTMLTdsTextFieldElement;
      if (target.value.length <= minInputLength) {
        setErrorStepIndex(index);
        setCompletedSteps(index);
      }
    };

    const textFieldElements = textFieldRefs.current;
    textFieldElements?.forEach((ref) => {
      ref?.addEventListener('tdsInput', (event: TdsInputEvent) => {
        handleInput(event, textFieldRefs.current.indexOf(ref));
      });
      ref.addEventListener('tdsChange', (event: TdsChangeEvent) => {
        handleChange(event, textFieldRefs.current.indexOf(ref));
      });
    });

    return () => {
      textFieldElements?.forEach((ref) => {
        ref?.removeEventListener('tdsInput', (event: TdsInputEvent) => {
          handleInput(event, textFieldRefs.current.indexOf(ref));
        });
        ref.addEventListener('tdsChange', (event: TdsChangeEvent) => {
          handleChange(event, textFieldRefs.current.indexOf(ref));
        });
      });
    };
  });

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
      <h4>{orientation.charAt(0).toUpperCase() + orientation.slice(1)} Stepper</h4>
      <section className={`${orientation}-stepper`}>
        <tds-stepper
          label-position={labelPosition}
          size={orientation === 'horizontal' ? 'sm' : 'lg'}
          orientation={`${orientation}`}
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <tds-step key={`step-${index}`} state={getState(index)} index={(index + 1).toString()}>
              <div slot="label">Step {index + 1}</div>
            </tds-step>
          ))}
        </tds-stepper>

        <form>
          {Array.from({ length: 4 }).map((_, index) => (
            <tds-text-field
              key={`text-field-${index}`}
              ref={(el) => {
                if (el) {
                  textFieldRefs.current = [...textFieldRefs.current, el];
                }
              }}
              disabled={completedSteps < index}
              placeholder={`Step ${index + 1}`}
              state={errorStepIndex === index ? 'error' : 'default'}
              helper={errorStepIndex === index ? 'Minimum 5 letters.' : undefined}
            ></tds-text-field>
          ))}
        </form>
      </section>
    </div>
  );
};

export default Stepper;
