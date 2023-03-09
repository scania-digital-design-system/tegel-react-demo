import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import ModeSwitcher from "./components/ModeSwitcher";
import Footer from "./components/Footer";
import SideMenu from "./pages/SideMenu";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  return (
    <div className={`App sdds-mode-${mode}`}>
      <Header />
      <ModeSwitcher mode={mode} setMode={setMode} />
      <div className="container">
        <SideMenu />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
