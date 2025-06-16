import { TdsBlock, TdsDivider, TdsModal, TdsTextarea, TdsTextField } from '@scania/tegel-react';
import ModeSwitcher from '../components/ModeSwitcher';
import { useState } from 'react';

const About = () => {
  const [lightMode, setLightMode] = useState<'on' | 'off'>('on');

  return (
    <div className={`tds-mode-${lightMode === 'on' ? 'light' : 'dark'}`}>
      <TdsModal show>
        <span slot="body">
          <ModeSwitcher mode={lightMode} setMode={setLightMode} />
          <br />
          <br />
          text-field:
          <TdsTextField placeholder="primary" modeVariant="primary"></TdsTextField>
          <TdsTextField placeholder="secondary" modeVariant="secondary"></TdsTextField>
          <br />
          textarea:
          <TdsTextarea placeholder="primary" modeVariant="primary"></TdsTextarea>
          <TdsTextarea placeholder="secondary" modeVariant="secondary"></TdsTextarea>
          <br />
          <br />
          block:
          <TdsBlock modeVariant="primary">primary</TdsBlock>
          <TdsBlock modeVariant="secondary">secondary</TdsBlock>
        </span>
      </TdsModal>
    </div>
  );
};

export default About;
