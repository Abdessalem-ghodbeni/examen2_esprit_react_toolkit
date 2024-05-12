import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
function NavigationBar() {
  const movies = useSelector((state) => state.movies);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse text-center"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav d-flex justify-content-around">
              <li className="nav-item mx-5">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  exact
                  to="/wishListe"
                >
                  MoviesDb
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active active_route" // Add the "active" class for the active route
                  exact
                  to="/movies"
                >
                  Movies{" "}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active active_route" // Add the "active" class for the active route
                  exact
                  to="/wishListe"
                >
                  wishListe ({movies.length})
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;
