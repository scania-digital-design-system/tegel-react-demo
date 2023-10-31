import { Dispatch, SetStateAction } from 'react';
import { capitalizeFirst } from '../utility';
import { TdsToggle } from '@scania/tegel-react';

interface ModeVariantSwitcherProps {
  modeVariant: 'on' | 'off';
  setModeVariant: Dispatch<SetStateAction<'on' | 'off'>>;
}
const ModeVariantSwitcher = ({ modeVariant, setModeVariant }: ModeVariantSwitcherProps) => {
  const toggleModeVariant = (event: any) => {
    setModeVariant(modeVariant === 'on' ? 'off' : 'on');
  };

  return (
    <div className="mode-switcher">
      <TdsToggle
        size="sm"
        headline="Primary variant"
        checked={modeVariant === 'on'}
        onTdsToggle={toggleModeVariant}
      >
        <div slot="label">{capitalizeFirst(modeVariant)}</div>
      </TdsToggle>
    </div>
  );
};

export default ModeVariantSwitcher;
