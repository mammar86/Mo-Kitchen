import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

//https://api.spoonacular.com/recipes/random?apiKey=a3635e5044724fba9ad98ef0fb30f5fa&number=6&tags=dinner

export function MainContents() {
  const history = useHistory()
  const [dinnerRecipes, setDinnerRecipes] = useState([])
  const [filterText, setFilterText] = useState('')

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

    history.push(`/search/${filterText}`)
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

      <section className="section-recipes">
        <ul className="recipes-showcase">
          <li>
            <figure className="food-photo">
              <img
                src={
                  'https://images.unsplash.com/photo-1572383672419-ab35444a6934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                }
                alt="Pie"
              ></img>
            </figure>
          </li>
          <li>
            <figure className="food-photo">
              <img
                src={
                  'https://images.unsplash.com/photo-1543363136-3fdb62e11be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                }
                alt="Acai"
              ></img>
            </figure>
          </li>
          <li>
            <figure className="food-photo">
              <img
                src={
                  'https://images.unsplash.com/photo-1600326145552-327f74b9c189?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                }
                alt="Pancakes"
              ></img>
            </figure>
          </li>
          <li>
            <figure className="food-photo">
              <img
                src={
                  'https://images.unsplash.com/photo-1582234383980-59933689fb44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                }
                alt="Tacos"
              ></img>
            </figure>
          </li>
        </ul>

        <ul className="recipes-showcase">
          <li>
            <figure className="food-photo">
              <img
                src={
                  'https://images.unsplash.com/photo-1537081956137-3931105e2d37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                }
                alt="Salad"
              ></img>
            </figure>
          </li>
          <li>
            <figure className="food-photo">
              <img
                src={
                  'https://images.unsplash.com/photo-1585419960497-ec7d3d934460?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                }
                alt="Cupcakes"
              ></img>
            </figure>
          </li>
          <li>
            <figure className="food-photo">
              <img
                src={
                  'https://images.unsplash.com/photo-1564988208918-44ed48c1b236?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                }
                alt="Cookies"
              ></img>
            </figure>
          </li>
          <li>
            <figure className="food-photo">
              <img
                src={
                  'https://images.unsplash.com/photo-1578861256454-cd5a43715532?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                }
                alt="Burger & Soup"
              ></img>
            </figure>
          </li>
        </ul>
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
