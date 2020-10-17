import React, { useEffect } from 'react'
import './styles/custom.scss'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Route, Switch } from 'react-router-dom'
import { Cards } from './components/Cards'
import { RecipeDirections } from './components/RecipeDirections'
import { AddRecipe } from './components/AddRecipe'
import { MainContents } from './components/MainContents'

export function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <MainContents />
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
      </Switch>
      <Footer />
    </>
  )
}
