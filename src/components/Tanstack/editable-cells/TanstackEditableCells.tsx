import { useMemo, useState } from "react";
import {
	TdsTable,
	TdsTableHeader,
	TdsTableBody,
	TdsHeaderCell,
	TdsTableBodyRow,
	TdsBodyCell,
} from "@scania/tegel-react";
import { type Vehicle, createData } from "./makeData";
import { type ColumnDef, useTable } from "@tanstack/react-table";
import EditableCell from "./EditableCell";
import { type Features, features } from "./features";

const TanstackEditableCells = () => {
	const [data, setData] = useState(() => createData(10));

	const columns = useMemo<ColumnDef<Features, Vehicle>[]>(
		() => [
			{
				header: "Model",
				accessorKey: "model",
			},
			{
				header: "Type",
				accessorKey: "type",
			},
			{
				header: "Color",
				accessorKey: "color",
			},
			{
				header: "Fuel",
				accessorKey: "fuel",
			},
		],
		[],
	);

	const table = useTable({
		features,
		data,
		columns,
		defaultColumn: {
			cell: EditableCell,
		},
		debugTable: true,
		meta: {
			updateData: (rowIndex, columnId, value) => {
				setData((old) =>
					old.map((row, index) => {
						if (index === rowIndex) {
							return {
								...old[rowIndex]!,
								[columnId]: value,
							};
						}
						return row;
					}),
				);
			},
		},
	});

	return (
		<div>
			<TdsTable>
				{table.getHeaderGroups().map((headerGroup) => (
					<TdsTableHeader key={headerGroup.id}>
						{headerGroup.headers.map((header) => {
							return (
								<TdsHeaderCell key={header.id} cellKey={header.id}>
									{header.isPlaceholder ? null : (
										<div>
											<table.FlexRender header={header} />
										</div>
									)}
								</TdsHeaderCell>
							);
						})}
					</TdsTableHeader>
				))}
				<TdsTableBody>
					{table.getRowModel().rows.map((row) => {
						return (
							<TdsTableBodyRow key={row.id}>
								{row.getAllCells().map((cell) => (
									<TdsBodyCell cellKey={cell.column.id} key={cell.id} disablePadding>
										<table.FlexRender cell={cell} />
									</TdsBodyCell>
								))}
							</TdsTableBodyRow>
						);
					})}
				</TdsTableBody>
			</TdsTable>
		</div>
	);
};

export default TanstackEditableCells;
