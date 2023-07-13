import { useRef, useState } from 'react';

const BatchActionTable = () => {
  const table = useRef<HTMLTdsTableBodyElement>(null);
  const modal = useRef<HTMLTdsModalElement>(null);
  const [data, setData] = useState<string>('[]');

  const handleClick = () => {
    if (table.current) {
      if (table.current.getAttribute('data-selected-rows')) {
        setData(table.current.getAttribute('data-selected-rows') as string);
      }
      modal.current?.showModal();
    }
  };
  return (
    <>
      <tds-modal ref={modal} id="my-modal" size="lg" actions="static">
        <h5 className="tds-modal-headline" slot="header">
          Batch Actions example
        </h5>
        <span slot="body">
          {data !== '[]' ? (
            <>
              <p>Downdloaded data:</p>
              {data}
            </>
          ) : (
            <p>No data selected.</p>
          )}
        </span>
      </tds-modal>
      <tds-table
        no-min-width
        vertical-dividers="false"
        compact-design="false"
        enable-responsive
        enable-multiselect
      >
        <tds-table-toolbar table-title="Batch action">
          <tds-button
            onClick={handleClick}
            slot="tds-table__actionbar"
            type="primary"
            size="sm"
            text="Download"
          ></tds-button>
        </tds-table-toolbar>
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
        <tds-table-body ref={table} enable-dummy-data></tds-table-body>
      </tds-table>
    </>
  );
};

export default BatchActionTable;
