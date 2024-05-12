import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteWish } from "./MoviesReducer"; // Assuming deleteWish action

function WishList() {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteWish({ id })); // Dispatch the action
  };
  useEffect(() => {
    console.log(movies);
  }, [movies]);
  const handleClear = () => {
    movies.map((element) => handleDelete(element.id));
    console.log(movies);
  };
  return (
    <>
      <div className="container p-2 mt-5">
        <div className="card p-2 mt-5">
          {movies.map((m) => (
            <div className="row" key={m.id}>
              <div className="col-md-6">
                <img src="/images.png" alt="" />
              </div>
              <div className="col-md-6">
                {m.title}
                <button
                  className="btn btn-danger around"
                  onClick={() => handleDelete(m.id)}
                >
                  X
                </button>
              </div>
            </div>
          ))}
          <button className="btn btn-primary" onClick={handleClear}>
            {" "}
            Clear
          </button>
        </div>
      </div>
    </>
  );
}

export default WishList;
