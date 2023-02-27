import { useState } from "react";
import Header from "./components/Header";
import ModeSwitcher from "./components/ModeSwitcher";

function App() {
  const [ mode, setMode] = useState<'light' | 'dark'>('light')
  return (
    <div className={`App sdds-mode-${mode}`}>
      <Header/>
      <ModeSwitcher  mode={mode} setMode={setMode} />
      <main>
        {/* COMPONENTS GO HERE */}
      </main>
    </div>
  );
}

export default App;
