import { useRef, useState } from 'react';
import './Toast.scss';
import { TdsToast, TdsToggle } from '@scania/tegel-react';
import { TdsToastCustomEvent } from '@scania/tegel';

const Toast = () => {
  const successToastRef = useRef<HTMLTdsToastElement>(null);
  const errorToastRef = useRef<HTMLTdsToastElement>(null);
  const informationToastRef = useRef<HTMLTdsToastElement>(null);
  const warningToastRef = useRef<HTMLTdsToastElement>(null);
  const [showToast, setShowToast] = useState(true);

  const handleToggle = async () => {
    setShowToast(!showToast);
    !showToast
      ? await successToastRef.current?.showToast()
      : await successToastRef.current?.hideToast();
    !showToast
      ? await errorToastRef.current?.showToast()
      : await errorToastRef.current?.hideToast();
    !showToast
      ? await warningToastRef.current?.showToast()
      : await warningToastRef.current?.hideToast();
    !showToast
      ? await informationToastRef.current?.showToast()
      : await informationToastRef.current?.hideToast();
  };

  const preventClose = (event: TdsToastCustomEvent<{ toastId: string }>) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="tds-headline-02 tds-u-pb1">Toast</div>
      <div className="toast-container">
        <TdsToast
          ref={successToastRef}
          variant="success"
          header="Successful Toast!"
          subheader="( Closing prevented ! )"
          onTdsClose={preventClose}
        >
          <div slot="subheader">This Toasts can't be closed.</div>
        </TdsToast>
        <TdsToast ref={errorToastRef} variant="error" header="Error Toast!">
          <div slot="subheader">This Toasts can be closed.</div>
        </TdsToast>
        <TdsToast ref={informationToastRef} variant="information" header="Information Toast!">
          <div slot="subheader">This Toasts has a link.</div>
          <a slot="actions" href="/">
            This is a link.
          </a>
        </TdsToast>
        <TdsToast ref={warningToastRef} variant="warning" header="Warning Toast!">
          <div slot="subheader">This Toast can be closed programmatically.</div>
        </TdsToast>
      </div>
      <div>
        <p>You can show or hide the toasts with the toggle below.</p>
        <TdsToggle onTdsToggle={handleToggle}>
          <div slot="label">{showToast ? 'Hide Toast' : 'Show Toast'}</div>
        </TdsToggle>
      </div>
    </div>
  );
};

export default Toast;
