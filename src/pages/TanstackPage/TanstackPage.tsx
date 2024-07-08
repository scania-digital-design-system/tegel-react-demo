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

const TanstackPage = () => {
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
        header: 'Gender',
        accessorKey: 'gender',
      },
      {
        header: 'Job title',
        accessorKey: 'jobTitle',
      },
      {
        header: 'Zodiac sign',
        accessorKey: 'zodiacSign',
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
      <div className="tds-headline-01 tds-u-pb3">Tegel & Tanstack</div>
      <div className="tds-headline-03">Searchable table</div>
      <p className="tds-u-pb3">
        Example of Tegel table component using Tanstack to add search functionality. Click on the
        search icon to start.
      </p>

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
                <TdsHeaderCell key={`${header.id}-${index}-input`} cellKey={header.id}>
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
      <pre>
        {JSON.stringify(
          {
            columnFilters: table.getState().columnFilters,
          },
          null,
          2,
        )}
      </pre>
    </div>
  );
};

export default TanstackPage;
