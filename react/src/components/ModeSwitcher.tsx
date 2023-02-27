import { Dispatch, SetStateAction } from "react";

interface ModeSwitcherProps {
    mode: "light" | "dark";
    setMode: Dispatch<SetStateAction<"light" | "dark">>;
  }

const ModeSwitcher = ({mode, setMode}: ModeSwitcherProps) => {
  return (
    <div className="mode-switcher">
        <sdds-toggle onClick={() => setMode(mode === "light" ? "dark" : "light")}>Dark/Light mode</sdds-toggle>
    </div>
  );
};

export default ModeSwitcher;
