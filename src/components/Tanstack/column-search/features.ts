import {
	columnFilteringFeature,
	createFilteredRowModel,
	filterFn_includesString,
	globalFilteringFeature,
	tableFeatures,
} from "@tanstack/react-table";

// All Vehicle fields are strings, so 'auto' resolves to includesString.
export const features = tableFeatures({
	columnFilteringFeature,
	globalFilteringFeature,
	filteredRowModel: createFilteredRowModel(),
	filterFns: { includesString: filterFn_includesString },
});

export type Features = typeof features;
