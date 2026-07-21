import type { Dispatch, SetStateAction } from "react";
import { TdsRadioButton } from "@scania/tegel-react";

type Brand = "scania" | "traton";

interface BrandSwitcherProps {
	brand: Brand;
	setBrand: Dispatch<SetStateAction<Brand>>;
}
const BrandSwitcher = ({ brand, setBrand }: BrandSwitcherProps) => {
	return (
		<div className="mode-switcher">

		<fieldset>
			<legend style={{marginBottom:  `calc(var(--dimension-space-small)/2 * 1px)`}}>Brand</legend>
			<TdsRadioButton
				id="rb-1"
				name="brand"
				value="scania"
				checked={brand === "scania"}
				onTdsChange={(e) => setBrand(e.target.value as Brand)}
				>
				<span slot="label">Scania</span>
			</TdsRadioButton>
			<TdsRadioButton
				id="rb-2"
				name="brand"
				value="traton"
				checked={brand === "traton"}
				onTdsChange={(e) => setBrand(e.target.value as Brand)}
				>
				<span slot="label">Traton</span>
			</TdsRadioButton>
		</fieldset>
				</div>
	);
};

export default BrandSwitcher;
