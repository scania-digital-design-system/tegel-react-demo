import { useEffect, useRef, useState } from 'react';
import exampleData from './example-data.json';

const PaginationTable = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 2;
  const [data, setData] = useState(exampleData.slice(page, page + rowsPerPage));
  const paginationTable = useRef<HTMLTdsTableElement>(null);

  useEffect(() => {
    const paginationTableElement = paginationTable?.current;

    const handlePaginationEvent = (event: any) => {
      setPage(event.detail.paginationValue)
    };

    paginationTableElement?.addEventListener('tdsPageChange', handlePaginationEvent);
    return () => {
      paginationTableElement?.removeEventListener('tdsPageChange', handlePaginationEvent);
    };
  });

  useEffect(() => {
    const start = page * rowsPerPage;
    setData(exampleData.slice(start, start + rowsPerPage));
  }, [page]);

  return (
    <tds-table ref={paginationTable} vertical-dividers="false" compact-design="false" responsive no-min-width>
      <tds-table-header>
        <tds-header-cell column-key="truck" column-title="Truck type"></tds-header-cell>
        <tds-header-cell column-key="driver" column-title="Driver name"></tds-header-cell>
        <tds-header-cell column-key="country" column-title="Country"></tds-header-cell>
        <tds-header-cell
          column-key="mileage"
          column-title="Mileage"
          text-align="right"
        ></tds-header-cell>
      </tds-table-header>
      <tds-table-body>
        {data.map((object, index) => (
          <tds-table-body-row key={index}>
            <tds-body-cell>{object.truck}</tds-body-cell>
            <tds-body-cell>{object.driver}</tds-body-cell>
            <tds-body-cell>{object.country}</tds-body-cell>
            <tds-body-cell>{object.mileage}</tds-body-cell>
          </tds-table-body-row>
        ))}
      </tds-table-body>
      <tds-table-footer pagination pages={Math.floor((exampleData.length / rowsPerPage))}></tds-table-footer>
    </tds-table>
  );
};

export default PaginationTable;
