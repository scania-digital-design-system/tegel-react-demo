import { useEffect, useRef, useState } from 'react';
import {
  TdsButton,
  TdsIcon,
  TdsPopoverMenu,
  TdsPopoverMenuItem,
  TdsDivider,
  TdsPopoverCanvas,
  TdsLink,
  TdsToggle
} from "@scania/tegel-react";

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
        <TdsButton aria-label="menu" only-icon variant="ghost" size="sm" ref={buttonRef}>
          <TdsIcon slot="icon" className="tds-btn-icon" size="16px" name="kebab"></TdsIcon>
        </TdsButton>
      </div>
      <TdsPopoverMenu ref={popoverMenuRef} placement="auto">
        <TdsPopoverMenuItem>
          <a href="https://tegel.scania.com">Action</a>
        </TdsPopoverMenuItem>
        <TdsDivider></TdsDivider>
        <TdsPopoverMenuItem>
          <a href="https://tegel.scania.com">Action</a>
        </TdsPopoverMenuItem>
        <TdsPopoverMenuItem>
          <a href="https://tegel.scania.com">Action</a>
        </TdsPopoverMenuItem>
        <TdsPopoverMenuItem disabled>
          <button>Action</button>
        </TdsPopoverMenuItem>
        <TdsDivider></TdsDivider>
        <TdsPopoverMenuItem>
          <a href="https://tegel.scania.com">Action</a>
        </TdsPopoverMenuItem>
        <TdsPopoverMenuItem>
          <a href="https://tegel.scania.com">Action</a>
        </TdsPopoverMenuItem>
        <TdsPopoverMenuItem>
          <a href="https://tegel.scania.com">Action</a>
        </TdsPopoverMenuItem>
        <TdsDivider></TdsDivider>
        <TdsPopoverMenuItem>
          <a href="https://tegel.scania.com">Action</a>
        </TdsPopoverMenuItem>
        <TdsPopoverMenuItem>
          <button>Action</button>
        </TdsPopoverMenuItem>
      </TdsPopoverMenu>
      <div className="popover-container">
        <TdsButton aria-label="menu" only-icon id="triggerElement" variant="primary" size="sm">
          <TdsIcon slot="icon" className="tds-btn-icon" size="16px" name="kebab"></TdsIcon>
        </TdsButton>
      </div>
      <TdsPopoverMenu fluid-width placement="auto" selector="#triggerElement">
        <TdsPopoverMenuItem>
          <a href="https://tegel.scania.com">Action</a>
        </TdsPopoverMenuItem>
        <TdsDivider></TdsDivider>
        <TdsPopoverMenuItem>
          <a href="https://tegel.scania.com">The menu width adjusts to the widest word</a>
        </TdsPopoverMenuItem>
        <TdsPopoverMenuItem>
          <a href="https://tegel.scania.com">Action</a>
        </TdsPopoverMenuItem>
        <TdsPopoverMenuItem disabled>
          <button>Action</button>
        </TdsPopoverMenuItem>
        <TdsDivider></TdsDivider>
        <TdsPopoverMenuItem>
          <a href="https://tegel.scania.com">Action</a>
        </TdsPopoverMenuItem>
        <TdsPopoverMenuItem>
          <a href="https://tegel.scania.com">Action</a>
        </TdsPopoverMenuItem>
        <TdsPopoverMenuItem>
          <a href="https://tegel.scania.com">Action</a>
        </TdsPopoverMenuItem>
        <TdsDivider></TdsDivider>
        <TdsPopoverMenuItem>
          <a href="https://tegel.scania.com">Action</a>
        </TdsPopoverMenuItem>
        <TdsPopoverMenuItem>
          <button>Action</button>
        </TdsPopoverMenuItem>
      </TdsPopoverMenu>
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
        <TdsButton aria-label="menu" only-icon variant="ghost" size="sm" ref={buttonRef}>
          <TdsIcon slot="icon" className="tds-btn-icon" size="16px" name="kebab"></TdsIcon>
        </TdsButton>
      </div>

      <TdsPopoverCanvas placement="top" ref={popoverRef}>
        <div className="tds-u-p2">
          <h2 className="tds-headline-02 tds-u-mt0">A Popover Canvas!</h2>
          <p className="tds-body-01">Where you can put anything you want!</p>
          <TdsLink>
            <a target="_blank" rel="noopener noreferrer" href="https://tegel.scania.com">
              Even links!
            </a>
          </TdsLink>
        </div>
      </TdsPopoverCanvas>

      <div className="tds-u-flex tds-u-gap3">
        <TdsButton size="sm" disabled ref={disabledButtonRef}>
          <TdsIcon slot="icon" className="tds-btn-icon" size="16px" name="print"></TdsIcon>
        </TdsButton>

        <TdsToggle ref={toggleRef}>
          <span slot="label">Show printer information</span>
        </TdsToggle>
      </div>
      <TdsPopoverCanvas placement="top" ref={disabledPopoverRef} show={showPopover}>
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
      </TdsPopoverCanvas>
    </div>
  );
};

export { PopoverMenu, PopoverCanvas as default };
