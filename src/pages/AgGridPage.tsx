import AgGridColumnSearch from '../components/AgGrid/AgGridColumnSearch';
import AgGridEditableCells from '../components/AgGrid/AgGridEditableCells';
import { useState } from 'react';
import { TdsDivider, TdsToggle } from '@scania/tegel-react';

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
        <TdsToggle
          onTdsToggle={toggleMode}
          headline="Toggle compact mode (currently not working)"
          size="sm"
        >
          <div slot="label">{labelText}</div>
        </TdsToggle>
      </div>
      <div
        // className={`ag-theme-quartz tds-mode-variant-secondary ${classCompact ? 'compact' : ''}`}
        // className={`ag-theme-quartz ${classCompact ? 'compact' : ''}`}
        className={`ag-theme-quartz tds-mode-variant-primary ${classCompact ? 'compact' : ''}`}
        style={{ width: '100%', height: '500px' }}
      >
        <h4>Primary mode variant</h4>
        <AgGridColumnSearch />
      </div>

      <div style={{ marginTop: '200px', marginBottom: '50px' }}>
        <TdsDivider />
      </div>

      <div
        className={`ag-theme-quartz tds-mode-variant-secondary ${classCompact ? 'compact' : ''}`}
        style={{ width: '100%', height: '500px' }}
      >
        <h4>Secondary mode variant</h4>
        <AgGridEditableCells />
      </div>

      <div style={{ marginTop: '200px' }}>
        <TdsDivider />
      </div>
    </div>
  );
};

export default AgGridPage;
