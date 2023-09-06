import { useEffect, useRef, useState } from 'react';
import exampleData from './example-data.json';

const PaginationTable = () => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 2;
  const [data, setData] = useState(exampleData.slice(page, page + rowsPerPage));
  const paginationTable = useRef<HTMLTdsTableElement>(null);

  useEffect(() => {
    const paginationTableElement = paginationTable?.current;

    const handlePaginationEvent = (event: any) => {
      setPage(event.detail.paginationValue);
      const startIndex = (event.detail.paginationValue - 1) * rowsPerPage;
      const endIndex = startIndex + rowsPerPage;
      const updatedData = exampleData.slice(startIndex, endIndex);
      setData(updatedData)
    };

    paginationTableElement?.addEventListener('tdsPagination', handlePaginationEvent);
    return () => {
      paginationTableElement?.removeEventListener('tdsPagination', handlePaginationEvent);
    };
  }, []);

  return (
    <tds-table table-id="pagination-table" ref={paginationTable} responsive no-min-width>
      <tds-table-header>
        <tds-header-cell cell-key="truck" cell-value="Truck type"></tds-header-cell>
        <tds-header-cell cell-key="driver" cell-value="Driver name"></tds-header-cell>
        <tds-header-cell cell-key="country" cell-value="Country"></tds-header-cell>
        <tds-header-cell
          cell-key="mileage"
          cell-value="Mileage"
          text-align="right"
        ></tds-header-cell>
      </tds-table-header>
      <tds-table-body>
        {data.map((object, index) => (
          <tds-table-body-row key={index}>
            <tds-body-cell>{object.truck}</tds-body-cell>
            <tds-body-cell>{object.driver}</tds-body-cell>
            <tds-body-cell>{object.country}</tds-body-cell>
            <tds-body-cell style={{ textAlign: 'right' }} >{object.mileage}</tds-body-cell>
          </tds-table-body-row>
        ))}
      </tds-table-body>
      <tds-table-footer
        pagination
        pages={Math.ceil(exampleData.length / rowsPerPage)}
      ></tds-table-footer>
    </tds-table>
  );
};

export default PaginationTable;
