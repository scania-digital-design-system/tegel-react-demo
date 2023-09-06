import { useEffect, useRef, useState } from 'react';

const PopoverMenu = () => {
  const buttonRef = useRef<HTMLTdsButtonElement>(null);
  const popoverMenuRef = useRef<HTMLTdsPopoverMenuElement>(null);

  useEffect(() => {
    if (popoverMenuRef.current) popoverMenuRef.current.referenceEl = buttonRef.current;
  });

  return (
    <>
      <div className="tds-headline-02 tds-u-pb1">Popover Menu</div>
      <div className="popover-container">
        <tds-button aria-label="menu" only-icon variant="ghost" size="sm" ref={buttonRef}>
          <tds-icon slot="icon" className="tds-btn-icon" size="16px" name="kebab"></tds-icon>
        </tds-button>
      </div>
      <tds-popover-menu ref={popoverMenuRef} placement="auto">
        <tds-popover-menu-item>
          <a href="tegel.scania.com">Action</a>
        </tds-popover-menu-item>
        <tds-divider></tds-divider>
        <tds-popover-menu-item>
          <a href="tegel.scania.com">Action</a>
        </tds-popover-menu-item>
        <tds-popover-menu-item>
          <a href="tegel.scania.com">Action</a>
        </tds-popover-menu-item>
        <tds-popover-menu-item disabled>
          <button>Action</button>
        </tds-popover-menu-item>
        <tds-divider></tds-divider>
        <tds-popover-menu-item>
          <a href="tegel.scania.com">Action</a>
        </tds-popover-menu-item>
        <tds-popover-menu-item>
          <a href="tegel.scania.com">Action</a>
        </tds-popover-menu-item>
        <tds-popover-menu-item>
          <a href="tegel.scania.com">Action</a>
        </tds-popover-menu-item>
        <tds-divider></tds-divider>
        <tds-popover-menu-item>
          <a href="tegel.scania.com">Action</a>
        </tds-popover-menu-item>
        <tds-popover-menu-item>
          <button>Action</button>
        </tds-popover-menu-item>
      </tds-popover-menu>
      <div className="popover-container">
        <tds-button aria-label="menu" only-icon id="triggerElement" variant="primary" size="sm">
          <tds-icon slot="icon" className="tds-btn-icon" size="16px" name="kebab"></tds-icon>
        </tds-button>
      </div>
      <tds-popover-menu placement="auto" selector="#triggerElement">
        <tds-popover-menu-item>
          <a href="tegel.scania.com">Action</a>
        </tds-popover-menu-item>
        <tds-divider></tds-divider>
        <tds-popover-menu-item>
          <a href="tegel.scania.com">Action</a>
        </tds-popover-menu-item>
        <tds-popover-menu-item>
          <a href="tegel.scania.com">Action</a>
        </tds-popover-menu-item>
        <tds-popover-menu-item disabled>
          <button>Action</button>
        </tds-popover-menu-item>
        <tds-divider></tds-divider>
        <tds-popover-menu-item>
          <a href="tegel.scania.com">Action</a>
        </tds-popover-menu-item>
        <tds-popover-menu-item>
          <a href="tegel.scania.com">Action</a>
        </tds-popover-menu-item>
        <tds-popover-menu-item>
          <a href="tegel.scania.com">Action</a>
        </tds-popover-menu-item>
        <tds-divider></tds-divider>
        <tds-popover-menu-item>
          <a href="tegel.scania.com">Action</a>
        </tds-popover-menu-item>
        <tds-popover-menu-item>
          <button>Action</button>
        </tds-popover-menu-item>
      </tds-popover-menu>
    </>
  );
};

const PopoverCanvas = () => {
  const [showPopover, setShowPopover] = useState(false);

  const buttonRef = useRef<HTMLTdsButtonElement>(null);
  const popoverRef = useRef<HTMLTdsPopoverCanvasElement>(null);
  const toggleRef = useRef<HTMLTdsToggleElement>(null);

  const disabledButtonRef = useRef(null);
  const disabledPopoverRef = useRef<any>(null);

  useEffect(() => {
    if (popoverRef.current) popoverRef.current.referenceEl = buttonRef.current;
    if (disabledPopoverRef.current)
      disabledPopoverRef.current.referenceEl = disabledButtonRef.current;

    const handleToggle = () => {
      setShowPopover(!showPopover);
    };
    const toggle = toggleRef.current;
    toggleRef.current?.addEventListener('tdsToggle', handleToggle);

    return () => toggle?.removeEventListener('tdsToggle', handleToggle);
  });

  return (
    <div>
      <div className="tds-headline-02 tds-u-pb1">Popover Canvas</div>
      <div>
        <tds-button aria-label="menu" only-icon variant="ghost" size="sm" ref={buttonRef}>
          <tds-icon slot="icon" className="tds-btn-icon" size="16px" name="kebab"></tds-icon>
        </tds-button>
      </div>

      <tds-popover-canvas placement="top" ref={popoverRef}>
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

      <div className="tds-u-flex tds-u-gap3">
        <tds-button size="sm" disabled ref={disabledButtonRef}>
          <tds-icon slot="icon" className="tds-btn-icon" size="16px" name="print"></tds-icon>
        </tds-button>

        <tds-toggle ref={toggleRef}>
          <span slot="label">Show printer information</span>
        </tds-toggle>
      </div>
      <tds-popover-canvas placement="top" ref={disabledPopoverRef} show={showPopover}>
        <div className="tds-u-p2">
          <div className="tds-u-p2">
            <h2 className="tds-headline-04">Printer Notification</h2>
            <p>
              Your document, <em>"Unicorn_Dreams.pdf"</em>, has been queued.
            </p>
            <p>
              Current Status: <strong>In Progress</strong>
            </p>
            <p>Please await completion. Do not turn off the device.</p>
            <p>Contact the IT Support, if any errors occur.</p>
          </div>
        </div>
      </tds-popover-canvas>
    </div>
  );
};

export { PopoverMenu, PopoverCanvas as default };
