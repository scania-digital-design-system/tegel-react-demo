import { FormEvent, useContext, useRef, useState } from 'react';
import './SettingsPage.scss';
import { User, UserContext } from '../../App';
import { TdsButton, TdsTextField } from '@scania/tegel-react';

const SettingsPage = () => {
  const userContext = useContext(UserContext);
  const form = useRef<HTMLFormElement>(null);
  const [userNameState, setUserNameState] = useState<'error' | 'success' | 'default'>('default');
  const [placeOfWorkState, setPlaceOfWorkState] = useState<'error' | 'success' | 'default'>(
    'default',
  );
  const [userNameHelper, setUserNameHelper] = useState<string | undefined>(undefined);
  const [placeOfWorkHelper, setPlaceOfWorkHelper] = useState<string | undefined>(undefined);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (form.current) {
      const formData = new FormData(form.current);
      if (formData.get('userName')?.toString() === '') {
        setUserNameState('error');
        setUserNameHelper(`Can't be empty`);
      } else if (formData.get('placeOfWork')?.toString() === '') {
        setPlaceOfWorkState('error');
        setPlaceOfWorkHelper(`Can't be empty`);
      } else {
        setPlaceOfWorkState('success');
        setUserNameHelper(`Saved!`);

        setUserNameState('success');
        setPlaceOfWorkHelper(`Saved!`);

        const updatedUser: User = {
          userName: formData.get('userName')?.toString() || '',
          placeOfWork: formData.get('placeOfWork')?.toString() || '',
          notifications: userContext?.user.notifications ?? [],
        };
        userContext?.updateUser(updatedUser);
        form.current.reset();
      }
    }
  };

  return (
    <div className="settings-page">
      <h2>Settings</h2>
      <form
        ref={form}
        onSubmit={(event: FormEvent) => {
          handleSubmit(event);
        }}
      >
        <TdsTextField
          name="userName"
          placeholder={userContext?.user.userName}
          state={userNameState}
          helper={userNameHelper}
        ></TdsTextField>
        <div className="tds-u-pt2 tds-u-pb2">
          <TdsTextField
            name="placeOfWork"
            placeholder={userContext?.user.placeOfWork}
            state={placeOfWorkState}
            helper={placeOfWorkHelper}
          ></TdsTextField>
        </div>
        <div>
          <TdsButton size="md" text="Save" type="submit"></TdsButton>
        </div>
      </form>
    </div>
  );
};

export default SettingsPage;
