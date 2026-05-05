import { TdsButton, TdsIcon } from "@scania/tegel-react";
import Modal from "./Modal";

const ModalExample = () => {
	const genericText = (
		<>
			<p>
				The steps fell lightly and oddly, with a certain swing, for all they went so slowly; it was
				different indeed from the heavy creaking tread of Henry Jekyll. Utterson sighed. “Is there
				never anything else?” he asked.
			</p>
			<p>
				Poole swung the candle as he spoke, and the light fell obliquely on the bed. The bed had
				been slept in, the sheets and pillows bore the impress of a body; but the body was not
				there. Across the floor there were scattered a number of papers, and near the fireplace a
				candle had burnt out, leaving a little pool of wax on the mantelpiece.
			</p>
			<p>
				Mr. Hyde had only been met twice; once when he had dined at the doctor's and once when the
				two men had crossed paths in the street. On both occasions, something about his manner had
				struck the lawyer as decidedly wrong — not wrong in any legal sense, but wrong in the way
				of a bad dream, a dream from which one could not wake up.
			</p>
			<p>
				Utterson had long since learned that it was of no use to question Dr. Jekyll directly. The
				doctor had a way of evading every inquiry with the same calm, practised air of composure
				that had served him so well through a long and distinguished career.
			</p>
			<p>
				It was on the moral side, and in his own person, that Jekyll had learned to recognise the
				thorough and primitive duality of man; he had learned that, of the two natures that
				contended in the field of his consciousness, even if he could rightly be said to be either,
				it was only because he was radically both.
			</p>
			<p>
				Late one accursed night, he had compounded the elements, watched them boil and smoke
				together in the glass, and when the ebullition had subsided, with a strong glow of courage,
				drank off the potion. The most racking pangs succeeded: a grinding in the bones, deadly
				nausea, and a horror of the spirit that cannot be exceeded at the hour of birth or death.
			</p>
		</>
	);

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
						svgTitle="Hover over this icon to open a modal"
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
