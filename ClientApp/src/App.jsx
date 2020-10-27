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
import { SignUp } from './components/SignUp'
import { Login } from './components/Login'
import { EditUser } from './components/EditUser'
import { RemoteSearchResults } from './components/RemoteSearchResults'

export function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header />
          <MainContents />
        </Route>
        <Route exact path="/login">
          <Header />
          <Login />
        </Route>
        <Route exact path="/signup">
          <Header />
          <SignUp />
        </Route>
        <Route exact path="/profile">
          <Header />
          <EditUser />
        </Route>
        <Route exact path="/recipes">
          <Cards />
        </Route>
        <Route exact path="/search/:searchText">
          <Header />
          <RemoteSearchResults />
        </Route>
        <Route exact path="/add">
          <Header />
          <AddRecipe />
        </Route>
        <Route exact path="/recipes/:id">
          <Header />
          <RecipeDirections />
        </Route>
        <Route exact path="/:id">
          <Header />
          <RemoteRecipeDirections />
        </Route>
      </Switch>
      <Footer />
    </>
  )
}
