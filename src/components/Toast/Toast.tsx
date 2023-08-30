import { useEffect, useRef, useState } from 'react';
import './Toast.scss';

const Toast = () => {
  const successToastRef = useRef<HTMLTdsToastElement>(null);
  const errorToastRef = useRef<HTMLTdsToastElement>(null);
  const informationToastRef = useRef<HTMLTdsToastElement>(null);
  const warningToastRef = useRef<HTMLTdsToastElement>(null);
  const toggleRef = useRef<HTMLTdsToggleElement>(null);
  const [toastVisibility, setToastVisibility] = useState(true);

  useEffect(() => {
    const handleToggle = () => {
      setToastVisibility(!toastVisibility);
      !toastVisibility ? successToast?.showToast() : successToast?.hideToast();
      !toastVisibility ? errorToast?.showToast() : errorToast?.hideToast();
      !toastVisibility ? warningToast?.showToast() : warningToast?.hideToast();
      !toastVisibility ? informationToast?.showToast() : informationToast?.hideToast();
    };

    const preventClose = (event: TdsCloseEvent) => {
      event.preventDefault();
    };

    const toggle = toggleRef.current;
    const successToast = successToastRef.current;
    const errorToast = errorToastRef.current;
    const warningToast = warningToastRef.current;
    const informationToast = informationToastRef.current;
    toggle?.addEventListener('tdsToggle', handleToggle);
    successToast?.addEventListener('tdsClose', preventClose);

    return () => {
      toggle?.removeEventListener('tdsToggle', handleToggle);
      successToast?.removeEventListener('tdsClose', preventClose);
    };
  });
  return (
    <div>
      <div className="tds-headline-02 tds-u-pb1">Toast</div>
      <div className="toast-container">
        <tds-toast
          variant="success"
          header="Successful Toast!"
          subheader="( Closing prevented ! )"
          ref={successToastRef}
        >
          <div slot="toast-subheader">This Toasts can't be closed.</div>
        </tds-toast>
        <tds-toast ref={errorToastRef} variant="error" header="Error Toast!">
          <div slot="toast-subheader">This Toasts can be closed.</div>
        </tds-toast>
        <tds-toast ref={informationToastRef} variant="information" header="Information Toast!">
          <div slot="toast-subheader">This Toasts has a link.</div>
          <a slot="toast-link" href="/">
            This is a link.
          </a>
        </tds-toast>
        <tds-toast ref={warningToastRef} variant="warning" header="Warning Toast!">
          <div slot="toast-subheader">This Toast can be closed programmatically.</div>
        </tds-toast>
      </div>
      <div>
        <p>You can show or hide the toasts with the toggle below.</p>
        <tds-toggle ref={toggleRef}>
          <div slot="label">{toastVisibility ? 'Hide Toast' : 'Show Toast'}</div>
        </tds-toggle>
      </div>
    </div>
  );
};

export default Toast;
