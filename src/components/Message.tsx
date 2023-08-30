import { useEffect, useRef, useState } from 'react';

const Message = () => {
  const [useIcon, setUseIcon] = useState(true);
  const [useMinimal, setUseMinimal] = useState(false);
  const iconToggle = useRef<HTMLTdsToggleElement>(null);
  const minimalToggle = useRef<HTMLTdsToggleElement>(null);

  useEffect(() => {
    const iconToggleElement = iconToggle.current;
    const minimalToggleElement = minimalToggle.current;
    iconToggleElement?.addEventListener('tdsToggle', (event: TdsToggleEvent) => {
      setUseIcon(event.detail.checked);
    });
    minimalToggleElement?.addEventListener('tdsToggle', (event: TdsToggleEvent) => {
      setUseMinimal(event.detail.checked);
    });

    return () => {
      iconToggleElement?.removeEventListener('tdsToggle', (event: TdsToggleEvent) => {
        setUseIcon(event.detail.checked);
      });
      minimalToggleElement?.removeEventListener('tdsToggle', (event: TdsToggleEvent) => {
        setUseMinimal(event.detail.checked);
      });
    };
  });

  return (
    <>
      <div className="tds-headline-02 tds-u-pb1">Message</div>
      <div className="tds-u-pb1">
        <tds-toggle checked ref={iconToggle}>
          <div slot="label">With Icon</div>
        </tds-toggle>
      </div>
      <div className="tds-u-pb1">
        <tds-toggle checked={useMinimal} ref={minimalToggle}>
          <div slot="label">Minimal</div>
        </tds-toggle>
      </div>
      <div className="tds-u-flex tds-u-flex-dir-col tds-u-flex-gap-1">
        <tds-message
          no-icon={!useIcon}
          minimal={useMinimal}
          variant="information"
          header="Message header"
          mode-variant="inherit from parent"
        >
          <div>Longer message text can be placed here. Longer message text can be placed here.</div>
        </tds-message>
        <tds-message
          no-icon={!useIcon}
          minimal={useMinimal}
          variant="error"
          header="Message header"
          mode-variant="inherit from parent"
        >
          <div>Longer message text can be placed here. Longer message text can be placed here.</div>
        </tds-message>
        <tds-message
          no-icon={!useIcon}
          minimal={useMinimal}
          variant="success"
          header="Message header"
          mode-variant="inherit from parent"
        >
          <div>Longer message text can be placed here. Longer message text can be placed here.</div>
        </tds-message>
      </div>
    </>
  );
};

export default Message;
