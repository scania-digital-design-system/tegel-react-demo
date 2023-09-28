import Modal from './Modal';

const ModalExample = () => {
  return (
    <>
      <div className="tds-headline-02 tds-u-pb1">Modal</div>
      <div className="tds-u-flex tds-u-flex-gap-1">
        <tds-button id="sm-modal-button" size='sm' text="Small Modal"></tds-button>
        <Modal prevent size="sm" selector="#sm-modal-button" />
        <tds-button id="md-modal-button" size='md' text="Medium Modal"></tds-button>
        <Modal size="md" selector="#md-modal-button" />
        <tds-button id="lg-modal-button" size='lg' text="Large Modal"></tds-button>
        <Modal size="lg" selector="#lg-modal-button" />
      </div>

      <p>Modals can also be opened programatically, see it in action by hovering the Icon below.</p>
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
    </>
  );
};
export default ModalExample;
