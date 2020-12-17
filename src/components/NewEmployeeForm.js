import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form, Field } from "formik";

const api =
  "http://employeedirectory-env-1.eba-jjpa4s2k.us-east-2.elasticbeanstalk.com/v1/";
const local = "http://localhost:5000/v1/";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function FormDirectory() {
  const initialValues = {
    firstName: "",
    lastName: "",
    position: "",
    salary: "",
  };
  return (
    <div>
      <Formik
        initialValues={{
          initialValues,
        }}
        onSubmit={async (values, { resetForm }) => {
          const response = await fetch(api + "directory/newEmployee", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });
          console.log(response.status);
          resetForm(initialValues);
        }}
      >
        {({ resetForm }) => (
          <Form>
            <Field
              id="firstName"
              name="firstName"
              placeholder="First Name"
              css
            />
            <Field id="lastName" name="lastName" placeholder="Last Name" css />
            <Field id="position" name="position" placeholder="Position" css />
            <Field id="salary" name="salary" placeholder="Salary" css />
            <button type="submit" >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
