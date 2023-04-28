import { Formik } from 'formik';

import { FieldStyle, FormStyle, Btn } from './AddUser.styles';

export const AddUserForm = ({ handleSubmit, user }) => {
  return (
    <Formik initialValues={user} onSubmit={handleSubmit}>
      <FormStyle>
        <label htmlFor="name">Name</label>
        <FieldStyle id="name" name="name" placeholder="Jane" />

        <label htmlFor="email">email</label>
        <FieldStyle
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />

        <label htmlFor="age">age</label>
        <FieldStyle id="age" name="age" placeholder="your age" />
        <Btn type="submit">Add user</Btn>
      </FormStyle>
    </Formik>
  );
};
