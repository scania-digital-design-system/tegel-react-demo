/* eslint-disable jsx-a11y/anchor-is-valid */
import { Outlet } from "react-router";
import "./WebComponents.scss";

export default function WebComponents() {
	return (
		<section className="tds-u-flex tds-u-flex-dir-col tds-u-gap3">
			<Outlet />
		</section>
	);
}
