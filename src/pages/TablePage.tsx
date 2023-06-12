import BasicTable from "../components/BasicTable";
import BatchActionTable from "../components/BatchActionTable";

const TablePage = () => {
  return (
    <div>
      <div className="tds-headline-02 tds-u-pb1">Basic Table</div>
      <p>This Table uses the <code>enable-resposive</code> and <code>no-min-with</code> props.</p>
      <BasicTable/>
      <div className="tds-headline-02 tds-u-pb1 tds-u-pt3">Batch Actions</div>
      <p>This Table uses batch actions in order to get data out of the table.  </p>
      <BatchActionTable/>
    </div>
  );
};

export default TablePage;
