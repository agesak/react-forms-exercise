import React, {useState} from 'react';
import './SignupForm.css';

const SignupForm = () => {

  const [formFields, setFormFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const onFirstNameChange = (event) => {
    setFormFields({
      ...formFields,
      firstName: event.target.value
    })
  }

  const onLastNameChange = (event) => {
    setFormFields({
      ...formFields,
      lastName: event.target.value
    })
  }

  const onEmailChange = (event) => {
    setFormFields({
      ...formFields,
      email: event.target.value
    })
  }

  const onPasswordChange = (event) => {
    setFormFields({
      ...formFields,
      password: event.target.value
    })
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(formFields)
    setFormFields({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    })
  }

  return (
    <form className="signup-form" onSubmit={onFormSubmit}>
      <section className="signup-form-name-section">
      <label>
        <input className="first-name" type="text" placeholder="First Name" value={formFields.firstName} onChange={onFirstNameChange} ></input>
      </label>
      <label>
        <input className="last-name" type="text" placeholder="Last Name" value={formFields.lastName} onChange={onLastNameChange}></input>
      </label>
      </section>
      <label>
        <input className="email" type="text" placeholder="your@email.com" value={formFields.email} onChange={onEmailChange}></input>
      </label>
      <label>
        <input className="password" type="text" placeholder="*****" value={formFields.password} onChange={onPasswordChange}></input>
      </label>
      <span>By creating an account, you agree to our Terms & Conditions</span>
      <label>
        <input className="submit-button" type="submit" value="Create Account"></input>
      </label>
    </form>
  )
};

export default SignupForm;