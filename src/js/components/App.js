import React from "react";
import ItemListMovies from './ItemListMovies';
import Form from "./Form";
import FormBooking from "./FormBooking";

const App = () => (
  <div>

  <div className="container-fluid">
    <div className="row">
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">

            <div>
              Place It!!
            </div>
            <ul className="nav flex-column">


              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Reservas <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Peliculas
                </a>
              </li>
            </ul>


          </div>
        </nav>
         <main role="main" className="col-md-10">

             <h2>Peliculas</h2>
               <Form/>
               <FormBooking/>
               <ItemListMovies />

         </main>

    </div>
  </div>


  </div>
);
export default App;
