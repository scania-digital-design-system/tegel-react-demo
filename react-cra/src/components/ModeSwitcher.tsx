import { Dispatch, SetStateAction } from "react";

interface ModeSwitcherProps {
  mode: "Light" | "Dark";
  setMode: Dispatch<SetStateAction<"Light" | "Dark">>;
}
const ModeSwitcher = ({ mode, setMode }: ModeSwitcherProps) => {
  return (
    <div className="mode-switcher">
      <sdds-toggle ref={toggle => toggle?.addEventListener('sddsToggle', () => {
        setMode(mode === "Light" ? "Dark" : "Light")
      })}>
        <div slot="label">{mode} mode</div>
      </sdds-toggle>
    </div>
  );
};

export default ModeSwitcher;
