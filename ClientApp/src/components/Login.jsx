import React from 'react'

export function Login() {
  return (
    <body>
      <div className="Login-form">
        <form action="/examples/actions/confirmation.php" method="post">
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
            ></input>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="confirm_password"
              placeholder="Confirm Password"
              required
            ></input>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-success">
              Login
            </button>
          </div>
        </form>
        <div className="hint-text">
          Don't have account? <a href="#">Sign Up here</a>
        </div>
      </div>
    </body>
  )
}
