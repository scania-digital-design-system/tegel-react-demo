import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import ModeSwitcher from "./components/ModeSwitcher";
import Footer from "./components/Footer";


function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;
  
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    
  return (
    <div className={`App sdds-mode-${mode}`}>
      <Header />
      <ModeSwitcher mode={mode} setMode={setMode} />
      <main className={`${(splitLocation[1] === "side-menu" ? 'side-menu-page':'')}`}>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
