interface SearchTableProps {
  cancelEvent?: boolean;
}

const SearchTable = ({ cancelEvent }: SearchTableProps) => {
  return (
    <tds-table
      no-min-width
      vertical-dividers="false"
      compact-design="false"
      enable-responsive
      ref={(element) =>
        element?.addEventListener("tdsFilterChange", (event) => {
          if (cancelEvent) {
            event?.preventDefault();
          }
        })
      }
    >
      <tds-table-toolbar
        table-title="Filter"
        enable-filtering
      ></tds-table-toolbar>
      <tds-table-header>
        <tds-header-cell
          column-key="truck"
          column-title="Truck type"
        ></tds-header-cell>
        <tds-header-cell
          column-key="driver"
          column-title="Driver name"
        ></tds-header-cell>
        <tds-header-cell
          column-key="country"
          column-title="Country"
        ></tds-header-cell>
        <tds-header-cell
          column-key="mileage"
          column-title="Mileage"
          text-align="right"
        ></tds-header-cell>
      </tds-table-header>
      <tds-table-body body-data='[{"truck":"L-series","driver":"Sonya Bruce","country":"Brazil","mileage":123987},{"truck":"P-series","driver":"Guerra Bowman","country":"Sweden","mileage":2000852},{"truck":"G-series","driver":"Ferrell Wallace","country":"Germany","mileage":564},{"truck":"R-series","driver":"Cox Burris","country":"Spain","mileage":1789357},{"truck":"S-series","driver":"Montgomery Cervantes","country":"Croatia","mileage":65},{"truck":"L-series","driver":"Sheryl Nielsen","country":"Greece","mileage":365784},{"truck":"G-series","driver":"Benton Gomez","country":"France","mileage":80957}]'></tds-table-body>
    </tds-table>
  );
};

export default SearchTable;
