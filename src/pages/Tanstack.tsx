import React from 'react';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingFn,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { makeData, Person } from './demoData';
import {
  TdsTable,
  TdsTableHeader,
  TdsHeaderCell,
  TdsTableBody,
  TdsTableBodyRow,
  TdsBodyCell,
} from '@scania/tegel-react';

//custom sorting logic for one of our enum columns
const sortStatusFn: SortingFn<Person> = (rowA, rowB, _columnId) => {
  const statusA = rowA.original.status;
  const statusB = rowB.original.status;
  const statusOrder = ['single', 'complicated', 'relationship'];
  return statusOrder.indexOf(statusA) - statusOrder.indexOf(statusB);
};

const Tanstack = () => {
  const rerender = React.useReducer(() => ({}), {})[1];

  const [sorting, setSorting] = React.useState<SortingState>([]);

  const columns = React.useMemo<ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'firstName',
        cell: (info) => info.getValue(),
        //this column will sort in ascending order by default since it is a string column
      },
      {
        accessorFn: (row) => row.lastName,
        id: 'lastName',
        cell: (info) => info.getValue(),
        header: () => <span>Last Name</span>,
        sortUndefined: 'last', //force undefined values to the end
        sortDescFirst: false, //first sort order will be ascending (nullable values can mess up auto detection of sort order)
      },
      {
        accessorKey: 'age',
        header: () => 'Age',
        //this column will sort in descending order by default since it is a number column
      },
      {
        accessorKey: 'visits',
        header: () => <span>Visits</span>,
        sortUndefined: 'last', //force undefined values to the end
      },
      {
        accessorKey: 'status',
        header: 'Status',
        sortingFn: sortStatusFn, //use our custom sorting function for this enum column
      },
      {
        accessorKey: 'progress',
        header: 'Profile Progress',
        // enableSorting: false, //disable sorting for this column
      },
      {
        accessorKey: 'rank',
        header: 'Rank',
        invertSorting: true, //invert the sorting order (golf score-like where smaller is better)
      },
    ],
    [],
  );

  const [data, setData] = React.useState(() => makeData(1_000));
  const refreshData = () => setData(() => makeData(100_000)); //stress test with 100k rows

  const table = useReactTable({
    columns,
    data,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(), //client-side sorting
    onSortingChange: setSorting, //optionally control sorting state in your own scope for easy access
    // sortingFns: {
    //   sortStatusFn, //or provide our custom sorting function globally for all columns to be able to use
    // },
    //no need to pass pageCount or rowCount with client-side pagination as it is calculated automatically
    state: {
      sorting,
    },
    // autoResetPageIndex: false, // turn off page index reset when sorting or filtering - default on/true
    // enableMultiSort: false, //Don't allow shift key to sort multiple columns - default on/true
    // enableSorting: false, // - default on/true
    // enableSortingRemoval: false, //Don't allow - default on/true
    // isMultiSortEvent: (e) => true, //Make all clicks multi-sort - default requires `shift` key
    // maxMultiSortColCount: 3, // only allow 3 columns to be sorted at once - default is Infinity
  });

  //access sorting state from the table instance
  console.log(table.getState().sorting);

  return (
    <div className="p-2">
      <div className="h-2" />
      <TdsTable verticalDividers={true} responsive={true} compactDesign={true}>
        {table.getHeaderGroups().map((headerGroup) => (
          <TdsTableHeader key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TdsHeaderCell key={header.id}>
                  {header.isPlaceholder ? null : (
                    <div
                      className={header.column.getCanSort() ? 'cursor-pointer select-none' : ''}
                      onClick={header.column.getToggleSortingHandler()}
                      title={
                        header.column.getCanSort()
                          ? header.column.getNextSortingOrder() === 'asc'
                            ? 'Sort ascending'
                            : header.column.getNextSortingOrder() === 'desc'
                            ? 'Sort descending'
                            : 'Clear sort'
                          : undefined
                      }
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {{
                        asc: ' 🔼',
                        desc: ' 🔽',
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  )}
                </TdsHeaderCell>
              );
            })}
          </TdsTableHeader>
        ))}

        <TdsTableBody>
          {table
            .getRowModel()
            .rows.slice(0, 10)
            .map((row) => {
              return (
                <TdsTableBodyRow key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TdsBodyCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TdsBodyCell>
                    );
                  })}
                </TdsTableBodyRow>
              );
            })}
        </TdsTableBody>
      </TdsTable>
    </div>
  );
};

export default Tanstack;
