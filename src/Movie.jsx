import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import { useDispatch, useSelector } from "react-redux";
import { addWish } from "./MoviesReducer";

function Movie({ img, description, genre, year, title, id }) {
  const [note, setNote] = useState();
  const [ShowMessage, setShowMessage] = useState(false);
  const handleValue = () => {
    if (note <= 1 || note >= 5) {
      alert("rating doit etre entre 1 et 5 ");
    }
  };
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  const addTowishListe = async (id) => {
    const isMovieInWishlist = movies.some((movie) => movie.id === id);
    if (isMovieInWishlist) {
      alert("movie already existing");
    }
    const movie = await dispatch(
      addWish({ img, description, genre, year, title, id })
    );

    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
    console.log("slouma ya chbeb", movies);
  };
  useEffect(() => {
    const wishlistCount = movies.length;
    console.log(wishlistCount);
  }, [movies]);
  return (
    <>
      <NavigationBar />
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top w-100 img-fluid" />
        <div className="card-body">
          <h5 className="card-title">
            <Link to={`/DetailsMovies/${id}`} className="btn btn-info">
              {title}
            </Link>
          </h5>

          <p>
            {" "}
            Year : <strong>{year}</strong>{" "}
          </p>
          <p>
            {" "}
            genre : <strong>{genre}</strong>{" "}
          </p>
          <p>{description}</p>
          <strong>Movie Rating</strong>

          <div className="input-group mb-3 mt-5">
            <span className="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}

              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleValue}>
              Add
            </button>
          </div>
          {!note ? (
            <strong>No rating </strong>
          ) : (
            <strong>Rating is {note}</strong>
          )}

          <button className="btn btn-info" onClick={() => addTowishListe(id)}>
            Add to wishListe
          </button>
          {ShowMessage && (
            <div className="alert alert-info" role="alert">
              Added to wishlist
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Movie;
