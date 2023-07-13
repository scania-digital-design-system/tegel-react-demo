const ExpandTable = () => {
  return (
    <tds-table
      enable-expandable-rows
      vertical-dividers="false"
      compact-design="false"
      enable-responsive
      no-min-width
    >
      <tds-table-header>
        <tds-header-cell column-key="truck" column-title="Truck type"></tds-header-cell>
        <tds-header-cell column-key="driver" column-title="Driver name"></tds-header-cell>
        <tds-header-cell column-key="country" column-title="Country"></tds-header-cell>
        <tds-header-cell
          column-key="mileage"
          column-title="Mileage"
          text-align="right"
        ></tds-header-cell>
      </tds-table-header>
      <tds-table-body>
        <tds-table-body-row-expandable>
          <tds-body-cell cell-value="L-series" cell-key="truck"></tds-body-cell>
          <tds-body-cell cell-value="Ferrell Wallace" cell-key="driver"></tds-body-cell>
          <tds-body-cell cell-value="Brazil" cell-key="country"></tds-body-cell>
          <tds-body-cell cell-value="8769" cell-key="mileage"></tds-body-cell>
          <div slot="expand-row">The L-series is great!</div>
        </tds-table-body-row-expandable>
        <tds-table-body-row-expandable>
          <tds-body-cell cell-value="P-series" cell-key="truck"></tds-body-cell>
          <tds-body-cell cell-value="Sonya Bruce" cell-key="driver"></tds-body-cell>
          <tds-body-cell cell-value="Portugal" cell-key="country"></tds-body-cell>
          <tds-body-cell cell-value="789" cell-key="mileage"></tds-body-cell>
          <div slot="expand-row">
            The P-series is a great choice of truck. You can read more about it{' '}
            <tds-link>
              <a href="/">here.</a>
            </tds-link>
          </div>
        </tds-table-body-row-expandable>
        <tds-table-body-row-expandable>
          <tds-body-cell cell-value="M-series" cell-key="truck"></tds-body-cell>
          <tds-body-cell cell-value="Guerra Bowman" cell-key="driver"></tds-body-cell>
          <tds-body-cell cell-value="Sweden" cell-key="country"></tds-body-cell>
          <tds-body-cell cell-value="11551" cell-key="mileage"></tds-body-cell>
          <div className="tds-u-flex" slot="expand-row">
            <p>The M-series is in stock!</p>
            <tds-button
              onClick={() => {
                alert('Your order has been placed!');
              }}
              size="md"
              type="primary"
              text="Order"
            ></tds-button>
          </div>
        </tds-table-body-row-expandable>
      </tds-table-body>
    </tds-table>
  );
};

export default ExpandTable;
