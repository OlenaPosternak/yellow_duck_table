import { Formik } from 'formik';

import { FieldStyle, Btn, FormStyle } from './EditUser.style';
export const EditUserDataForm = ({ editUserInfo, row }) => {
  return (
    <div>
      <Formik
        initialValues={{
          name: row.name,
          email: row.email,
          age: row.age,
        }}
        onSubmit={values => editUserInfo(values, row.id)}
      >
        <FormStyle>
          <FieldStyle name="name" placeholder="Jane" />
          <FieldStyle name="email" placeholder="jane@acme.com" type="email" />
          <FieldStyle name="age" placeholder="your age" />
          <Btn type="submit">Save</Btn>
        </FormStyle>
      </Formik>
    </div>
  );
};
