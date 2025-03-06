import { TdsBlock, TdsButton } from '@scania/tegel-react';

const About = () => {
  return (
    <article>
      <h3>About this page</h3>
      <p>
        <TdsBlock>
          This page is a simple example of a React application created with Create React App. It
          uses the{' '}
          <a
            href="
          https://www.npmjs.com/package/@scania/tegel-react"
            target="_blank"
            rel="noreferrer"
          >
            Tegel React
          </a>{' '}
          <TdsBlock>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            </div>
            <TdsButton
              type="button"
              size="lg"
              animation="fade"
              variant="primary"
              text="Button"
              modeVariant="primary"
            ></TdsButton>
            <TdsBlock>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              <TdsBlock>Test text bla bla bla </TdsBlock>
            </TdsBlock>
          </TdsBlock>
        </TdsBlock>
      </p>
    </article>
  );
};

export default About;
