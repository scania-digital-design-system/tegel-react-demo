import BasicTable from '../components/Table/BasicTable';
import BatchActionTable from '../components/Table/BatchActionTable';
import ExpandTable from '../components/Table/ExpandTable';
import PaginationTable from '../components/Table/PaginationTable';
import SortableTable from '../components/Table/SortableTable';
import FilterTable from '../components/Table/FilterTable';
import { TdsCard } from '@scania/tegel-react';
import ZebraTable from '../components/Table/ZebraTable';

const TablePage = () => {
  return (
    <div>
      <TdsCard
        header="Card"
        clickable
        subheader="Simple Card"
        cardId="test-card"
        onTdsClick={(event) => console.log(event.detail.cardId)}
      >
        TESTING
      </TdsCard>
      <div className="tds-headline-02 tds-u-pb1">Basic Table</div>
      <p>This is a basic Table implementation.</p>
      <BasicTable />
      <div className="tds-headline-02 tds-u-pb1 tds-u-pt3">Batch Actions</div>
      <p>
        This Table uses the batch actions slot and multiselect in order to get data out of the
        table.
      </p>

      <BatchActionTable />
      <div className="tds-headline-02 tds-u-pb1 tds-u-pt3">Sortable Table</div>
      <p>This Table is sortable.</p>
      <SortableTable />
      <div className="tds-headline-02 tds-u-pb1 tds-u-pt3">Filter Table</div>
      <p>This Table can be filtered.</p>
      <FilterTable />
      <div className="tds-headline-02 tds-u-pb1 tds-u-pt3">Expandable Rows</div>
      <p>This Table uses expandable rows.</p>
      <ExpandTable />
      <div className="tds-headline-02 tds-u-pb1 tds-u-pt3">Pagination</div>
      <p>This Table uses pagination.</p>
      <PaginationTable />
      <div className="tds-headline-02 tds-u-pb1 tds-u-pt3">Zebra Table</div>

      <ZebraTable />
    </div>
  );
};

export default TablePage;
