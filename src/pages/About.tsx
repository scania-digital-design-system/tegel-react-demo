import { useState } from 'react';
import { TdsTextField, TdsTextarea, TdsButton } from '@scania/tegel-react';

const About = () => {
  const [textFieldInvalid, setTextFieldInvalid] = useState(false);
  const [textareaInvalid, setTextareaInvalid] = useState(false);

  return (
    <article>
      <h3>About this page</h3>
      <p>
        This page is a testing ground and demo for using @scania/tegel-react in a React application.
      </p>

      <div style={{ marginTop: '2rem' }}>
        <h4>Testing aria-invalid attribute</h4>

        <div style={{ marginBottom: '1rem' }}>
          <h5>TextField with aria-invalid toggle</h5>
          <TdsTextField
            size="md"
            placeholder="Type something here"
            aria-invalid={textFieldInvalid}
            helper={textFieldInvalid ? 'This field has an error' : ''}
            state={textFieldInvalid ? 'error' : 'default'}
          />
          <div style={{ marginTop: '0.5rem' }}>
            <TdsButton
              size="sm"
              variant="secondary"
              onClick={() => setTextFieldInvalid(!textFieldInvalid)}
              fullbleed
              text={`Toggle TextField aria-invalid (${textFieldInvalid ? 'true' : 'false'})`}
            ></TdsButton>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h5>Textarea with aria-invalid toggle</h5>
          <TdsTextarea
            rows={3}
            placeholder="Type something here"
            aria-invalid={textareaInvalid}
            helper={textareaInvalid ? 'This textarea has an error' : ''}
            state={textareaInvalid ? 'error' : 'default'}
            label="Textarea Label"
            labelPosition="outside"
          />
          <div style={{ marginTop: '0.5rem' }}>
            <TdsButton
              size="sm"
              variant="secondary"
              onClick={() => setTextareaInvalid(!textareaInvalid)}
              fullbleed
              text={`Toggle Textarea aria-invalid (${textareaInvalid ? 'true' : 'false'})`}
            ></TdsButton>
          </div>
        </div>

        <div
          style={{
            marginTop: '1rem',
            padding: '1rem',
            backgroundColor: '#f5f5f5',
            borderRadius: '4px',
          }}
        >
          <h6>Instructions:</h6>
          <ul>
            <li>Click the toggle buttons to switch the aria-invalid state</li>
            <li>When aria-invalid is true, the fields will show error styling and helper text</li>
            <li>
              Use browser dev tools to inspect the aria-invalid attribute on the input elements
            </li>
            <li>Test with screen readers to verify the accessibility behavior</li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default About;
