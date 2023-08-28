import { useState } from 'react';
import './FormPage.scss';
import Form from './Form';

const FormPage = () => {
  const [submitted, setSubmitted] = useState(false);


  return (
    <>
      {submitted ? (
        <div>Success!</div>
      ) : (
        <Form setSubmitted={setSubmitted} />
      )}
    </>
  );
};

export default FormPage;
