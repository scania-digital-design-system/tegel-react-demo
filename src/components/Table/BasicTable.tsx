const BasicTable = () => {
  return (
    <tds-table table-id="basic-table" no-min-width vertical-dividers="false" compact-design="false" responsive>
      <tds-table-header>
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
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell cell-value="Sweden" cell-key="country"></tds-body-cell>
          <tds-body-cell style={{ textAlign: 'right' }} cell-value="4000" cell-key="mileage"></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell cell-value="Germany" cell-key="country"></tds-body-cell>
          <tds-body-cell style={{ textAlign: 'right' }} cell-value="260" cell-key="mileage"></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell cell-value="Norway" cell-key="country"></tds-body-cell>
          <tds-body-cell style={{ textAlign: 'right' }} cell-value="5889" cell-key="mileage"></tds-body-cell>
        </tds-table-body-row>
      </tds-table-body>
    </tds-table>
  );
};

export default BasicTable;
