import { useEffect, useRef, useState } from 'react';
import exampleData from './example-data.json';

interface PaginationTableProps {
  customPagination?: boolean;
}

const PaginationTable = ({ customPagination }: PaginationTableProps) => {
  const paginationTable = useRef<HTMLTdsTableElement>(null);
  const tableFooter = useRef<HTMLTdsTableFooterElement>(null);
  const paginationTableBody = useRef<HTMLTdsTableBodyElement>(null);

  useEffect(() => {
    const paginationTableElement = paginationTable?.current;
    const paginationTableBodyElement = paginationTableBody?.current;

    if (paginationTableBodyElement) {
      paginationTableBodyElement.bodyData = exampleData;
    }

    const handlePaginationEvent = (event: TdsPaginationEvent) => {
      event.preventDefault();
      updateData(event);
    };

    if (paginationTableElement) {
      paginationTableElement.addEventListener('tdsPageChange', handlePaginationEvent);
    }

    return () => {
      if (paginationTableElement) {
        paginationTableElement.removeEventListener('tdsPageChange', handlePaginationEvent);
      }
    };
  });

  const [data, setData] = useState<
    {
      truck: string;
      driver: string;
      country: string;
      mileage: string | number;
    }[]
  >([
    {
      truck: 'L-series',
      driver: 'Sonya Bruce',
      country: 'Brazil',
      mileage: 123987,
    },
    {
      truck: 'P-series',
      driver: 'Guerra Bowman',
      country: 'Sweden',
      mileage: 2000852,
    },
    {
      truck: 'G-series',
      driver: 'Ferrell Wallace',
      country: 'Germany',
      mileage: 564,
    },
    {
      truck: 'R-series',
      driver: 'Cox Burris',
      country: 'Spain',
      mileage: 1789357,
    },
    {
      truck: 'S-series',
      driver: 'Montgomery Cervantes',
      country: 'Croatia',
      mileage: 65,
    },
    {
      truck: 'L-series',
      driver: 'Sheryl Nielsen',
      country: 'Greece',
      mileage: 365784,
    },
    {
      truck: 'G-series',
      driver: 'Benton Gomez',
      country: 'France',
      mileage: 80957,
    },
  ]);

  const updateData = (event: TdsPaginationEvent) => {
    if (tableFooter.current) {
      if (event.detail.paginationValue === 1) {
        setData([
          {
            truck: 'L-series',
            driver: 'Sonya Bruce',
            country: 'Brazil',
            mileage: '123987',
          },
          {
            truck: 'P-series',
            driver: 'Guerra Bowman',
            country: 'Sweden',
            mileage: '2000852',
          },
          {
            truck: 'G-series',
            driver: 'Ferrell Wallace',
            country: 'Germany',
            mileage: '564',
          },
          {
            truck: 'R-series',
            driver: 'Cox Burris',
            country: 'Spain',
            mileage: '1789357',
          },
          {
            truck: 'S-series',
            driver: 'Montgomery Cervantes',
            country: 'Croatia',
            mileage: '65',
          },
        ]);
      } else {
        setData([
          {
            truck: 'S-series',
            driver: 'Montgomery Cervantes',
            country: 'Croatia',
            mileage: '65',
          },
          {
            truck: 'L-series',
            driver: 'Sheryl Nielsen',
            country: 'Greece',
            mileage: '365784',
          },
          {
            truck: 'G-series',
            driver: 'Benton Gomez',
            country: 'France',
            mileage: '80957',
          },
        ]);
      }
    }
  };

  return (
    <>
      {customPagination && (
        <tds-table
          ref={paginationTable}
          vertical-dividers="false"
          compact-design="false"
          responsive
          no-min-width
        >
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
          <tds-table-body body-data={JSON.stringify(data)}></tds-table-body>
          <tds-table-footer ref={tableFooter} pagination pages={2}></tds-table-footer>
        </tds-table>
      )}
      {!customPagination && (
        <tds-table vertical-dividers="false" compact-design="false" enable-responsive no-min-width>
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
          <tds-table-body ref={paginationTableBody}></tds-table-body>
          <tds-table-footer pagination rows-per-page="2"></tds-table-footer>
        </tds-table>
      )}
    </>
  );
};

export default PaginationTable;
