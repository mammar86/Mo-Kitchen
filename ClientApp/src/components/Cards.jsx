import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function Cards() {
  const [desserts, setDesserts] = useState([])
  const [filterText, setFilterText] = useState('')

  async function loadRecipes() {
    const url =
      filterText.length === 0
        ? '/api/Recipes'
        : `/api/Recipes?filter=${filterText}`
    const response = await fetch(url)
    const json = await response.json()

    setDesserts(json)
  }

  useEffect(
    // we used a function inside of a function here because use async with the first function create and error
    () => {
      async function loadRecipes() {
        const url =
          filterText.length === 0
            ? '/api/Recipes'
            : `/api/Recipes?filter=${filterText}`
        const response = await fetch(url)
        const json = await response.json()
        setDesserts(json)
      }
      loadRecipes()
    },
    [filterText]
  )

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active">Recipes</li>
        </ol>
      </nav>

      <main className="searchResult">
        <article>
          <div className="card-deck search-cards">
            {desserts.map((dessert) => (
              <div className="card">
                <img
                  src={dessert.picture}
                  className="card-img-top"
                  alt="..."
                ></img>
                <div className="card-body">
                  <Link to={`/Recipes/13`}>
                    <h5 className="card-title">{dessert.title}</h5>
                  </Link>
                  {/* <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p> */}
                  {/* <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </article>
      </main>
    </>
  )
}
