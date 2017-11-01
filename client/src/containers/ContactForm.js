import React from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'


const submit = ({ firstName = "", lastName = "", email = "", message = "" }) => {
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

  if(message.trim() === ""){
    error.message = "Required";
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
    {touched && error &&
     <span className="error">{error}</span>}
    <label>{label}</label>
    <input {...input} placeholder={placeholder} type={type}/>
  </div>
)

const renderTextArea = ({ label, textarea, placeholder, meta: { touched, error } }) => (
  <div className="input-row textarea">
    {touched && error &&
     <span className="error">{error}</span>}
    <label>{label}</label>
    <textarea {...textarea} placeholder={placeholder}/>
  </div>
)

let ContactForm = ({ handleSubmit }) => {
  return (
    <form className="contact-form" onSubmit={ handleSubmit(submit) }>
        <Field name="firstName" label="First Name" placeholder="First Name *" component={renderField} type="text" />
        <Field name="lastName" label="Last Name" placeholder="Last Name *" component={renderField} type="text" />
        <Field name="email" label="Email" placeholder="email@email.com *" component={renderField} type="email" />
        <Field name="message" label="Message" placeholder="Message *" component={renderTextArea} />
        <button type="submit">Submit</button>
    </form>
  )
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)

export default ContactForm;
