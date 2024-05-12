import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "./movies.json";
import NavigationBar from "./NavigationBar";

function MoviesDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const foundMovie = data.find((mov) => mov.id === parseInt(id));
    setMovie(foundMovie);
  }, [id]);

  if (!movie) {
    return (
      <div className="alert alert-info" role="alert">
        Movie not found
      </div>
    );
  }
  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <NavigationBar />
      {isVisible ? (
        <div className="container p-3 mt-5">
          <div className="card" style={{ width: "18rem" }}>
            {/* <img src={movie.img} className="card-img-top w-100 img-fluid" /> */}
            <img
              src="/images.png"
              className="card-img-top w-100 img-fluid"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title" onClick={handleClick}>
                {movie.title}
              </h5>

              <p>
                {" "}
                Year : <strong>{movie.year}</strong>{" "}
              </p>
              <p>
                {" "}
                genre : <strong>{movie.genre}</strong>{" "}
              </p>
              <p>{movie.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="container p-3 mt-5">
          <div className="row">
            <div className="col-12 col-md-6 p-3">
              {/* <img src={movie.img} alt="" /> */}

              <img src="/images.png" className="img-fluid w-100 " alt="" />
            </div>
            <div className="col-12 col-md-6 p-3">
              <h5 className="" onClick={handleClick}>
                {movie.title}
              </h5>

              <p>
                {" "}
                Year : <strong>{movie.year}</strong>{" "}
              </p>
              <p>
                {" "}
                genre : <strong>{movie.genre}</strong>{" "}
              </p>
              <p>{movie.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MoviesDetails;
