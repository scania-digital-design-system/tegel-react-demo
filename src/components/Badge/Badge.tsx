import { FormEvent, useState } from 'react';
import './Badge.scss';

const Badge = () => {
  const [emailCount, setEmailCount] = useState('100');

  const handleInput = (event: FormEvent) => {
    const target = event.target as HTMLTdsTextFieldElement;
    setEmailCount(target.value);
  };

  return (
    <div>
      <div className="tds-headline-02 tds-u-pb1">Badge</div>
      <div className="tds-u-flex tds-u-gap2 tds-u-flex-dir-col">
        <tds-badge value="1" size="lg"></tds-badge>
        <tds-badge value="-5" size="lg"></tds-badge>
        <tds-text-field
          type="text"
          size="sm"
          state="success"
          label="Number of emails"
          name="emailCount"
          label-position="outside"
          no-min-width
          placeholder="0"
          value={emailCount}
          onInput={handleInput}
        ></tds-text-field>

        <div className="tds-u-flex tds-u-gap2">
          <tds-button>
            <span slot="icon" className="button-badge-relative">
              <tds-icon name="email" size="24px"></tds-icon>
              <tds-badge value={emailCount} size="lg"></tds-badge>
            </span>
          </tds-button>
          <tds-button>
            <span slot="icon" className="button-badge-relative">
              <tds-icon name="heart" size="24px"></tds-icon>
              <tds-badge value="5" size="lg"></tds-badge>
            </span>
          </tds-button>
          <tds-button>
            <span slot="icon" className="button-badge-relative">
              <tds-icon name="settings" size="24px"></tds-icon>
              <tds-badge value="5" size="sm"></tds-badge>
            </span>
          </tds-button>
        </div>
      </div>
    </div>
  );
};

export default Badge;
