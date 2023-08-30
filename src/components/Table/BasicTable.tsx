const BasicTable = () => {
  return (
    <tds-table no-min-width vertical-dividers="false" compact-design="false" responsive>
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
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell cell-value="Sweden" cell-key="country"></tds-body-cell>
          <tds-body-cell cell-value="4000" cell-key="mileage"></tds-body-cell>
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
          <tds-body-cell cell-value="260" cell-key="mileage"></tds-body-cell>
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
          <tds-body-cell cell-value="5889" cell-key="mileage"></tds-body-cell>
        </tds-table-body-row>
      </tds-table-body>
    </tds-table>
  );
};

export default BasicTable;
