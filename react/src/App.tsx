import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import ModeSwitcher from "./components/ModeSwitcher";


function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  return (
    <div className={`App sdds-mode-${mode}`}>
      <Header />
      <ModeSwitcher mode={mode} setMode={setMode} />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
