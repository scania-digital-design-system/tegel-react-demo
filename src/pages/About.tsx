import { useState } from 'react';
import {
  TdsTextField,
  TdsButton,
  TdsTextarea,
  TdsDropdown,
  TdsDropdownOption,
  TdsCheckbox,
  TdsRadioButton,
} from '@scania/tegel-react';

const About = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    country: '',
    newsletter: false,
    experience: '',
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Form submitted with data: ${JSON.stringify(formData, null, 2)}`);
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      country: '',
      newsletter: false,
      experience: '',
    });
  };

  return (
    <article className="about-page">
      <h3>About this page</h3>
      <p>
        This page is a testing ground and demo for using @scania/tegel-react in a React application.
      </p>

      <div className="tds-u-pt3">
        <h4 className="tds-headline-02 tds-u-pb1">Contact Form</h4>
        <form onSubmit={handleSubmit} className="responsive-form">
          {/* Two-column layout for name fields */}
          <div className="form-row">
            <div className="form-field-container">
              <TdsTextField
                size="md"
                label="First Name"
                labelPosition="outside"
                placeholder="Enter your first name"
                value={formData.firstName}
                onTdsInput={(e) => handleInputChange('firstName', e.target.value)}
              />
            </div>
            <div className="form-field-container">
              <TdsTextField
                size="md"
                label="Last Name"
                labelPosition="outside"
                placeholder="Enter your last name"
                value={formData.lastName}
                onTdsInput={(e) => handleInputChange('lastName', e.target.value)}
              />
            </div>
          </div>

          {/* Two-column layout for contact fields */}
          <div className="form-row">
            <div className="form-field-container">
              <TdsTextField
                size="md"
                label="Email"
                labelPosition="outside"
                placeholder="your.email@example.com"
                value={formData.email}
                onTdsInput={(e) => handleInputChange('email', e.target.value)}
              />
            </div>
            <div className="form-field-container">
              <TdsTextField
                size="md"
                label="Phone"
                labelPosition="outside"
                placeholder="+46 123 456 789"
                value={formData.phone}
                onTdsInput={(e) => handleInputChange('phone', e.target.value)}
              />
            </div>
          </div>

          {/* Single field for company */}
          <div className="form-field-container">
            <TdsTextField
              size="md"
              label="Company"
              labelPosition="outside"
              placeholder="Your company name"
              value={formData.company}
              onTdsInput={(e) => handleInputChange('company', e.target.value)}
            />
          </div>

          {/* Dropdown for country */}
          <div className="form-field-container">
            <TdsDropdown
              size="md"
              label="Country"
              labelPosition="outside"
              placeholder="Select your country"
              value={formData.country}
              onTdsChange={(e) => handleInputChange('country', e.detail.value)}
            >
              <TdsDropdownOption value="sweden">Sweden</TdsDropdownOption>
              <TdsDropdownOption value="norway">Norway</TdsDropdownOption>
              <TdsDropdownOption value="denmark">Denmark</TdsDropdownOption>
              <TdsDropdownOption value="finland">Finland</TdsDropdownOption>
              <TdsDropdownOption value="germany">Germany</TdsDropdownOption>
              <TdsDropdownOption value="other">Other</TdsDropdownOption>
            </TdsDropdown>
          </div>

          {/* Textarea for message */}
          <div className="form-field-container">
            <TdsTextarea
              label="Message"
              labelPosition="outside"
              placeholder="Tell us about your project or inquiry..."
              value={formData.message}
              onTdsInput={(e) => handleInputChange('message', e.target.value)}
            />
          </div>

          {/* Radio buttons for experience */}
          <div className="form-field-container">
            <h5 className="tds-headline-03 tds-u-pb1">Experience Level</h5>
            <div className="radio-group">
              <TdsRadioButton
                value="beginner"
                name="experience"
                checked={formData.experience === 'beginner'}
                onTdsChange={() => handleInputChange('experience', 'beginner')}
              >
                <div slot="label">Beginner (0-2 years)</div>
              </TdsRadioButton>
              <TdsRadioButton
                value="intermediate"
                name="experience"
                checked={formData.experience === 'intermediate'}
                onTdsChange={() => handleInputChange('experience', 'intermediate')}
              >
                <div slot="label">Intermediate (2-5 years)</div>
              </TdsRadioButton>
              <TdsRadioButton
                value="advanced"
                name="experience"
                checked={formData.experience === 'advanced'}
                onTdsChange={() => handleInputChange('experience', 'advanced')}
              >
                <div slot="label">Advanced (5+ years)</div>
              </TdsRadioButton>
            </div>
          </div>

          {/* Checkbox for newsletter */}
          <div className="form-field-container">
            <TdsCheckbox
              value="newsletter"
              name="newsletter"
              checked={formData.newsletter}
              onTdsChange={(e) => handleInputChange('newsletter', e.detail.checked)}
            >
              <div slot="label">Subscribe to our newsletter for updates and tips</div>
            </TdsCheckbox>
          </div>

          {/* Submit button */}
          <div className="form-button-container">
            <TdsButton type="submit" variant="primary" size="md" text="Submit Form" fullbleed />
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
          gap: 20px;
          max-width: 100%;
          width: 100%;
          box-sizing: border-box;
        }

        /* Two-column layout for form rows */
        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          width: 100%;
        }

        .form-field-container {
          width: 100%;
          box-sizing: border-box;
        }

        .form-button-container {
          width: 100%;
          box-sizing: border-box;
        }

        /* Radio button group styling */
        .radio-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        /* Ensure all form elements respect container width */
        .form-field-container tds-text-field,
        .form-field-container tds-textarea,
        .form-field-container tds-dropdown,
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
            gap: 16px;
            padding: 0;
          }

          .form-row {
            gap: 12px;
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
            gap: 12px;
          }

          .form-row {
            gap: 8px;
          }
        }

        /* Extra small devices */
        @media (max-width: 320px) {
          .about-page {
            padding: 0 4px;
          }

          .responsive-form {
            gap: 8px;
          }
        }

        /* Tablet and up - enable 2-column layout */
        @media (min-width: 768px) {
          .form-row {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }

          .responsive-form {
            max-width: 600px;
            margin: 0 auto;
          }
        }

        /* Desktop */
        @media (min-width: 992px) {
          .responsive-form {
            max-width: 700px;
          }

          .form-row {
            gap: 20px;
          }
        }

        /* Large desktop */
        @media (min-width: 1200px) {
          .responsive-form {
            max-width: 800px;
          }
        }

        /* Prevent horizontal overflow globally */
        * {
          box-sizing: border-box;
        }

        /* Ensure text doesn't cause overflow */
        h3, h4, h5, p {
          word-wrap: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
        }

        /* Form section spacing */
        .form-field-container {
          margin-bottom: 4px;
        }

        /* Radio button and checkbox spacing */
        .radio-group tds-radio-button,
        .form-field-container tds-checkbox {
          margin-bottom: 8px;
        }
      `}</style>
    </article>
  );
};

export default About;
