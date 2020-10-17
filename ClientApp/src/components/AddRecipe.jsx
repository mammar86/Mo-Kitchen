import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export function AddRecipe() {
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    prepTime: 0,
    cookingTime: 0,
    diet: '',
    servings: 0,
    userId: 0,
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
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newRecipe),
    })
    const json = await response.json()

    if (response.status === 400) {
      const message = Object.values(json.errors).join(' ')

      setErrorMessage(message)
    } else {
      history.push('/Recipes')
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
          {errorMessage && <p>{errorMessage}</p>}
          <form className="add" onSubmit={handleFormSubmit}>
            <h2>Add Recipe</h2>
            <div className="form-items">
              <label htmlFor="RecipeName">Recipe Name:</label>
              <input
                type="text"
                id="recipeName"
                name="title"
                onChange={handleStringFieldChange}
              ></input>
            </div>
            <div className="form-items">
              <label htmlFor="prepTime">cuisine:</label>
              <input
                type="text"
                id="prepTime"
                name="cuisine"
                onChange={handleStringFieldChange}
              ></input>
            </div>
            <div className="form-items">
              <label htmlFor="prepTime">Diet:</label>
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
              <label htmlFor="prepTime">Prep Time:</label>
              <input
                type="text"
                id="prepTime"
                name="prepTime"
                onChange={handleNumberFieldChange}
              ></input>
            </div>
            <div className="form-items">
              <label htmlFor="cookingTime">Cooking Time:</label>
              <input
                type="text"
                id="cookingTime"
                name="cookingTime"
                onChange={handleNumberFieldChange}
              ></input>
            </div>
            <div className="form-items">
              <label htmlFor="serving">Serving:</label>
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
            <h4>Cooking Steps</h4>
            <div className="form-items">
              <div className="cooking-steps1">
                <label htmlFor="steps">Steps</label>
                <textarea
                  name="steps"
                  onChange={handleStringFieldChange}
                ></textarea>
              </div>
            </div>
            <button type="submit" className="btn btn-outline-success btn-block">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
