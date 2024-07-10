import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
// Theme
import { ColDef, ModuleRegistry, GridReadyEvent } from '@ag-grid-community/core';
import { AgGridReact } from '@ag-grid-community/react';
// React Grid Logic
import 'ag-grid-community/styles/ag-grid.css';
// Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css';
import './Override.scss';
import React, { useCallback, useState } from 'react';
import { createRoot } from 'react-dom/client';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

// Row Data Interface
interface IRow {
  make: string;
  model: string;
  price: number;
}

// Create new GridExample component
const AgGridColumnSearchFloating = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState<IRow[]>([
    { make: 'Tesla', model: 'Model Y', price: 64950 },
    { make: 'Ford', model: 'F-Series', price: 33850 },
    { make: 'Toyota', model: 'Corolla', price: 29600 },
    { make: 'Mercedes', model: 'EQA', price: 48890 },
    { make: 'Fiat', model: '500', price: 15774 },
    { make: 'Nissan', model: 'Juke', price: 20675 },
  ]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
    { field: 'make', filter: true },
    { field: 'model', filter: true },
    { field: 'price', filter: true },
  ]);

  const defaultColDef: ColDef = {
    flex: 1,
    filter: true,
    floatingFilter: true,
  };

  const onGridReady = useCallback((params: GridReadyEvent) => {
    fetch('https://www.ag-grid.com/example-assets/row-data.json')
      .then((resp) => resp.json())
      .then((data: IRow[]) => setRowData(data));
  }, []);

  // Container: Defines the grid's theme & dimensions.
  return (
    <>
      <div className="tds-headline-02 tds-u-pt3 tds-u-pb1">
        AG-Grid Column Search Floating Filter
      </div>
      <p>
        This is an implementation of AG-Grid with column search, including a floating text input for
        filtering.
      </p>
      <div className={'ag-theme-quartz'} style={{ width: '100%', height: '500px' }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
        />
      </div>
    </>
  );
};

// Render GridExample
const root = createRoot(document.getElementById('root')!);
root.render(<AgGridColumnSearchFloating />);

export default AgGridColumnSearchFloating;
