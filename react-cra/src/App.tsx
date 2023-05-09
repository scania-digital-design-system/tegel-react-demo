import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import ModeSwitcher from "./components/ModeSwitcher";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState<"Light" | "Dark">("Light");
  return (
    <div className={`App sdds-mode-${mode.toLowerCase()}`}>
      <Header />
      <ModeSwitcher mode={mode} setMode={setMode} />
      <div className="container">
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
