import { FormEvent, useRef, useState } from "react";
import "./FormPage.scss";

const FormPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sendingStatus, setSendingStatus] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const countryDropdown = useRef<HTMLTdsDropdownElement>(null);

  const handleClick = () => {
    form.current?.requestSubmit();
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (form.current) {
      const countryDropdownValue =
        countryDropdown.current?.getAttribute("selected-value");
      const formData = new FormData(form.current);
      formData.forEach((value, key) => {
        console.log("Key:", key, "Value:", value);
      });
      console.log("Dropdown value: " + countryDropdownValue);
    }

    setSendingStatus(true);

    setTimeout(() => {
      setSendingStatus(false);
      setSubmitted(true);
    }, 3000);

    setTimeout(() => {
      document.querySelector("tds-toast")?.hideToast();
    }, 10000);
  };

  return (
    <>
      <article className={`form ${sendingStatus ? "form-sending" : ""}`}>
        <form
          ref={form}
          onSubmit={(event: FormEvent) => {
            handleSubmit(event);
          }}
        >
          <h3>Form example</h3>
          <tds-block>
            <section>
              <h4>Text Input</h4>
              <tds-text-field
                name="text-field"
                label="Full name"
                label-position="outside"
                placeholder="John Doe"
              ></tds-text-field>
              <tds-datetime
                label="Date of birth"
                name="dateOfBirth"
                type="date"
                default-value="2000-01-01"
              ></tds-datetime>
            </section>

            <section>
              <tds-dropdown
                ref={countryDropdown}
                id="country-dropdown"
                size="lg"
                placeholder="Placeholder"
                open-direction="auto"
                label-position="outside"
                label="Current country"
                type="default"
              >
                <tds-dropdown-option value="sweden" tabIndex={0}>
                  Sweden
                </tds-dropdown-option>
                <tds-dropdown-option value="norway" tabIndex={0}>
                  Norway
                </tds-dropdown-option>
                <tds-dropdown-option value="finland" tabIndex={0}>
                  Finland
                </tds-dropdown-option>
              </tds-dropdown>
            </section>

            <section>
              <h5>Which offices do you work from?</h5>
              <tds-checkbox value="sodertalje321" name="office">
                <div slot="label">Södertälje 321</div>
              </tds-checkbox>
              <tds-checkbox value="sergel" name="office">
                <div slot="label">Sergel</div>
              </tds-checkbox>
              <tds-checkbox value="homeoffice" name="office">
                <div slot="label">Home office</div>
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
            <tds-textarea
              name="textarea"
              label="What do you do at Scania?"
              label-position="outside"
            ></tds-textarea>
            <section>
              <h5>Tell us how you feel about your..</h5>
              <tds-slider
                label="..happiness at work"
                name="happinessAtWork"
                min="0"
                value="5"
                show-tick-numbers
                max="10"
                ticks="9"
                snap
              ></tds-slider>
              <tds-slider
                label="..stress level"
                name="stressLevel"
                min="0"
                value="5"
                show-tick-numbers
                max="10"
                ticks="9"
                snap
              ></tds-slider>
              <tds-slider
                label="..work/life balance."
                name="workLifeBalance"
                min="0"
                value="5"
                show-tick-numbers
                max="10"
                ticks="9"
                snap
              ></tds-slider>
            </section>
            <section>
              <h5>What topics would you like to learn more about?</h5>
              <div className="chips">
                <tds-chip
                  value="webDevelopment"
                  type="checkbox"
                  name="insterest"
                >
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
                <tds-chip
                  value="beDevelopment"
                  type="checkbox"
                  name="insterest"
                >
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
          <section id="anonymous-toggle" className="tds-u-mt1 tds-u-flex-end">
            <tds-toggle required name="toggle" size="sm">
              <div slot="label">Answer anonymously</div>
            </tds-toggle>
          </section>
          <div className="spinner-container">
            <tds-spinner size="md" variant="standard"></tds-spinner>
          </div>
          <section className="tds-u-mt3">
            <tds-button
              size="sm"
              fullbleed
              onClick={() => {
                handleClick();
              }}
              text="Submit"
            ></tds-button>
          </section>
        </form>
      </article>
      {submitted && (
        <tds-toast type="success" header="Thanks!">
          <div slot="toast-subheader">Check the console for FormData.</div>
        </tds-toast>
      )}
    </>
  );
};

export default FormPage;
