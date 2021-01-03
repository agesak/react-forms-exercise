import React, {useState} from 'react';

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
    <form onSubmit={onFormSubmit}>
      <label>
        First name: <input type="text" value={formFields.firstName} onChange={onFirstNameChange} ></input>
      </label>
      <label>
        Last name: <input type="text" value={formFields.lastName} onChange={onLastNameChange}></input>
      </label>
      <label>
        Email: <input type="text" value={formFields.email} onChange={onEmailChange}></input>
      </label>
      <label>
        Password: <input type="text" value={formFields.password} onChange={onPasswordChange}></input>
      </label>
      <label>
        Create Account: <input type="submit"></input>
      </label>
    </form>
  )
};

export default SignupForm;