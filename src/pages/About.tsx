import { useState } from 'react';
import { TdsTextField, TdsButton } from '@scania/tegel-react';

const About = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Form submitted with value: "${inputValue}"`);
    setInputValue(''); // Clear the input after submission
  };

  return (
    <article className="about-page">
      <h3>About this page</h3>
      <p>
        This page is a testing ground and demo for using @scania/tegel-react in a React application.
      </p>

      <div className="tds-u-pt3">
        <h4 className="tds-headline-02 tds-u-pb1">Test Form</h4>
        <form onSubmit={handleSubmit} className="responsive-form">
          <div className="form-field-container tds-u-pb2">
            <TdsTextField
              size="md"
              placeholder="Enter some text here..."
              value={inputValue}
              onTdsInput={(e) => setInputValue(e.target.value)}
            ></TdsTextField>
          </div>
          <div className="form-button-container">
            <TdsButton type="submit" variant="primary" size="md" text="Submit" fullbleed />
          </div>
        </form>
      </div>

      <style>{`
        .about-page {
          max-width: 100%;
          width: 100%;
        }

        .responsive-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 100%;
        }

        .form-field-container {
          width: 100%;
        }

        .form-button-container {
          width: 100%;
        }

        /* Mobile-first responsive design */
        @media (max-width: 767px) {
          .about-page {
            padding: 0 16px;
          }

          .responsive-form {
            gap: 12px;
          }
        }

        /* Tablet and up */
        @media (min-width: 768px) {
          .responsive-form {
            max-width: 500px;
          }
        }

        /* Desktop */
        @media (min-width: 992px) {
          .responsive-form {
            max-width: 600px;
          }
        }
      `}</style>
    </article>
  );
};

export default About;
