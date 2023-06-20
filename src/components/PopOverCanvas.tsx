import React, { useRef, useState } from 'react';

const PopOverCanvas = () => {
  const referenceElRef = useRef(null);
  const [showPopover, setShowPopover] = useState(false);

  const handlePopoverToggle = () => {
    setShowPopover(!showPopover);
  };

  return (
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
          ref={referenceElRef}
          onClick={handlePopoverToggle}
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
        className={`tds-u-p2 ${showPopover ? 'tds-popover-canvas-show' : ''}`}
        referenceEl={referenceElRef.current || undefined}
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
  );
};

export default PopOverCanvas;
