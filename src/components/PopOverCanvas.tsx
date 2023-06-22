import { useRef, useState } from 'react';

const PopoverMenu = () => {
  const [isPopoverMenuVisible, setIsPopoverMenuVisible] = useState(false);
  const popoverMenuRef = useRef<HTMLTdsPopoverMenuElement>(null);

  const toggleMenu = () => {
    setIsPopoverMenuVisible((prevValue) => !prevValue);
  };

  return (
    <>
      <div className="tds-headline-02 tds-u-pb1">Popover</div>
      <div className="tds-headline-03 tds-u-pb1 tds-u-pt3">Menu</div>
      <div className="popover-container">
        <tds-button
          aria-label="menu"
          only-icon
          id="triggerElement"
          type="ghost"
          size="sm"
          onClick={toggleMenu} // Add onClick event to trigger toggleMenu
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
        placement="auto"
        selector="#triggerElement"
        show={isPopoverMenuVisible}
        ref={popoverMenuRef}
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
    </>
  );
};

const PopoverCanvas = () => {
  const [showPopover, setShowPopover] = useState(false);

  return (
    <div>
      <div className="tds-headline-03 tds-u-pb1">Canvas</div>
      <div className="popover-container">
        <tds-button
          aria-label="menu"
          only-icon
          type="ghost"
          size="sm"
          onClick={() => setShowPopover(!showPopover)}
        >
          <tds-icon
            slot="icon"
            className="tds-btn-icon"
            size="16px"
            name="kebab"
          ></tds-icon>
        </tds-button>
      </div>
      <tds-popover-canvas placement="auto" show={showPopover}>
        <div className="tds-u-p2">
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
          </div>
      </tds-popover-canvas>
    </div>
  );
};

export { PopoverMenu, PopoverCanvas as default };
