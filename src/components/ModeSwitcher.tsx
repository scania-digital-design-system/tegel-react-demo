import { Dispatch, SetStateAction } from 'react';
import {
  TdsToggle
} from "@scania/tegel-react";
import { capitalizeFirst } from '../utility';

interface ModeSwitcherProps {
  mode: 'on' | 'off';
  setMode: Dispatch<SetStateAction<'on' | 'off'>>;
}
const ModeSwitcher = ({ mode, setMode }: ModeSwitcherProps) => {

  const toggleMode = (event: any) => {
    setMode(event.detail.checked ? 'on' : 'off');
  };

  return (
    <div className="mode-switcher">
      <TdsToggle size='sm' checked={mode === "on"} headline='Light mode' onTdsToggle={toggleMode}>
        <div slot="label">{capitalizeFirst(mode)}</div>
      </TdsToggle>
    </div>
  );
};

export default ModeSwitcher;
