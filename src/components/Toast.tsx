import { useState } from "react";
import "./Toast.scss";

const Toast = () => {
  let toast: HTMLTdsToastElement;
  let absoluteToast: HTMLTdsToastElement;
  const [toastVisibility, setToastVisibility] = useState(true);

  const handleToast = () => {
    setToastVisibility(!toastVisibility);
    toastVisibility ? toast?.hideToast() : toast?.showToast();
  };
  return (
    <div>
      <div className="tds-headline-02 tds-u-pb1">Toast</div>
      <div className="toast-container">
        <tds-toast
          type="success"
          header="Successful Toast!"
          ref={(element) =>
            element?.addEventListener("tdsClose", (event) => {
              event.preventDefault();
            })
          }
        >
          <div slot="toast-subheader">This Toasts can't be closed.</div>
        </tds-toast>
        <tds-toast type="error" header="Error Toast!">
          <div slot="toast-subheader">This Toasts can be closed.</div>
        </tds-toast>
        <tds-toast type="information" header="Information Toast!">
          <div slot="toast-subheader">This Toasts has a link.</div>
          <a slot="toast-link" href="/">
            This is a link.
          </a>
        </tds-toast>
        <tds-toast
          ref={(element) => {
            toast = element as HTMLTdsToastElement;
          }}
          type="warning"
          header="Warning Toast!"
        >
          <div slot="toast-subheader">
            This Toast can be closed programatically.
          </div>
        </tds-toast>
        <div>
          <p>You can show or hide the toast with the toggle below.</p>
          <tds-toggle
            ref={(element) =>
              element?.addEventListener("tdsToggle", () => {
                handleToast();
              })
            }
          >
            <div slot="label">
              {toastVisibility ? "Hide Toast" : "Show Toast"}
            </div>
          </tds-toggle>
        </div>
      </div>
      <p>Or maybe you want to show a toast on click?</p>
      <tds-button
        onClick={() => {
          absoluteToast.hidden = false;
        }}
        size="md"
        text="Show Toast"
      ></tds-button>
      <div className="toast-absolute">
        <tds-toast
          ref={(element) => {
            absoluteToast = element as HTMLTdsToastElement;
          }}
          type="success"
          header="Hey-hey!"
          // TODO - watcher on hidden prop.
        >
          <div slot="toast-subheader">
            This Toasts has an absolute position.
          </div>
        </tds-toast>
      </div>
    </div>
  );
};

export default Toast;
