import React, { useEffect, useState } from 'react'
import './styles/custom.scss'
import Thai from '/Users/moammar/Desktop/SDG/Mo-Kitchen/ClientApp/src/components/Images/Thai2.jpeg'
import { Header } from './pages/Landing-Page/Header'
import { Footer } from './pages/Landing-Page/Footer'
import { Route, Switch } from 'react-router-dom'
import { Cards } from './Cards'

function MainContents() {

  const [desserts, setDesserts] = useState([{
    "id": 4,
    "title": "Bananas Foster Ice Cream",
    "preparationTime": "45 minutes",
    "diet": "Vegetarian",
    "serving": 2,
    "sourceName": null,
    "photo": "https://spoonacular.com/recipeImages/634237-556x370.jpg",
    "instructions": null,
    "cuisine": "Creole",
    "occasion": null,
    "rating": null,
    "dishType": null
  },
  {
    "id": 5,
    "title": "Vanilla Coconut Snowball Cupcakes",
    "preparationTime": "45 minutes",
    "diet": "Vegetarian",
    "serving": 13,
    "sourceName": null,
    "photo": "https://spoonacular.com/recipeImages/664306-556x370.jpg",
    "instructions": null,
    "cuisine": "American",
    "occasion": null,
    "rating": null,
    "dishType": null
  },
  {
    "id": 6,
    "title": "Chocolate Nutella Walnut Cake",
    "preparationTime": "45 minutes",
    "diet": "Italian",
    "serving": 8,
    "sourceName": null,
    "photo": "https://spoonacular.com/recipeImages/639114-556x370.jpg",
    "instructions": null,
    "cuisine": "American",
    "occasion": null,
    "rating": null,
    "dishType": null
  }])
  const [filterText, setFilterText] = useState('')

 useEffect(
    // we used a function inside of a function here because use async with the first function create and error
     () => {
       async function loadRecipes() { 

        const url = filterText.length === 0 ? '/api/Recipes' : `/api/Recipes?filter=${filterText}`

        const response = await fetch(url)
        const json = await response.json()
        
        setDesserts(json)
        console.log(filterText)
       }
    loadRecipes()
   },
   [filterText],
 )








  return (
    <main>
      <section className="main-image">
        <form action="">
          <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
            <div className="input-group">
              <input
                type="search"
                placeholder="What're you searching for?"
                aria-describedby="button-addon1"
                className="form-control border-0 bg-light"
                value={filterText}
                onChange={event => setFilterText(event.target.value)}
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

      <section className="scrolling-cuisines">
        <a href="https://codeburst.io/how-to-create-horizontal-scrolling-containers-d8069651e9c6">
          <img className="cuisines" src={Thai} width="200px"></img>
        </a>
        <a href="#">
          <img className="cuisines" src={Thai} width="200px"></img>
        </a>
        <a href="#">
          <img className="cuisines" src={Thai} width="200px"></img>
        </a>
        <a href="#">
          <img className="cuisines" src={Thai} width="200px"></img>
        </a>
        <a href="#">
          <img className="cuisines" src={Thai} width="200px"></img>
        </a>
        <a href="#">
          <img className="cuisines" src={Thai} width="200px"></img>
        </a>
        <a href="#">
          <img className="cuisines" src={Thai} width="200px"></img>
        </a>
        <a href="#">
          <img className="cuisines" src={Thai} width="200px"></img>
        </a>
        <a href="#">
          <img className="cuisines" src={Thai} width="200px"></img>
        </a>
        <a href="#">
          <img className="cuisines" src={Thai} width="200px"></img>
        </a>
      </section>
      <section className="card-decks" >


<div className="card-deck">

 {desserts.map(dessert =>
 
  <div className="card" key={dessert.id}>
    <img src={dessert.photo} className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">{dessert.title}</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
 )}
 

  </div>
  <div class="card-deck grid">
  <div class="card">
    <img src="..." class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>

  
  <div class="card">
    <img src="..." class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>

  
  <div class="card">
    <img src="..." class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  </div>

      </section>
    </main>


  )
}

export function App() {
  return (
   
    <Switch>
      <Route exact path="/">
      <Header />
      <MainContents />
      <Footer />
      </Route>
      <Route exact path="/search">
      <Header/>
      <Cards/>
      </Route>
      <Route exact path="/directions">
      
      </Route>


    </Switch>

  )
}
