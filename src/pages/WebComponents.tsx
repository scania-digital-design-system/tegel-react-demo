/* eslint-disable jsx-a11y/anchor-is-valid */
import DataTable from "../components/DataTable";
export default function WebComponents() {
  return (
    <>
      <div>
        <div className="tds-headline-02 tds-u-pb1">Accordion</div>
        <tds-accordion>
          <tds-accordion-item header="First item">
            This is the panel, which contains associated information with the
            header. Usually it contains text, set in the same size as the
            header. Lorem ipsum doler sit amet.
          </tds-accordion-item>
          <tds-accordion-item header="Second item">
            This is the panel, which contains associated information with the
            header. Usually it contains text, set in the same size as the
            header. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Duis laoreet vestibulum fermentum.
          </tds-accordion-item>
        </tds-accordion>
      </div>
      <div>
        <div className="tds-headline-02 tds-u-pb1">Badge</div>
        <tds-badge value="1" size="lg"></tds-badge>
      </div>
      <div>
        <div className="tds-headline-02 tds-u-pb1">Banner</div>
        <tds-banner
          icon="error"
          header="This is a header text area"
          type="error"
        >
          <div slot="banner-subheader">Subheader slot</div>
          <tds-link slot="banner-link">
            <a href="/">Link example</a>
          </tds-link>
        </tds-banner>
        <tds-banner
          icon="info"
          header="This is a header text area"
          type="information"
        >
          <div slot="banner-subheader">Subheader slot</div>
          <tds-link slot="banner-link">
            <a href="/">Link example</a>
          </tds-link>
        </tds-banner>
        <tds-banner icon="truck" header="This is a header text area">
          <div slot="banner-subheader">Subheader slot</div>
          <tds-link slot="banner-link">
            <a href="/">Link example</a>
          </tds-link>
        </tds-banner>
      </div>
      <div>
        <div className="tds-headline-02 tds-u-pb1">Block</div>
        <tds-block>
          <div className="tds-headline-01">Headline</div>
          <p className="tds-body-01">
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
          <tds-block>
            <div className="tds-headline-01">Headline</div>
            <p className="tds-body-01">
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
            <tds-block>
              <div className="tds-headline-01">Headline</div>
              <p className="tds-body-01">
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
            </tds-block>
          </tds-block>
        </tds-block>
      </div>
      <div>
        <div className="tds-headline-02 tds-u-pb1">Breadcrumbs</div>
        <tds-breadcrumb>
          <tds-breadcrumb>
            <a href="#">Page 1</a>
          </tds-breadcrumb>
          <tds-breadcrumb>
            <a href="#">Page 2</a>
          </tds-breadcrumb>
          <tds-breadcrumb current>
            <a href="#">Page 3</a>
          </tds-breadcrumb>
        </tds-breadcrumb>
      </div>
      <div className="tds-u-w-100">
        <div className="tds-headline-02 tds-u-pb1">Buttons</div>
        <tds-button
          type="primary"
          size="lg"
          fullbleed
          text="Primary fullbleed button"
        ></tds-button>
        <div
          className="tds-u-mt2 tds-u-flex"
          style={{ justifyContent: "space-around" }}
        >
          <tds-button type="danger" size="sm" text="Delete file">
            <tds-icon
              slot="icon"
              className="tds-btn-icon"
              size="16px"
              name="document_wrong"
            ></tds-icon>
          </tds-button>
          <span></span>
          <tds-button type="ghost" size="md" text="">
            <tds-icon
              slot="icon"
              className="tds-btn-icon"
              size="20px"
              name="trash"
            ></tds-icon>
          </tds-button>
        </div>
      </div>
      <div>
        <div className="tds-headline-02 tds-u-pb1">Card</div>
        <tds-card
          header="Card title"
          header-placement="below"
          subheader="Subheader text"
          header-img="https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80  "
          body-img="https://images.unsplash.com/photo-1670509295484-df0c2512fec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5494&q=80"
          clickable
        >
          <div slot="card-body">Here is a short description in body text</div>
          <div slot="card-bottom">
            <tds-icon
              style={{ fontSize: "20px" }}
              name="arrow_right"
            ></tds-icon>
          </div>
        </tds-card>
      </div>
      <div>
        <div className="tds-headline-02 tds-u-pb1">Checkbox</div>
        <tds-checkbox value="checkbox-value">
          <div slot="label">Label</div>
        </tds-checkbox>
      </div>
      <div>
        <div className="tds-headline-02 tds-u-pb1">Chip</div>
        <tds-chip type="button" size="lg">
          <span slot="label">Label</span>
        </tds-chip>
      </div>

      <div>
        <div className="tds-headline-02 tds-u-pb1">Data table</div>
        <DataTable />
      </div>
      <div>
        <div className="tds-headline-02 tds-u-pb1">Datetime</div>
        <tds-datetime
          id="datetime"
          type="datetime-local"
          state="none"
          label="Label text"
          helper="Helper text"
        ></tds-datetime>
      </div>

      <div>
        <div className="tds-headline-02 tds-u-pb1">Divider</div>
        <tds-divider></tds-divider>
      </div>

      <div className="tds-headline-02 tds-u-pb1">Dropdown</div>
      <div className="tds-headline-04 tds-u-pb1">Default</div>
      <tds-dropdown
        id="tds-dropdown-reg"
        size="lg"
        placeholder="Placeholder"
        disabled={false}
        open-direction="auto"
        label-position="no-default"
        type="default"
        default-option="option-1"
      >
        <tds-dropdown-option value="option-1" tabIndex={0} disabled>
          Option 1
        </tds-dropdown-option>
        <tds-dropdown-option value="option-2" tabIndex={0}>
          Option 2
        </tds-dropdown-option>
        <tds-dropdown-option value="option-3" tabIndex={0}>
          Option 3
        </tds-dropdown-option>
      </tds-dropdown>
      <div className="tds-headline-04 tds-u-pb1">Multiselect</div>
      <tds-dropdown
        id="tds-dropdown-reg"
        size="lg"
        placeholder="Placeholder"
        disabled={false}
        open-direction="auto"
        label-position="no-default"
        type="multiselect"
        default-option="option-1"
      >
        <tds-dropdown-option value="option-1" tabIndex={0} disabled>
          Option 1
        </tds-dropdown-option>
        <tds-dropdown-option value="option-2" tabIndex={0}>
          Option 2
        </tds-dropdown-option>
        <tds-dropdown-option value="option-3" tabIndex={0}>
          Option 3
        </tds-dropdown-option>
      </tds-dropdown>
      <div className="tds-headline-04 tds-u-pb1">Filter</div>

      <tds-dropdown-filter
        id="tds-dropdown-filter"
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
      ></tds-dropdown-filter>

      <div>
        <div className="tds-headline-02 tds-u-pb1">Link</div>
        <tds-link>
          <a href="/">This is a link</a>
        </tds-link>
      </div>

      <div>
        <div className="tds-headline-02 tds-u-pb1">Message</div>
        <tds-message
          type="information"
          header="Message header"
          mode-variant="inherit from parent"
        >
          Longer message text can be placed here. Longer message text can be
          placed here.
        </tds-message>
      </div>

      <div>
        <div className="tds-headline-02 tds-u-pb1">Modal</div>
        <tds-button id="my-modal-button" text="Open Modal"></tds-button>
        <tds-modal selector="#my-modal-button" id="my-modal" size="lg" actions="static">
          <h5 className="tds-modal-headline" slot="tds-modal-headline">
            The buttons for the Modal only works in the canvas tab
          </h5>
          <span slot="tds-modal-body">
            The steps fell lightly and oddly, with a certain swing, for all they went so slowly; it was
            different indeed from the heavy creaking tread of Henry Jekyll. Utterson sighed. “Is there never
            anything else?” he asked.
          </span>
          <tds-button
            slot="tds-modal-actions"
            data-dismiss-modal
            size="md"
            text="Delete"
            type="danger"
          ></tds-button>
          <tds-button slot="tds-modal-actions" data-dismiss-modal size="md" text="Cancel"></tds-button>
        </tds-modal>
      </div>

      <div>
        <div className="tds-headline-02 tds-u-pb1">Radio Button</div>
        <tds-radio-button
          name="rb-example"
          value="option1"
          radio-id="option-2"
        >
          <div slot="label">Label text 1</div>
        </tds-radio-button>

        <tds-radio-button
          name="rb-example"
          value="option1"
          radio-id="option-2"
        >
          <div slot="label">Label text 2</div>
        </tds-radio-button>
      </div>

      <div>
        <div className="tds-headline-02 tds-u-pb1">Popover</div>
        <div className="tds-headline-03 tds-u-pb1">Canvas</div>

        <div className="popover-container">
          <tds-button
            aria-label="menu"
            only-icon
            id="trigger"
            type="ghost"
            size="sm"
          >
            <tds-icon
              slot="icon"
              className="tds-btn-icon"
              size="16px"
              name="kebab"
            ></tds-icon>
          </tds-button>
        </div>
        <tds-popover-canvas
          placement="auto"
          selector="#trigger"
          className="tds-u-p2"
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
        </tds-popover-canvas>

        <div className="tds-headline-03 tds-u-pb1">Menu</div>

        <div className="popover-container">
          <tds-button
            aria-label="menu"
            only-icon
            id="my-popover-button"
            type="ghost"
            size="sm"
          >
            <tds-icon
              slot="icon"
              className="tds-btn-icon"
              size="16px"
              name="kebab"
            ></tds-icon>
          </tds-button>
        </div>
        <tds-popover-menu
          selector="#my-popover-button"
          placement="auto"
          id="my-popover-menu"
        >
          <ul className="tds-popover-menu-wrapper">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://digitaldesign.scania.com"
              >
                <i>
                  <tds-icon name="save" size="16px"></tds-icon>
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
                  <tds-icon name="save" size="16px"></tds-icon>
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
                  <tds-icon name="save" size="16px"></tds-icon>
                </i>
                Menu item 4
              </a>
            </li>
          </ul>
        </tds-popover-menu>
      </div>

      <div>
        <div className="tds-headline-02 tds-u-pb1">Slider</div>
        <tds-slider
          id="tds-slider"
          min="0"
          max="100"
          value="50"
          tooltip
          label="Test label"
          ticks="4"
          controls
          show-tick-numbers
        ></tds-slider>
      </div>
      <div>
        <div className="tds-headline-02 tds-u-pb1">Spinner</div>
        <div className="tds-headline-03 tds-u-pb1">Standard</div>

        <tds-spinner variant="standard"></tds-spinner>
        <div className="tds-headline-03 tds-u-pb1">Inverted</div>

        <tds-spinner variant="inverted"></tds-spinner>
      </div>

      <div>
        <div className="tds-headline-02 tds-u-pb1">Stepper</div>
        <tds-stepper size="lg" label-position="below" orientation="horizontal">
          <tds-step state="success" index="1">
            <div slot="label">Success step</div>
          </tds-step>
          <tds-step state="error" index="2">
            <div slot="label">Error step</div>
          </tds-step>
          <tds-step state="current" index="3">
            <div slot="label">Current step</div>
          </tds-step>
          <tds-step index="4">
            <div slot="label">Upcoming step</div>
          </tds-step>
        </tds-stepper>
      </div>

      <div>
        <div className="tds-headline-02 tds-u-pb1">Tabs</div>
        <div className="tds-headline-03 tds-u-pb3 tds-u-pt3">Folder</div>

        <tds-folder-tabs>
          <tds-folder-tab>
            <button>First tab</button>
          </tds-folder-tab>
          <tds-folder-tab>
            <button>Second tab is much longer</button>
          </tds-folder-tab>
          <tds-folder-tab>
            <button>Third tab</button>
          </tds-folder-tab>
          <tds-folder-tab disabled>
            <button>Fourth tab</button>
          </tds-folder-tab>
        </tds-folder-tabs>

        <div className="tds-headline-03 tds-u-pb3 tds-u-pt3">Inline</div>

        <tds-inline-tabs>
          <tds-inline-tab>
            <button>First tab</button>
          </tds-inline-tab>
          <tds-inline-tab>
            <button>Second tab is much longer</button>
          </tds-inline-tab>
          <tds-inline-tab>
            <button>Third tab</button>
          </tds-inline-tab>
          <tds-inline-tab disabled>
            <button>Fourth tab</button>
          </tds-inline-tab>
        </tds-inline-tabs>
        <div className="tds-headline-03 tds-u-pb3 tds-u-pt3">Navigation</div>

        <tds-navigation-tabs>
          <tds-navigation-tab>
            <a href="/">First tab</a>
          </tds-navigation-tab>
          <tds-navigation-tab>
            <a href="/">Second tab is much longer</a>
          </tds-navigation-tab>
          <tds-navigation-tab>
            <a href="/">Third tab</a>
          </tds-navigation-tab>
          <tds-navigation-tab disabled>
            <a href="/">Fourth tab</a>
          </tds-navigation-tab>
        </tds-navigation-tabs>
      </div>

      <div>
        <div className="tds-headline-02 tds-u-pb1">Textarea</div>
        <tds-textarea
          rows={4}
          state="error"
          label="Hello label"
          helper="Good guess, but wrong answer buddy"
          label-position="outside"
          placeholder="Placeholder test"
        ></tds-textarea>
      </div>

      <div>
        <div className="tds-headline-02 tds-u-pb1">Text fields</div>
        <div className="tds-headline-04 tds-u-pb1">Standard medium size</div>
        <tds-text-field size="md" placeholder="Placeholder"></tds-text-field>
      </div>
      <div>
        <div className="tds-headline-02 tds-u-pb1">Toast</div>
        <tds-toast type="success" header="Header">
          <div slot="toast-subheader">Longer message</div>
        </tds-toast>
      </div>
      <div>
        <div className="tds-headline-02 tds-u-pb1">Toggle</div>
        <tds-toggle headline="Headline" size="lg">
          <div slot="label">Label</div>
        </tds-toggle>
      </div>
      <div>
        <div className="tds-headline-02 tds-u-pb1">Tooltip</div>
        <div className="tooltip-container">
          <tds-tooltip
            placement="bottom"
            selector="#button-1"
            text="Text inside tooltip"
            mouse-over-tooltip="true"
          >
            <p className="tds-detail-05 tds-u-m0 tooltip-paragraph">
              Paragraph tag inside of Tooltip with
              <b>bold</b>
              and
              <i>italic</i>
              tags too.
            </p>
          </tds-tooltip>

          <tds-button size="sm" id="button-1" text="Hover me"></tds-button>
        </div>
      </div>
    </>
  );
}
