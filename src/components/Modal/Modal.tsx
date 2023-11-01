import { TdsModal, TdsButton } from '@scania/tegel-react';
import './Modal.scss';

type ModalProps = {
  selector: string;
  size: 'sm' | 'md' | 'lg';
  prevent?: boolean;
};

const Modal = ({ selector, size, prevent }: ModalProps) => {
  return (
    <TdsModal
      prevent={prevent}
      selector={selector}
      id="my-modal"
      size={size}
      actions-position="static"
    >
      <h5 className="tds-modal-headline" slot="header">
        Modal Header
      </h5>
      <span slot="body">
        {prevent && (
          <p>Since this one is has "prevent=true" it won't close when you press the overlay.</p>
        )}
        {size === 'lg' && (
          <p>
            This modal is closed programmatically. Instead of 'data-dismiss-modal' buttons that
            close it on click. You can hover the button below to close the modal.
          </p>
        )}
        The steps fell lightly and oddly, with a certain swing, for all they went so slowly; it was
        different indeed from the heavy creaking tread of Henry Jekyll. Utterson sighed. “Is there
        never anything else?” he asked.
      </span>
      {size !== 'lg' ? (
        <>
          <TdsButton slot="actions" data-dismiss-modal size="md" text="Close"></TdsButton>
        </>
      ) : (
        <TdsButton
          slot="actions"
          onMouseOver={() => {
            (
              document.querySelector(`[selector="${selector}"]`) as HTMLTdsModalElement
            ).closeModal();
          }}
          size="md"
          text="Cancel"
        ></TdsButton>
      )}
    </TdsModal>
  );
};

export default Modal;
