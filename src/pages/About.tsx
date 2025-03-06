import { TdsButton, TdsDivider, TdsIcon } from '@scania/tegel-react';

const About = () => {
  return (
    <article>
      <h3>About this page</h3>
      <p>
        This page is a testing ground and demo for using @scania/tegel-react in a React application.
      </p>
      <TdsDivider />
      <br />
      <br />
      <br />
      <br />
      <br />
      <TdsButton
        style={{ margin: '10px' }}
        onClick={() => alert('Clicked button!')}
      ></TdsButton>{' '}
      <br />
      <TdsButton
        style={{ margin: '10px' }}
        onClick={() => alert('Clicked button!')}
        disabled
        text="disabled"
      ></TdsButton>
      <br />
      <TdsButton
        style={{ margin: '10px' }}
        onClick={() => alert('Clicked button!')}
        disabled={true}
        text="disabled={true}"
      ></TdsButton>
      <br />
      <TdsButton
        style={{ margin: '10px' }}
        onClick={() => alert('Clicked button!')}
        disabled={false}
        text="disabled={false}"
      ></TdsButton>
      <br />
      <TdsButton
        style={{ margin: '10px' }}
        onClick={() => alert('Clicked button!')}
        disabled={undefined}
        text="disabled={undefined}"
      ></TdsButton>
      <br />
      <br />
      <br />
      <br />
      <br />
    </article>
  );
};

export default About;
