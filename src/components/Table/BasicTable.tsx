import {
  TdsBodyCell,
  TdsHeaderCell,
  TdsTable,
  TdsTableBody,
  TdsTableBodyRow,
  TdsTableHeader,
} from '@scania/tegel-react';

const BasicTable = () => {
  return (
    <TdsTable tableId="basic-table" noMinWidth responsive>
      <TdsTableHeader>
        <TdsHeaderCell cellKey="truck" cellValue="Truck type"></TdsHeaderCell>
        <TdsHeaderCell cellKey="driver" cellValue="Driver name"></TdsHeaderCell>
        <TdsHeaderCell cellKey="country" cellValue="Country"></TdsHeaderCell>
        <TdsHeaderCell cellKey="mileage" cellValue="Mileage" textAlign="right"></TdsHeaderCell>
      </TdsTableHeader>
      <TdsTableBody>
        <TdsTableBodyRow>
          <TdsBodyCell cellKey="truck">
            <div>This colum uses slots.</div>
          </TdsBodyCell>
          <TdsBodyCell
            cellValue="This column uses the cell value prop."
            cellKey="driver"
          ></TdsBodyCell>
          <TdsBodyCell cellValue="Sweden" cellKey="country"></TdsBodyCell>
          <TdsBodyCell textAlign="left" cellValue="4000" cellKey="mileage"></TdsBodyCell>
        </TdsTableBodyRow>
        <TdsTableBodyRow>
          <TdsBodyCell cellKey="truck">
            <div>This colum uses slots.</div>
          </TdsBodyCell>
          <TdsBodyCell
            cellValue="This column uses the cell value prop."
            cellKey="driver"
          ></TdsBodyCell>
          <TdsBodyCell cellValue="Germany" cellKey="country"></TdsBodyCell>
          <TdsBodyCell textAlign="center" cellValue="260" cellKey="mileage"></TdsBodyCell>
        </TdsTableBodyRow>
        <TdsTableBodyRow>
          <TdsBodyCell cellKey="truck">
            <div>This colum uses slots.</div>
          </TdsBodyCell>
          <TdsBodyCell
            cellValue="This column uses the cell value prop."
            cellKey="driver"
          ></TdsBodyCell>
          <TdsBodyCell cellValue="Norway" cellKey="country"></TdsBodyCell>
          <TdsBodyCell textAlign="right" cellValue="5889" cellKey="mileage"></TdsBodyCell>
        </TdsTableBodyRow>
      </TdsTableBody>
    </TdsTable>
  );
};

export default BasicTable;
