import { MainContents } from './MainContents'

export function RemoteSearchResults() {
  return (
    <main className="searchResult">
      <article>
        <div className="card-deck search-cards">
          {/* {searchedRecipes.map((recipe) => (
            <div className="card" key={recipe.id}>
              <img
                src={recipe.photoURL}
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <Link to={`/Recipes/${recipe.id}`}>
                  <h4 className="card-title">{recipe.title}</h4>
                </Link>

              </div>
            </div>
          ))} */}
        </div>
      </article>
    </main>
  )
}
