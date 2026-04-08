/* eslint-disable jsx-a11y/anchor-is-valid */
import './WebComponents.scss';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import Toast from '../../components/Toast/Toast';
import Toggle from '../../components/Toggle/Toggle';
import Block from '../../components/Block/Block';
import RadioButton from '../../components/RadioButton/RadioButton';
import { PopoverMenu } from '../../components/Popover/Popover';
import PopoverCanvas from '../../components/Popover/Popover';
import AccordionExample from '../../components/Accordion/Accordion';
import Datetime from '../../components/Datetime/Datetime';
import Message from '../../components/Message/Message';
import Badge from '../../components/Badge/Badge';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Checkbox from '../../components/Checkbox/Checkbox';
import Chip from '../../components/Chip/Chip';
import Divider from '../../components/Divider/Divider';
import Dropdown from '../../components/Dropdown/Dropdown';
import Link from '../../components/Link/Link';
import Spinner from '../../components/Spinner/Spinner';
import Tabs from '../../components/Tabs/Tabs';
import Textarea from '../../components/Textarea/Textarea';
import TextField from '../../components/TextField/TextField';
import Tooltip from '../../components/Tooltip/Tooltip';
import StepperExample from '../../components/Stepper/StepperExample';
import ModalExample from '../../components/Modal/ModalExample';
import Tag from '../../components/Tag/Tag';

export default function WebComponents() {
  return (
    <section className="tds-u-flex tds-u-flex-dir-col tds-u-gap3">
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
        <ModalExample />
      </div>
      <div>
        <PopoverCanvas />
        <PopoverMenu />
      </div>
      <div>
        <RadioButton />
      </div>
      <div>
        <Spinner />
      </div>
      <div>
        <StepperExample />
      </div>
      <div>
        <Tag />
      </div>
      <div>
        <Tabs />
      </div>
      <div>
        <TextField />
      </div>
      <div>
        <Textarea />
      </div>
      <div>
        <Toast />
      </div>
      <div>
        <Toggle />
      </div>
      <div>
        <Tooltip />
      </div>
    </section>
  );
}
