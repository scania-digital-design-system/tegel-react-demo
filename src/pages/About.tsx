import { TdsSpinner, TdsBadge, TdsChip } from '@scania/tegel-react';

const About = () => {
  return (
    <article>
      <h3>About this page</h3>
      <p>
        This page is a testing ground and demo for using @scania/tegel-react in a React application.
      </p>

      <h4>Spinner</h4>
      <div className="tds-u-flex tds-u-gap2 tds-u-align-center tds-u-mt3">
        <TdsSpinner size="lg"></TdsSpinner>
        <TdsSpinner size="md"></TdsSpinner>
        <TdsSpinner size="sm"></TdsSpinner>
        <TdsSpinner size="xs"></TdsSpinner>
      </div>

      <h4 className="tds-u-mt3">Badge</h4>
      <div className="tds-u-flex tds-u-gap2 tds-u-align-center tds-u-mt3">
        <TdsBadge value="5"></TdsBadge>
        <TdsBadge value="99+"></TdsBadge>
        <TdsBadge size="sm"></TdsBadge>
      </div>

      <h4 className="tds-u-mt3">Chip</h4>
      <div className="tds-u-flex tds-u-gap2 tds-u-align-center tds-u-mt3">
        <TdsChip size="lg">
          <span slot="label">Large Chip</span>
        </TdsChip>
        <TdsChip size="sm">
          <span slot="label">Small Chip</span>
        </TdsChip>
      </div>
    </article>
  );
};

export default About;
