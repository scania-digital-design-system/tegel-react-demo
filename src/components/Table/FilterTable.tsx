import { useRef, useState } from 'react';
import exampleData from './example-data.json';
import {
  TdsBodyCell,
  TdsButton,
  TdsHeaderCell,
  TdsIcon,
  TdsTable,
  TdsTableBody,
  TdsTableBodyRow,
  TdsTableHeader,
  TdsTableToolbar,
} from '@scania/tegel-react';

const FilterTable = () => {
  const filterTable = useRef<HTMLTdsTableElement>(null);
  const toolbar = useRef<HTMLTdsTableToolbarElement>(null);
  const [data, setData] = useState(exampleData);

  const handleFilter = (event: CustomEvent) => {
    const query = event.detail.query;
    console.log(query);
    const filteredData = exampleData.filter((object) =>
      Object.values(object).some((value) =>
        value.toString().toLowerCase().includes(query.toLowerCase()),
      ),
    );
    setData(filteredData);
  };

  const clearFilters = () => {
    const search = toolbar.current?.shadowRoot?.querySelector('tds-text-field');
    if (search) search.value = '';
    setData(exampleData);
  };

  return (
    <TdsTable tableId="filter-table" noMinWidth responsive ref={filterTable}>
      <TdsTableToolbar
        ref={toolbar}
        onTdsFilter={handleFilter}
        tableTitle="Filter"
        filter
        tdsSearchAriaLabel="filter"
      ></TdsTableToolbar>
      <TdsTableHeader>
        <TdsHeaderCell cellKey="truck" cellValue="Truck type"></TdsHeaderCell>
        <TdsHeaderCell cellKey="driver" cellValue="Driver name"></TdsHeaderCell>
        <TdsHeaderCell cellKey="country" cellValue="Country"></TdsHeaderCell>
        <TdsHeaderCell cellKey="mileage" cellValue="Mileage" textAlign="right"></TdsHeaderCell>
      </TdsTableHeader>
      <TdsTableBody emptyState={data.length ? 'none' : 'no-filtered-data'}>
        <div
          slot="no-filtered-data"
          className="tds-u-flex-center"
          style={{ padding: 'var(--unit-32)' }}
        >
          <div className="tds-u-flex tds-u-gap2" style={{ maxWidth: '560px' }}>
            <TdsIcon name="search" size="28px" aria-hidden="true"></TdsIcon>
            <div>
              <h4 className="tds-headline-04" style={{ margin: 0 }}>
                No data found
              </h4>
              <p
                className="tds-body-02"
                style={{ marginBlock: 'var(--unit-16) 0', color: 'var(--color-text-defined)' }}
              >
                There's nothing to show here yet. Try adjusting your filters or check back later.
              </p>
              <TdsButton
                variant="primary"
                size="sm"
                text="Clear filters"
                style={{ marginBlockStart: 'var(--unit-32)' }}
                onClick={clearFilters}
              ></TdsButton>
            </div>
          </div>
        </div>
        {data.map((row) => (
          <TdsTableBodyRow key={row.id}>
            <TdsBodyCell cellKey="truck">{row.truck}</TdsBodyCell>
            <TdsBodyCell cellKey="driver">{row.driver}</TdsBodyCell>
            <TdsBodyCell cellKey="country">{row.country}</TdsBodyCell>
            <TdsBodyCell cellKey="mileage" textAlign="right">
              {row.mileage}
            </TdsBodyCell>
          </TdsTableBodyRow>
        ))}
      </TdsTableBody>
    </TdsTable>
  );
};

export default FilterTable;
