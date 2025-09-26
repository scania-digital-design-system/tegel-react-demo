import { FormEvent, useRef, useState } from 'react';
import './FormPage.scss';
import townDataNorway from './norway-town.json';
import townDataSweden from './sweden-town.json';
import {
  TdsBlock,
  TdsButton,
  TdsCheckbox,
  TdsChip,
  TdsDatetime,
  TdsDropdown,
  TdsDropdownOption,
  TdsIcon,
  TdsRadioButton,
  TdsSlider,
  TdsSpinner,
  TdsTextField,
  TdsTextarea,
  TdsToast,
  TdsToggle,
  TdsTooltip,
} from '@scania/tegel-react';

const FormPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sendingStatus, setSendingStatus] = useState(false);
  const [occupationEssayState, setOccupationEssayState] = useState<'default' | 'error'>('default');
  const [helperTextOccupationEssayState, setHelperTextOccupationEssayState] = useState<
    undefined | string
  >(undefined);
  const [textareaDisabled, setTextareaDisabled] = useState(true);
  const form = useRef<HTMLFormElement>(null);
  const [addressValue, setAddressValue] = useState<null | string>('');
  const [countrySelected, setCountrySelected] = useState<string>('sweden');
  const norwayDropdownTown = useRef<HTMLTdsDropdownElement>(null);
  const swedenDropdownTown = useRef<HTMLTdsDropdownElement>(null);
  const [addressValidation, setAddressValidation] = useState(true);
  const [stressSliderDisabled, setStressSliderDisabled] = useState(true);
  const [workLifeSliderDisabled, setWorkLifeSliderDisabled] = useState(true);
  const toastElement = useRef<HTMLTdsToastElement>(null);

  const handleTdsChange = (event: Event) => {
    const customEvent = event as CustomEvent;
    const { value } = customEvent.detail;
    setCountrySelected(value);
    if (countrySelected !== 'sweden') {
      swedenDropdownTown.current?.reset();
    }
    if (countrySelected !== 'norway') {
      norwayDropdownTown.current?.reset();
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (form.current) {
      const formData = new FormData(form.current);

      if (formData.get('homeAddress') === '') {
        setAddressValidation(false);
      } else {
        setAddressValidation(true);
        const occupationalEssay = formData.get('occupationalEssay') as string;

        if (occupationalEssay?.length < 50) {
          setOccupationEssayState('error');
          setHelperTextOccupationEssayState("You don't have enough characters");
        } else {
          setOccupationEssayState('default');
          setHelperTextOccupationEssayState(undefined);
          setAddressValidation(true);
          formData.forEach((value, key) => {
            console.log('Key:', key, 'Value:', value);
          });

          setSendingStatus(true);

          setTimeout(() => {
            setSendingStatus(false);
            setSubmitted(true);
          }, 3000);

          setTimeout(() => {
            toastElement.current?.hideToast();
          }, 10000);
        }
      }
    }
  };

  return (
    <>
      <article className={`form ${sendingStatus ? 'form-sending' : ''}`}>
        <form
          ref={form}
          onSubmit={(event: FormEvent) => {
            handleSubmit(event);
          }}
        >
          <h3>Form example</h3>
          <TdsBlock>
            <section className="tds-u-pt0">
              <h3>Simple Form</h3>
              <p>
                This form uses the native form element and therefor it works out of the box with our
                components.
              </p>
              <TdsTextField
                modeVariant="secondary"
                name="text-field"
                label="required"
                labelPosition="inside"
                required
              ></TdsTextField>

              <TdsTextField
                modeVariant="secondary"
                name="text-field"
                label="type='email'"
                type="email"
                labelPosition="inside"
              ></TdsTextField>

              <TdsTextField
                modeVariant="secondary"
                name="text-field"
                label="type='tel'"
                type="tel"
                labelPosition="inside"
              ></TdsTextField>

              <TdsTextField
                modeVariant="secondary"
                name="text-field"
                label="autocomplete='on'"
                autocomplete="on"
                labelPosition="inside"
              ></TdsTextField>

              <TdsTextField
                modeVariant="secondary"
                name="text-field"
                label="autocomplete='name'"
                autocomplete="name"
                labelPosition="inside"
              ></TdsTextField>

              <TdsTextField
                modeVariant="secondary"
                name="text-field"
                label="autocomplete='tel'"
                autocomplete="tel"
                labelPosition="inside"
              ></TdsTextField>

              <TdsTextField
                modeVariant="secondary"
                name="text-field"
                label="autocomplete='email'"
                autocomplete="email"
                labelPosition="inside"
              ></TdsTextField>
            </section>
          </TdsBlock>

          <div className="spinner-container">
            <TdsSpinner size="md" variant="standard"></TdsSpinner>
          </div>
          <section>
            <TdsButton type="submit" size="sm" fullbleed text="Submit"></TdsButton>
            <span className="tds-u-mt1">
              <TdsButton
                type="reset"
                size="sm"
                variant="secondary"
                fullbleed
                text="Reset"
              ></TdsButton>
            </span>
          </section>
        </form>
      </article>
      {submitted && (
        <TdsToast variant="success" header="Thanks!" ref={toastElement}>
          <div slot="toast-subheader">Check the console for FormData.</div>
        </TdsToast>
      )}
    </>
  );
};

export default FormPage;
