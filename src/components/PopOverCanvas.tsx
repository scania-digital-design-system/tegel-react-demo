import { useEffect, useRef, useState } from 'react';

const PopoverMenu = () => {
  return (
    <>
      <div className="tds-headline-02 tds-u-pb1">Popover</div>
      <div className="tds-headline-03 tds-u-pb1 tds-u-pt3">Menu</div>
      <div className="popover-container">
        <tds-button aria-label="menu" only-icon id="triggerElement" variant="ghost" size="sm">
          <tds-icon slot="icon" className="tds-btn-icon" size="16px" name="kebab"></tds-icon>
        </tds-button>
      </div>
      <tds-popover-menu placement="auto" selector="#triggerElement">
        <ul className="tds-popover-menu-wrapper">
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://digitaldesign.scania.com">
              <i>
                <tds-icon name="save" size="16px"></tds-icon>
              </i>
              Menu item 1
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://digitaldesign.scania.com">
              <i>
                <tds-icon name="save" size="16px"></tds-icon>
              </i>
              Menu item 2
            </a>
          </li>
          <li className="divider"></li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://digitaldesign.scania.com">
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

  const buttonRef = useRef(null);
  const popoverRef = useRef<any>(null);

  useEffect(() => {
    if (popoverRef.current) popoverRef.current.referenceEl = buttonRef.current;
  });

  return (
    <div>
      <div className="tds-headline-03 tds-u-pb1">Canvas</div>
      <div className="popover-container">
        <tds-button
          aria-label="menu"
          only-icon
          variant="ghost"
          size="sm"
          onClick={() => setShowPopover(!showPopover)}
          ref={buttonRef}
        >
          <tds-icon slot="icon" className="tds-btn-icon" size="16px" name="kebab"></tds-icon>
        </tds-button>
      </div>

      {/* Note: the 'show' prop is not required. It can be used when you need to override
      the visibility of the popover to control it manually with code. 
      In this example the use of the 'show' prop actually results in a bug - the popover doesn't 
      close when clicking outside. */}
      <tds-popover-canvas placement="left" show={showPopover} ref={popoverRef}>
        <div className="tds-u-p2">
          <h2 className="tds-headline-02 tds-u-mt0">A Popover Canvas!</h2>
          <p className="tds-body-01">Where you can put anything you want!</p>
          <tds-link>
            <a target="_blank" rel="noopener noreferrer" href="https://tegel.scania.com">
              Even links!
            </a>
          </tds-link>
        </div>
      </tds-popover-canvas>
    </div>
  );
};

export { PopoverMenu, PopoverCanvas as default };
