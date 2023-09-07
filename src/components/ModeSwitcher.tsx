import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { capitalizeFirst } from '../utility';

interface ModeSwitcherProps {
  mode: 'on' | 'off';
  setMode: Dispatch<SetStateAction<'on' | 'off'>>;
}
const ModeSwitcher = ({ mode, setMode }: ModeSwitcherProps) => {
  const toggleRef = useRef<HTMLTdsToggleElement>(null);

  useEffect(() => {
    const toggleEl = toggleRef.current as HTMLTdsToggleElement;

    const toggleMode = (event: TdsToggleEvent) => {
      setMode(event.detail.checked ? 'on' : 'off');
    };

    toggleEl.addEventListener('tdsToggle', toggleMode);

    return () => {
      toggleEl.removeEventListener('tdsToggle', toggleMode);
    };
  }, [setMode]);

  return (
    <div className="mode-switcher">
      <tds-toggle checked headline='Light mode' ref={toggleRef}>
        <div slot="label">{capitalizeFirst(mode)}</div>
      </tds-toggle>
    </div>
  );
};

export default ModeSwitcher;
