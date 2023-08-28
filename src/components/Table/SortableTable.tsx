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
      const updatedData = data.slice().sort((a, b) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <tds-table
      ref={sortableTable}
      no-min-width
      responsive
      vertical-dividers="false"
      compact-design="false"
    >
      <tds-table-toolbar table-title="Sorting"></tds-table-toolbar>
      <tds-table-header>
        <tds-header-cell column-key="truck" column-title="Truck type" sortable></tds-header-cell>
        <tds-header-cell column-key="driver" column-title="Driver name" sortable></tds-header-cell>
        <tds-header-cell column-key="country" column-title="Country" sortable></tds-header-cell>
        <tds-header-cell
          column-key="mileage"
          column-title="Mileage"
          sortable
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
    </tds-table>
  );
};

export default SortableTable;
