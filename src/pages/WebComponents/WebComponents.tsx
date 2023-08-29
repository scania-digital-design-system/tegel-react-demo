/* eslint-disable jsx-a11y/anchor-is-valid */
import './WebComponents.scss';
import Banner from '../../components/Banner';
import Card from '../../components/Card/Card';
import Button from '../../components/Button';
import Toast from '../../components/Toast/Toast';
import Modal from '../../components/Modal/Modal';
import Toggle from '../../components/Toggle/Toggle';
import Block from '../../components/Block';
import RadioButton from '../../components/RadioButton/RadioButton';
import { PopoverMenu } from '../../components/Popover';
import PopoverCanvas from '../../components/Popover';
import AccordionExample from '../../components/Accordion';
import Datetime from '../../components/Datetime';
import Message from '../../components/Message';
import Badge from '../../components/Badge/Badge';
import Breadcrumbs from '../../components/Breadcrumbs';
import Checkbox from '../../components/Checkbox';
import Chip from '../../components/Chip';
import Divider from '../../components/Divider';
import Dropdown from '../../components/Dropdown';
import Link from '../../components/Link';
import Popover from '../../components/Popover';
import Spinner from '../../components/Spinner';
import Tabs from '../../components/Tabs';
import Textarea from '../../components/Textarea';
import TextField from '../../components/TextField';

export default function WebComponents() {
  return (
    <>
      <div>
        <AccordionExample />
      </div>
      <div>
        <Badge />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <Block />
      </div>
      <div>
        <Breadcrumbs />
      </div>
      <div>
        <Button />
      </div>
      <div>
        <Card />
      </div>
      <div>
        <Checkbox />
      </div>
      <div>
        <Chip />
      </div>
      <div>
        <Datetime />
      </div>

      <div>
        <Divider />
      </div>
      <div>
        <Dropdown />
      </div>
      <div>
        <Link />
      </div>
      <div>
        <Message />
      </div>

      <div>
        <div className="tds-headline-02 tds-u-pb1">Modal</div>
        <div className="tds-u-flex tds-u-flex-gap-1">
          <tds-button id="sm-modal-button" text="Small Modal"></tds-button>
          <Modal prevent size="sm" selector="#sm-modal-button" />
          <tds-button id="md-modal-button" text="Medium Modal"></tds-button>
          <Modal size="md" selector="#md-modal-button" />
          <tds-button id="lg-modal-button" text="Large Modal"></tds-button>
          <Modal size="lg" selector="#lg-modal-button" />
        </div>

        <p>
          Modals can also be opened programatically, see it in action by hovering the Icon below.
        </p>
        <tds-icon
          onMouseEnter={() => {
            (
              document.querySelector(`[selector="hover-modal-button"]`) as HTMLTdsModalElement
            ).showModal();
          }}
          name="truck"
          size="20px"
        ></tds-icon>
        <Modal size="sm" selector="hover-modal-button" />
      </div>

      <div>
        <RadioButton />
      </div>

      <div>
        <PopoverCanvas />
        <PopoverMenu />
      </div>
      <div>
        <Spinner />
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
        <Tabs />
      </div>

      <div>
        <Textarea />
      </div>

      <div>
        <TextField />
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
