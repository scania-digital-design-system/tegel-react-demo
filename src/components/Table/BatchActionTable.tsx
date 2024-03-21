import { useRef, useState } from 'react';
import exampleData from './example-data.json';
import {
  TdsBodyCell,
  TdsButton,
  TdsHeaderCell,
  TdsModal,
  TdsTable,
  TdsTableBody,
  TdsTableBodyRow,
  TdsTableHeader,
  TdsTableToolbar,
} from '@scania/tegel-react';

const BatchActionTable = () => {
  const batchActionTable = useRef<HTMLTdsTableElement>(null);
  const modal = useRef<HTMLTdsModalElement>(null);
  const [selectedData, setSelectedData] = useState<any[]>();
  const [allSelected, setAllSelected] = useState(!exampleData.some((row) => row.selected));
  const [noneSelected, setNoneSelected] = useState(exampleData.every((row) => !row.selected));
  const [data, setData] = useState(exampleData);

  const handleSelectAll = (event: CustomEvent<{ checked: boolean }>) => {
    const updatedData = data?.map((row) => ({
      ...row,
      selected: event.detail.checked,
    }));
    setData(updatedData);
    const allRowsSelected = updatedData.every((row) => row.selected);
    const noRowsSelected = updatedData.every((row) => !row.selected);
    setAllSelected(!noRowsSelected && allRowsSelected);
    setNoneSelected(noRowsSelected);
  };

  const handleSelect = (
    event: CustomEvent<{
      checked: boolean;
    }>,
    object: (typeof exampleData)[0],
  ) => {
    const updatedData = data.map((row) => {
      return {
        ...row,
        selected: row.id === object.id ? event.detail.checked : row.selected,
      };
    });
    setData(updatedData);
    const allRowsSelected = updatedData.every((row) => row.selected);
    const noRowsSelected = updatedData.every((row) => !row.selected);
    setAllSelected(!noRowsSelected && allRowsSelected);
    setNoneSelected(noRowsSelected);
  };

  const handleClick = async () => {
    if (batchActionTable.current) {
      setSelectedData(await batchActionTable.current.getSelectedRows());
      modal.current?.showModal();
    }
  };

  return (
    <>
      <TdsModal ref={modal} id="my-modal" size="lg" actionsPosition="static">
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
      </TdsModal>
      <TdsTable
        tableId="batch-action-table"
        noMinWidth
        responsive
        multiselect
        ref={batchActionTable}
      >
        <TdsTableToolbar tableTitle="Batch action">
          <TdsButton
            onClick={handleClick}
            slot="end"
            variant="primary"
            size="sm"
            text="Download"
          ></TdsButton>
        </TdsTableToolbar>
        <TdsTableHeader
          onTdsSelectAll={handleSelectAll}
          selected={allSelected && !noneSelected}
          indeterminate={!allSelected && !noneSelected}
        >
          <TdsHeaderCell cellKey="truck" cellValue="Truck type"></TdsHeaderCell>
          <TdsHeaderCell cellKey="driver" cellValue="Driver name"></TdsHeaderCell>
          <TdsHeaderCell cellKey="country" cellValue="Country"></TdsHeaderCell>
          <TdsHeaderCell cellKey="mileage" cellValue="Mileage" textAlign="right"></TdsHeaderCell>
        </TdsTableHeader>
        <TdsTableBody>
          {data.map((object) => (
            <TdsTableBodyRow
              onTdsSelect={(event) => {
                handleSelect(event, object);
              }}
              key={object.id}
              selected={object.selected}
            >
              <TdsBodyCell cellKey={`truck`}>{object.truck}</TdsBodyCell>
              <TdsBodyCell cellKey={`driver`}>{object.driver}</TdsBodyCell>
              <TdsBodyCell cellKey={`country`}>{object.country}</TdsBodyCell>
              <TdsBodyCell textAlign="right" cellKey={`mileage`}>
                {object.mileage}
              </TdsBodyCell>
            </TdsTableBodyRow>
          ))}
        </TdsTableBody>
      </TdsTable>
    </>
  );
};

export default BatchActionTable;
