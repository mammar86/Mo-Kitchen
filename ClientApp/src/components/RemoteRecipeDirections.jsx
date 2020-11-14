import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export function RemoteRecipeDirections() {
  const params = useParams()
  const id = params.id

  const [recipe, setRecipe] = useState({
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    veryHealthy: false,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    weightWatcherSmartPoints: 0,
    gaps: '',
    lowFodmap: false,
    aggregateLikes: 0,
    spoonacularScore: 0,
    healthScore: 0,
    creditsText: '',
    license: '',
    sourceName: '',
    pricePerServing: 0,
    extendedIngredients: [],
    id: 0,
    title: '',
    readyInMinutes: 0,
    servings: 0,
    sourceUrl: '',
    image: '',
    imageType: '',
    summary: '',
    cuisines: [],
    dishTypes: [],
    diets: [],
    occasions: [],
    winePairing: {},
    instructions: '',
    analyzedInstructions: [{}],
    originalId: null,
    spoonacularSourceUrl: '',
  })

  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=a3635e5044724fba9ad98ef0fb30f5fa`
      )
      const apiData = await response.json()

      setRecipe(apiData)
    }
    fetchRecipes()
  }, [id])

  function separateIngredients() {
    const paragraphsArr = recipe.instructions.split(', ')
    const singleParagraph = paragraphsArr.map((paragraph) => (
      <li>{paragraph}</li>
    ))
    return singleParagraph
  }

  function separateSteps() {
    const paragraphsArr = recipe.instructions.split('. ')
    const singleParagraph = paragraphsArr.map((paragraph) => (
      <li>{paragraph}</li>
    ))
    return singleParagraph
  }
  return (
    <>
      {recipe.title.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <section className="recipe-directions">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {id}
              </li>
            </ol>
          </nav>

          <div className="details">
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt=""></img>
            <ul className="first-list">
              <li>
                <i className="far fa-clock"> </i> {recipe.readyInMinutes}{' '}
                minutes
              </li>
              <li>
                <i className="fas fa-user-friends"></i> {recipe.servings}
              </li>
            </ul>

            <div className="recipe-details">
              <h4>Ingredients</h4>

              {recipe.extendedIngredients
                .map((ingredient) => ingredient.name)
                .join(', ')}

              <div>
                <h4>Steps</h4>
                <p>{separateSteps()}</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
