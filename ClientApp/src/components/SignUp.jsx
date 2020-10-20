import React from 'react'

export function SignUp() {
  return (
    <section className="signup-section">
      <div className="signup-form">
        <form action="/examples/actions/confirmation.php" method="post">
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
            ></input>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
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
            <button type="submit" className="btn btn-primary btn-lg">
              Sign Up
            </button>
          </div>
        </form>
        <div className="hint-text">
          Already have an account? <a href="#">Login here</a>
        </div>
      </div>
    </section>
  )
}
