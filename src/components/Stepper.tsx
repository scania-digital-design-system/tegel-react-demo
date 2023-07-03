import { useState } from 'react';
import './Stepper.scss';

interface StepperProps {
    orientation: 'vertical' | 'horizontal';
    labelPosition: 'below' | 'aside';
}

const Stepper = ({ orientation, labelPosition }: StepperProps) => {
    const [completedSteps, setCompletedSteps] = useState(0);
    const [errorStepIndex, setErrorStepIndex] = useState<number>();

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
                <tds-stepper label-position={labelPosition} size={orientation === 'horizontal' ? 'sm' : 'lg'} orientation={`${orientation}`}>
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
                            ref={(element) => {
                                element?.addEventListener('tdsInput', (event: any) => {
                                    if (event.detail.target.value.length > 5) {
                                        setCompletedSteps(index + 1);
                                        setErrorStepIndex(undefined);
                                    }
                                });
                                element?.addEventListener('tdsChange', (event: any) => {
                                    if (event.detail.target.value.length < 5) {
                                        setErrorStepIndex(index);
                                        setCompletedSteps(index);
                                    }
                                });
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
