import { TdsToggleCustomEvent } from '@scania/tegel';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

type TdsToggleEvent = TdsToggleCustomEvent<{
  toggleId: string;
  checked: boolean;
}>;

interface ModeSwitcherProps {
  mode: 'Light' | 'Dark';
  setMode: Dispatch<SetStateAction<'Light' | 'Dark'>>;
}
const ModeSwitcher = ({ mode, setMode }: ModeSwitcherProps) => {
  const toggleRef = useRef<HTMLTdsToggleElement>(null);

  useEffect(() => {
    const toggleEl = toggleRef.current as HTMLTdsToggleElement;

    const toggleMode = (event: Event) => {
      const toggleEvent = event as TdsToggleEvent;

      setMode(toggleEvent.detail.checked ? 'Dark' : 'Light');
    };

    toggleEl.addEventListener('tdsToggle', toggleMode);

    return () => {
      toggleEl.removeEventListener('tdsToggle', toggleMode);
    };
  }, [setMode]);

  return (
    <div className="mode-switcher">
      <tds-toggle ref={toggleRef}>
        <div slot="label">{mode} mode</div>
      </tds-toggle>
    </div>
  );
};

export default ModeSwitcher;
