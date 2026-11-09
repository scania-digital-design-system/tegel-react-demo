import { metaHelper, tableFeatures } from "@tanstack/react-table";

export const features = tableFeatures({
	tableMeta: metaHelper<{
		updateData: (rowIndex: number, columnId: string, value: unknown) => void;
	}>(),
});

export type Features = typeof features;
