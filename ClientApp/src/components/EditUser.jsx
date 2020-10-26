import React, { useState } from 'react'
import { authHeader, getUser, updateUserAuth } from '../auth'

export function EditUser() {
  const user = getUser()
  const [errorMessage, setErrorMessage] = useState()
  const [updatedUser, setUpdatedUser] = useState({
    id: user.id,
    fullName: user.fullName,
    email: user.email,
    password: '',
    // photoURL: user.photoURL,
  })

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name
    const newUpdatedUser = { ...updatedUser, [fieldName]: value }
    setUpdatedUser(newUpdatedUser)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()
    const response = await fetch(`/api/Users/${user.id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json', ...authHeader() },
      body: JSON.stringify(updatedUser),
    })

    const apiResponse = await response.json()
    if (apiResponse.status === 400) {
      setErrorMessage(Object.values(apiResponse.errors).join(' '))
    } else {
      updateUserAuth(apiResponse)
      window.location.assign('/')
    }
  }

  return (
    <body>
      <div className="signup-form">
        <form onSubmit={handleFormSubmit}>
          <h2>Edit User Information</h2>
          <p>Please update required fields and submit!</p>
          <hr></hr>
          <div className="form-group">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="fullName"
                placeholder="Full Name"
                required
                value={updatedUser.fullName}
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
              value={updatedUser.email}
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
              value={updatedUser.password}
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
              value={updatedUser.password}
              onChange={handleStringFieldChange}
            ></input>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
          {errorMessage && <p>{errorMessage}</p>}
        </form>
      </div>
    </body>
  )
}
