import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//https://api.spoonacular.com/recipes/random?apiKey=a3635e5044724fba9ad98ef0fb30f5fa&number=6&tags=dinner

export function MainContents() {
  const [dinnerRecipes, setDinnerRecipes] = useState([])
  const [filterText, setFilterText] = useState('')
  const [searchedRecipes, setSearchedRecipes] = useState([])

  useEffect(
    // we used a function inside of a function here because use async with the first function create and error
    () => {
      async function loadDinnerRecipes() {
        const url =
          'https://api.spoonacular.com/recipes/random?apiKey=a3635e5044724fba9ad98ef0fb30f5fa&number=12&tags=dinner'
        const response = await fetch(url)
        const json = await response.json()
        console.log(json)
        if (json.recipes) {
          setDinnerRecipes(json.recipes)
        }
      }

      loadDinnerRecipes()
    },
    []
  )

  async function loadSearch(event) {
    event.preventDefault()
    const url = `https://api.spoonacular.com/recipes/random?apiKey=a3635e5044724fba9ad98ef0fb30f5fa&number=15&tags=${filterText}`

    const response = await fetch(url)
    const json = await response.json()

    if (json.recipes) {
      setSearchedRecipes(json.recipes)
    }
  }

  return (
    <main>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
        </ol>
      </nav>

      <section className="main-image">
        <form onSubmit={loadSearch}>
          <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
            <div className="input-group">
              <input
                type="search"
                placeholder="What're you searching for?"
                aria-describedby="button-addon1"
                className="form-control border-0 bg-light"
                value={filterText}
                onChange={(event) => setFilterText(event.target.value)}
              ></input>
              <div className="input-group-append">
                <button
                  id="button-addon1"
                  type="submit"
                  className="btn btn-link text-primary"
                >
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>

      <section className="card-deck grid">
        {dinnerRecipes.map((recipe) => (
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
    </main>
  )
}
