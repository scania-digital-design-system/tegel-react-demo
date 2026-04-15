import type { Column } from "@tanstack/react-table";
import { TdsTableHeaderInputWrapper } from "@scania/tegel-react";
import type { Vehicle } from "./makeData";

export default function Filter({ column }: { column: Column<Vehicle, unknown> }) {
	const columnFilterValue = column.getFilterValue();

	return (
		<TdsTableHeaderInputWrapper>
			<input
				placeholder="Search..."
				value={(columnFilterValue ?? "") as string}
				// biome-ignore lint/suspicious/noExplicitAny: for now
				onInput={(e: any) => column.setFilterValue(e.target.value)}
			></input>
		</TdsTableHeaderInputWrapper>
	);
}
