import { FormEvent, useEffect, useRef, useState } from "react";
import "./FormPage.scss";
import townDataNorway from "./norway-town.json";
import townDataSweden from "./sweden-town.json";

const FormPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sendingStatus, setSendingStatus] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const [countrySelected, setCountrySelected] = useState<string>("");
  const norwayDropdownTown = useRef<HTMLTdsDropdownV2Element>(null);
  const swedenDropdownTown = useRef<HTMLTdsDropdownV2Element>(null);

  const handleClick = () => {
    form.current?.requestSubmit();
  };

  /* First useEffect for connection to JSON file, only run on an initial load */
  useEffect(() => {
    const swedishTown = swedenDropdownTown.current;

    const norwayTown = norwayDropdownTown.current;

    if (swedishTown) {
      swedishTown.options = townDataSweden;
    }

    if (norwayTown) {
      norwayTown.options = townDataNorway;
    }
  }, []);

  /* Second useEffect for checking selected values of dropdown, run on dependency changes */
  useEffect(() => {
    /* Reset Sweden Town dropdown in case selected country is not Sweden */
    if (countrySelected !== "sweden") {
      swedenDropdownTown.current?.reset();
    }

    /* Reset Norway Town dropdown in case selected country is not Norway */
    if (countrySelected !== "norway") {
      norwayDropdownTown.current?.reset();
    }
  }, [countrySelected]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (form.current) {
      const formData = new FormData(form.current);
      formData.forEach((value, key) => {
        console.log("Key:", key, "Value:", value);
      });
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
              <tds-dropdown-v2
                ref={(countryDropdown) => {
                  countryDropdown?.addEventListener("tdsChange", (event) => {
                    const customEvent = event as CustomEvent;
                    const { value } = customEvent.detail;
                    setCountrySelected(value);
                  });
                }}
                name="country"
                label="Which country you want to select?"
                label-position="outside"
                placeholder="Country select"
                size="lg"
                open-direction="up"
              >
                <tds-dropdown-option-v2 value="sweden">
                  Sweden
                </tds-dropdown-option-v2>
                <tds-dropdown-option-v2 disabled value="Finland">
                  Finland
                </tds-dropdown-option-v2>
                <tds-dropdown-option-v2 value="norway">
                  Norway
                </tds-dropdown-option-v2>
              </tds-dropdown-v2>
            </section>

            <section>
              <tds-dropdown-v2
                ref={norwayDropdownTown}
                name="norweiganTown"
                label="Which towns have you visited in Norway?"
                label-position="outside"
                placeholder="Norweigan Town"
                helper=""
                size="lg"
                open-direction="auto"
                multiselect
                disabled={countrySelected !== "norway"}
              ></tds-dropdown-v2>
            </section>

            <section>
              <tds-dropdown-v2
                ref={swedenDropdownTown}
                name="swedishTown"
                label="Select your favourite Swedish town"
                label-position="outside"
                placeholder="Swedish Town"
                helper=""
                size="lg"
                open-direction="auto"
                filter
                disabled={countrySelected !== "sweden"}
              ></tds-dropdown-v2>
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

            <section>
              <tds-textarea
                name="textarea"
                label="What do you do at Scania?"
                label-position="outside"
              ></tds-textarea>
            </section>

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
