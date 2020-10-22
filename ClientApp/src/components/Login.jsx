import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { recordAuthentication } from '../auth'

export function Login() {
  const [errorMessage, setErrorMessage] = useState()
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name
    const updatedUser = { ...user, [fieldName]: value }
    setUser(updatedUser)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/Sessions', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
    })

    const apiResponse = await response.json()

    if (apiResponse.status === 400) {
      setErrorMessage(Object.values(apiResponse.errors).join(' '))
    } else {
      recordAuthentication(apiResponse)
      window.location.assign('/')
    }
  }

  return (
    <body>
      <div className="Login-form">
        <form onSubmit={handleFormSubmit}>
          <h2>Login</h2>
          <p>Please fill in this form to access your account!</p>
          <hr></hr>
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
              placeholder="password"
              required
              onChange={handleStringFieldChange}
            ></input>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-success">
              Login
            </button>
          </div>
          {errorMessage && <p>{errorMessage}</p>}
        </form>
        <div className="hint-text">
          Don't have account? <Link to="/signup">SignUp here</Link>
        </div>
      </div>
    </body>
  )
}
