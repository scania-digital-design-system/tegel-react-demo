import { useEffect, useRef, useState } from 'react';
import exampleData from './example-data.json';

const FilterTable = () => {
  const filterTable = useRef<HTMLTdsTableElement>(null);
  const [data, setData] = useState(exampleData);

  useEffect(() => {
    const handleFilter = (event: any) => {
      const query = event.detail.query;
      console.log(query)
      const filteredData = exampleData.filter((object) =>
        Object.values(object).some((value) =>
          value.toString().toLowerCase().includes(query.toLowerCase()),
        ),
      );
      setData(filteredData);
    };

    const filterTableElement = filterTable?.current;
    filterTableElement?.addEventListener('tdsFilter', handleFilter);
    return () => {
      filterTableElement?.removeEventListener('tdsFilter', handleFilter);
    };
  }, [data]);

  return (
    <>
      <tds-table
        no-min-width
        vertical-dividers="false"
        compact-design="false"
        responsive
        ref={filterTable}
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
              <tds-body-cell>{row.truck}</tds-body-cell>
              <tds-body-cell>{row.driver}</tds-body-cell>
              <tds-body-cell>{row.country}</tds-body-cell>
              <tds-body-cell style={{ textAlign: 'right' }} >{row.mileage}</tds-body-cell>
            </tds-table-body-row>
          ))}
        </tds-table-body>
      </tds-table>
      <>
        {!data.length && (
          <div className="tds-body-02">Your query had no match against our data.</div>
        )}
      </>
    </>
  );
};

export default FilterTable;
