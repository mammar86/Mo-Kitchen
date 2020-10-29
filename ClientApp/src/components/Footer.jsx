import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export function Footer() {
  const [filterText, setFilterText] = useState('')
  const history = useHistory()

  async function loadSearch(event) {
    event.preventDefault()
    if (filterText.length !== 0) history.push(`/search/${filterText}`)
  }
  return (
    <footer className="page-footer font-small special-color-dark pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <form className="form-inline" onSubmit={loadSearch}>
              <input
                className="form-control form-control-sm mr-3 w-75"
                type="text"
                placeholder="Search Recipes"
                aria-label="Search"
                onChange={(event) => setFilterText(event.target.value)}
              ></input>

              <button
                className="btn btn-sm btn-outline-white my-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>

          <div className="col-md-6 mb-4">
            <form
              className="input-group"
              onSubmit={() => history.push('/signup')}
            >
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Your email"
                aria-label="Your email"
                aria-describedby="basic-addon2"
              ></input>
              <div className="input-group-append">
                <button
                  className="btn btn-sm btn-outline-white my-0"
                  type="submit"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="http://mokitchen.herokuapp.com/"> mokitchen.herokuapp.com </a>
      </div>
    </footer>
  )
}
