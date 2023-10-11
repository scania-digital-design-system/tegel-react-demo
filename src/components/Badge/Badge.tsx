import { FormEvent, useState } from 'react';
import {
  TdsBadge,
  TdsTextField,
  TdsButton,
  TdsIcon
} from "@scania/tegel-react";
import './Badge.scss';

const Badge = () => {
  const [emailCount, setEmailCount] = useState(100);

  const handleInput = (event: FormEvent) => {
    const target = event.target as HTMLTdsTextFieldElement;
    setEmailCount(target.value ? Number(target.value) : 0);
  };

  return (
    <div>
      <div className="tds-headline-02 tds-u-pb1">Badge</div>
      <div className="tds-u-flex tds-u-gap2 tds-u-flex-dir-col">
        <TdsBadge value="1" size="lg"></TdsBadge>
        <TdsBadge value="-5" size="lg"></TdsBadge>
        <TdsTextField
          type="text"
          size="sm"
          state="success"
          label="Number of emails"
          name="emailCount"
          label-position="outside"
          no-min-width
          placeholder="0"
          value={emailCount.toString()}
          onInput={handleInput}
        ></TdsTextField>

        <div className="tds-u-flex tds-u-gap2">
          <TdsButton>
            <span slot="icon" className="button-badge-relative">
              <TdsIcon name="email" size="24px"></TdsIcon>
              <TdsBadge value={emailCount.toString()} size="lg"></TdsBadge>
            </span>
          </TdsButton>
          <TdsButton>
            <span slot="icon" className="button-badge-relative">
              <TdsIcon name="heart" size="24px"></TdsIcon>
              <TdsBadge value="5" size="lg"></TdsBadge>
            </span>
          </TdsButton>
          <TdsButton>
            <span slot="icon" className="button-badge-relative">
              <TdsIcon name="settings" size="24px"></TdsIcon>
              <TdsBadge value="5" size="sm"></TdsBadge>
            </span>
          </TdsButton>
        </div>
      </div>
    </div>
  );
};

export default Badge;
