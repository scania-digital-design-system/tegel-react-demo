import { useRef, useState, useEffect } from 'react';
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
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(2);
  let totalPages = Math.ceil(exampleData.length / rowsPerPage);
  const [data, setData] = useState(exampleData.slice(page, page + rowsPerPage));
  const paginationTable = useRef<HTMLTdsTableElement>(null);

  useEffect(() => {
    updateData();
  }, [page, rowsPerPage]);

  const handlePaginationEvent = (event: any) => {
    setPage(event.detail.paginationValue);
    setRowsPerPage(event.detail.rowsPerPage);
    updateData();
  };

  const updateData = () => {
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const updatedData = exampleData.slice(startIndex, endIndex);
    totalPages = Math.ceil(exampleData.length / rowsPerPage);
    setData(updatedData);
  };

  return (
    <TdsTable tableId="pagination-table" ref={paginationTable} responsive noMinWidth>
      <TdsTableHeader>
        <TdsHeaderCell cellKey="truck" cellValue="Truck type"></TdsHeaderCell>
        <TdsHeaderCell cellKey="driver" cellValue="Driver name"></TdsHeaderCell>
        <TdsHeaderCell cellKey="country" cellValue="Country"></TdsHeaderCell>
        <TdsHeaderCell cellKey="mileage" cellValue="Mileage" textAlign="right"></TdsHeaderCell>
      </TdsTableHeader>
      <TdsTableBody>
        {data.map((row, index) => (
          <TdsTableBodyRow key={index}>
            <TdsBodyCell cellKey="truck">{row.truck}</TdsBodyCell>
            <TdsBodyCell cellKey="driver">{row.driver}</TdsBodyCell>
            <TdsBodyCell cellKey="country">{row.country}</TdsBodyCell>
            <TdsBodyCell cellKey="milage" textAlign="right">
              {row.mileage}
            </TdsBodyCell>
          </TdsTableBodyRow>
        ))}
      </TdsTableBody>
      <TdsTableFooter
        rowsPerPageValues={[2, 4, 6]}
        onTdsPagination={handlePaginationEvent}
        pagination
        pages={totalPages}
      ></TdsTableFooter>
    </TdsTable>
  );
};

export default PaginationTable;
