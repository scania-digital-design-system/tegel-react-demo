import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { capitalizeFirst } from '../utility';

interface ModeVariantSwitcherProps {
  mode: 'on' | 'off';
  setMode: Dispatch<SetStateAction<'on' | 'off'>>;
}
const ModeVariantSwitcher = ({ mode, setMode }: ModeVariantSwitcherProps) => {
  const toggleRef = useRef<HTMLTdsToggleElement>(null);

  useEffect(() => {
    const toggleElement = toggleRef.current;
    toggleElement?.addEventListener('tdsToggle', () => {
      setMode(mode === 'on' ? 'off' : 'on');
    });

    return () => {
      toggleElement?.removeEventListener('tdsToggle', () => {
        setMode(mode === 'on' ? 'off' : 'on');
      });
    };
  });
  return (
    <div className="mode-switcher">
      <tds-toggle size='sm' headline='Primary variant' checked ref={toggleRef}>
        <div slot="label">{capitalizeFirst(mode)}</div>
      </tds-toggle>
    </div>
  );
};

export default ModeVariantSwitcher;
