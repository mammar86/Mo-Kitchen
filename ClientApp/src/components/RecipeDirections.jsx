import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export function RecipeDirections() {
  // const { id } = useParams()

  const params = useParams()
  const id = params.id

  const [recipe, setRecipe] = useState({
    title: 'fake name',
    prepTime: 5,
    cookingTime: 6,
    diet: 'fake diet',
    servings: 6,
    userId: 1,
    picture: 'fake data',
    steps: 'fake steps',
    cuisine: '',
    dishType: '',
    ingredients: '',
  })

  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch(`/api/Recipes/${id}`)
      const apiData = await response.json()

      setRecipe(apiData)
      console.log(apiData)
    }
    fetchRecipes()
  }, [id])

  return (
    <section className="recipe-directions">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/Recipes/">Recipes</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Recipe
          </li>
        </ol>
      </nav>

      <div className="details">
        <h2>{recipe.title}</h2>
        <p>Rating: ⭐⭐⭐⭐⭐ (63 votes)</p>
        <img src={recipe.picture} alt=""></img>
        <ul className="first-list">
          <li>Prep Time: {recipe.prepTime}</li>
          <li>Cooking Time:{recipe.cookingTime}</li>
          <li>Servings: {recipe.servings}</li>
        </ul>

        <div className="recipe-steps">
          <h3>Ingredients</h3>

          <ul>
            <li>{recipe.ingredients}</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
