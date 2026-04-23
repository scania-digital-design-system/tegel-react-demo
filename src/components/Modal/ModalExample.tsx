import { TdsButton, TdsIcon } from "@scania/tegel-react";
import Modal from "./Modal";

const ModalExample = () => {
	const genericText: string =
		"The steps fell lightly and oddly, with a certain swing, for all they went so slowly; it was different indeed from the heavy creaking tread of Henry Jekyll. Utterson sighed. “I there never anything else?” he asked.";

	return (
		<section className="tds-u-flex tds-u-flex-dir-col tds-u-gap2">
			<h2 className="tds-headline-02">Modal</h2>

			<div className="tds-u-flex tds-u-gap1">
				<Modal show headline="Modal opening at start">
					<span slot="body">
						<p>This modal was opened when you open or refreshed the page.</p>
						<p>Once you close it, it will be gone. Forever!</p>
					</span>
				</Modal>

				<TdsButton id="sm-modal-button" size="sm" text="Small Modal"></TdsButton>
				<Modal prevent size="sm" selector="#sm-modal-button" headline="Small modal with prevent">
					<span>
						<p>Since this one is has "prevent=true" it won't close when you press the overlay.</p>
						{genericText}
					</span>
				</Modal>

				<TdsButton id="md-modal-button" size="md" text="Medium Modal"></TdsButton>
				<Modal size="md" selector="#md-modal-button" headline="Medium modal">
					<span slot="body">{genericText}</span>
				</Modal>

				<TdsButton id="lg-modal-button" size="lg" text="Large Modal"></TdsButton>
				<Modal
					size="lg"
					selector="#lg-modal-button"
					headline="Large modal closing programmatically"
					closeButton={
						<TdsButton
							slot="actions"
							onMouseOver={() => {
								(
									document.querySelector(`[selector="#lg-modal-button"]`) as HTMLTdsModalElement
								).closeModal();
							}}
							size="md"
							text="Cancel"
						></TdsButton>
					}
				>
					<p>
						This modal is closed programmatically. Instead of 'data-dismiss-modal' buttons that
						close it on click. You can hover the button below to close the modal.
					</p>
				</Modal>
			</div>

			<div className="tds-u-flex tds-u-flex-dir-col tds-u-gap1">
				Modals can also be opened programatically, see it in action by hovering the Icon below.
				<div style={{ width: "var(--unit-24)" }}>
					<TdsIcon
						onMouseEnter={() => {
							(
								document.querySelector(`[selector="hover-modal-button"]`) as HTMLTdsModalElement
							).showModal();
						}}
						name="truck"
						size="24px"
					></TdsIcon>
				</div>
				<Modal selector="hover-modal-button" headline="Modal opening on hover">
					{genericText}
				</Modal>
			</div>
		</section>
	);
};
export default ModalExample;
