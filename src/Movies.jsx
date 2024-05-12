import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import NavigationBar from "./NavigationBar";

function Movies({ movies }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  //   useEffect(() => {
  //     // nesta3mlou use effecte kn t7ib nty tkteb w recherche t5dem fard wa9t
  //     const filtered = movies.filter((movie) =>
  //       movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //     setFilteredMovies(filtered);
  //   }, [searchTerm, movies]);

  const handleSearch = () => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  };
  return (
    <>
      <NavigationBar />

      <div className="container">
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

            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSearch}>
            Rechercher
          </button>
        </div>
      </div>
      <h1 className="mt-5 text-center">movies Liste ....</h1>
      <div className="container mt-5 p-2">
        <div className="row">
          {filteredMovies.length === 0 && (
            <div className="alert alert-info" role="alert">
              No result found
            </div>
          )}

          {filteredMovies?.map((element) => (
            <div className="col-12 col-md-4 " key={element.id}>
              <Movie
                key={element.id}
                title={element.title}
                year={element.year}
                genre={element.genre}
                description={element.description}
                img={element.img}
                id={element.id}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Movies;
