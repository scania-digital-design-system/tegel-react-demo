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
          <div className="sdds-headline-02 sdds-u-pb1">Accordion</div>
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
          <div className="sdds-headline-02 sdds-u-pb1">Banner</div>
          <sdds-banner
            icon="truck"
            header="This is a header text area"
            subheader="SubHeader text area"
            link-text="Learn more"
            href="tegel.scania.com"
            link-target="_self"
          ></sdds-banner>
        </div>
        <div>
          <div className="sdds-headline-02 sdds-u-pb1">Block</div>
          <sdds-block>
            <div className="sdds-headline-01">Headline</div>
            <p className="sdds-body-01">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              condimentum nisi ut eleifend ultrices. Nunc venenatis maximus
              sapien, ac bibendum nisl aliquam in. Morbi ac velit et ligula
              consectetur interdum. Vestibulum condimentum, augue vitae lobortis
              rhoncus, mi est ultricies mi, sed tincidunt magna nibh in lectus.
              Pellentesque vel vulputate orci, vel lacinia orci. Sed suscipit
              leo at diam ullamcorper, vitae volutpat neque dapibus. Maecenas
              sit amet rhoncus arcu. Sed sed molestie elit. Nullam in interdum
              est, vitae aliquam ipsum. Nunc rutrum nibh ut arcu egestas
              egestas.
            </p>
            <sdds-block>
              <div className="sdds-headline-01">Headline</div>
              <p className="sdds-body-01">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                condimentum nisi ut eleifend ultrices. Nunc venenatis maximus
                sapien, ac bibendum nisl aliquam in. Morbi ac velit et ligula
                consectetur interdum. Vestibulum condimentum, augue vitae
                lobortis rhoncus, mi est ultricies mi, sed tincidunt magna nibh
                in lectus. Pellentesque vel vulputate orci, vel lacinia orci.
                Sed suscipit leo at diam ullamcorper, vitae volutpat neque
                dapibus. Maecenas sit amet rhoncus arcu. Sed sed molestie elit.
                Nullam in interdum est, vitae aliquam ipsum. Nunc rutrum nibh ut
                arcu egestas egestas.
              </p>
            </sdds-block>
          </sdds-block>
        </div>
        <div>
          <div className="sdds-headline-02 sdds-u-pb1">Checkbox</div>
          <sdds-checkbox>Checkbox</sdds-checkbox>
        </div>
      </main>
    </div>
  );
}

export default App;
