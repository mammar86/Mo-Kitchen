import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDropzone } from 'react-dropzone'

import { authHeader, getUser } from '../auth'

export function AddRecipe() {
  const [isUploading, setIsUploading] = useState(false)

  const [newRecipe, setNewRecipe] = useState({
    title: '',
    readyIn: 0,
    diet: '',
    servings: 0,
    userId: 0,
    photoURL: '',
    steps: '',
    cuisine: '',
    dishType: '',
    ingredients: '',
  })
  const [errorMessage, setErrorMessage] = useState()
  const user = getUser()
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

  async function onDropFile(acceptedFiles) {
    // Do something with the files
    const fileToUpload = acceptedFiles[0]
    console.log(fileToUpload)
    // Create a formData object so we can send this
    // to the API that is expecting som form data.
    const formData = new FormData()
    // Append a field that is the form upload itself
    formData.append('file', fileToUpload)
    try {
      setIsUploading(true)

      // Use fetch to send an authorization header and
      // a body containing the form data with the file
      const response = await fetch('/api/Uploads', {
        method: 'POST',
        headers: {
          ...authHeader(),
        },
        body: formData,
      })

      setIsUploading(false)

      // If we receive a 200 OK response, set the
      // URL of the photo in our state so that it is
      // sent along when creating the restaurant,
      // otherwise show an error
      if (response.status === 200) {
        const apiResponse = await response.json()
        const url = apiResponse.url
        setNewRecipe({ ...newRecipe, photoURL: url })
      } else {
        setErrorMessage('Unable to upload image')
      }
    } catch {
      setIsUploading(false)

      // Catch any network errors and show the user we could not process their upload
      setErrorMessage('Unable to upload image')
    }
  }
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropFile,
  })

  let dropZoneMessage = 'Drag a picture of the restaurant here to upload!'

  if (isUploading) {
    dropZoneMessage = 'Uploading...'
  }
  if (isDragActive) {
    dropZoneMessage = 'Drop the files here ...'
  }
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/recipes/">USER-RECIPES</Link>
          </li>
          <li className="breadcrumb-item active">Add Recipe</li>
        </ol>
      </nav>
      <section className="add-recipe-page">
        <div className="form-container">
          <form className="add" onSubmit={handleFormSubmit}>
            <h2>Add Recipe</h2>
            <h5>By {user.fullName}</h5>
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
              <label htmlFor="cuisine">Cuisine</label>
              <input
                type="text"
                id="prepTime"
                name="cuisine"
                onChange={handleStringFieldChange}
              ></input>
            </div>
            <div className="form-items">
              <label htmlFor="diet">Diet</label>
              <input
                type="text"
                id="prepTime"
                name="diet"
                onChange={handleStringFieldChange}
              ></input>
            </div>
            <div className="form-items">
              <label htmlFor="dishType">Dish Type</label>
              <input
                type="text"
                id="cookingTime"
                name="dishType"
                onChange={handleStringFieldChange}
              ></input>
            </div>
            <div className="form-items">
              <label htmlFor="ReadyIn">Ready In</label>
              <input
                type="text"
                id="prepTime"
                name="readyIn"
                onChange={handleNumberFieldChange}
              ></input>
            </div>
            <div className="form-items">
              <label htmlFor="servings">Servings</label>
              <input
                type="text"
                id="serving"
                name="servings"
                onChange={handleNumberFieldChange}
              ></input>
            </div>

            <div className="form-items">
              {newRecipe.photoURL && (
                <p>
                  <img alt="Recipe" width={200} src={newRecipe.photoURL} />
                </p>
              )}
              <div className="file-drop-zone">
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  {dropZoneMessage}
                </div>
              </div>
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
