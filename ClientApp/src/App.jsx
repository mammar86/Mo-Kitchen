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
import { SignUp } from './components/SignUp'

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
