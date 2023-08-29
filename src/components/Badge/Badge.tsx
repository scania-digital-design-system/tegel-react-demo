import { useEffect, useRef, useState } from 'react';
import './Badge.scss';

const Badge = () => {
    const textFieldRef = useRef<HTMLTdsTextFieldElement>(null);
    const [emailCount, setEmailCount] = useState('100');
    useEffect(() => {
        const textField = textFieldRef?.current;
        textField?.addEventListener('input', (event: any) => {
            console.log(event.target.value);
            setEmailCount(event.target.value);
        });
    });

    return (
        <div>
            <div className="tds-headline-02 tds-u-pb1">Badge</div>
            <tds-badge value="1" size="lg"></tds-badge>
            <br />

            <tds-badge value="-5" size="lg"></tds-badge>
            <br />

            <tds-button>
                <span slot="label"> Inbox </span>
                <span slot="icon">
                    <tds-badge value="1000" size="lg"></tds-badge>
                </span>
            </tds-button>
            <br />
            <br />
            <tds-text-field
                ref={textFieldRef}
                type="text"
                size="sm"
                state="success"
                label="Number of emails"
                name="emailCount"
                label-position="outside"
                no-min-width
                placeholder="0"
                value={emailCount}
            ></tds-text-field>
            <br />
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
            <br />
            <br />

            <tds-button>
                <span slot="icon" className="button-badge-relative">
                    <tds-icon name="settings" size="24px"></tds-icon>
                    <tds-badge value="5" size="sm"></tds-badge>
                </span>
            </tds-button>
        </div>
    );
};

export default Badge;
