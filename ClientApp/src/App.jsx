import React from 'react'
import './custom.scss'
import Thai from '/Users/moammar/Desktop/SDG/Mo-Kitchen/ClientApp/src/components/Images/Thai2.jpeg'
import { Header } from './pages/Landing-Page/Header'
import { Footer } from './pages/Landing-Page/Footer'

function MainContents() {
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

      <section className="featurette">
        <hr className="featurette-divider"></hr>
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              First featurette heading.{' '}
              <span className="text-muted">It'll blow your mind.</span>
            </h2>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="featurette-image img-fluid mx-auto"
              data-src="holder.js/500x500/auto"
              alt="Generic placeholder image"
            ></img>
          </div>
        </div>

        <hr className="featurette-divider"></hr>

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              Oh yeah, it's that good.{' '}
              <span className="text-muted">See for yourself.</span>
            </h2>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              className="featurette-image img-fluid mx-auto"
              data-src="holder.js/500x500/auto"
              alt="Generic placeholder image"
            ></img>
          </div>
        </div>

        <hr className="featurette-divider"></hr>

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              And lastly, this one.{' '}
              <span className="text-muted">Checkmate.</span>
            </h2>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="featurette-image img-fluid mx-auto"
              data-src="holder.js/500x500/auto"
              alt="Generic placeholder image"
            ></img>
          </div>
        </div>

        <hr className="featurette-divider"></hr>
      </section>
    </main>
  )
}

function FullSearch() {
  function closeSearch(event) {
    console.log(event)
  }
  return (
    <div id="myOverlay" className="overlay">
      <span className="closebtn" onClick={closeSearch} title="Close Overlay">
        x
      </span>
      <div className="overlay-content">
        <form action="action_page.php">
          <input type="text" placeholder="Search.." name="search"></input>
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  )
}

export function App() {
  return (
    <>
      <FullSearch />
      <Header />
      <MainContents />
      <Footer />
    </>
  )
}
