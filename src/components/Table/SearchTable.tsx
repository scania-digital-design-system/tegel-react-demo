import { useEffect, useRef, useState } from 'react';
import exampleData from './example-data.json';

const SearchTable = () => {
  const searchTable = useRef<HTMLTdsTableElement>(null);
  const [data, setFilteredData] = useState(exampleData);
  const handleFilter = (event: any) => {
    const query = event.detail.query;
    const filteredData = data.filter((object) =>
      Object.values(object).some((value) =>
        value.toString().toLowerCase().includes(query.toLowerCase()),
      ),
    );
    setFilteredData(filteredData);
  };

  useEffect(() => {
    const searchTableElement = searchTable?.current;
    if (searchTableElement) {
      searchTableElement.addEventListener('tdsFilterChange', handleFilter);
    }
  }, []);

  return (
    <tds-table
      no-min-width
      vertical-dividers="false"
      compact-design="false"
      responsive
      ref={searchTable}
    >
      <tds-table-toolbar table-title="Filter" filter></tds-table-toolbar>
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
        {data.map((row, index) => (
          <tds-table-body-row key={index}>
            <tds-body-cell>{row.country}</tds-body-cell>
            <tds-body-cell>{row.driver}</tds-body-cell>
            <tds-body-cell>{row.mileage}</tds-body-cell>
            <tds-body-cell>{row.truck}</tds-body-cell>
          </tds-table-body-row>
        ))}
        {!data.length && (
          <tds-table-body-row>
            <p className='tds-u-p2'>No result found.</p>
          </tds-table-body-row>
        )}
      </tds-table-body>
    </tds-table>
  );
};

export default SearchTable;
