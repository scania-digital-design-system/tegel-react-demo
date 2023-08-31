import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

interface ModeVariantSwitcherProps {
  mode: 'Primary' | 'Secondary';
  setMode: Dispatch<SetStateAction<'Primary' | 'Secondary'>>;
}
const ModeVariantSwitcher = ({ mode, setMode }: ModeVariantSwitcherProps) => {
  const toggleRef = useRef<HTMLTdsToggleElement>(null);

  useEffect(() => {
    const toggleElement = toggleRef.current;
    toggleElement?.addEventListener('tdsToggle', () => {
      setMode(mode === 'Primary' ? 'Secondary' : 'Primary');
    });

    return () => {
      toggleElement?.removeEventListener('tdsToggle', () => {
        setMode(mode === 'Primary' ? 'Secondary' : 'Primary');
      });
    };
  });
  return (
    <div className="mode-switcher">
      <tds-toggle ref={toggleRef}>
        <div slot="label">{mode} mode variant</div>
      </tds-toggle>
    </div>
  );
};

export default ModeVariantSwitcher;
