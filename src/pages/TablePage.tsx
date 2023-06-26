import BasicTable from "../components/Table/BasicTable";
import BatchActionTable from "../components/Table/BatchActionTable";
import ExpandTable from "../components/Table/ExpandTable";
import PaginationTable from "../components/Table/PaginationTable";
import SearchTable from "../components/Table/SearchTable";
import SortableTable from "../components/Table/SortableTable";

const TablePage = () => {
  return (
    <div>
      <div className="tds-headline-02 tds-u-pb1">Basic Table</div>
      <p>This Table uses the <code>enable-resposive</code> and <code>no-min-with</code> props.</p>
      <BasicTable/>
      <div className="tds-headline-02 tds-u-pb1 tds-u-pt3">Batch Actions</div>
      <p>This Table uses batch actions in order to get data out of the table.  </p>
      <BatchActionTable/>
      <div className="tds-headline-02 tds-u-pb1 tds-u-pt3">Sortable Table</div>
      <p>This Table is sortable.</p>
      <SortableTable/>
      <p>This Table prevents the default behaviour of the sorting by listening for a <code>tdsSortChange</code> event.</p>
      <SortableTable cancelEvent/>
      <div className="tds-headline-02 tds-u-pb1 tds-u-pt3">Search Table</div>
      <p>This Table is searchable.</p>
      <SearchTable/>
      <p>This Table prevents the default behaviour of the searching by listening for a <code>tdsSearchChange</code> event.</p>
      <SearchTable cancelEvent/>
      <div className="tds-headline-02 tds-u-pb1 tds-u-pt3">Expandable Rows</div>
      <p>This Table uses expandable rows.</p>
      <ExpandTable/>
      <div className="tds-headline-02 tds-u-pb1 tds-u-pt3">Pagination</div>
      <p>This Table uses pagination.</p>
      <PaginationTable/>
      <p>This Table prevents the default pagination and implements it's own logic.</p>
      <PaginationTable customPagination/>
    </div>
  );
};

export default TablePage;
