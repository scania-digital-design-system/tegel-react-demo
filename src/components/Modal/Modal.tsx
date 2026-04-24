import { TdsButton, TdsModal } from "@scania/tegel-react";
import "./Modal.scss";
import type { ReactNode } from "react";

type ModalProps = {
	selector?: string;
	size?: "sm" | "md" | "lg";
	headline: string;
	prevent?: boolean;
	show?: boolean;
	closeButton?: ReactNode;
	children: ReactNode;
};

const Modal = ({
	selector,
	size = "sm",
	headline,
	prevent,
	show,
	closeButton,
	children,
}: ModalProps) => {
	return (
		<TdsModal
			prevent={prevent}
			selector={selector}
			id="my-modal"
			size={size}
			actions-position="static"
			show={show}
			header={headline}
		>
			<span slot="body">{children}</span>

			{!closeButton ? (
				<TdsButton slot="actions" data-dismiss-modal size="md" text="Close"></TdsButton>
			) : (
				closeButton
			)}
		</TdsModal>
	);
};

export default Modal;
