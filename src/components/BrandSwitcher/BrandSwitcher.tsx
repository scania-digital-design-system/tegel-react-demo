import type { Dispatch, SetStateAction } from "react";
import { capitalizeFirst } from "../../utility";
import { TdsToggle } from "@scania/tegel-react";

interface BrandSwitcherProps {
	brand: "scania" | "traton";
	setBrand: Dispatch<SetStateAction<"scania" | "traton">>;
}
const BrandSwitcher = ({ brand, setBrand }: BrandSwitcherProps) => {
	const toggleBrand = () => {
		setBrand(brand === "scania" ? "traton" : "scania");
	};

	return (
		<div className="mode-switcher">
			<TdsToggle
				size="sm"
				headline="Scania theme"
				checked={brand === "scania"}
				onTdsToggle={toggleBrand}
			>
				<div slot="label">{capitalizeFirst(brand)}</div>
			</TdsToggle>
		</div>
	);
};

export default BrandSwitcher;
