import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUser, isLoggedIn, logout } from '../auth'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const user = getUser()

  function handleLogout() {
    logout()
    window.location.assign('/')
  }
  return (
    <header>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Mo's Kitchen</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {isLoggedIn() && (
              <NavItem>
                <NavLink href="/add">ADD-RECIPE</NavLink>
              </NavItem>
            )}

            {isLoggedIn() || (
              <NavItem>
                <NavLink href="/login">LOGIN</NavLink>
              </NavItem>
            )}
            {isLoggedIn() || (
              <NavItem>
                <NavLink href="/signup">SIGNUP</NavLink>
              </NavItem>
            )}

            {isLoggedIn() && (
              <NavItem>
                <NavLink className="link" onClick={handleLogout}>
                  SIGN OUT
                </NavLink>
              </NavItem>
            )}
            {isLoggedIn() && (
              <NavItem>
                <NavLink href="/profile">PROFILE</NavLink>
              </NavItem>
            )}

            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          <NavbarText>
            {isLoggedIn() && <p>Welcome back, {user.fullName}!</p>}
          </NavbarText>
        </Collapse>
      </Navbar>
    </header>
  )
}

export function Cards() {
  const [recipes, setRecipes] = useState([])
  const [filterText, setFilterText] = useState('')

  const User = getUser()

  useEffect(
    // we used a function inside of a function here because use async with the first function create and error
    () => {
      async function loadRecipes() {
        const url =
          filterText.length === 0
            ? '/api/Recipes'
            : `/api/Recipes?filter=${filterText}`
        const response = await fetch(url)
        const json = await response.json()
        setRecipes(json)
      }
      loadRecipes()
    },
    [filterText]
  )

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const user = getUser()

  function handleLogout() {
    logout()
    window.location.assign('/')
  }

  return (
    <>
      <Header />
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active">User Recipes </li>
        </ol>
      </nav>

      <main className="searchResult">
        <form>
          <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
            <div className="input-group">
              <input
                type="search"
                placeholder="What're you searching for?"
                aria-describedby="button-addon1"
                className="form-control border-0 bg-light"
                value={filterText}
                onChange={(event) => setFilterText(event.target.value)}
              ></input>
              <div className="input-group-append">
                <button
                  id="button-addon1"
                  type="submit"
                  className="btn btn-link text-primary"
                >
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </form>

        <article>
          <div className="card-deck search-cards">
            {recipes.map((recipe) => (
              <div className="card" key={recipe.id}>
                <img
                  src={recipe.photoURL}
                  className="card-img-top"
                  alt="..."
                ></img>
                <div className="card-body">
                  <Link to={`/Recipes/${recipe.id}`}>
                    <h4 className="card-title">{recipe.title}</h4>
                  </Link>
                  <p className="user-on-card">By {User.fullName}</p>
                  {/* <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p> */}
                  {/* <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </article>
      </main>
    </>
  )
}
