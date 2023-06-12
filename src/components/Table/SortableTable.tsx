interface SortableTableProps {
    cancelEvent?: boolean,
}


const SortableTable = ({cancelEvent}: SortableTableProps) => {
 return(
    <tds-table
    ref={(element) => element?.addEventListener('tdsSortChange', (event) => {
        if(cancelEvent){
            event?.preventDefault()
        }
    })}
    no-min-width
    enable-responsive
    vertical-dividers="false"
    compact-design="false"
  >
    <tds-table-toolbar table-title="Sorting"></tds-table-toolbar>
    <tds-table-header>
      <tds-header-cell
        column-key="truck"
        column-title="Truck type"
        sortable
      ></tds-header-cell>
      <tds-header-cell
        column-key="driver"
        column-title="Driver name"
        sortable
      ></tds-header-cell>
      <tds-header-cell
        column-key="country"
        column-title="Country"
        sortable
      ></tds-header-cell>
      <tds-header-cell
        column-key="mileage"
        column-title="Mileage"
        sortable
        text-align="right"
      ></tds-header-cell>
    </tds-table-header>
    <tds-table-body enable-dummy-data></tds-table-body>
  </tds-table>
 );
};

export default SortableTable;
