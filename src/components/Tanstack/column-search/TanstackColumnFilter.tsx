import { useMemo, useState } from 'react';
import {
  TdsTable,
  TdsTableHeader,
  TdsTableBody,
  TdsHeaderCell,
  TdsTableBodyRow,
  TdsBodyCell,
  TdsTableToolbar,
} from '@scania/tegel-react';
import { Person, createData } from './makeData';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
  ColumnFiltersState,
} from '@tanstack/react-table';
import Filter from './Filter';

const TanstackColumnFilter = () => {
  const [globalFilter, setGlobalFilter] = useState('');
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const [data, setData] = useState(() => createData(10));

  const columns = useMemo<ColumnDef<Person>[]>(
    () => [
      {
        header: 'Name',
        accessorKey: 'name',
      },
      {
        header: 'Vehicle',
        accessorKey: 'truckModel',
      },
      {
        header: 'State',
        accessorKey: 'state',
      },
      {
        header: 'Mileage',
        accessorKey: 'mileage',
      },
    ],
    [],
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      columnFilters,
    },
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
    globalFilterFn: 'includesString',
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(), //client side filtering
    debugTable: true,
  });

  return (
    <div>
      <TdsTable>
        <TdsTableToolbar table-title="Table example" />
        {table.getHeaderGroups().map((headerGroup, index) => (
          <TdsTableHeader key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TdsHeaderCell key={header.id} cellKey={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TdsHeaderCell>
              );
            })}
          </TdsTableHeader>
        ))}
        {table.getHeaderGroups().map((headerGroup, index) => (
          <TdsTableHeader key={`${index}-input`}>
            {headerGroup.headers.map((header, index) => {
              return (
                <TdsHeaderCell
                  disablePadding
                  key={`${header.id}-${index}-input`}
                  cellKey={header.id}
                >
                  {header.column.getCanFilter() && <Filter column={header.column} />}
                </TdsHeaderCell>
              );
            })}
          </TdsTableHeader>
        ))}
        <TdsTableBody>
          {table.getRowModel().rows.map((row) => {
            return (
              <TdsTableBodyRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TdsBodyCell cellKey={cell.column.id} key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
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

export default TanstackColumnFilter;
