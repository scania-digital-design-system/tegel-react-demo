import AgGridColumnSearch from '../components/AgGrid/AgGridColumnSearch';
import AgGridEditableCells from '../components/AgGrid/AgGridEditableCells';

const AgGridPage = () => {
  return (
    <div>
      <div
        className={`tds-mode-variant-primary`}
        style={{
          width: '100%',
          height: '500px',
          padding: '20px',
          paddingTop: '10px',
          marginBottom: '100px',
        }}
      >
        <h4>Primary mode variant</h4>
        <AgGridColumnSearch />
      </div>

      <div
        className={`tds-mode-variant-secondary`}
        style={{
          width: '100%',
          height: '500px',
          padding: '20px',
          paddingTop: '10px',
          paddingBottom: '100px',
        }}
      >
        <h4>Secondary mode variant</h4>
        <AgGridEditableCells />
      </div>
    </div>
  );
};

export default AgGridPage;
