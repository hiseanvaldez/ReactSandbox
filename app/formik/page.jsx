"use client";

import { Field, Form, Formik } from "formik";
import { number, object, string } from "yup";
import Button from "../components/Button";
import Container from "../components/Container";
import Input from "../components/Input";
import Select from "../components/Select";

const occupations = [
  { value: "Allottee", label: "Allottee" },
  { value: "BPO Agent", label: "BPO Agent" },
  { value: "Commission-based", label: "Commission-based" },
  { value: "Construction Workers", label: "Construction Workers" },
  {
    value: "Consultant / Entertainers / Professional Athletes",
    label: "Consultant / Entertainers / Professional Athletes",
  },
  { value: "Court Personnel", label: "Court Personnel" },
  {
    value: "Farmers, Forestry Workers and Fishermen",
    label: "Farmers, Forestry Workers and Fishermen",
  },
  { value: "Foreigner - Top Management", label: "Foreigner - Top Management" },
  { value: "Government Official", label: "Government Official" },
  { value: "Managerial", label: "Managerial" },
  { value: "Medical Personnel", label: "Medical Personnel" },
  { value: "Non-management", label: "Non-management" },
  {
    value: "Non-management - Probationary",
    label: "Non-management - Probationary",
  },
  {
    value: "Overseas Worker - Professional",
    label: "Overseas Worker - Professional",
  },
  {
    value: "Overseas Worker - Skilled Worker",
    label: "Overseas Worker - Skilled Worker",
  },
  { value: "Pensioner", label: "Pensioner" },
  { value: "Practicing Profession", label: "Practicing Profession" },
  { value: "Production Worker", label: "Production Worker" },
  { value: "Sales", label: "Sales" },
  { value: "Self-employed", label: "Self-employed" },
  { value: "Service Worker", label: "Service Worker" },
  { value: "Skilled Technical", label: "Skilled Technical" },
  { value: "Special Occupation", label: "Special Occupation" },
  { value: "Supervisory", label: "Supervisory" },
  { value: "Top Management", label: "Top Management" },
  { value: "None", label: "None" },
  { value: "Not Applicable", label: "Not Applicable" },
];

const FormikTest = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    allowance: "",
    occupation: "",
  };

  const validationSchema = object().shape({
    firstName: string().required(),
    lastName: string().required(),
    email: string().email().required(),
    allowance: number().min(0).required(),
    occupation: string().required(),
  });

  const handleSubmit = (value) => {
    console.log(value);
  };

  return (
    <Container>
      <div className="flex h-full flex-col justify-between">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ values, errors, touched, setFieldTouched, setFieldValue }) => {
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
                <Select
                  name="occupation"
                  label="Occupation"
                  options={occupations}
                  value={values.occupation}
                  errors={errors}
                  touched={touched}
                  onBlur={() => setFieldTouched("occupation", true, true)}
                  onSelect={(value) =>
                    setFieldValue("occupation", value.label, true)
                  }
                />
                <Button type="submit" label="Validate" />
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
