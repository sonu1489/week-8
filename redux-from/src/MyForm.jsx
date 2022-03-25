import React from "react";
import { Field, reduxForm, SubmissionError } from "redux-form";
// material-ui

import Button from "@material-ui/core/Button";

// async function submitToServer(data) {
//   try {
//     let response = await fetch("http://localhost:3000/post", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     let responseJson = await response.json();
//     return responseJson;
//   } catch (error) {
//     console.log(error);
//   }
// }

const home = ({ firstName = "", lastName = "", email = "" }) => {
  let error = {};
  let isError = false;
  // print the form values to the console
  // console.log(values);
  if (firstName.trim() === "") {
    error.firstName = "Required";
    isError = true;
  }
  if (lastName.trim() === "") {
    error.lastName = "Required";
    isError = true;
  }
  if (email.trim() === "") {
    error.email = "Required";
    isError = true;
  }
  if (isError) {
    throw new SubmissionError(error);
  } else {
    alert("submited");

    // window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    // return submitToServer({ firstName, lastName, email }).then((data) => {
    //   console.log(data);
    // if (data.errors) {
    //   throw new SubmissionError(data.errors);
    // } else {
    //   console.log("data is submited to server");
    // }
    // });
  }
};
const renderField = ({ input, label, meta: { touched, error } }) => (
  <div className="input-row">
    <label className="label">{label}</label>
    <br />

    <input {...input} type="text" className="input" />
    <br />

    {touched && error && <span className="error">{error}</span>}
  </div>
);

const ContactFormFunc = ({ handleSubmit }) => {
  return (
    <div className="container">
      <form onSubmit={handleSubmit(home)}>
        <Field
          name="firstName"
          label="firstName"
          component={renderField}
          type="text"
          className="field"
        />

        <Field
          name="lastName"
          label="lastName"
          component={renderField}
          type="text"
        />

        <Field
          name="email"
          label="email"
          component={renderField}
          type="email"
        />

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

const ContactForm = reduxForm({
  // a unique name for the form
  form: "contact",
})(ContactFormFunc);

export default ContactForm;
// what is reduc form
