import { useRef, useState } from 'react';
import './Toast.scss';

const Toast = () => {
  const toast = useRef<HTMLTdsToastElement>(null);
  const absoluteToast = useRef<HTMLTdsToastElement>(null);
  const [toastVisibility, setToastVisibility] = useState(true);

  const handleToast = () => {
    setToastVisibility(!toastVisibility);
    if (toast.current) {
      toastVisibility ? toast?.current.hideToast() : toast?.current.showToast();
    }
  };
  return (
    <div>
      <div className="tds-headline-02 tds-u-pb1">Toast</div>
      <div className="toast-container">
        <tds-toast
          variant="success"
          header="Successful Toast!"
          ref={(element) =>
            element?.addEventListener('tdsClose', (event) => {
              event.preventDefault();
            })
          }
        >
          <div slot="toast-subheader">This Toasts can't be closed.</div>
        </tds-toast>
        <tds-toast variant="error" header="Error Toast!">
          <div slot="toast-subheader">This Toasts can be closed.</div>
        </tds-toast>
        <tds-toast variant="information" header="Information Toast!">
          <div slot="toast-subheader">This Toasts has a link.</div>
          <a slot="toast-link" href="/">
            This is a link.
          </a>
        </tds-toast>
        <tds-toast ref={toast} variant="warning" header="Warning Toast!">
          <div slot="toast-subheader">This Toast can be closed programmatically.</div>
        </tds-toast>
        <div>
          <p>You can show or hide the toast with the toggle below.</p>
          <tds-toggle
            ref={(element) =>
              element?.addEventListener('tdsToggle', () => {
                handleToast();
              })
            }
          >
            <div slot="label">{toastVisibility ? 'Hide Toast' : 'Show Toast'}</div>
          </tds-toggle>
        </div>
      </div>
      <p>Or maybe you want to show a toast on click?</p>
      <tds-button
        onClick={() => {
          if (absoluteToast.current) {
            absoluteToast.current.hidden = false;
          }
        }}
        size="md"
        text="Show Toast"
      ></tds-button>
      <div className="toast-absolute">
        <tds-toast
          ref={absoluteToast}
          variant="success"
          header="Hey-hey!"
          // TODO - watcher on hidden prop.
        >
          <div slot="toast-subheader">This Toasts has an absolute position.</div>
        </tds-toast>
      </div>
    </div>
  );
};

export default Toast;
