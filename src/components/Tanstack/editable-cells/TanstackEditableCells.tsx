import { useMemo, useState } from 'react';
import {
  TdsTable,
  TdsTableHeader,
  TdsTableBody,
  TdsHeaderCell,
  TdsTableBodyRow,
  TdsBodyCell,
} from '@scania/tegel-react';
import { Vehicle, createData } from './makeData';
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import EditableCell from './EditableCell';

const TanstackEditableCells = () => {
  const [data, setData] = useState(() => createData(10));

  const columns = useMemo<ColumnDef<Vehicle>[]>(
    () => [
      {
        header: 'Model',
        accessorKey: 'model',
      },
      {
        header: 'Type',
        accessorKey: 'type',
      },
      {
        header: 'Color',
        accessorKey: 'color',
      },
      {
        header: 'Fuel',
        accessorKey: 'fuel',
      },
    ],
    [],
  );

  const table = useReactTable({
    data,
    columns,
    defaultColumn: {
      cell: EditableCell,
    },
    getCoreRowModel: getCoreRowModel(),
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
                    <div>{flexRender(header.column.columnDef.header, header.getContext())}</div>
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
                {row.getVisibleCells().map((cell) => (
                  <TdsBodyCell cellKey={cell.column.id} key={cell.id} disablePadding>
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

export default TanstackEditableCells;
