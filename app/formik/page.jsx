"use client";

import { Field, Form, Formik } from "formik";
import { number, object, string } from "yup";
import Container from "../components/Container";
import Input from "../components/Input";

const FormikTest = () => {
  const validationSchema = object().shape({
    firstName: string().required(),
    lastName: string().required(),
    email: string().email().required(),
    allowance: number().min(0).required(),
  });

  const handleSubmit = (value) => {
    console.log(value);
  };

  return (
    <Container>
      <div className="flex h-full flex-col justify-between">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            allowance: "",
            occupation: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {() => {
            return (
              <Form>
                <Field
                  name="firstName"
                  label="First Name"
                  component={Input}
                  required
                />
                <Field
                  name="lastName"
                  label="First Name"
                  component={Input}
                  required
                />
                <Field name="email" label="Email" component={Input} required />
                <Field
                  name="allowance"
                  label="Allowance"
                  component={Input}
                  required
                  currency={"₱"}
                />
              </Form>
            );
          }}
        </Formik>
        <p className="text-xs italic">* No data is saved or sent anywhere *</p>
      </div>
    </Container>
  );
};

export default FormikTest;
