import type { Dispatch, SetStateAction } from "react";
import { TdsToggle } from "@scania/tegel-react";

type Brand = "scania" | "traton";

interface BrandSwitcherProps {
	brand: Brand;
	setBrand: Dispatch<SetStateAction<Brand>>;
}

const BrandSwitcher = ({ brand, setBrand }: BrandSwitcherProps) => {
	const toggleBrand = (event: CustomEvent) => {
		setBrand(event.detail.checked ? "traton" : "scania");
	};

	return (
		<div className="mode-switcher">
			<TdsToggle
				size="sm"
				headline="Brand"
				checked={brand === "traton"}
				onTdsToggle={toggleBrand}
			>
				<div slot="label">{brand === "traton" ? "Traton" : "Scania"}</div>
			</TdsToggle>
		</div>
	);
};

export default BrandSwitcher;
