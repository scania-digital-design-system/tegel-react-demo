/* eslint-disable jsx-a11y/anchor-is-valid */
import DataTable from "../components/DataTable";
export default function WebComponents() {
  return (
    <>
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
        <div className="sdds-headline-02 sdds-u-pb1">Badge</div>
        <sdds-badges value="1" size="lg"></sdds-badges>
      </div>
      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Banner</div>
        <div className="sdds-mode-dark">
          <sdds-banner
            icon="error"
            header="This is a header text area"
            subheader="SubHeader text area"
            link-text="Learn more"
            href="tegel.scania.com"
            link-target="_self"
            type="error"
          ></sdds-banner>
          <sdds-banner
            icon="info"
            header="This is a header text area"
            subheader="SubHeader text area"
            link-text="Learn more"
            href="tegel.scania.com"
            link-target="_self"
            type="information"
          ></sdds-banner>
          <sdds-banner
            icon="truck"
            header="This is a header text area"
            subheader="SubHeader text area"
            link-text="Learn more"
            href="tegel.scania.com"
            link-target="_self"
          ></sdds-banner>
        </div>
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
            Pellentesque vel vulputate orci, vel lacinia orci. Sed suscipit leo
            at diam ullamcorper, vitae volutpat neque dapibus. Maecenas sit amet
            rhoncus arcu. Sed sed molestie elit. Nullam in interdum est, vitae
            aliquam ipsum. Nunc rutrum nibh ut arcu egestas egestas.
          </p>
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
        </sdds-block>
      </div>
      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Breadcrumbs</div>
        <sdds-breadcrumb>
          <sdds-breadcrumb-link href="#">Step one</sdds-breadcrumb-link>
          <sdds-breadcrumb-link href="www.google.se">
            Step two
          </sdds-breadcrumb-link>
          <sdds-breadcrumb-link current={true}>
            Current page
          </sdds-breadcrumb-link>
        </sdds-breadcrumb>
      </div>
      <div className="sdds-u-w-100">
        <div className="sdds-headline-02 sdds-u-pb1">Buttons</div>
        <sdds-button
          type="primary"
          size="lg"
          fullbleed
          text="Primary fullbleed button"
        ></sdds-button>
        <div
          className="sdds-u-mt2 sdds-u-flex"
          style={{ justifyContent: "space-around" }}
        >
          <sdds-button type="danger" size="sm" text="Delete file">
            <sdds-icon
              slot="icon"
              className="sdds-btn-icon"
              size="16px"
              name="document_wrong"
            ></sdds-icon>
          </sdds-button>
          <span></span>
          <sdds-button type="ghost" size="md" text="">
            <sdds-icon
              slot="icon"
              className="sdds-btn-icon"
              size="20px"
              name="trash"
            ></sdds-icon>
          </sdds-button>
        </div>
      </div>
      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Card</div>
        <sdds-card
          header="Card title"
          header-placement="below"
          subheader="Subheader text"
          header-img="https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80  "
          body-img="https://images.unsplash.com/photo-1670509295484-df0c2512fec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5494&q=80"
          clickable
        >
          <div slot="card-body">Here is a short description in body text</div>
          <div slot="card-bottom">
            <sdds-icon
              style={{ fontSize: "20px" }}
              name="arrow_right"
            ></sdds-icon>
          </div>
        </sdds-card>
      </div>
      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Checkbox</div>
        <sdds-checkbox>Checkbox</sdds-checkbox>
      </div>

      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Data table</div>
        <DataTable />
      </div>
      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Datetime</div>
        <sdds-datetime
          id="datetime"
          type="datetime-local"
          state="none"
          label="Label text"
          helper="Helper text"
        ></sdds-datetime>
      </div>

      <div className="sdds-headline-02 sdds-u-pb1">Dropdown</div>
      <div className="sdds-headline-04 sdds-u-pb1">Default</div>
      <sdds-dropdown
        id="sdds-dropdown-reg"
        size="lg"
        placeholder="Placeholder"
        disabled={false}
        open-direction="auto"
        label-position="no-default"
        type="default"
        default-option="option-1"
      >
        <sdds-dropdown-option value="option-1" tabIndex={0} disabled>
          Option 1
        </sdds-dropdown-option>
        <sdds-dropdown-option value="option-2" tabIndex={0}>
          Option 2
        </sdds-dropdown-option>
        <sdds-dropdown-option value="option-3" tabIndex={0}>
          Option 3
        </sdds-dropdown-option>
      </sdds-dropdown>
      <div className="sdds-headline-04 sdds-u-pb1">Multiselect</div>
      <sdds-dropdown
        id="sdds-dropdown-reg"
        size="lg"
        placeholder="Placeholder"
        disabled={false}
        open-direction="auto"
        label-position="no-default"
        type="multiselect"
        default-option="option-1"
      >
        <sdds-dropdown-option value="option-1" tabIndex={0} disabled>
          Option 1
        </sdds-dropdown-option>
        <sdds-dropdown-option value="option-2" tabIndex={0}>
          Option 2
        </sdds-dropdown-option>
        <sdds-dropdown-option value="option-3" tabIndex={0}>
          Option 3
        </sdds-dropdown-option>
      </sdds-dropdown>
      <div className="sdds-headline-04 sdds-u-pb1">Filter</div>

      <sdds-dropdown-filter
        id="sdds-dropdown-filter"
        size="lg"
        placeholder="Placeholder"
        open-direction="auto"
        label-position="no-label"
        data='[
              {
                "value": "option-1",
                "label":"Jakarta"
              },
              {
                "value":"option-2"
                ,"label":"Stockholm"
              },
              {
                "value":"option-3",
                "label":"Barcelona"
              }
            ]'
        default-option="option-1"
      ></sdds-dropdown-filter>

      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Link</div>
        <sdds-link href="#" target="_self">
          This is a link.
        </sdds-link>
      </div>

      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Message</div>
        <sdds-message
          type="information"
          header="Message header"
          mode-variant="inherit from parent"
        >
          Longer message text can be placed here. Longer message text can be
          placed here.
        </sdds-message>
      </div>

      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Modal</div>
        <sdds-button id="my-modal-button" text="Open modal"></sdds-button>
        <sdds-modal
          selector="#my-modal-button"
          prevent
          id="my-modal"
          size="lg"
          actions="static"
        >
          <h5 className="sdds-modal-headline" slot="sdds-modal-headline">
            The buttons for the modal only works in the canvas tab
          </h5>
          <span slot="sdds-modal-body">
            The steps fell lightly and oddly, with a certain swing, for all they
            went so slowly; it was different indeed from the heavy creaking
            tread of Henry Jekyll. Utterson sighed. “Is there never anything
            else?” he asked.
          </span>
          <button
            slot="sdds-modal-actions"
            className="sdds-btn sdds-btn-danger sdds-btn-md"
            data-dismiss-modal
          >
            Delete
          </button>
          <button
            slot="sdds-modal-actions"
            className="sdds-btn sdds-btn-secondary sdds-btn-md"
            data-dismiss-modal
          >
            Cancel
          </button>
        </sdds-modal>
      </div>

      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Radio Button</div>
        <sdds-radio-button
          name="rb-example"
          value="option1"
          radio-id="option-1"
          checked
        >
          Label text 1
        </sdds-radio-button>

        <sdds-radio-button
          name="rb-example"
          value="option2"
          radio-id="option-2"
        >
          Label text 2
        </sdds-radio-button>
      </div>

      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Popover</div>
        <div className="sdds-headline-03 sdds-u-pb1">Canvas</div>

        <div className="popover-container">
          <sdds-button
            aria-label="menu"
            only-icon
            id="trigger"
            type="ghost"
            size="sm"
          >
            <sdds-icon
              slot="icon"
              className="sdds-btn-icon"
              size="16px"
              name="kebab"
            ></sdds-icon>
          </sdds-button>
        </div>
        <sdds-popover-canvas
          placement="auto"
          selector="#trigger"
          className="sdds-u-p2"
        >
          <h2>A popover canvas!</h2>
          <p>Where you can put anything you want!</p>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://digitaldesign.scania.com"
            >
              Even links!
            </a>
          </p>
        </sdds-popover-canvas>

        <div className="sdds-headline-03 sdds-u-pb1">Menu</div>

        <div className="popover-container">
          <sdds-button
            aria-label="menu"
            only-icon
            id="my-popover-button"
            type="ghost"
            size="sm"
          >
            <sdds-icon
              slot="icon"
              className="sdds-btn-icon"
              size="16px"
              name="kebab"
            ></sdds-icon>
          </sdds-button>
        </div>
        <sdds-popover-menu
          selector="#my-popover-button"
          placement="auto"
          id="my-popover-menu"
        >
          <ul className="sdds-popover-menu-wrapper">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://digitaldesign.scania.com"
              >
                <i>
                  <sdds-icon name="save" size="16px"></sdds-icon>
                </i>
                Menu item 1
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://digitaldesign.scania.com"
              >
                <i>
                  <sdds-icon name="save" size="16px"></sdds-icon>
                </i>
                Menu item 2
              </a>
            </li>
            <li className="divider"></li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://digitaldesign.scania.com"
              >
                <i>
                  <sdds-icon name="save" size="16px"></sdds-icon>
                </i>
                Menu item 4
              </a>
            </li>
          </ul>
        </sdds-popover-menu>
      </div>

      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Slider</div>
        <sdds-slider
          id="sdds-slider"
          min="0"
          max="100"
          value="50"
          tooltip
          label="Test label"
          ticks="4"
          controls
          show-tick-numbers
        ></sdds-slider>
      </div>
      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Spinner</div>
        <div className="sdds-headline-03 sdds-u-pb1">Standard</div>

        <sdds-spinner variant="standard"></sdds-spinner>
        <div className="sdds-headline-03 sdds-u-pb1">Inverted</div>

        <sdds-spinner variant="inverted"></sdds-spinner>
      </div>

      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Stepper</div>
        <sdds-stepper size="lg" label-position="below" direction="horizontal">
          <sdds-stepper-item state="success" label-text="Step label">
            1
          </sdds-stepper-item>
          <sdds-stepper-item state="error" label-text="Step label">
            2
          </sdds-stepper-item>
          <sdds-stepper-item label-text="Step inactive with text">
            3
          </sdds-stepper-item>
          <sdds-stepper-item label-text="Step label">4</sdds-stepper-item>
        </sdds-stepper>
      </div>

      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Tabs</div>
        <div className="sdds-headline-03 sdds-u-pb3 sdds-u-pt3">Folder</div>

        <sdds-folder-tabs>
          <sdds-folder-tabs-button>First tab</sdds-folder-tabs-button>
          <sdds-folder-tabs-button>
            Second tab is much longer
          </sdds-folder-tabs-button>
          <sdds-folder-tabs-button selected>Third tab</sdds-folder-tabs-button>
          <sdds-folder-tabs-button disabled>Fourth tab</sdds-folder-tabs-button>
        </sdds-folder-tabs>
        <div className="sdds-headline-03 sdds-u-pb3 sdds-u-pt3">Inline</div>
        <sdds-inline-tabs>
          <sdds-inline-tabs-link href="#">First tab</sdds-inline-tabs-link>
          <sdds-inline-tabs-link href="#">
            Second tab is longer
          </sdds-inline-tabs-link>
          <sdds-inline-tabs-link selected href="#">
            Third tab
          </sdds-inline-tabs-link>
          <sdds-inline-tabs-link disabled href="#">
            Fourth tab
          </sdds-inline-tabs-link>
        </sdds-inline-tabs>
        <div className="sdds-headline-03 sdds-u-pb3 sdds-u-pt3">Navigation</div>
        <sdds-navigation-tabs>
          <sdds-navigation-tabs-link selected href="#">
            First tab
          </sdds-navigation-tabs-link>
          <sdds-navigation-tabs-link href="#">
            Second tab
          </sdds-navigation-tabs-link>
          <sdds-navigation-tabs-link href="#">
            Third tab
          </sdds-navigation-tabs-link>
          <sdds-navigation-tabs-link href="#" disabled>
            Fourth tab
          </sdds-navigation-tabs-link>
        </sdds-navigation-tabs>
      </div>

      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Textarea</div>
        <sdds-textarea
          rows={4}
          state="error"
          label="Hello label"
          helper="Good guess, but wrong answer buddy"
          label-position="outside"
          placeholder="Placeholder test"
        ></sdds-textarea>
      </div>

      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Text fields</div>
        <div className="sdds-headline-04 sdds-u-pb1">Standard medium size</div>
        <sdds-textfield size="md" placeholder="Placeholder"></sdds-textfield>
      </div>
      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Toast</div>
        <sdds-toast type="success" header="Header">
          <div slot="toast-subheader">Longer message</div>
        </sdds-toast>
      </div>
      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Toggle</div>
        <sdds-toggle headline="Headline" size="lg">
          <div slot="label">Label</div>
        </sdds-toggle>
      </div>
      <div>
        <div className="sdds-headline-02 sdds-u-pb1">Tooltip</div>
        <div className="tooltip-container">
          <sdds-tooltip
            placement="bottom"
            selector="#button-1"
            text="Text inside tooltip"
            mouse-over-tooltip="true"
          >
            <p className="sdds-detail-05 sdds-u-m0 tooltip-paragraph">
              Paragraph tag inside of Tooltip with
              <b>bold</b>
              and
              <i>italic</i>
              tags too.
            </p>
          </sdds-tooltip>

          <sdds-button size="sm" id="button-1" text="Hover me"></sdds-button>
        </div>
      </div>
    </>
  );
}
