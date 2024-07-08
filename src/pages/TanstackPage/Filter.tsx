import { Column } from '@tanstack/react-table';
import { TdsIcon, TdsTextField } from '@scania/tegel-react';
import './Filter.scss';
export default function Filter({ column }: { column: Column<any, unknown> }) {
  const columnFilterValue = column.getFilterValue();

  // Rendering Tegel input for testing in first column
  if (column.id === 'name') {
    return (
      <TdsTextField
        noMinWidth
        size="sm"
        value={(columnFilterValue ?? '') as string}
        onTdsInput={(e: any) => column.setFilterValue(e.detail.target?.value)}
      >
        <TdsIcon slot="prefix" name="search" size="20px" />
      </TdsTextField>
    );
  } else {
    return (
      <div className="filter-wrapper tds-u-flex-start tds-u-align-center">
        <TdsIcon name="search" size="20px"></TdsIcon>
        <input
          type="text"
          placeholder="Search..."
          value={(columnFilterValue ?? '') as string}
          onChange={(e) => column.setFilterValue(e.target.value)}
        />
      </div>
    );
  }
}
