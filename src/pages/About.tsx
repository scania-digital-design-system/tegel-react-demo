import {
  TdsBodyCell,
  TdsHeaderCell,
  TdsTable,
  TdsTableBody,
  TdsTableBodyRow,
  TdsTableHeader,
} from '@scania/tegel-react';

const About = () => {
  return (
    <article>
      <h3>About this page</h3>
      <p>
        This page is a testing ground and demo for using @scania/tegel-react in a React application.
      </p>

      <h4>Table Span Test</h4>
      <p>Testing col-span and row-span attributes on table cells.</p>

      <TdsTable tableId="span-test-table" noMinWidth>
        <TdsTableHeader>
          <TdsHeaderCell cellKey="col1" cellValue="Column 1"></TdsHeaderCell>
          <TdsHeaderCell cellKey="col2" cellValue="Column 2"></TdsHeaderCell>
          <TdsHeaderCell cellKey="col3" cellValue="Column 3"></TdsHeaderCell>
          <TdsHeaderCell cellKey="col4" cellValue="Column 4"></TdsHeaderCell>
        </TdsTableHeader>
        <TdsTableBody>
          {/* Row 1: col-span="2" test */}
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="col1" colSpan={2}>
              <strong>col-span=2</strong> (spans Column 1 & 2)
            </TdsBodyCell>
            <TdsBodyCell cellKey="col3" cellValue="Normal cell"></TdsBodyCell>
            <TdsBodyCell cellKey="col4" cellValue="Normal cell"></TdsBodyCell>
          </TdsTableBodyRow>

          {/* Row 2: row-span="2" test (start) */}
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="col1" rowSpan={2}>
              <strong>row-span=2</strong> (spans Row 2 & 3)
            </TdsBodyCell>
            <TdsBodyCell cellKey="col2" cellValue="Row 2, Col 2"></TdsBodyCell>
            <TdsBodyCell cellKey="col3" cellValue="Row 2, Col 3"></TdsBodyCell>
            <TdsBodyCell cellKey="col4" cellValue="Row 2, Col 4"></TdsBodyCell>
          </TdsTableBodyRow>

          {/* Row 3: row-span="2" continues (skip col1) */}
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="col2" cellValue="Row 3, Col 2"></TdsBodyCell>
            <TdsBodyCell cellKey="col3" cellValue="Row 3, Col 3"></TdsBodyCell>
            <TdsBodyCell cellKey="col4" cellValue="Row 3, Col 4"></TdsBodyCell>
          </TdsTableBodyRow>

          {/* Row 4: Regular row */}
          <TdsTableBodyRow>
            <TdsBodyCell cellKey="col1" cellValue="Row 4, Col 1"></TdsBodyCell>
            <TdsBodyCell cellKey="col2" cellValue="Row 4, Col 2"></TdsBodyCell>
            <TdsBodyCell cellKey="col3" cellValue="Row 4, Col 3"></TdsBodyCell>
            <TdsBodyCell cellKey="col4" cellValue="Row 4, Col 4"></TdsBodyCell>
          </TdsTableBodyRow>
        </TdsTableBody>
      </TdsTable>
    </article>
  );
};

export default About;
