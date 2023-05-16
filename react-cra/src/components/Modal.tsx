export default function Modal() {
  return (
      <>
        <sdds-button id="my-modal-button" text="Open Modal"></sdds-button>
        <sdds-modal selector="#my-modal-button" id="my-modal" size="lg" actions="static" prevent>
          <h5 className="sdds-modal-headline" slot="sdds-modal-headline">
            Test modal component
          </h5>
          <span slot="sdds-modal-body">
            The steps fell lightly and oddly, with a certain swing, for all they went so slowly; it was
            different indeed from the heavy creaking tread of Henry Jekyll. Utterson sighed. “Is there never
            anything else?” he asked.
          </span>
          <sdds-button
              slot="sdds-modal-actions"
              data-dismiss-modal
              size="md"
              text="Delete"
              type="danger"
          ></sdds-button>
          <sdds-button slot="sdds-modal-actions" data-dismiss-modal size="md" text="Cancel"></sdds-button>
        </sdds-modal>
    </>
  );
}
