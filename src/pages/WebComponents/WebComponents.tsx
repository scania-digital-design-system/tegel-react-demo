/* eslint-disable jsx-a11y/anchor-is-valid */
import './WebComponents.scss';
import Banner from '../../components/Banner';
import Card from '../../components/Card/Card';
import Button from '../../components/Button';
import Toast from '../../components/Toast/Toast';
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
import Spinner from '../../components/Spinner';
import Tabs from '../../components/Tabs';
import Textarea from '../../components/Textarea';
import TextField from '../../components/TextField';
import Tooltip from '../../components/Tooltip';
import StepperExample from '../../components/Stepper/StepperExample';
import ModalExample from '../../components/Modal/ModalExample';

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
        <Tooltip />
      </div>
    </>
  );
}
