import { useContext } from 'react';
import { UserContext } from '../App';
import { TdsButton, TdsMessage, TdsModal } from '@scania/tegel-react';

const NotificationPage = () => {
  const userContext = useContext(UserContext);

  const handleNotificationClearence = () => {
    userContext?.updateUser({
      userName: userContext.user.userName,
      placeOfWork: userContext.user.placeOfWork,
      notifications: [],
    });
  };
  return (
    <>
      <h2>
        {userContext?.user.notifications && userContext?.user.notifications.length > 0
          ? 'Notifications'
          : 'No new notifications'}
      </h2>
      <div className="tds-u-flex tds-u-flex-dir-col tds-u-gap2">
        {userContext?.user.notifications?.map((notification, index) => {
          return (
            <TdsMessage
              variant={notification.type}
              key={`notification-${index}`}
              header={`Notification ${index + 1}`}
            >
              {notification.notification}
            </TdsMessage>
          );
        })}
      </div>
      {userContext?.user.notifications && userContext?.user.notifications.length > 0 && (
        <>
          <TdsButton id="clear-notifications-btn" text="Clear notifications" size="md"></TdsButton>
          <TdsModal selector="#clear-notifications-btn">
            <h5 className="tds-modal-headline" slot="header">
              Are you sure?
            </h5>
            <div slot="body">
              This will remove all your notifications. Make sure you have addressed them before.
            </div>
            <TdsButton
              slot="actions"
              data-dismiss-modal
              size="md"
              text="Delete"
              variant="danger"
              onClick={handleNotificationClearence}
            ></TdsButton>
            <TdsButton slot="actions" data-dismiss-modal size="md" text="Cancel"></TdsButton>
          </TdsModal>
        </>
      )}
    </>
  );
};

export default NotificationPage;
