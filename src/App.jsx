import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import data from "./movies.json";
import Movies from "./Movies";
import NotFound404 from "./NotFound404";
import NavigationBar from "./NavigationBar";
import MoviesDetails from "./MoviesDetails";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import Update from "./Update";
import WishListe from "./WishListe";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/movies" element={<Movies movies={data} />} />
          {/* <Route path="/" element={<Home />} />
        
          */}
          <Route path="/DetailsMovies/:id" element={<MoviesDetails />} />
          <Route path="/wishListe" element={<WishListe />} />

          <Route path="/user">
            <Route path="Liste" element={<UserList />} />
            <Route path="add" element={<CreateUser />} />
            <Route path="update/:id" element={<Update />} />
          </Route>
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
