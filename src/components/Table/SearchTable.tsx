import { useEffect, useRef } from 'react';
import exampleData from './example-data.json';

interface SearchTableProps {
  cancelEvent?: boolean;
}

const SearchTable = ({ cancelEvent }: SearchTableProps) => {
  const searchTable = useRef<HTMLTdsTableElement>(null);
  const searchTableBody = useRef<HTMLTdsTableBodyElement>(null);

  useEffect(() => {
    const searchTableElement = searchTable?.current;
    const searchTableBodyElement = searchTableBody?.current;
    const handleSortEvent = (event: Event) => {
      if (cancelEvent) {
        event?.preventDefault();
      }
    };

    if (searchTableBodyElement) {
      searchTableBodyElement.bodyData = exampleData;
    }

    if (searchTableElement) {
      searchTableElement.addEventListener('tdsFilterChange', handleSortEvent);
    }
    return () => {
      if (searchTableElement) {
        searchTableElement.removeEventListener('tdsFilterChange', handleSortEvent);
      }
    };
  });

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
      <tds-table-body
        no-result-message="The query did not match any data."
        ref={searchTableBody}
      ></tds-table-body>
    </tds-table>
  );
};

export default SearchTable;
