/* eslint-disable jsx-a11y/anchor-is-valid */
import "./WebComponents.scss";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Button from "../components/Button";
import Toast from "../components/Toast";
import Modal from "../components/Modal";
import Toggle from "../components/Toggle";
import Block from "../components/Block";
import RadioButton from "../components/RadioButton";
import { PopoverMenu } from "../components/PopOverCanvas";
import PopoverCanvas from "../components/PopOverCanvas";
import AccordionExample from "../components/Accordion";
import Datetime from "../components/Datetime";
import Message from "../components/Message";
import Slider from "../components/Slider";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function WebComponents() {
  return (
    <>
      <div>
        <AccordionExample />
      </div>
      <div>
        <div className="tds-headline-02 tds-u-pb1">Badge</div>
        <tds-badge value="1" size="lg"></tds-badge>
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <Block />
      </div>
      <div>
        <div className="tds-headline-02 tds-u-pb1">Breadcrumbs</div>
        <tds-breadcrumb>
          <tds-breadcrumb>
            <a href="#">Page 1</a>
          </tds-breadcrumb>
          <tds-breadcrumb>
            <a href="#">Page 2</a>
          </tds-breadcrumb>
          <tds-breadcrumb current>
            <a href="#">Page 3</a>
          </tds-breadcrumb>
        </tds-breadcrumb>
      </div>
      <div className="tds-u-w-100">
        <Button />
      </div>
      <div>
        <Card />
      </div>
      <div>
        <div className="tds-headline-02 tds-u-pb1">Checkbox</div>
        <tds-checkbox value="checkbox-value">
          <div slot="label">Label</div>
        </tds-checkbox>
      </div>
      <div>
        <div className="tds-headline-02 tds-u-pb1">Chip</div>
        <tds-chip type="button" size="lg">
          <span slot="label">Label</span>
        </tds-chip>
      </div>
      <div>
        <Datetime />
      </div>

      <div>
        <div className="tds-headline-02 tds-u-pb1">Divider</div>
        <tds-divider></tds-divider>
      </div>

      <div className="tds-headline-02 tds-u-pb1">Dropdown</div>
      <div className="tds-headline-04 tds-u-pb1">Default</div>
      <tds-dropdown
        id="tds-dropdown-reg"
        size="lg"
        placeholder="Placeholder"
        disabled={false}
        open-direction="auto"
        label-position="no-default"
        type="default"
        default-option="option-1"
      >
        <tds-dropdown-option value="option-1" tabIndex={0} disabled>
          Option 1
        </tds-dropdown-option>
        <tds-dropdown-option value="option-2" tabIndex={0}>
          Option 2
        </tds-dropdown-option>
        <tds-dropdown-option value="option-3" tabIndex={0}>
          Option 3
        </tds-dropdown-option>
      </tds-dropdown>
      <div className="tds-headline-04 tds-u-pb1">Multiselect</div>
      <tds-dropdown
        id="tds-dropdown-reg"
        size="lg"
        placeholder="Placeholder"
        disabled={false}
        open-direction="auto"
        label-position="no-default"
        type="multiselect"
        default-option="option-1"
      >
        <tds-dropdown-option value="option-1" tabIndex={0} disabled>
          Option 1
        </tds-dropdown-option>
        <tds-dropdown-option value="option-2" tabIndex={0}>
          Option 2
        </tds-dropdown-option>
        <tds-dropdown-option value="option-3" tabIndex={0}>
          Option 3
        </tds-dropdown-option>
      </tds-dropdown>
      <div className="tds-headline-04 tds-u-pb1">Filter</div>

      <tds-dropdown-filter
        id="tds-dropdown-filter"
        size="lg"
        placeholder="Placeholder"
        open-direction="auto"
        label-position="no-label"
        data='[
              {
                "value": "option-1",
                "label":"Jakarta"
              },
              {
                "value":"option-2"
                ,"label":"Stockholm"
              },
              {
                "value":"option-3",
                "label":"Barcelona"
              }
            ]'
        default-option="option-1"
      ></tds-dropdown-filter>

      <div>
        <div className="tds-headline-02 tds-u-pb1">Link</div>
        <tds-link>
          <a href="/">This is a link</a>
        </tds-link>
      </div>

      <div>
        <div className="tds-headline-02 tds-u-pb1">Message</div>
        <Message />
      </div>

      <div>
        <div className="tds-headline-02 tds-u-pb1">Modal</div>
        <div className="tds-u-flex">
          <tds-button id="sm-modal-button" text="Small Modal"></tds-button>
          <Modal prevent size="sm" selector="#sm-modal-button" />
          <tds-button id="md-modal-button" text="Medium Modal"></tds-button>
          <Modal size="md" selector="#md-modal-button" />
          <tds-button id="lg-modal-button" text="Large Modal"></tds-button>
          <Modal size="lg" selector="#lg-modal-button" />
        </div>

        <p>
          Modals can also be opened programatically, see it in action by
          hovering the Icon below.
        </p>
        <tds-icon
          onMouseEnter={() => {
            (
              document.querySelector(
                `[selector="hover-modal-button"]`
              ) as HTMLTdsModalElement
            ).showModal();
          }}
          name="truck"
          size="20px"
        ></tds-icon>
        <Modal size="sm" selector="hover-modal-button" />
      </div>

      <div>
        <div className="tds-headline-02 tds-u-pb2">Radio Button</div>
        <RadioButton />
      </div>

      <div>
        <PopoverMenu />
        <PopoverCanvas />
      </div>

      <div>
        <Slider />
      </div>
      <div>
        <div className="tds-headline-02 tds-u-pb1">Spinner</div>
        <div className="tds-headline-03 tds-u-pb1">Standard</div>

        <tds-spinner variant="standard"></tds-spinner>
        <div className="tds-headline-03 tds-u-pb1">Inverted</div>

        <tds-spinner variant="inverted"></tds-spinner>
      </div>

      <div>
        <div className="tds-headline-02 tds-u-pb1">Stepper</div>
        <tds-stepper size="lg" label-position="below" orientation="horizontal">
          <tds-step state="success" index="1">
            <div slot="label">Success step</div>
          </tds-step>
          <tds-step state="error" index="2">
            <div slot="label">Error step</div>
          </tds-step>
          <tds-step state="current" index="3">
            <div slot="label">Current step</div>
          </tds-step>
          <tds-step index="4">
            <div slot="label">Upcoming step</div>
          </tds-step>
        </tds-stepper>
      </div>

      <div>
        <div className="tds-headline-02 tds-u-pb1">Tabs</div>
        <div className="tds-headline-03 tds-u-pb3 tds-u-pt3">Folder</div>

        <tds-folder-tabs>
          <tds-folder-tab>
            <button>First tab</button>
          </tds-folder-tab>
          <tds-folder-tab>
            <button>Second tab is much longer</button>
          </tds-folder-tab>
          <tds-folder-tab>
            <button>Third tab</button>
          </tds-folder-tab>
          <tds-folder-tab disabled>
            <button>Fourth tab</button>
          </tds-folder-tab>
        </tds-folder-tabs>

        <div className="tds-headline-03 tds-u-pb3 tds-u-pt3">Inline</div>

        <tds-inline-tabs>
          <tds-inline-tab>
            <button>First tab</button>
          </tds-inline-tab>
          <tds-inline-tab>
            <button>Second tab is much longer</button>
          </tds-inline-tab>
          <tds-inline-tab>
            <button>Third tab</button>
          </tds-inline-tab>
          <tds-inline-tab disabled>
            <button>Fourth tab</button>
          </tds-inline-tab>
        </tds-inline-tabs>
        <div className="tds-headline-03 tds-u-pb3 tds-u-pt3">Navigation</div>

        <tds-navigation-tabs>
          <tds-navigation-tab>
            <a href="/">First tab</a>
          </tds-navigation-tab>
          <tds-navigation-tab>
            <a href="/">Second tab is much longer</a>
          </tds-navigation-tab>
          <tds-navigation-tab>
            <a href="/">Third tab</a>
          </tds-navigation-tab>
          <tds-navigation-tab disabled>
            <a href="/">Fourth tab</a>
          </tds-navigation-tab>
        </tds-navigation-tabs>
      </div>

      <div>
        <div className="tds-headline-02 tds-u-pb1">Textarea</div>
        <tds-textarea
          rows={4}
          state="error"
          label="Hello label"
          helper="Good guess, but wrong answer buddy"
          label-position="outside"
          placeholder="Placeholder test"
        ></tds-textarea>
      </div>

      <div>
        <div className="tds-headline-02 tds-u-pb1">Text fields</div>
        <div className="tds-headline-04 tds-u-pb1">Standard medium size</div>
        <tds-text-field size="md" placeholder="Placeholder"></tds-text-field>
      </div>
      <div>
        <Toast />
      </div>
      <div>
        <Toggle />
      </div>
      <div>
        <div className="tds-headline-02 tds-u-pb1">Tooltip</div>
        <div className="tooltip-container">
          <tds-tooltip
            placement="bottom"
            selector="#button-1"
            text="Text inside tooltip"
            mouse-over-tooltip="true"
          >
            <p className="tds-detail-05 tds-u-m0 tooltip-paragraph">
              Paragraph tag inside of Tooltip with
              <b>bold</b>
              and
              <i>italic</i>
              tags too.
            </p>
          </tds-tooltip>

          <tds-button size="sm" id="button-1" text="Hover me"></tds-button>
        </div>
      </div>
    </>
  );
}
