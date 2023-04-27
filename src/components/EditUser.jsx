import { Formik, Field, Form } from 'formik';
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
          <Form>
            <Field name="name" placeholder="Jane" />
            <Field name="email" placeholder="jane@acme.com" type="email" />
            <Field name="age" placeholder="your age" />
            <button type="submit">Save</button>
          </Form>
        </Formik>
      </div>
    );
  };
  