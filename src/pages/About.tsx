import { TdsDivider, TdsTextField } from '@scania/tegel-react';
import { useState } from 'react';

const About = () => {
  const [text, setText] = useState('');

  return (
    <article>
      <h3>About this page</h3>
      <p>
        This page is a testing ground and demo for using @scania/tegel-react in a React application.
      </p>

      <TdsDivider />

      <TdsTextField
        helper={text.length > 5 ? 'ERROR MESSAGE HERE' : 'Max 5 characters allowed'}
        state={text.length > 5 ? 'error' : undefined}
        onTdsInput={(e) => setText(e.target.value)}
        value={text}
      />
    </article>
  );
};

export default About;
