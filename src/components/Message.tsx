import { useEffect, useRef, useState } from 'react';

const Message = () => {
  const [useIcon, setUseIcon] = useState(true);
  const [useMinimal, setUseMinimal] = useState(false);
  const iconToggle = useRef<HTMLTdsToggleElement>(null);
  const minimalToggle = useRef<HTMLTdsToggleElement>(null);

  useEffect(() => {
    iconToggle.current?.addEventListener('tdsToggle', (event: any) => {
      setUseIcon(event.detail.checked);
    });
    minimalToggle.current?.addEventListener('tdsToggle', (event: any) => {
      setUseMinimal(event.detail.checked);
    });
  }, []);

  return (
    <>
      <h4 className="tds-u-pb1">Message types</h4>
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
    </>
  );
};

export default Message;
