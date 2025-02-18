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
                label="Full name"
                labelPosition="outside"
                placeholder="John Doe"
              ></TdsTextField>
            </section>

            <section>
              <TdsDatetime
                modeVariant="secondary"
                label="Date of birth"
                name="dateOfBirth"
                type="date"
                defaultValue="2023-08-01"
                min="2023-08-01"
                max="2024-01-31"
              ></TdsDatetime>
            </section>

            <section className="side-by-side-input">
              <TdsTextField
                modeVariant="secondary"
                type="text"
                size="lg"
                state="success"
                label="Phone number"
                name="phoneNumber"
                labelPosition="outside"
                noMinWidth
                placeholder="08 456 32"
              >
                <span slot="prefix">
                  <TdsIcon name="phone" size="16px"></TdsIcon>
                </span>
              </TdsTextField>

              <TdsTextField
                modeVariant="secondary"
                type="text"
                size="lg"
                state={addressValidation ? 'default' : 'error'}
                label="Address"
                name="homeAddress"
                labelPosition="outside"
                noMinWidth
                placeholder="Majorvägen 32"
                helper={addressValidation ? '' : 'Address is mandatory field!'}
                onTdsInput={(event) => {
                  const target = event.target as HTMLTdsTextFieldElement;
                  setAddressValue(target.value);
                  setTextareaDisabled(!addressValue);
                }}
              >
                <span slot="prefix">
                  <TdsIcon name="pin" size="16px"></TdsIcon>
                </span>
              </TdsTextField>
            </section>

            <section>
              <TdsDropdown
                onTdsChange={handleTdsChange}
                modeVariant="secondary"
                name="country"
                label="Which country you want to select?"
                labelPosition="outside"
                placeholder="Country select"
                size="lg"
                openDirection="up"
                defaultValue={'sweden'}
              >
                <TdsDropdownOption value="sweden">Sweden</TdsDropdownOption>
                <TdsDropdownOption disabled value="Finland">
                  Finland
                </TdsDropdownOption>
                <TdsDropdownOption value="norway">Norway</TdsDropdownOption>
              </TdsDropdown>
            </section>

            <section>
              <TdsDropdown
                ref={norwayDropdownTown}
                modeVariant="secondary"
                name="norweiganTown"
                label="Which towns have you visited in Norway?"
                labelPosition="outside"
                placeholder="Norweigan Town"
                helper=""
                size="lg"
                openDirection="auto"
                multiselect
                disabled={countrySelected !== 'norway'}
              >
                {townDataNorway.map((town) => (
                  <TdsDropdownOption disabled={town.disabled} value={town.value}>
                    {town.label}
                  </TdsDropdownOption>
                ))}
              </TdsDropdown>
            </section>

            <section>
              <TdsDropdown
                ref={swedenDropdownTown}
                modeVariant="secondary"
                name="swedishTown"
                label="Select your favourite Swedish town"
                labelPosition="outside"
                placeholder="Swedish Town"
                helper=""
                size="lg"
                openDirection="auto"
                filter
                disabled={countrySelected !== 'sweden'}
              >
                {townDataSweden.map((town) => (
                  <TdsDropdownOption disabled={town.disabled} value={town.value}>
                    {town.label}
                  </TdsDropdownOption>
                ))}
              </TdsDropdown>
            </section>

            <section>
              <h5>Which offices do you work from?</h5>
              <TdsCheckbox value="sodertalje321" name="office" checked>
                <div slot="label">Södertälje 321</div>
              </TdsCheckbox>
              <TdsCheckbox value="sergel" name="office">
                <div slot="label">Sergel</div>
              </TdsCheckbox>
              <TdsCheckbox value="homeoffice" name="office">
                <div slot="label">Home office</div>
              </TdsCheckbox>
              <TdsCheckbox value="b260" name="office" disabled>
                <div slot="label">Building 260</div>
              </TdsCheckbox>
              <h5>How long have you been at Scania?</h5>
              <TdsRadioButton checked value="radio-1" name="yearsAtScania">
                <div slot="label">0 - 6 months</div>
              </TdsRadioButton>
              <TdsRadioButton value="radio-2" name="yearsAtScania">
                <div slot="label">6 months - 1 year</div>
              </TdsRadioButton>
              <TdsRadioButton value="radio-2" name="yearsAtScania">
                <div slot="label">1 - 2 years</div>
              </TdsRadioButton>
              <TdsRadioButton value="radio-2" name="yearsAtScania">
                <div slot="label">2 - 5 years</div>
              </TdsRadioButton>
              <TdsRadioButton value="radio-2" name="yearsAtScania">
                <div slot="label">+ 5 years</div>
              </TdsRadioButton>
            </section>

            <section className="tds-u-mt3">
              <h5>Textarea</h5>
              <TdsTextarea
                modeVariant="secondary"
                name="occupationalEssay"
                label="What do you do at Scania? (Minimum 50 chars)"
                labelPosition="outside"
                state={occupationEssayState}
                helper={helperTextOccupationEssayState}
                disabled={textareaDisabled}
              ></TdsTextarea>
            </section>

            <section>
              <h5>Tell us how you feel about your..</h5>
              <TdsSlider
                onTdsChange={() => {
                  setStressSliderDisabled(false);
                }}
                label="..happiness at work"
                name="happinessAtWork"
                min="0"
                value="5"
                showTickNumbers
                max="10"
                ticks="9"
                snap
                thumbSize="sm"
              ></TdsSlider>
              <TdsSlider
                onTdsChange={() => {
                  setWorkLifeSliderDisabled(false);
                }}
                label="..stress level"
                name="stressLevel"
                min="0"
                value="5"
                showTickNumbers
                max="10"
                ticks="9"
                snap
                disabled={stressSliderDisabled}
              ></TdsSlider>
              <TdsSlider
                label="..work/life balance."
                name="workLifeBalance"
                min="0"
                value="5"
                showTickNumbers
                max="10"
                ticks="9"
                snap
                readOnly={workLifeSliderDisabled}
              ></TdsSlider>
            </section>
            <section>
              <h5>What topics would you like to learn more about?</h5>
              <div className="chips">
                <TdsChip value="webDevelopment" type="checkbox" name="insterest">
                  <div slot="label">Web developement</div>
                </TdsChip>
                <TdsChip value="ciCd" type="checkbox" name="insterest">
                  <div slot="label">CI/CD</div>
                </TdsChip>
                <TdsChip value="docker" type="checkbox" name="insterest">
                  <div slot="label">Docker</div>
                </TdsChip>
                <TdsChip value="Kafka" type="checkbox" name="insterest">
                  <div slot="label">Kafka</div>
                </TdsChip>
                <TdsChip value="beDevelopment" type="checkbox" name="insterest">
                  <div slot="label">Backend development</div>
                </TdsChip>
                <TdsChip value="python" type="checkbox" name="insterest">
                  <div slot="label">Python</div>
                </TdsChip>
                <TdsChip value="js" type="checkbox" name="insterest">
                  <div slot="label">Javascript</div>
                </TdsChip>
                <TdsChip value="angular" type="checkbox" name="insterest">
                  <div slot="label">Angular</div>
                </TdsChip>
                <TdsChip value="react" type="checkbox" name="insterest">
                  <div slot="label">React</div>
                </TdsChip>
              </div>
            </section>
          </TdsBlock>
          <section>
            <TdsTooltip placement="top" selector="#anonymously" mouse-over-tooltip="true" show>
              <p className="tds-detail-05 tds-u-m0 tooltip-paragraph">
                This option is required in order to submit the form.
              </p>
            </TdsTooltip>
            <TdsToggle id="privacy-toggle" required name="toggle" size="sm">
              <span slot="label" id="anonymously">
                Answer anonymously
                <TdsIcon name="info" size="16px"></TdsIcon>
              </span>
            </TdsToggle>
          </section>
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
