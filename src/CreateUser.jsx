import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./UserReducer";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));
    navigate("/user/Liste");
  };
  return (
    <>
      <div className="container p-3 mt-5">
        <form onSubmit={handleSubmit}>
          <div>
            <div className="mb-3 row">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label
                htmlFor="inputPassword"
                className="col-sm-2 col-form-label"
              >
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <button className="btn btn-success">Add</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateUser;
