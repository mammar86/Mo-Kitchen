import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

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

const params = useParams()

// same like // const { id } = useParams()
const id = Number(params.id)

export function RecipeDirections() {
  const [recipe, setRecipe] = useState({
    title: 'fake name',
    prepTime: 5,
    cookingTime: 6,
    diet: 'fake diet',
    servings: 6,
    userId: 0,
    picture: 'fake data',
    steps: 'fake steps',
    cuisine: '',
    dishType: '',
    ingredients: '',
    ratings: [],
  })

  const [newRating, setNewRating] = useState({
    stars: 0,
    recipeId: id,
  })

  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch(`/api/Recipes/${id}`)
      const apiData = await response.json()

      setRecipe(apiData)
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
            {id}
          </li>
        </ol>
      </nav>

      <div className="details">
        <h2>{recipe.title}</h2>
        <p>Rating: ⭐⭐⭐⭐⭐ ({`${recipe.ratings.length} votes`})</p>
        <img src={recipe.picture} alt=""></img>
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
        <div className="starts-rating">
          <h5>Rate this Recipe</h5>
          <h5></h5>
        </div>
      </div>
    </section>
  )
}
