import React, { useEffect, useState } from 'react';


export function MainContents() {

  const [desserts, setDesserts] = useState([]);
  const [filterText, setFilterText] = useState('');

  async function loadRecipes() {


    const url = filterText.length === 0 ? '/api/Recipes' : `/api/Recipes?filter=${filterText}`;
    const response = await fetch(url);
    const json = await response.json();

    setDesserts(json);
  }


   useEffect(
      // we used a function inside of a function here because use async with the first function create and error
       () => {
         async function loadRecipes() { 
          const url = filterText.length === 0 ? '/api/Recipes' : `/api/Recipes?filter=${filterText}`
          const response = await fetch(url)
          const json = await response.json()
          setDesserts(json)
         }
      loadRecipes()
     },
     [filterText],
   )




  return (
    <main>
  
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>

        </ol>
      </nav>

    
      <section className="main-image">
        <form onSubmit={loadRecipes}>
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
          <img className="cuisines" src="https://api-private.atlassian.com/users/ad1005e0f2e657949d0c81a018f7afb1/avatar" width="200px"></img>
        </a>
        <a href="#">
          <img className="cuisines" src="https://api-private.atlassian.com/users/ad1005e0f2e657949d0c81a018f7afb1/avatar" width="200px"></img>
        </a>
        <a href="#">
          <img className="cuisines" src="https://api-private.atlassian.com/users/ad1005e0f2e657949d0c81a018f7afb1/avatar" width="200px"></img>
        </a>
        <a href="#">
          <img className="cuisines" src="https://api-private.atlassian.com/users/ad1005e0f2e657949d0c81a018f7afb1/avatar" width="200px"></img>
        </a>
        <a href="#">
          <img className="cuisines" src="https://api-private.atlassian.com/users/ad1005e0f2e657949d0c81a018f7afb1/avatar" width="200px"></img>
        </a>
        <a href="#">
          <img className="cuisines" src="https://api-private.atlassian.com/users/ad1005e0f2e657949d0c81a018f7afb1/avatar" width="200px"></img>
        </a>
        <a href="#">
          <img className="cuisines" src="https://api-private.atlassian.com/users/ad1005e0f2e657949d0c81a018f7afb1/avatar" width="200px"></img>
        </a>
        <a href="#">
          <img className="cuisines" src="https://api-private.atlassian.com/users/ad1005e0f2e657949d0c81a018f7afb1/avatar" width="200px"></img>
        </a>
        <a href="#">
          <img className="cuisines" src="https://api-private.atlassian.com/users/ad1005e0f2e657949d0c81a018f7afb1/avatar" width="200px"></img>
        </a>
        <a href="#">
          <img className="cuisines" src="https://api-private.atlassian.com/users/ad1005e0f2e657949d0c81a018f7afb1/avatar" width="200px"></img>
        </a>
      </section>
      <section className="card-decks">


        <div className="card-deck">

          {desserts.map(dessert => <div className="card" key={dessert.id}>
            <img src={dessert.picture} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">{dessert.title}</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          )}


        </div>
        <div className="card-deck grid">
          <div className="card">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>


          <div className="card">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>


          <div className="card">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>

      </section>
    </main>


  );
}
