import BasicTable from "../../components/Table/BasicTable";
import BatchActionTable from "../../components/Table/BatchActionTable";
import ExpandTable from "../../components/Table/ExpandTable";
import PaginationTable from "../../components/Table/PaginationTable";
import SortableTable from "../../components/Table/SortableTable";
import FilterTable from "../../components/Table/FilterTable";
import ZebraTable from "../../components/Table/ZebraTable";
const TablePage = () => {
	return (
		<div>
			<section aria-label="basic" style={{ height: "auto" }}>
				<h2 className="tds-headline-02 tds-u-pb1">Basic Table</h2>
				<p>This is a basic Table implementation.</p>
				<BasicTable />
			</section>

			<section aria-label="batch" style={{ height: "auto" }}>
				<h2 className="tds-headline-02 tds-u-pb1 tds-u-pt3">Batch Actions</h2>
				<p>
					This Table uses the batch actions slot and multiselect in order to get data out of the
					table.
				</p>
				<BatchActionTable />
			</section>

			<section aria-label="sortable" style={{ height: "auto" }}>
				<h2 className="tds-headline-02 tds-u-pb1 tds-u-pt3">Sortable Table</h2>
				<p>This Table is sortable.</p>
				<SortableTable />
			</section>

			<section aria-label="filter" style={{ height: "auto" }}>
				<h2 className="tds-headline-02 tds-u-pb1 tds-u-pt3">Filter Table</h2>
				<p>This Table can be filtered.</p>
				<FilterTable />
			</section>

			<section aria-label="expandable" style={{ height: "auto" }}>
				<h2 className="tds-headline-02 tds-u-pb1 tds-u-pt3">Expandable Rows</h2>
				<p>This Table uses expandable rows.</p>
				<ExpandTable />
			</section>

			<section aria-label="pagination" style={{ height: "auto" }}>
				<h2 className="tds-headline-02 tds-u-pb1 tds-u-pt3">Pagination</h2>
				<p>This Table uses pagination.</p>
				<PaginationTable />
			</section>

			<section aria-label="zebra" style={{ height: "auto" }}>
				<h2 className="tds-headline-02 tds-u-pb1 tds-u-pt3">Zebra Table</h2>
				<ZebraTable />
			</section>
		</div>
	);
};

export default TablePage;
