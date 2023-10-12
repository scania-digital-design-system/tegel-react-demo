import { FormEvent, useEffect, useRef, useState } from 'react';
import './FormPage.scss';
import townDataNorway from './norway-town.json';
import townDataSweden from './sweden-town.json';

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
  const countryDropdown = useRef<HTMLTdsDropdownElement>(null);
  const norwayDropdownTown = useRef<HTMLTdsDropdownElement>(null);
  const swedenDropdownTown = useRef<HTMLTdsDropdownElement>(null);
  const [addressValidation, setAddressValidation] = useState(true);
  const addressTextFieldRef = useRef<HTMLTdsTextFieldElement>(null);
  const happinessSlider = useRef<HTMLTdsSliderElement>(null);
  const stressSlider = useRef<HTMLTdsSliderElement>(null);
  const workLifeSlider = useRef<HTMLTdsSliderElement>(null);

  /* First useEffect for connection to JSON file, only run on an initial load */
  useEffect(() => {
    /* const swedishTown = swedenDropdownTown.current;
    const norwayTown = norwayDropdownTown.current; */
    const addressTextFieldElement = addressTextFieldRef.current;
    /*  if (swedishTown) {
      swedishTown.options = townDataSweden;
    }

    if (norwayTown) {
      norwayTown.options = townDataNorway;
    } */

    happinessSlider.current?.addEventListener('tdsChange', () => {
      if (stressSlider.current) {
        stressSlider.current.disabled = false;
      }
    });
    stressSlider.current?.addEventListener('tdsChange', () => {
      if (workLifeSlider.current) {
        workLifeSlider.current.readOnly = false;
      }
    });

    addressTextFieldElement?.addEventListener('tdsInput', (event: TdsInputEvent) => {
      const target = event.target as HTMLTdsTextFieldElement;
      setAddressValue(target.value);
    });

    return () => {
      addressTextFieldElement?.removeEventListener('tdsInput', (event: TdsInputEvent) => {
        const target = event.target as HTMLTdsTextFieldElement;
        setAddressValue(target.value);
      });
    };
  }, []);

  /* Second useEffect for checking selected values of dropdown, run on dependency changes */
  useEffect(() => {
    /* Reset Sweden Town dropdown in case selected country is not Sweden */
    if (countrySelected !== 'sweden') {
      swedenDropdownTown.current?.reset();
    }

    /* Reset Norway Town dropdown in case selected country is not Norway */
    if (countrySelected !== 'norway') {
      norwayDropdownTown.current?.reset();
    }
  }, [countrySelected]);

  useEffect(() => {
    setTextareaDisabled(!addressValue);
  }, [addressValue]);

  useEffect(() => {
    const countryDropdownElement = countryDropdown?.current;

    const handleTdsChange = (event: Event) => {
      const customEvent = event as CustomEvent;
      const { value } = customEvent.detail;
      console.log('Value of state dropdown: ' + value);
      setCountrySelected(value);
    };

    countryDropdownElement?.addEventListener('tdsChange', handleTdsChange);

    return () => {
      if (countryDropdownElement) {
        countryDropdownElement.removeEventListener('tdsChange', handleTdsChange);
      }
    };
  });

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
            document.querySelector('tds-toast')?.hideToast();
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
          <tds-block>

            <section className="tds-u-pt0">
              <h3>Simple Form</h3>
              <p>
                This form uses the native form element and therefor it works out of the box with our components.
              </p>
              <tds-text-field
                mode-variant="secondary"
                name="text-field"
                label="Full name"
                label-position="outside"
                placeholder="John Doe"
              ></tds-text-field>
            </section>

            <section>
              <tds-datetime
                mode-variant="secondary"
                label="Date of birth"
                name="dateOfBirth"
                type="date"
                default-value="2023-08-01"
                min="2023-08-01"
                max="2024-01-31"
              ></tds-datetime>
            </section>

            <section className="side-by-side-input">
              <tds-text-field
                mode-variant="secondary"
                type="text"
                size="lg"
                state="success"
                label="Phone number"
                name="phoneNumber"
                label-position="outside"
                no-min-width
                placeholder="08 456 32"
              >
                <span slot="prefix">
                  <tds-icon name="phone" size="16px"></tds-icon>
                </span>
              </tds-text-field>

              <tds-text-field
                mode-variant="secondary"
                type="text"
                size="lg"
                state={addressValidation ? 'default' : 'error'}
                label="Address"
                name="homeAddress"
                label-position="outside"
                no-min-width
                placeholder="Majorvägen 32"
                helper={addressValidation ? '' : 'Address is mandatory field!'}
                ref={addressTextFieldRef}
              >
                <span slot="prefix">
                  <tds-icon name="pin" size="16px"></tds-icon>
                </span>
              </tds-text-field>
            </section>

            <section>
              <tds-dropdown
                ref={countryDropdown}
                mode-variant="secondary"
                name="country"
                label="Which country you want to select?"
                label-position="outside"
                placeholder="Country select"
                size="lg"
                open-direction="up"
                default-value={'sweden'}
              >
                <tds-dropdown-option value="sweden">Sweden</tds-dropdown-option>
                <tds-dropdown-option disabled value="Finland">
                  Finland
                </tds-dropdown-option>
                <tds-dropdown-option value="norway">Norway</tds-dropdown-option>
              </tds-dropdown>
            </section>

            <section>
              <tds-dropdown
                ref={norwayDropdownTown}
                mode-variant="secondary"
                name="norweiganTown"
                label="Which towns have you visited in Norway?"
                label-position="outside"
                placeholder="Norweigan Town"
                helper=""
                size="lg"
                open-direction="auto"
                multiselect
                disabled={countrySelected !== 'norway'}
              >
                {townDataNorway.map((town) => (
                  <tds-dropdown-option disabled={town.disabled} value={town.value}>{town.label}</tds-dropdown-option>
                ))}
              </tds-dropdown>
            </section>

            <section>
              <tds-dropdown
                ref={swedenDropdownTown}
                mode-variant="secondary"
                name="swedishTown"
                label="Select your favourite Swedish town."
                label-position="outside"
                placeholder="Swedish Town"
                helper=""
                size="lg"
                open-direction="auto"
                filter
                disabled={countrySelected !== 'sweden'}
              >
                {townDataSweden.map((town) => (
                  <tds-dropdown-option disabled={town.disabled} value={town.value}>{town.label}</tds-dropdown-option>
                ))}
              </tds-dropdown>
            </section>

            <section>
              <h5>Which offices do you work from?</h5>
              <tds-checkbox value="sodertalje321" name="office" checked>
                <div slot="label">Södertälje 321</div>
              </tds-checkbox>
              <tds-checkbox value="sergel" name="office">
                <div slot="label">Sergel</div>
              </tds-checkbox>
              <tds-checkbox value="homeoffice" name="office">
                <div slot="label">Home office</div>
              </tds-checkbox>
              <tds-checkbox value="b260" name="office" disabled>
                <div slot="label">Building 260</div>
              </tds-checkbox>
              <h5>How long have you been at Scania?</h5>
              <tds-radio-button checked value="radio-1" name="yearsAtScania">
                <div slot="label">0 - 6 months</div>
              </tds-radio-button>
              <tds-radio-button value="radio-2" name="yearsAtScania">
                <div slot="label">6 months - 1 year</div>
              </tds-radio-button>
              <tds-radio-button value="radio-2" name="yearsAtScania">
                <div slot="label">1 - 2 years</div>
              </tds-radio-button>
              <tds-radio-button value="radio-2" name="yearsAtScania">
                <div slot="label">2 - 5 years</div>
              </tds-radio-button>
              <tds-radio-button value="radio-2" name="yearsAtScania">
                <div slot="label">+ 5 years</div>
              </tds-radio-button>
            </section>

            <section className="tds-u-mt3">
              <h5>Textarea</h5>
              <tds-textarea
                mode-variant="secondary"
                name="occupationalEssay"
                label="What do you do at Scania? (Minimum 50 chars)"
                label-position="outside"
                state={occupationEssayState}
                helper={helperTextOccupationEssayState}
                disabled={textareaDisabled}
              ></tds-textarea>
            </section>

            <section>
              <h5>Tell us how you feel about your..</h5>
              <tds-slider
                ref={happinessSlider}
                label="..happiness at work"
                name="happinessAtWork"
                min="0"
                value="5"
                show-tick-numbers
                max="10"
                ticks="9"
                snap
                thumb-size="sm"
              ></tds-slider>
              <tds-slider
                ref={stressSlider}
                label="..stress level"
                name="stressLevel"
                min="0"
                value="5"
                show-tick-numbers
                max="10"
                ticks="9"
                snap
                disabled
              ></tds-slider>
              <tds-slider
                ref={workLifeSlider}
                label="..work/life balance."
                name="workLifeBalance"
                min="0"
                value="5"
                show-tick-numbers
                max="10"
                ticks="9"
                snap
                read-only
              ></tds-slider>
            </section>
            <section>
              <h5>What topics would you like to learn more about?</h5>
              <div className="chips">
                <tds-chip value="webDevelopment" type="checkbox" name="insterest">
                  <div slot="label">Web developement</div>
                </tds-chip>
                <tds-chip value="ciCd" type="checkbox" name="insterest">
                  <div slot="label">CI/CD</div>
                </tds-chip>
                <tds-chip value="docker" type="checkbox" name="insterest">
                  <div slot="label">Docker</div>
                </tds-chip>
                <tds-chip value="Kafka" type="checkbox" name="insterest">
                  <div slot="label">Kafka</div>
                </tds-chip>
                <tds-chip value="beDevelopment" type="checkbox" name="insterest">
                  <div slot="label">Backend development</div>
                </tds-chip>
                <tds-chip value="python" type="checkbox" name="insterest">
                  <div slot="label">Python</div>
                </tds-chip>
                <tds-chip value="js" type="checkbox" name="insterest">
                  <div slot="label">Javascript</div>
                </tds-chip>
                <tds-chip value="angular" type="checkbox" name="insterest">
                  <div slot="label">Angular</div>
                </tds-chip>
                <tds-chip value="react" type="checkbox" name="insterest">
                  <div slot="label">React</div>
                </tds-chip>
              </div>
            </section>
          </tds-block>
          <section>
            <tds-tooltip placement="right" selector="#anonymously" mouse-over-tooltip="true" show>
              <p className="tds-detail-05 tds-u-m0 tooltip-paragraph">
                This option is required in order to submit the form.
              </p>
            </tds-tooltip>
            <tds-toggle id="privacy-toggle" required name="toggle" size="sm">
              <span slot="label" id="anonymously">
                Answer anonymously
                <tds-icon name="info" size="16px"></tds-icon>
              </span>
            </tds-toggle>
          </section>
          <div className="spinner-container">
            <tds-spinner size="md" variant="standard"></tds-spinner>
          </div>
          <section>
            <tds-button type="submit" size="sm" fullbleed text="Submit"></tds-button>
            <span className="tds-u-mt1">
              <tds-button
                type="reset"
                size="sm"
                variant="secondary"
                fullbleed
                text="Reset"
              ></tds-button>
            </span>
          </section>
        </form>
      </article>
      {submitted && (
        <tds-toast variant="success" header="Thanks!">
          <div slot="toast-subheader">Check the console for FormData.</div>
        </tds-toast>
      )}
    </>
  );
};

export default FormPage;
