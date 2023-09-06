import { useEffect, useRef, useState } from 'react';
import exampleData from './example-data.json';

const SortableTable = () => {
  const sortableTable = useRef<HTMLTdsTableElement>(null);
  const [data, setData] = useState(exampleData);

  useEffect(() => {
    const sortableTableElement = sortableTable?.current;

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


    sortableTableElement?.addEventListener('tdsSort', handleSortEvent);
    return () => {
      sortableTableElement?.removeEventListener('tdsSort', handleSortEvent);
    };
  }, [data]);

  return (
    <tds-table
      table-id="sortable-table"
      ref={sortableTable}
      no-min-width
      responsive
      vertical-dividers="false"
      compact-design="false"
    >
      <tds-table-toolbar table-title="Sorting"></tds-table-toolbar>
      <tds-table-header>
        <tds-header-cell cell-key="truck" cell-value="Truck type" sortable></tds-header-cell>
        <tds-header-cell cell-key="driver" cell-value="Driver name" sortable></tds-header-cell>
        <tds-header-cell cell-key="country" cell-value="Country" sortable></tds-header-cell>
        <tds-header-cell
          cell-key="mileage"
          cell-value="Mileage"
          sortable
          text-align="right"
        ></tds-header-cell>
      </tds-table-header>
      <tds-table-body>
        {data.map((row, index) => (
          <tds-table-body-row key={index}>
            <tds-body-cell cell-key="truck">{row.truck}</tds-body-cell>
            <tds-body-cell cell-key="driver">{row.driver}</tds-body-cell>
            <tds-body-cell cell-key="country">{row.country}</tds-body-cell>
            <tds-body-cell cell-key="milage" style={{ textAlign: 'right' }} >{row.mileage}</tds-body-cell>
          </tds-table-body-row>
        ))}
      </tds-table-body>
    </tds-table>
  );
};

export default SortableTable;
