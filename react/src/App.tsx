import { useState } from "react";
import Header from "./components/Header";
import ModeSwitcher from "./components/ModeSwitcher";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  return (
    <div className={`App sdds-mode-${mode}`}>
      <Header />
      <ModeSwitcher mode={mode} setMode={setMode} />
      <main>
        {/* COMPONENTS GO HERE */}
        <div>
          <div className="sdds-headline-02">Accordion</div>
          <sdds-accordion>
            <sdds-accordion-item header="First item">
              This is the panel, which contains associated information with the
              header. Usually it contains text, set in the same size as the
              header. Lorem ipsum doler sit amet.
            </sdds-accordion-item>
            <sdds-accordion-item header="Second item">
              This is the panel, which contains associated information with the
              header. Usually it contains text, set in the same size as the
              header. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis laoreet vestibulum fermentum.
            </sdds-accordion-item>
          </sdds-accordion>
        </div>
        <div>
          <div className="sdds-headline-02">Banner</div>
          <sdds-banner
            icon="truck"
            header="This is a header text area"
            subheader="SubHeader text area"
            link-text="Learn more"
            href="tegel.scania.com"
            link-target="_self"
          ></sdds-banner>
        </div>
      </main>
    </div>
  );
}

export default App;
