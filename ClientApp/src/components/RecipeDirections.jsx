import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { authHeader, getUser, isLoggedIn } from '../auth'

// function Stars(props) {
//   const totalStars = props.recipe.ratings.reduce(
//     (starRatingSum, rating) => starRatingSum + rating.stars,
//     0
//   )

//   const averageStars =
//     props.restaurant.reviews.length === 0
//       ? 0
//       : totalStars / props.recipe.rating.length

//   const averageStarsToOneDecimalPlace = averageStars.toFixed(1)

//   return (
//     <span
//       className="stars"
//       style={{ '--rating': averageStarsToOneDecimalPlace }}
//       aria-label={`Star rating of this location is ${averageStarsToOneDecimalPlace} out of 5.`}
//     ></span>
//   )
// }

export function RecipeDirections() {
  const [recipe, setRecipe] = useState({
    title: 'fake name',
    prepTime: 5,
    cookingTime: 6,
    diet: 'fake diet',
    servings: 6,
    userId: 0,
    photoURL: 'fake data',
    steps: 'fake steps',
    cuisine: '',
    dishType: '',
    ingredients: '',
    ratings: [],
  })

  const history = useHistory()
  const user = getUser()

  // const { id } = useParams()

  const params = useParams()
  const id = params.id

  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch(`/api/Recipes/${id}`)
      const apiData = await response.json()

      setRecipe(apiData)
    }
    fetchRecipes()
  }, [id])

  async function handleDelete(event) {
    event.preventDefault()
    const response = await fetch(`/api/Recipes/${id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json', ...authHeader() },
    })
    if (response.status === 200 || response.status === 204) {
      history.push('/recipes')
    }
  }

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
            {id}
          </li>
        </ol>
      </nav>

      <div className="details">
        <h2>{recipe.title}</h2>
        <h5>By {user.fullName}</h5>
        <p>
          Rating: <span>⭐⭐⭐⭐⭐</span> ({`${recipe.ratings.length} votes`})
        </p>

        <img src={recipe.photoURL} width={600} alt=""></img>
        <ul className="first-list">
          <li>Prep Time: {recipe.prepTime}</li>
          <li>Cooking Time:{recipe.cookingTime}</li>
          <li>Servings: {recipe.servings}</li>
        </ul>

        <div className="recipe-details">
          <h4>Ingredients</h4>
          <p>({recipe.ingredients})</p>

          <div>
            <h4>Steps</h4>
            <p>{recipe.steps}</p>
          </div>
        </div>

        {isLoggedIn() && recipe.userId === user.id && (
          <button onClick={handleDelete}>Delete</button>
        )}

        {/* <div className="starts-rating">
          <h5>Rate this Recipe</h5>
        </div> */}
      </div>
    </section>
  )
}
