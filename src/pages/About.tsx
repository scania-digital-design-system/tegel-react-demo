import { useRef, useState, useEffect, useCallback } from 'react';
import {
  TdsBodyCell,
  TdsHeaderCell,
  TdsTable,
  TdsTableBody,
  TdsTableBodyRow,
  TdsTableFooter,
  TdsTableHeader,
} from '@scania/tegel-react';

// Extended test data to properly test pagination
const testData = [
  { id: 1, name: 'Alice Johnson', department: 'Engineering', salary: 75000, status: 'Active' },
  { id: 2, name: 'Bob Smith', department: 'Marketing', salary: 65000, status: 'Active' },
  { id: 3, name: 'Carol Davis', department: 'HR', salary: 60000, status: 'Inactive' },
  { id: 4, name: 'David Wilson', department: 'Engineering', salary: 80000, status: 'Active' },
  { id: 5, name: 'Eva Brown', department: 'Finance', salary: 70000, status: 'Active' },
  { id: 6, name: 'Frank Miller', department: 'Engineering', salary: 85000, status: 'Active' },
  { id: 7, name: 'Grace Lee', department: 'Marketing', salary: 62000, status: 'Active' },
  { id: 8, name: 'Henry Taylor', department: 'HR', salary: 58000, status: 'Inactive' },
  { id: 9, name: 'Ivy Chen', department: 'Finance', salary: 72000, status: 'Active' },
  { id: 10, name: 'Jack Anderson', department: 'Engineering', salary: 78000, status: 'Active' },
  { id: 11, name: 'Kate Williams', department: 'Marketing', salary: 68000, status: 'Active' },
  { id: 12, name: 'Liam Jones', department: 'HR', salary: 61000, status: 'Active' },
  { id: 13, name: 'Maya Garcia', department: 'Finance', salary: 74000, status: 'Active' },
  { id: 14, name: 'Noah Martinez', department: 'Engineering', salary: 82000, status: 'Active' },
  { id: 15, name: 'Olivia Rodriguez', department: 'Marketing', salary: 66000, status: 'Inactive' },
  { id: 16, name: 'Paul Thompson', department: 'HR', salary: 59000, status: 'Active' },
  { id: 17, name: 'Quinn White', department: 'Finance', salary: 71000, status: 'Active' },
  { id: 18, name: 'Rachel Harris', department: 'Engineering', salary: 79000, status: 'Active' },
  { id: 19, name: 'Sam Clark', department: 'Marketing', salary: 64000, status: 'Active' },
  { id: 20, name: 'Tina Lewis', department: 'HR', salary: 57000, status: 'Inactive' },
  { id: 21, name: 'Uma Walker', department: 'Finance', salary: 73000, status: 'Active' },
  { id: 22, name: 'Victor Hall', department: 'Engineering', salary: 81000, status: 'Active' },
  { id: 23, name: 'Wendy Allen', department: 'Marketing', salary: 67000, status: 'Active' },
  { id: 24, name: 'Xavier Young', department: 'HR', salary: 60000, status: 'Active' },
  { id: 25, name: 'Yara King', department: 'Finance', salary: 76000, status: 'Active' },
  { id: 26, name: 'Zoe Wright', department: 'Engineering', salary: 84000, status: 'Active' },
  { id: 27, name: 'Adam Lopez', department: 'Marketing', salary: 63000, status: 'Inactive' },
  { id: 28, name: 'Beth Hill', department: 'HR', salary: 58000, status: 'Active' },
  { id: 29, name: 'Carl Green', department: 'Finance', salary: 70000, status: 'Active' },
  { id: 30, name: 'Diana Adams', department: 'Engineering', salary: 77000, status: 'Active' },
];

const PaginationBugTest = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(20); // Start with 20 to test the bug
  const [data, setData] = useState(testData.slice(0, rowsPerPage));
  const [totalPages, setTotalPages] = useState(Math.ceil(testData.length / rowsPerPage));
  const tableRef = useRef<HTMLTdsTableElement>(null);

  const updateData = useCallback(() => {
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const updatedData = testData.slice(startIndex, endIndex);
    const newTotalPages = Math.ceil(testData.length / rowsPerPage);
    setData(updatedData);
    setTotalPages(newTotalPages);
  }, [page, rowsPerPage]);

  useEffect(() => {
    updateData();
  }, [updateData]);

  const handlePaginationEvent = (event: any) => {
    console.log('Pagination event:', event.detail);
    setPage(event.detail.paginationValue);
    setRowsPerPage(event.detail.rowsPerPage);
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h4>Table Pagination Bug Test (Beta 1.40.0)</h4>
      <p>
        <strong>Testing:</strong> Custom rowsPerPageValues [20, 40, 60] - The bug causes the table
        to reset to 10 rows internally when navigating between pages, even though the dropdown shows
        the correct value.
      </p>
      <div
        style={{
          marginBottom: '1rem',
          padding: '1rem',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px',
        }}
      >
        <p>
          <strong>Current State:</strong>
        </p>
        <p>
          Page: {page} | Rows per page: {rowsPerPage} | Total pages: {totalPages}
        </p>
        <p>
          Showing rows {(page - 1) * rowsPerPage + 1} to{' '}
          {Math.min(page * rowsPerPage, testData.length)} of {testData.length}
        </p>
      </div>

      <TdsTable tableId="pagination-bug-test" ref={tableRef} responsive noMinWidth>
        <TdsTableHeader>
          <TdsHeaderCell cellKey="id" cellValue="ID"></TdsHeaderCell>
          <TdsHeaderCell cellKey="name" cellValue="Name"></TdsHeaderCell>
          <TdsHeaderCell cellKey="department" cellValue="Department"></TdsHeaderCell>
          <TdsHeaderCell cellKey="salary" cellValue="Salary" textAlign="right"></TdsHeaderCell>
          <TdsHeaderCell cellKey="status" cellValue="Status"></TdsHeaderCell>
        </TdsTableHeader>
        <TdsTableBody>
          {data.map((row) => (
            <TdsTableBodyRow key={row.id}>
              <TdsBodyCell cellKey="id">{row.id}</TdsBodyCell>
              <TdsBodyCell cellKey="name">{row.name}</TdsBodyCell>
              <TdsBodyCell cellKey="department">{row.department}</TdsBodyCell>
              <TdsBodyCell cellKey="salary" textAlign="right">
                ${row.salary.toLocaleString()}
              </TdsBodyCell>
              <TdsBodyCell cellKey="status">{row.status}</TdsBodyCell>
            </TdsTableBodyRow>
          ))}
        </TdsTableBody>
        <TdsTableFooter
          rowsPerPageValues={[20, 40, 60]} // Custom values to test the bug
          onTdsPagination={handlePaginationEvent}
          pagination
          pages={totalPages}
        ></TdsTableFooter>
      </TdsTable>

      <div
        style={{
          marginTop: '1rem',
          padding: '1rem',
          backgroundColor: '#e8f4fd',
          borderRadius: '4px',
        }}
      >
        <h5>How to test the bug:</h5>
        <ol>
          <li>Change the "Rows per page" dropdown to 40 or 60</li>
          <li>Navigate to page 2 or 3</li>
          <li>Check if the actual number of rows displayed matches the selected value</li>
          <li>Look at the console logs to see the pagination events</li>
          <li>Verify that the state display above shows the correct values</li>
        </ol>
        <p>
          <strong>Expected behavior (after fix):</strong> The table should maintain the selected
          rows per page value when navigating between pages.
        </p>
        <p>
          <strong>Bug behavior:</strong> The dropdown shows the correct value, but internally resets
          to 10 rows, causing a mismatch.
        </p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <article>
      <h3>About this page</h3>
      <p>
        This page is a testing ground and demo for using @scania/tegel-react in a React application.
      </p>

      <PaginationBugTest />
    </article>
  );
};

export default About;
