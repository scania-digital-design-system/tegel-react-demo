import { Dispatch, SetStateAction } from "react";

interface ModeSwitcherProps {
  mode: "Light" | "Dark";
  setMode: Dispatch<SetStateAction<"Light" | "Dark">>;
}
const ModeSwitcher = ({ mode, setMode }: ModeSwitcherProps) => {
  return (
    <div className="mode-switcher">
      <tds-toggle ref={toggle => toggle?.addEventListener('tdsToggle', () => {
        setMode(mode === "Light" ? "Dark" : "Light")
      })}>
        <div slot="label">{mode} mode</div>
      </tds-toggle>
    </div>
  );
};

export default ModeSwitcher;
