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

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  return (
    <header>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Mo's Kitchen</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/recipes">U RECIPES</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/add">ADD-RECIPE</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </header>

    // <header>
    //   <nav
    //     className="navbar navbar-expand-lg navbar-dark bg-dark"
    //     style={{ width: '100%' }}
    //   >
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarTogglerDemo03"
    //       aria-controls="navbarTogglerDemo03"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <a className="navbar-brand" href="#">
    //       Mo's Kitchen
    //     </a>

    //     <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    //       <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
    //         <li className="nav-item active">
    //           <a className="nav-link" href="#">
    //             Home <span className="sr-only">(current)</span>
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Recipes
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/">
    //             Videos
    //           </a>
    //         </li>
    //       </ul>
    //       <form className="form-inline my-2 my-lg-0">
    //         <input
    //           className="form-control mr-sm-2"
    //           type="search"
    //           placeholder="Search"
    //           aria-label="Search"
    //         ></input>
    //         <button
    //           className="btn btn-outline-success my-2 my-sm-0"
    //           type="submit"
    //         >
    //           Search
    //         </button>
    //       </form>
    //     </div>
    //   </nav>
    // </header>
  )
}
