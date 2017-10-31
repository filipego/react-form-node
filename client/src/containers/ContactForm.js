import React from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'


const submit = ({ firstName = "", lastName = "", email = "" }) => {
  let error = {};
  let isError = false;

  if(firstName.trim() === ""){
    error.firstName = "Required";
    isError = true;
  }

  if(lastName.trim() === ""){
    error.lastName = "Required";
    isError = true;
  }

  if(email.trim() === ""){
    error.email = "Required";
    isError = true;
  }

  if(isError) {
    throw new SubmissionError(error)
  } else {
    // submit for to server
    console.log("Form submitted successfuly");
  }
}

const renderField = ({ label, input, placeholder, type, meta: { touched, error } }) => (
  <div className="input-row">
    <label>{label}</label>
    <br />
    <input {...input} placeholder={placeholder} type={type}/>
    {touched && error &&
     <span className="error">{error}</span>}
  </div>
)

let ContactForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={ handleSubmit(submit) }>
        <Field name="firstName" label="First Name" component={renderField} type="text" />
        <Field name="lastName" label="First Name" component={renderField} type="text" />
        <Field name="email" label="Email" placeholder="email@email.com" component={renderField} type="email" />
        <button type="submit">Submit</button>
    </form>
  )
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)

export default ContactForm;
