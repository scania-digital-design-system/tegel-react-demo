import {
  TdsButton,
  TdsIcon
} from "@scania/tegel-react";
import Modal from './Modal';

const ModalExample = () => {
  return (
    <>
      <div className="tds-headline-02 tds-u-pb1">Modal</div>
      <div className="tds-u-flex tds-u-gap1">
        <TdsButton id="sm-modal-button" size='sm' text="Small Modal"></TdsButton>
        <Modal prevent size="sm" selector="#sm-modal-button" />
        <TdsButton id="md-modal-button" size='md' text="Medium Modal"></TdsButton>
        <Modal size="md" selector="#md-modal-button" />
        <TdsButton id="lg-modal-button" size='lg' text="Large Modal"></TdsButton>
        <Modal size="lg" selector="#lg-modal-button" />
      </div>

      <p>Modals can also be opened programatically, see it in action by hovering the Icon below.</p>
      <TdsIcon
        onMouseEnter={() => {
          (
            document.querySelector(`[selector="hover-modal-button"]`) as HTMLTdsModalElement
          ).showModal();
        }}
        name="truck"
        size="20px"
      ></TdsIcon>
      <Modal size="sm" selector="hover-modal-button" />
    </>
  );
};
export default ModalExample;
