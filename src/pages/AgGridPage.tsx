import AgGridColumnSearch from '../components/AgGrid/AgGridColumnSearch';
import AgGridColumnSearchFloating from '../components/AgGrid/AgGridColumnSearchFloating';
import AgGridEditableCells from '../components/AgGrid/AgGridEditableCells';

const AgGridPage = () => {
  return (
    <div>
      <AgGridColumnSearch />
      <AgGridColumnSearchFloating />
      <AgGridEditableCells />
    </div>
  );
};

export default AgGridPage;
