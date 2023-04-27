import { Formik, Field, Form } from 'formik';

export const AddUserForm = ({ handleSubmit, user }) => {
    return (
      <Formik initialValues={user} onSubmit={handleSubmit}>
        <Form>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="Jane" />
  
          <label htmlFor="email">email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
  
          <label htmlFor="age">age</label>
          <Field id="age" name="age" placeholder="your age" />
          <button type="submit">Add user</button>
        </Form>
      </Formik>
    );
  };
  
  