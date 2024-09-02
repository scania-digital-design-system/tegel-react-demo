import { Column } from '@tanstack/react-table';
import { TdsTableHeaderInputWrapper } from '@scania/tegel-react';

export default function Filter({ column }: { column: Column<any, unknown> }) {
  const columnFilterValue = column.getFilterValue();

  return (
    <TdsTableHeaderInputWrapper>
      <input
        placeholder="Search..."
        value={(columnFilterValue ?? '') as string}
        onInput={(e: any) => column.setFilterValue(e.target.value)}
      ></input>
    </TdsTableHeaderInputWrapper>
  );
}
