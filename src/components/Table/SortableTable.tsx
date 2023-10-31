import { useRef, useState } from 'react';
import exampleData from './example-data.json';
import {
  TdsBodyCell,
  TdsHeaderCell,
  TdsTable,
  TdsTableBody,
  TdsTableBodyRow,
  TdsTableHeader,
  TdsTableToolbar,
} from '@scania/tegel-react';

const SortableTable = () => {
  const sortableTable = useRef<HTMLTdsTableElement>(null);
  const [data, setData] = useState(exampleData);

  const handleSortEvent = (event: any) => {
    const key = event.detail.columnKey as keyof (typeof data)[0];
    const direction = event.detail.sortingDirection;

    let comparison = 0;
    const updatedData = exampleData.slice().sort((a, b) => {
      if (a[key] < b[key]) {
        comparison = -1;
      }
      if (a[key] > b[key]) {
        comparison = 1;
      }
      return direction === 'desc' ? comparison * -1 : comparison;
    });
    setData(updatedData);
  };

  return (
    <TdsTable tableId="sortable-table" ref={sortableTable} noMinWidth responsive>
      <TdsTableToolbar tableTitle="Sorting"></TdsTableToolbar>
      <TdsTableHeader>
        <TdsHeaderCell
          onTdsSort={handleSortEvent}
          cellKey="truck"
          cellValue="Truck type"
          sortable
        ></TdsHeaderCell>
        <TdsHeaderCell
          onTdsSort={handleSortEvent}
          cellKey="driver"
          cellValue="Driver name"
          sortable
        ></TdsHeaderCell>
        <TdsHeaderCell
          onTdsSort={handleSortEvent}
          cellKey="country"
          cellValue="Country"
          sortable
        ></TdsHeaderCell>
        <TdsHeaderCell
          onTdsSort={handleSortEvent}
          cellKey="mileage"
          cellValue="Mileage"
          sortable
          textAlign="right"
        ></TdsHeaderCell>
      </TdsTableHeader>
      <TdsTableBody>
        {data.map((row, index) => (
          <TdsTableBodyRow key={index}>
            <TdsBodyCell cellKey="truck">{row.truck}</TdsBodyCell>
            <TdsBodyCell cellKey="driver">{row.driver}</TdsBodyCell>
            <TdsBodyCell cellKey="country">{row.country}</TdsBodyCell>
            <TdsBodyCell cellKey="milage" style={{ textAlign: 'right' }}>
              {row.mileage}
            </TdsBodyCell>
          </TdsTableBodyRow>
        ))}
      </TdsTableBody>
    </TdsTable>
  );
};

export default SortableTable;
