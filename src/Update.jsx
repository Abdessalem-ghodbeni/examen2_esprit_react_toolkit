import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./UserReducer";

function Update() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((f) => f.id == id);
  const { name, email } = existingUser[0];
  const [username, setName] = useState(name);
  const [useremail, setEmail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleupdateSubmit = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: username,
        email: useremail,
      })
    );
    navigate("/user/Liste");
  };

  return (
    <>
      <div className="container p-3 mt-5 text-center">
        <div className="container p-3 mt-5">
          <form onSubmit={handleupdateSubmit}>
            <div>
              <div className="mb-3 row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-2 col-form-label"
                >
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword"
                    name="email"
                    value={useremail}
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
                    value={username}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <button className="btn btn-success">Update</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Update;
