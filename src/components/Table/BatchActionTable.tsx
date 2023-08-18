import { useEffect, useRef, useState } from 'react';
import exampleData from './example-data.json';

const BatchActionTable = () => {
  const batchActionTable = useRef<HTMLTdsTableElement>(null);
  const modal = useRef<HTMLTdsModalElement>(null);
  const [data, setData] = useState(exampleData);
  const [selectedData, setSelectedData] = useState<string | null>()

  useEffect(() => { }, []);

  const handleClick = () => {
    if (batchActionTable.current) {
      if (batchActionTable.current.getAttribute('data-selected-rows')) {
        setSelectedData(batchActionTable.current.getAttribute('data-selected-rows'))
      }
      console.log(batchActionTable.current.getAttribute('data-selected-rows'))
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
          {data.length ? (
            <>
              <p>Downloaded data:</p>
              {selectedData}
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
        responsive
        multiselect
        ref={batchActionTable}
      >
        <tds-table-toolbar table-title="Batch action">
          <tds-button
            onClick={handleClick}
            slot="end"
            variant="primary"
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
    </>
  );
};

export default BatchActionTable;
