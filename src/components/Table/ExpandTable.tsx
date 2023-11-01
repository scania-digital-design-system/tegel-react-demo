import {
  TdsBodyCell,
  TdsButton,
  TdsHeaderCell,
  TdsLink,
  TdsTable,
  TdsTableBody,
  TdsTableBodyRowExpandable,
  TdsTableHeader,
} from '@scania/tegel-react';

const ExpandTable = () => {
  return (
    <TdsTable tableId="expandable-table" expandableRows responsive noMinWidth>
      <TdsTableHeader>
        <TdsHeaderCell cellKey="truck" cellValue="Truck type"></TdsHeaderCell>
        <TdsHeaderCell cellKey="driver" cellValue="Driver name"></TdsHeaderCell>
        <TdsHeaderCell cellKey="country" cellValue="Country"></TdsHeaderCell>
        <TdsHeaderCell cellKey="mileage" cellValue="Mileage" textAlign="right"></TdsHeaderCell>
      </TdsTableHeader>
      <TdsTableBody>
        <TdsTableBodyRowExpandable>
          <TdsBodyCell cellValue="L-series" cellKey="truck"></TdsBodyCell>
          <TdsBodyCell cellValue="Ferrell Wallace" cellKey="driver"></TdsBodyCell>
          <TdsBodyCell cellValue="Brazil" cellKey="country"></TdsBodyCell>
          <TdsBodyCell cellValue="8769" cellKey="mileage"></TdsBodyCell>
          <div slot="expand-row">The L-series is great!</div>
        </TdsTableBodyRowExpandable>
        <TdsTableBodyRowExpandable>
          <TdsBodyCell cellValue="P-series" cellKey="truck"></TdsBodyCell>
          <TdsBodyCell cellValue="Sonya Bruce" cellKey="driver"></TdsBodyCell>
          <TdsBodyCell cellValue="Portugal" cellKey="country"></TdsBodyCell>
          <TdsBodyCell cellValue="789" cellKey="mileage"></TdsBodyCell>
          <div slot="expand-row">
            The P-series is a great choice of truck. You can read more about it{' '}
            <TdsLink>
              <a href="/">here.</a>
            </TdsLink>
          </div>
        </TdsTableBodyRowExpandable>
        <TdsTableBodyRowExpandable>
          <TdsBodyCell cellValue="M-series" cellKey="truck"></TdsBodyCell>
          <TdsBodyCell cellValue="Guerra Bowman" cellKey="driver"></TdsBodyCell>
          <TdsBodyCell cellValue="Sweden" cellKey="country"></TdsBodyCell>
          <TdsBodyCell cellValue="11551" cellKey="mileage"></TdsBodyCell>
          <div slot="expand-row">
            <p>The M-series is in stock!</p>
            <TdsButton
              onClick={() => {
                alert('Your order has been placed!');
              }}
              size="md"
              variant="primary"
              text="Order"
            ></TdsButton>
          </div>
        </TdsTableBodyRowExpandable>
      </TdsTableBody>
    </TdsTable>
  );
};

export default ExpandTable;
