import TanstackColumnFilter from '../../components/Tanstack/column-search/TanstackColumnFilter';
import TanstackEditableCells from '../../components/Tanstack/editable-cells/TanstackEditableCells';

const TanstackPage = () => {
  return (
    <article>
      <div className="tds-headline-01 tds-u-pb3">Tegel & Tanstack</div>
      <div className="tds-headline-03">Column Filter</div>
      <p className="tds-u-pb3">
        Example of Tegel table component with Tanstack column filtering functionality. Click on a
        column header to filter the table.
      </p>
      <TanstackColumnFilter />
      <div className="tds-headline-03">Editable Cells</div>
      <p className="tds-u-pb3">
        Example of Tegel table component with Tanstack cell editing functionality. Click on a cell
        to edit it.
      </p>
      <TanstackEditableCells />
    </article>
  );
};

export default TanstackPage;
