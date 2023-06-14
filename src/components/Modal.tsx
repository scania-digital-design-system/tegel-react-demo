import "./Modal.scss";

type ModalProps = {
  selector: string;
  size: "sm" | "md" | "lg";
  prevent?: boolean;
};

const Modal = ({ selector, size, prevent }: ModalProps) => {
  return (
    <tds-modal
      ref={(element) => {
        /* if (size === "lg") {
          element?.addEventListener("tdsClose", (event) => {
            event.preventDefault();
            alert(
              `This Modal prevent default of the tdsClose event, so it won't close the way it normally does. You can close it by using the Modals closeModal() function.`
            );
          });
        } */
      }}
      prevent={prevent}
      selector={selector}
      id="my-modal"
      size={size}
      actions="static"
    >
      <h5 className="tds-modal-headline" slot="tds-modal-headline">
        Modal
      </h5>
      <span slot="tds-modal-body">
        <p>This is a Modal.</p>
        {prevent && (
          <p>
            Since this one is has "prevent=true" it won't close when you press
            the overlay.
          </p>
        )}
        {size === "lg" && (
          <p>
            This modal is closed programatically. Instead of
            'data-dismiss-modal' buttons that close it on click. You can hover
            the button below to close the modal.
          </p>
        )}
        <p>It can contain other components or just text.</p>
        <div className="card-container">
          <tds-card header="Card" subheader="In a Modal"></tds-card>
          <tds-card header="Card" subheader="In a Modal"></tds-card>
          <tds-card header="Card" subheader="In a Modal"></tds-card>
        </div>
      </span>
      {size !== "lg" ? (
        <>
          <tds-button
            slot="tds-modal-actions"
            data-dismiss-modal
            size="md"
            text="Delete"
            type="danger"
          ></tds-button>
          <tds-button
            slot="tds-modal-actions"
            data-dismiss-modal
            size="md"
            text="Cancel"
          ></tds-button>
        </>
      ) : (
        <tds-button
          slot="tds-modal-actions"
          onMouseOver={() => {
            (
              document.querySelector(
                `[selector="${selector}"]`
              ) as HTMLTdsModalElement
            ).closeModal();
          }}
          size="md"
          text="Cancel"
        ></tds-button>
      )}
    </tds-modal>
  );
};

export default Modal;
