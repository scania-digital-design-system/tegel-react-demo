import { useState } from "react";
import DataTable from "./components/DataTable";
import Header from "./components/Header";
import ModeSwitcher from "./components/ModeSwitcher";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  return (
    <div className={`App sdds-mode-${mode}`}>
      <Header />
      <ModeSwitcher mode={mode} setMode={setMode} />
      <main>
        {/* COMPONENTS GO HERE */}
        <div>
          <div className="sdds-headline-02 sdds-u-pb1">Accordion</div>
          <sdds-accordion>
            <sdds-accordion-item header="First item">
              This is the panel, which contains associated information with the
              header. Usually it contains text, set in the same size as the
              header. Lorem ipsum doler sit amet.
            </sdds-accordion-item>
            <sdds-accordion-item header="Second item">
              This is the panel, which contains associated information with the
              header. Usually it contains text, set in the same size as the
              header. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis laoreet vestibulum fermentum.
            </sdds-accordion-item>
          </sdds-accordion>
        </div>
        <div>
          <div className="sdds-headline-02 sdds-u-pb1">Badge</div>
          <sdds-badges value="1" size="lg"></sdds-badges>
        </div>
        <div>
          <div className="sdds-headline-02 sdds-u-pb1">Banner</div>
          <sdds-banner
            icon="truck"
            header="This is a header text area"
            subheader="SubHeader text area"
            link-text="Learn more"
            href="tegel.scania.com"
            link-target="_self"
          ></sdds-banner>
        </div>
        <div>
          <div className="sdds-headline-02 sdds-u-pb1">Block</div>
          <sdds-block>
            <div className="sdds-headline-01">Headline</div>
            <p className="sdds-body-01">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              condimentum nisi ut eleifend ultrices. Nunc venenatis maximus
              sapien, ac bibendum nisl aliquam in. Morbi ac velit et ligula
              consectetur interdum. Vestibulum condimentum, augue vitae lobortis
              rhoncus, mi est ultricies mi, sed tincidunt magna nibh in lectus.
              Pellentesque vel vulputate orci, vel lacinia orci. Sed suscipit
              leo at diam ullamcorper, vitae volutpat neque dapibus. Maecenas
              sit amet rhoncus arcu. Sed sed molestie elit. Nullam in interdum
              est, vitae aliquam ipsum. Nunc rutrum nibh ut arcu egestas
              egestas.
            </p>
            <sdds-block>
              <div className="sdds-headline-01">Headline</div>
              <p className="sdds-body-01">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                condimentum nisi ut eleifend ultrices. Nunc venenatis maximus
                sapien, ac bibendum nisl aliquam in. Morbi ac velit et ligula
                consectetur interdum. Vestibulum condimentum, augue vitae
                lobortis rhoncus, mi est ultricies mi, sed tincidunt magna nibh
                in lectus. Pellentesque vel vulputate orci, vel lacinia orci.
                Sed suscipit leo at diam ullamcorper, vitae volutpat neque
                dapibus. Maecenas sit amet rhoncus arcu. Sed sed molestie elit.
                Nullam in interdum est, vitae aliquam ipsum. Nunc rutrum nibh ut
                arcu egestas egestas.
              </p>
              <sdds-block>
                <div className="sdds-headline-01">Headline</div>
                <p className="sdds-body-01">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  condimentum nisi ut eleifend ultrices. Nunc venenatis maximus
                  sapien, ac bibendum nisl aliquam in. Morbi ac velit et ligula
                  consectetur interdum. Vestibulum condimentum, augue vitae
                  lobortis rhoncus, mi est ultricies mi, sed tincidunt magna
                  nibh in lectus. Pellentesque vel vulputate orci, vel lacinia
                  orci. Sed suscipit leo at diam ullamcorper, vitae volutpat
                  neque dapibus. Maecenas sit amet rhoncus arcu. Sed sed
                  molestie elit. Nullam in interdum est, vitae aliquam ipsum.
                  Nunc rutrum nibh ut arcu egestas egestas.
                </p>
              </sdds-block>
            </sdds-block>
          </sdds-block>
        </div>
        <div>
          <div className="sdds-headline-02 sdds-u-pb1">Breadcrumbs</div>
          <sdds-breadcrumb>
            <sdds-breadcrumb-item href="#">Step one</sdds-breadcrumb-item>
            <sdds-breadcrumb-item href="www.google.se">
              Step two
            </sdds-breadcrumb-item>
            <sdds-breadcrumb-item current={true}>
              Current page
            </sdds-breadcrumb-item>
          </sdds-breadcrumb>
        </div>
        <div className="sdds-u-w-100">
          <div className="sdds-headline-02 sdds-u-pb1">Buttons</div>
          <sdds-button
            type="primary"
            size="lg"
            fullbleed
            text="Primary fullbleed button"
          ></sdds-button>
          <div
            className="sdds-u-mt2 sdds-u-flex"
            style={{ justifyContent: "space-around" }}
          >
            <sdds-button type="danger" size="sm" text="Delete file">
              <sdds-icon
                slot="icon"
                className="sdds-btn-icon"
                size="16px"
                name="document_wrong"
              ></sdds-icon>
            </sdds-button>
            <span></span>
            <sdds-button type="ghost" size="md" text="">
              <sdds-icon
                slot="icon"
                className="sdds-btn-icon"
                size="20px"
                name="trash"
              ></sdds-icon>
            </sdds-button>
          </div>
        </div>
        <div>
          <div className="sdds-headline-02 sdds-u-pb1">Card</div>
          <sdds-card
              header="Card title"
              header-placement="below"
              subheader="Subheader text"
              header-img="https://scdn.reflex.prod.aws.scania.com/avatar/VqsHAtBNOQvjoslmKEv1599CCQOYYv-250.png?Expires=1679812312&Key-Pair-Id=K2MBMFK028C481&Signature=VUIW8gjppf9r8HjL2zl77AHyYPsFCUv7o7nQLkTgY1IZ~Ja3MkUvslGFnxx-XBneQo9y4IVZDDNBYsMxT0D0pBxnNrt5q3k65q5mZh8MTS15PznVxS7KKP~F7vGngaVsHeJbNHZ~iEytTaezBmX6Yzzng~47PXvZyw5lMohGUNY7yY4d0T5sfbwjPMfZrqUQWWxBxYl9icWOJ2eGPpPol6JSRKlMJMwf4wgNsYKEIoJaIh-sYinGl9reaW6Mv215qrbqdUf8aOiX48-bSBbJsGrUnIJlPGrq7-1vPg9c9qeteIxWqF7fUaj9~z342TIRvbNiozZ3CHDve2QGWpzyow__"
              body-img="https://scdn.reflex.prod.aws.scania.com/thumbnails/2.6a4c8c88169b49c419d1a8/18.12bc286418679e166a96d74.webp?Expires=1677920403&Key-Pair-Id=K2MBMFK028C481&Signature=IqfnGEZSkb7OlgIsYOrN7nhHK5D-yqRyE~Q4McUtv8th76lygq9dZ-bMQMRx8G4fO39m7oS761xLXx-bAkqkVxbG1s1WF5iB3yqr81h-ayBy1gQfyZWM0QX-de151xjT-WEIpw6g8DcAJ5vzz4h~VfeYjbOzd~E8WSJstSYzsxMJXL16J0lXpKpz4T~0dIkA11nXai47offlgut1kvxY1Rd0lsr~cT2tNf7lSlCECXo9OfOeLwfYk7l3Q1AybdcHhm9iQQjam0uujI242k7XPbQ2XDSvK7mEGF86XXQwU9VaLRB7KqKsb3UJPB9ugLXy1l4wyQ05GMW8ysRR9mznfA__"
              clickable
          >
            <div slot="card-body">Here is a short description in body text</div>
            <div slot="card-bottom">
              <sdds-icon style={{fontSize: '20px'}} name="arrow_right"></sdds-icon>
            </div>
          </sdds-card>
        </div>
        <div>
          <div className="sdds-headline-02 sdds-u-pb1">Checkbox</div>
          <sdds-checkbox>Checkbox</sdds-checkbox>
        </div>
        <div>
          <div className="sdds-headline-02 sdds-u-pb1">Chip</div>
          <button className="sdds-chip">
            <span className="sdds-chip-text">Chip text</span>
          </button>
          <button className="sdds-chip sdds-chip-active">
            <span className="sdds-chip-text">Chip text</span>
          </button>
          <button className="sdds-chip sdds-chip-icon-left">
            <sdds-icon
              className="sdds-chip-icon"
              name="notification"
            ></sdds-icon>
            <span className="sdds-chip-text">Chip text</span>
          </button>
        </div>
        <div>
          <div className="sdds-headline-02 sdds-u-pb1">Data table</div>
          <DataTable />
        </div>
        <div>
          <div className="sdds-headline-02 sdds-u-pb1">Datetime</div>
          <sdds-datetime
            id="datetime"
            type="datetime-local"
            state="none"
            label="Label text"
            helper="Helper text"
          ></sdds-datetime>
        </div>
        <div>
          <div className="sdds-headline-02 sdds-u-pb1">Radio Button</div>
          <div className="sdds-headline-04 sdds-u-pb1">Native</div>
          <div className="sdds-radio-button-group">
            <div className="sdds-radio-item">
              <input
                className="sdds-form-input"
                type="radio"
                name="rb-example"
                id="rb-option-1"
                checked
              />
              <label className="sdds-form-label" htmlFor="rb-option-1">
                Label text 1
              </label>
            </div>
          </div>
          <div className="sdds-radio-button-group">
            <div className="sdds-radio-item">
              <input
                className="sdds-form-input"
                type="radio"
                name="rb-example"
                id="rb-option-2"
              />
              <label className="sdds-form-label" htmlFor="rb-option-2">
                Label text 2
              </label>
            </div>
          </div>
          <div>
            <div className="sdds-headline-04 sdds-u-pb1">Web Component</div>
            <sdds-radio-button
              name="rb-example"
              value="option1"
              radio-id="option-1"
              checked
            >
              Label text 1
            </sdds-radio-button>

            <sdds-radio-button
              name="rb-example"
              value="option2"
              radio-id="option-2"
            >
              Label text 2
            </sdds-radio-button>
          </div>
        </div>
        <div>
          <div className="sdds-headline-02 sdds-u-pb1">Slider</div>
          <sdds-slider
            id="sdds-slider"
            min="0"
            max="100"
            value="50"
            tooltip
            label="Test label"
            ticks="4"
            controls
            show-tick-numbers
          ></sdds-slider>
        </div>
      </main>
    </div>
  );
}

export default App;
