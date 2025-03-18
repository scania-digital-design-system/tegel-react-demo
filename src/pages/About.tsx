import { TdsChip, TdsDivider } from '@scania/tegel-react';

const About = () => {
  return (
    <article>
      <h3>About this page</h3>
      <p>
        This page is a testing ground and demo for using @scania/tegel-react in a React application.
      </p>

      <TdsDivider />

      <TdsChip>
        <span slot="label">Checkbox label</span>
      </TdsChip>
    </article>
  );
};

export default About;
