import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap'
import { getUser, isLoggedIn, logout } from '../auth'

export function Header() {
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
            <NavItem>
              <NavLink href="/recipes">USER RECIPES</NavLink>
            </NavItem>
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
