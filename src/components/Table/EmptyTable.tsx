import {
  TdsButton,
  TdsChip,
  TdsHeaderCell,
  TdsIcon,
  TdsLink,
  TdsTable,
  TdsTableBody,
  TdsTableHeader,
} from '@scania/tegel-react';

const EmptyTable = () => {
  return (
    <TdsTable tableId="empty-table" noMinWidth responsive>
      <TdsTableHeader>
        <TdsHeaderCell cellKey="truck" cellValue="Truck type"></TdsHeaderCell>
        <TdsHeaderCell cellKey="driver" cellValue="Driver name"></TdsHeaderCell>
        <TdsHeaderCell cellKey="country" cellValue="Country"></TdsHeaderCell>
        <TdsHeaderCell cellKey="mileage" cellValue="Mileage" textAlign="right"></TdsHeaderCell>
      </TdsTableHeader>
      <TdsTableBody emptyState="no-data">
        <div slot="no-data" className="tds-u-flex-center" style={{ padding: 'var(--unit-32)' }}>
          <div className="tds-u-flex tds-u-gap2" style={{ maxWidth: '560px' }}>
            <TdsIcon name="truck" size="28px" aria-hidden="true"></TdsIcon>
            <div>
              <h4 className="tds-headline-04" style={{ margin: 0 }}>
                No vehicles yet
              </h4>
              <p
                className="tds-body-02"
                style={{ marginBlock: 'var(--unit-16) 0', color: 'var(--color-text-defined)' }}
              >
                Add a vehicle to start building your fleet, or choose a vehicle type to get started.
              </p>
              <div
                className="tds-u-flex tds-u-flex-wrap tds-u-gap2"
                style={{ marginBlockStart: 'var(--unit-32)' }}
                role="group"
                aria-label="Vehicle types"
              >
                {['Trucks', 'Buses', 'Vans', 'Trailers', 'Other'].map((label) => (
                  <TdsChip key={label} type="button" size="lg">
                    <span slot="label">{label}</span>
                  </TdsChip>
                ))}
              </div>
              <div
                className="tds-u-flex tds-u-flex-wrap tds-u-gap2"
                style={{ alignItems: 'center', marginBlockStart: 'var(--unit-32)' }}
              >
                <TdsButton variant="primary" size="sm" text="Add vehicle"></TdsButton>
                <TdsButton variant="secondary" size="sm" text="Import vehicles"></TdsButton>
                <TdsButton variant="ghost" size="sm" text="View sample fleet"></TdsButton>
                <TdsLink underline>
                  <a href="#">Explore Scania</a>
                </TdsLink>
              </div>
            </div>
          </div>
        </div>
      </TdsTableBody>
    </TdsTable>
  );
};

export default EmptyTable;
