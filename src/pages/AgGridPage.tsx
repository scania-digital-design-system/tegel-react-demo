import AgGridColumnSearch from '../components/AgGrid/AgGridColumnSearch';
import AgGridColumnSearchFloating from '../components/AgGrid/AgGridColumnSearchFloating';
import AgGridEditableCells from '../components/AgGrid/AgGridEditableCells';
import { useState } from 'react';
import { TdsToggle } from '@scania/tegel-react';

const AgGridPage = () => {
  const [classCompact, setClassCompact] = useState(false);
  const [labelText, setLabelText] = useState('Default');

  const toggleMode = () => {
    setClassCompact(!classCompact);
    setLabelText(labelText === 'Compact' ? 'Default' : 'Compact');
  };

  return (
    <div>
      <div className="tds-u-pb3">
        <TdsToggle onTdsToggle={toggleMode} headline="Toggle compact mode" size="sm">
          <div slot="label">{labelText}</div>
        </TdsToggle>
      </div>
      <div className="tds-headline-02 tds-u-pb1">AG-Grid Column Search</div>
      <p>This is an implementation of AG-Grid with column search.</p>
      <div
        className={`ag-theme-quartz ${classCompact ? 'compact' : ''}`}
        style={{ width: '100%', height: '500px' }}
      >
        <AgGridColumnSearch />
      </div>
      <div className="tds-headline-02 tds-u-pt3 tds-u-pb1">
        AG-Grid Column Search Floating Filter
      </div>
      <p>
        This is an implementation of AG-Grid with column search, including a floating text input for
        filtering.
      </p>
      <div
        className={`ag-theme-quartz ${classCompact ? 'compact' : ''}`}
        style={{ width: '100%', height: '500px' }}
      >
        <AgGridColumnSearchFloating />
      </div>
      <div className="tds-headline-02 tds-u-pb1 tds-u-pt3">AG-Grid Editable Cells</div>
      <p>This is an implementation of AG-Grid with editable cells.</p>
      <div
        className={`ag-theme-quartz ${classCompact ? 'compact' : ''}`}
        style={{ width: '100%', height: '500px' }}
      >
        <AgGridEditableCells />
      </div>
    </div>
  );
};

export default AgGridPage;
