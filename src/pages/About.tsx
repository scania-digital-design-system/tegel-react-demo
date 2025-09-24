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
            />
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
          padding: 0;
          box-sizing: border-box;
          overflow-x: hidden;
        }

        .responsive-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 100%;
          width: 100%;
          box-sizing: border-box;
        }

        .form-field-container {
          width: 100%;
          box-sizing: border-box;
        }

        .form-button-container {
          width: 100%;
          box-sizing: border-box;
        }

        /* Ensure all elements respect container width */
        .form-field-container tds-text-field,
        .form-button-container tds-button {
          width: 100% !important;
          max-width: 100% !important;
          box-sizing: border-box;
        }

        /* Mobile-first responsive design */
        @media (max-width: 767px) {
          .about-page {
            padding: 0 12px;
            overflow-x: hidden;
          }

          .responsive-form {
            gap: 12px;
            padding: 0;
          }

          .form-field-container,
          .form-button-container {
            width: 100%;
            max-width: 100%;
          }
        }

        /* Small mobile devices */
        @media (max-width: 480px) {
          .about-page {
            padding: 0 8px;
          }

          .responsive-form {
            gap: 8px;
          }
        }

        /* Extra small devices */
        @media (max-width: 320px) {
          .about-page {
            padding: 0 4px;
          }
        }

        /* Tablet and up */
        @media (min-width: 768px) {
          .responsive-form {
            max-width: 500px;
            margin: 0 auto;
          }
        }

        /* Desktop */
        @media (min-width: 992px) {
          .responsive-form {
            max-width: 600px;
          }
        }

        /* Large desktop */
        @media (min-width: 1200px) {
          .responsive-form {
            max-width: 700px;
          }
        }

        /* Prevent horizontal overflow globally */
        * {
          box-sizing: border-box;
        }

        /* Ensure text doesn't cause overflow */
        h3, h4, p {
          word-wrap: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
        }
      `}</style>
    </article>
  );
};

export default About;
