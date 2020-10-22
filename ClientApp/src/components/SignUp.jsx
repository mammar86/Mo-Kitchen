import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

export function SignUp() {
  const [errorMessage, setErrorMessage] = useState()
  const [newUser, setNewUser] = useState({
    fullName: '',
    email: '',
    password: '',
  })

  const history = useHistory()

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name
    const updatedUser = { ...newUser, [fieldName]: value }
    setNewUser(updatedUser)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()
    const response = await fetch('/api/Users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newUser),
    })
    const apiResponse = await response.json()
    if (apiResponse.status === 400) {
      setErrorMessage(Object.values(apiResponse.errors).join(' '))
    } else {
      history.push('/')
    }
  }

  return (
    <body>
      <div className="signup-form">
        <form onSubmit={handleFormSubmit}>
          <h2>Sign Up</h2>
          <p>Please fill in this form to create an account!</p>
          <hr></hr>
          <div className="form-group">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="fullName"
                placeholder="Full Name"
                required
                onChange={handleStringFieldChange}
              ></input>
            </div>
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              required
              onChange={handleStringFieldChange}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              required
              onChange={handleStringFieldChange}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="confirm_password"
              placeholder="Confirm Password"
              required
              onChange={handleStringFieldChange}
            ></input>
          </div>
          {/* <div className="form-group">
            <label className="form-check-label">
              <input type="checkbox" required></input> I accept the{' '}
              <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>
            </label>
          </div> */}
          <div className="form-group">
            <button type="submit" className="btn btn-success">
              Sign Up
            </button>
          </div>
          {errorMessage && <p>{errorMessage}</p>}
        </form>
        <div className="hint-text">
          Already have an account? <Link to="/login">Login here</Link>
        </div>
      </div>
    </body>
  )
}
