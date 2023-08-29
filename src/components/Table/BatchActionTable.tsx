import { useEffect, useRef, useState } from 'react';
import exampleData from './example-data.json';

const BatchActionTable = () => {
  const batchActionTable = useRef<HTMLTdsTableElement>(null);
  const modal = useRef<HTMLTdsModalElement>(null);
  const [selectedData, setSelectedData] = useState<any[]>();
  const [allSelected, setAllSelected] = useState(exampleData.every((row) => row.selected));
  const [data, setData] = useState(exampleData);

  useEffect(() => {
    const handleSelectAll = (event: any) => {
      setAllSelected(true);
      const updatedData = data?.map((row) => ({
        ...row,
        selected: event.detail.checked,
      }));
      setData(updatedData);
    };
    const batchActionTableElement = batchActionTable?.current;
    batchActionTableElement?.addEventListener('tdsSelectAll', handleSelectAll);
    return () => {
      batchActionTableElement?.removeEventListener('tdsSelectAll', handleSelectAll);
    };
  }, [data]);

  const handleClick = async () => {
    if (batchActionTable.current) {
      setSelectedData(await batchActionTable.current.getSelectedRows());
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
          {selectedData?.length ? (
            <>
              <p>Downloaded data:</p>
              {selectedData.map((row, index) => (
                <pre key={index}>{JSON.stringify(row, null, 2)}</pre>
              ))}
            </>
          ) : (
            <p>No data selected.</p>
          )}
        </span>
      </tds-modal>
      <tds-table no-min-width responsive multiselect ref={batchActionTable}>
        <tds-table-toolbar table-title="Batch action">
          <tds-button
            onClick={handleClick}
            slot="end"
            variant="primary"
            size="sm"
            text="Download"
          ></tds-button>
        </tds-table-toolbar>
        <tds-table-header all-selected={allSelected}>
          <tds-header-cell cell-key="truck" cell-value="Truck type"></tds-header-cell>
          <tds-header-cell cell-key="driver" cell-value="Driver name"></tds-header-cell>
          <tds-header-cell cell-key="country" cell-value="Country"></tds-header-cell>
          <tds-header-cell
            cell-key="mileage"
            cell-value="Mileage"
            text-align="right"
          ></tds-header-cell>
        </tds-table-header>
        <tds-table-body>
          {data.map((object) => (
            <tds-table-body-row
              ref={(el) => {
                el?.addEventListener('tdsSelect', (event: any) => {
                  const updatedData = data.map((row) => {
                    return {
                      ...row,
                      selected: row.id === object.id ? event.detail.checked : row.selected,
                    };
                  });
                  setData(updatedData);
                  setAllSelected(updatedData.every((row) => row.selected));
                });
              }}
              key={object.id}
              selected={object.selected}
            >
              <tds-body-cell cell-key={`Truck`}>{object.truck}</tds-body-cell>
              <tds-body-cell cell-key={`Driver`}>{object.driver}</tds-body-cell>
              <tds-body-cell cell-key={`Country`}>{object.country}</tds-body-cell>
              <tds-body-cell style={{ textAlign: 'right' }} cell-key={`Milage`}>{object.mileage}</tds-body-cell>
            </tds-table-body-row>
          ))}
        </tds-table-body>
      </tds-table>
    </>
  );
};

export default BatchActionTable;
