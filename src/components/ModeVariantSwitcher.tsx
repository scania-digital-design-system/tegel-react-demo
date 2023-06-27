import { Dispatch, SetStateAction } from "react";

interface ModeVariantSwitcherProps {
  mode: "Primary" | "Secondary";
  setMode: Dispatch<SetStateAction<"Primary" | "Secondary">>;
}
const ModeVariantSwitcher = ({ mode, setMode }: ModeVariantSwitcherProps) => {
  return (
    <div className="mode-switcher">
      <tds-toggle ref={toggle => toggle?.addEventListener('tdsToggle', () => {
        setMode(mode === "Primary" ? "Secondary" : "Primary")
      })}>
        <div slot="label">{mode} mode variant</div>
      </tds-toggle>
    </div>
  );
};

export default ModeVariantSwitcher;
