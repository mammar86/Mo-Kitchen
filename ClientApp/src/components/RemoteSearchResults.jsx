import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export function RemoteSearchResults() {
  const params = useParams()
  const [searchedRecipes, setSearchedRecipes] = useState([])

  const searchText = params.searchText

  useEffect(() => {
    async function loadSearch() {
      const url = `https://api.spoonacular.com/recipes/random?apiKey=a3635e5044724fba9ad98ef0fb30f5fa&number=81&tags=${searchText}`

      const response = await fetch(url)
      const json = await response.json()

      if (json.recipes) {
        setSearchedRecipes(json.recipes)
      }
    }

    loadSearch()
  }, [searchText])

  return (
    <section className="card-deck grid main-search">
      {searchedRecipes.map((recipe) => (
        <div key={recipe.id} className="card">
          <img src={recipe.image} className="card-img-top" alt=""></img>
          <div className="card-body">
            <Link to={`/${recipe.id}`}>
              <h5 className="card-title">{recipe.title}</h5>
            </Link>

            <p className="card-side-details">
              <div>
                <i className="fas fa-user-friends"></i>
                <strong>{recipe.servings}</strong>
              </div>

              <div>
                <i className="far fa-heart"> </i>
                <strong>{recipe.aggregateLikes}</strong>
              </div>
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}
