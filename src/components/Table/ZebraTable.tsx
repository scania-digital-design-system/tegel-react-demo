import {
  TdsBodyCell,
  TdsHeaderCell,
  TdsTable,
  TdsTableBody,
  TdsTableBodyRow,
  TdsTableHeader,
} from '@scania/tegel-react';

const ZebraTable = () => {
  return (
    <div>
      <div className="tds-headline-04 tds-u-pb1 tds-u-mt1">Zebra Mode: rows-odd</div>
      <TdsTable zebra-mode="rows-odd" tableId="zebra-table-odd-rows" noMinWidth responsive>
        <TdsTableHeader>
          <TdsHeaderCell cellKey="truck" cellValue="Truck type"></TdsHeaderCell>
          <TdsHeaderCell cellKey="driver" cellValue="Driver name"></TdsHeaderCell>
          <TdsHeaderCell cellKey="country" cellValue="Country"></TdsHeaderCell>
          <TdsHeaderCell cellKey="mileage" cellValue="Mileage" textAlign="right"></TdsHeaderCell>
        </TdsTableHeader>
        <TdsTableBody>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania R450</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="John Doe" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="Sweden" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="4000" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania S730</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Jane Smith" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="Germany" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="260" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania G410</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Alice Johnson" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="Norway" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="5889" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania P280</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Bob Brown" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="USA" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="1234" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania L360</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Charlie Davis" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="Canada" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="5678" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania XT</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Diana Evans" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="UK" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="9101" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania R500</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Eve Foster" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="Australia" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="1121" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania S650</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Frank Green" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="France" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="3141" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania G500</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Grace Hall" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="Italy" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="5161" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania P320</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Hank Ives" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="Spain" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="7181" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
        </TdsTableBody>
      </TdsTable>

      <div className="tds-headline-04 tds-u-pb1 tds-u-mt3">Zebra Mode: rows-even</div>
      <TdsTable zebra-mode="rows-even" tableId="zebra-table-even-rows" noMinWidth responsive>
        <TdsTableHeader>
          <TdsHeaderCell cellKey="truck" cellValue="Truck type"></TdsHeaderCell>
          <TdsHeaderCell cellKey="driver" cellValue="Driver name"></TdsHeaderCell>
          <TdsHeaderCell cellKey="country" cellValue="Country"></TdsHeaderCell>
          <TdsHeaderCell cellKey="mileage" cellValue="Mileage" textAlign="right"></TdsHeaderCell>
        </TdsTableHeader>
        <TdsTableBody>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania R450</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="John Doe" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="Sweden" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="4000" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania S730</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Jane Smith" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="Germany" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="260" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania G410</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Alice Johnson" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="Norway" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="5889" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania P280</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Bob Brown" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="USA" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="1234" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania L360</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Charlie Davis" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="Canada" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="5678" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania XT</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Diana Evans" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="UK" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="9101" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania R500</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Eve Foster" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="Australia" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="1121" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania S650</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Frank Green" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="France" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="3141" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania G500</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Grace Hall" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="Italy" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="5161" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania P320</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Hank Ives" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="Spain" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="7181" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
        </TdsTableBody>
      </TdsTable>

      <div className="tds-headline-04 tds-u-pb1 tds-u-mt3">Zebra Mode: columns-odd</div>
      <TdsTable zebra-mode="columns-odd" tableId="zebra-table-odd-columns" noMinWidth responsive>
        <TdsTableHeader>
          <TdsHeaderCell cellKey="truck" cellValue="Truck type"></TdsHeaderCell>
          <TdsHeaderCell cellKey="driver" cellValue="Driver name"></TdsHeaderCell>
          <TdsHeaderCell cellKey="country" cellValue="Country"></TdsHeaderCell>
          <TdsHeaderCell cellKey="mileage" cellValue="Mileage" textAlign="right"></TdsHeaderCell>
        </TdsTableHeader>
        <TdsTableBody>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania R450</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="John Doe" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="Sweden" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="4000" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania S730</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Jane Smith" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="Germany" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="260" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania G410</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Alice Johnson" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="Norway" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="5889" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania P280</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Bob Brown" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="USA" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="1234" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania L360</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Charlie Davis" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="Canada" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="5678" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania XT</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Diana Evans" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="UK" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="9101" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania R500</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Eve Foster" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="Australia" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="1121" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania S650</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Frank Green" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="France" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="3141" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania G500</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Grace Hall" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="Italy" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="5161" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania P320</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Hank Ives" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="Spain" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="7181" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
        </TdsTableBody>
      </TdsTable>

      <div className="tds-headline-04 tds-u-pb1 tds-u-mt3">Zebra Mode: columns-even</div>
      <TdsTable zebra-mode="columns-even" tableId="zebra-table-even-columns" noMinWidth responsive>
        <TdsTableHeader>
          <TdsHeaderCell cellKey="truck" cellValue="Truck type"></TdsHeaderCell>
          <TdsHeaderCell cellKey="driver" cellValue="Driver name"></TdsHeaderCell>
          <TdsHeaderCell cellKey="country" cellValue="Country"></TdsHeaderCell>
          <TdsHeaderCell cellKey="mileage" cellValue="Mileage" textAlign="right"></TdsHeaderCell>
        </TdsTableHeader>
        <TdsTableBody>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania R450</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="John Doe" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="Sweden" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="4000" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania S730</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Jane Smith" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="Germany" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="260" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania G410</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Alice Johnson" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="Norway" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="5889" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania P280</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Bob Brown" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="USA" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="1234" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania L360</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Charlie Davis" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="Canada" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="5678" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania XT</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Diana Evans" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="UK" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="9101" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania R500</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Eve Foster" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="Australia" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="1121" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania S650</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Frank Green" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="France" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="3141" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania G500</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Grace Hall" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="Italy" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="5161" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="truck">
              <div>Scania P320</div>
            </TdsBodyCell>
            <TdsBodyCell cellValue="Hank Ives" cellKey="driver"></TdsBodyCell>
            <TdsBodyCell cellValue="Spain" cellKey="country"></TdsBodyCell>
            <TdsBodyCell textAlign="right" cellValue="7181" cellKey="mileage"></TdsBodyCell>
          </TdsTableBodyRow>
        </TdsTableBody>
      </TdsTable>
    </div>
  );
};

export default ZebraTable;
