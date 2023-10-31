import { TdsIcon } from '@scania/tegel-react';
import './NotFound.scss';

const NotFound = () => {
    return (
        <div className="error-page tds-u-h-100">
            <div className="error-page__wrapper">
                <div className="error-page__icon-wrapper">
                    <TdsIcon name="link_broken" size="24"></TdsIcon>
                </div>
                <div className="error-page__info">
                    <h2 className="tds-headline-04">The requested page could not be found</h2>
                    <p className='tds-body-01'>The page could not be found. You may have clicked on an incorrect link or mistyped the URL. It is also possible that we have renamed, moved or deleted the content. </p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;