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

const FilterTable = () => {
  const filterTable = useRef<HTMLTdsTableElement>(null);
  const [data, setData] = useState(exampleData);

  const handleFilter = (event: any) => {
    const query = event.detail.query;
    console.log(query);
    const filteredData = exampleData.filter((object) =>
      Object.values(object).some((value) =>
        value.toString().toLowerCase().includes(query.toLowerCase()),
      ),
    );
    setData(filteredData);
  };

  return (
    <>
      <TdsTable tableId="filter-table" noMinWidth responsive ref={filterTable}>
        <TdsTableToolbar onTdsFilter={handleFilter} tableTitle="Filter" filter></TdsTableToolbar>
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
              <TdsBodyCell cellKey="milage" textAlign="left">
                {row.mileage}
              </TdsBodyCell>
            </TdsTableBodyRow>
          ))}
        </TdsTableBody>
      </TdsTable>
      <>
        {!data.length && (
          <div className="tds-body-02">Your query had no match against our data.</div>
        )}
      </>
    </>
  );
};

export default FilterTable;
