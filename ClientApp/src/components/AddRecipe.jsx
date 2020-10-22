import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { authHeader } from '../auth'

export function AddRecipe() {
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    readyIn: 0,
    diet: '',
    servings: 0,
    userId: 23,
    picture: '',
    steps: '',
    cuisine: '',
    dishType: '',
    ingredients: '',
  })
  const [errorMessage, setErrorMessage] = useState()
  const history = useHistory()

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name
    const updatedRecipe = { ...newRecipe, [fieldName]: value }
    setNewRecipe(updatedRecipe)
  }
  function handleNumberFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name
    const updatedRecipe = { ...newRecipe, [fieldName]: Number(value) }
    setNewRecipe(updatedRecipe)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()
    const response = await fetch('/api/Recipes', {
      method: 'POST',
      headers: { 'content-type': 'application/json', ...authHeader() },
      body: JSON.stringify(newRecipe),
    })

    if (response.status === 401) {
      setErrorMessage('Not Authroized')
    } else {
      const json = await response.json()

      if (response.status === 400) {
        const message = Object.values(json.errors).join(' ')

        setErrorMessage(message)
      } else {
        history.push('/Recipes')
      }
    }
  }

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active">Add Recipe</li>
        </ol>
      </nav>
      <section className="add-recipe-page">
        <div className="form-container">
          <form className="add" onSubmit={handleFormSubmit}>
            <h2>Add Recipe</h2>
            <div className="form-items">
              <label htmlFor="RecipeName">Recipe Name</label>
              <input
                type="text"
                id="recipeName"
                name="title"
                onChange={handleStringFieldChange}
              ></input>
            </div>
            <div className="form-items">
              <label htmlFor="prepTime">Cuisine</label>
              <input
                type="text"
                id="prepTime"
                name="cuisine"
                onChange={handleStringFieldChange}
              ></input>
            </div>
            <div className="form-items">
              <label htmlFor="prepTime">Diet</label>
              <input
                type="text"
                id="prepTime"
                name="diet"
                onChange={handleStringFieldChange}
              ></input>
            </div>
            <div className="form-items">
              <label htmlFor="cookingTime">Dish Type</label>
              <input
                type="text"
                id="cookingTime"
                name="dishType"
                onChange={handleStringFieldChange}
              ></input>
            </div>
            <div className="form-items">
              <label htmlFor="prepTime">Ready In</label>
              <input
                type="text"
                id="prepTime"
                name="readyIn"
                onChange={handleNumberFieldChange}
              ></input>
            </div>
            <div className="form-items">
              <label htmlFor="serving">Servings</label>
              <input
                type="text"
                id="serving"
                name="servings"
                onChange={handleNumberFieldChange}
              ></input>
            </div>

            <div className="form-items">
              <label htmlFor="serving">Image URL</label>
              <input
                type="text"
                id="browseImage"
                name="picture"
                onChange={handleStringFieldChange}
              ></input>
            </div>
            <div className="form-items">
              <label className="ingredients-title">Ingredients</label>
              <textarea
                name="ingredients"
                onChange={handleStringFieldChange}
                rows={4}
              ></textarea>
            </div>
            <div className="form-items">
              <div className="cooking-steps1">
                <label htmlFor="steps">Cooking Steps</label>
                <textarea
                  name="steps"
                  onChange={handleStringFieldChange}
                ></textarea>
              </div>
            </div>
            {errorMessage && <p>{errorMessage}</p>}
            <button type="submit" className="btn btn-success btn-block">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
