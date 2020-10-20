import React from 'react'
import './styles/custom.scss'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Route, Switch } from 'react-router-dom'
import { Cards } from './components/Cards'
import { RecipeDirections } from './components/RecipeDirections'
import { AddRecipe } from './components/AddRecipe'
import { MainContents } from './components/MainContents'
import { RemoteRecipeDirections } from './components/RemoteRecipeDirections'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact'

function SignUp() {
  return (
    // <MDBContainer>
    //   <MDBRow>
    //     <MDBCol md="6">
    //       <form>
    //         <p className="h4 text-center mb-4">Sign up</p>
    //         <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
    //           Your name
    //         </label>
    //         <input
    //           type="text"
    //           id="defaultFormRegisterNameEx"
    //           className="form-control"
    //         />
    //         <br />
    //         <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
    //           Your email
    //         </label>
    //         <input
    //           type="email"
    //           id="defaultFormRegisterEmailEx"
    //           className="form-control"
    //         />
    //         <br />
    //         <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
    //           Confirm your email
    //         </label>
    //         <input
    //           type="email"
    //           id="defaultFormRegisterConfirmEx"
    //           className="form-control"
    //         />
    //         <br />
    //         <label
    //           htmlFor="defaultFormRegisterPasswordEx"
    //           className="grey-text"
    //         >
    //           Your password
    //         </label>
    //         <input
    //           type="password"
    //           id="defaultFormRegisterPasswordEx"
    //           className="form-control"
    //         />
    //         <div className="text-center mt-4">
    //           <MDBBtn color="unique" type="submit">
    //             Register
    //           </MDBBtn>
    //         </div>
    //       </form>
    //     </MDBCol>
    //   </MDBRow>
    // </MDBContainer>
    <h1>Hello world!</h1>
  )
}

export function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <MainContents />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/recipes/">
          <Cards />
        </Route>
        <Route exact path="/add/">
          <AddRecipe />
        </Route>
        <Route exact path="/recipes/:id">
          <RecipeDirections />
        </Route>
        <Route exact path="/:id">
          <RemoteRecipeDirections />
        </Route>
      </Switch>
      <Footer />
    </>
  )
}
