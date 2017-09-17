import React, { Component } from 'react'
import { Field, reduxForm, SubmisssionError} from 'redux-form'


 const  submit = ({firstName='', lastName='', email=''}) => {
       let error = {};
       let isError = false;



       if(firstName.trim() === '') {
          error.firstName = 'Required';
          isError = true;
       }


      if(lastName.trim() === '') {
          error.lastName = 'Required';
          isError = true;
       }

       if(email.trim() === '') {
          error.email = 'Required';
          isError = true;
       }

       if(isError){
        throw new SubmisssionError(error)
       }
       else {
        //submit form to server
       }
      }
      // outside your render() method
const renderField = ({text, label, input, meta: {touched, error}}) => (
    <div className="input-row">
      <label>{label}</label>
      <input {...input} type={text}/>
      {touched && error && 
       <span className="error">{error}</span>}
    </div>
  )
 
const ContactFormFunc = ({handleSubmit}) => (
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" label="firstName" component={renderField} type="text" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" label="lastName"  component={renderField} type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" label="email"  component={renderField} type="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
 
const ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactFormFunc)

export default ContactForm;