import React from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField } from '@department-of-veterans-affairs/formulate';

export const DefaultForm = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          testVal: '',
          email: '',
        }}
        onSubmit={async values => {
          await new Promise(r => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field 
            id="firstName" 
            name="firstName" 
            placeholder="Jane"
            required
        />

          <label htmlFor="lastName">Last Name</label>
          <Field 
            id="lastName" 
            name="lastName" 
            placeholder="Doe"
            required
        />

          <label htmlFor="testVal">Testing TextField</label>
          <TextField
            name="Testing Field Data"
            label="This is the label for the Field Data"
            required
          />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
            required
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
