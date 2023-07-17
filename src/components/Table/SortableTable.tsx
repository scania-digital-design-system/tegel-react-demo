import { useEffect, useRef } from 'react';
import exampleData from './example-data.json';

interface SortableTableProps {
  cancelEvent?: boolean;
}

const SortableTable = ({ cancelEvent }: SortableTableProps) => {
  const sortableTable = useRef<HTMLTdsTableElement>(null);
  const sortableTableBody = useRef<HTMLTdsTableBodyElement>(null);

  useEffect(() => {
    const handleSortEvent = (event: Event) => {
      if (cancelEvent) {
        event?.preventDefault();
      }
    };

    const sortableTableElement = sortableTable?.current;
    const sortableTableBodyElement = sortableTableBody?.current;

    if (sortableTableBodyElement) {
      sortableTableBodyElement.bodyData = exampleData;
    }

    if (sortableTableElement) {
      sortableTableElement.addEventListener('tdsSortChange', handleSortEvent);
    }

    return () => {
      if (sortableTableElement) {
        sortableTableElement.removeEventListener('tdsSortChange', handleSortEvent);
      }
    };
  });

  return (
    <tds-table
      ref={sortableTable}
      no-min-width
      enable-responsive
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
      <tds-table-body ref={sortableTableBody}></tds-table-body>
    </tds-table>
  );
};

export default SortableTable;
