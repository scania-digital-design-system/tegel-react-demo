import { Dispatch, SetStateAction } from "react";

interface ModeSwitcherProps {
    mode: "light" | "dark";
    setMode: Dispatch<SetStateAction<"light" | "dark">>;
  }

const ModeSwitcher = ({mode, setMode}: ModeSwitcherProps) => {
  return (
    <div className="mode-switcher">
        {/* THIS SHOULD USE SDDSONCHANGE WHEN IT HAS BEEN RELEASED */}
        <sdds-toggle onClick={() => setMode(mode === "light" ? "dark" : "light")}>Dark/Light mode</sdds-toggle>
    </div>
  );
};

export default ModeSwitcher;
