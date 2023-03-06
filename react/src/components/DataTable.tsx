const DataTable = () => {
  return (
    <div>
      <div className="sdds-headline-04 sdds-u-pb1">Web Component</div>
      <sdds-table
        vertical-dividers="false"
        compact-design="false"
        enable-responsive="false"
      >
        <sdds-table-header>
          <sdds-header-cell
            column-key="truck"
            column-title="Truck type"
          ></sdds-header-cell>
          <sdds-header-cell
            column-key="driver"
            column-title="Driver name"
          ></sdds-header-cell>
          <sdds-header-cell
            column-key="country"
            column-title="Country"
          ></sdds-header-cell>
          <sdds-header-cell
            column-key="mileage"
            column-title="Mileage"
            text-align="right"
          ></sdds-header-cell>
        </sdds-table-header>
        <sdds-table-body>
          <sdds-table-body-row>
            <sdds-body-cell
              cell-value="Test value 1"
              cell-key="truck"
              disable-padding="false"
            ></sdds-body-cell>
            <sdds-body-cell
              cell-value="Test value 2"
              cell-key="driver"
              disable-padding="false"
            ></sdds-body-cell>
            <sdds-body-cell
              cell-value="Test value 3"
              cell-key="country"
              disable-padding="false"
            ></sdds-body-cell>
            <sdds-body-cell
              cell-value="Test value 4"
              cell-key="mileage"
              disable-padding="false"
            ></sdds-body-cell>
          </sdds-table-body-row>
          <sdds-table-body-row>
            <sdds-body-cell
              cell-value="Test value 5"
              cell-key="truck"
              disable-padding="false"
            ></sdds-body-cell>
            <sdds-body-cell
              cell-value="Test value 6"
              cell-key="driver"
              disable-padding="false"
            ></sdds-body-cell>
            <sdds-body-cell
              cell-value="Test value 7"
              cell-key="country"
              disable-padding="false"
            ></sdds-body-cell>
            <sdds-body-cell
              cell-value="Test value 8"
              cell-key="mileage"
              disable-padding="false"
            ></sdds-body-cell>
          </sdds-table-body-row>
          <sdds-table-body-row>
            <sdds-body-cell
              cell-value="Test value 1"
              cell-key="truck"
              disable-padding="false"
            ></sdds-body-cell>
            <sdds-body-cell
              cell-value="Test value 2"
              cell-key="driver"
              disable-padding="false"
            ></sdds-body-cell>
            <sdds-body-cell
              cell-value="Test value 3"
              cell-key="country"
              disable-padding="false"
            ></sdds-body-cell>
            <sdds-body-cell
              cell-value="Test value 4"
              cell-key="mileage"
              disable-padding="false"
            ></sdds-body-cell>
          </sdds-table-body-row>
          <sdds-table-body-row>
            <sdds-body-cell
              cell-value="Test value 5"
              cell-key="truck"
              disable-padding="false"
            ></sdds-body-cell>
            <sdds-body-cell
              cell-value="Test value 6"
              cell-key="driver"
              disable-padding="false"
            ></sdds-body-cell>
            <sdds-body-cell
              cell-value="Test value 7"
              cell-key="country"
              disable-padding="false"
            ></sdds-body-cell>
            <sdds-body-cell
              cell-value="Test value 8"
              cell-key="mileage"
              disable-padding="false"
            ></sdds-body-cell>
          </sdds-table-body-row>
          <sdds-table-body-row>
            <sdds-body-cell
              cell-value="Test value 1"
              cell-key="truck"
              disable-padding="false"
            ></sdds-body-cell>
            <sdds-body-cell
              cell-value="Test value 2"
              cell-key="driver"
              disable-padding="false"
            ></sdds-body-cell>
            <sdds-body-cell
              cell-value="Test value 3"
              cell-key="country"
              disable-padding="false"
            ></sdds-body-cell>
            <sdds-body-cell
              cell-value="Test value 4"
              cell-key="mileage"
              disable-padding="false"
            ></sdds-body-cell>
          </sdds-table-body-row>
          <sdds-table-body-row>
            <sdds-body-cell
              cell-value="Test value 5"
              cell-key="truck"
              disable-padding="false"
            ></sdds-body-cell>
            <sdds-body-cell
              cell-value="Test value 6"
              cell-key="driver"
              disable-padding="false"
            ></sdds-body-cell>
            <sdds-body-cell
              cell-value="Test value 7"
              cell-key="country"
              disable-padding="false"
            ></sdds-body-cell>
            <sdds-body-cell
              cell-value="Test value 8"
              cell-key="mileage"
              disable-padding="false"
            ></sdds-body-cell>
          </sdds-table-body-row>
        </sdds-table-body>
      </sdds-table>
      <div className="sdds-headline-04 sdds-u-pb1">Native</div>
      <table className="sdds-table">
        <caption>Native table</caption>
        <thead>
          <tr>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
          </tr>
          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
          </tr>
          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
