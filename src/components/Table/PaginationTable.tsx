import { useRef, useState } from 'react';
import exampleData from './example-data.json';
import {
  TdsBodyCell,
  TdsHeaderCell,
  TdsTable,
  TdsTableBody,
  TdsTableBodyRow,
  TdsTableFooter,
  TdsTableHeader,
} from '@scania/tegel-react';

const PaginationTable = () => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 2;
  const [data, setData] = useState(exampleData.slice(page, page + rowsPerPage));
  const paginationTable = useRef<HTMLTdsTableElement>(null);

  const handlePaginationEvent = (event: any) => {
    setPage(event.detail.paginationValue);
    const startIndex = (event.detail.paginationValue - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const updatedData = exampleData.slice(startIndex, endIndex);
    setData(updatedData);
  };
  return (
    <TdsTable tableId="pagination-table" ref={paginationTable} responsive noMinWidth>
      <TdsTableHeader>
        <TdsHeaderCell cellKey="truck" cellValue="Truck type"></TdsHeaderCell>
        <TdsHeaderCell cellKey="driver" cellValue="Driver name"></TdsHeaderCell>
        <TdsHeaderCell cellKey="country" cellValue="Country"></TdsHeaderCell>
        <TdsHeaderCell cellKey="mileage" cellValue="Mileage" text-align="right"></TdsHeaderCell>
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
      <TdsTableFooter
        onTdsPagination={handlePaginationEvent}
        pagination
        pages={Math.ceil(exampleData.length / rowsPerPage)}
      ></TdsTableFooter>
    </TdsTable>
  );
};

export default PaginationTable;
