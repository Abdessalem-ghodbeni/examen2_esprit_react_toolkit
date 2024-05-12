import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavigationBar from "./NavigationBar";
import { Link } from "react-router-dom";
import { deleteUser } from "./UserReducer";

function UserList() {
  const users = useSelector((state) => state.users);
  console.log("zz", users);
  const [id, setid] = useState();
  const existingUser = users.filter((f) => f.id == id);

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    console.log("aa", id);
    dispatch(deleteUser({ id }));
    alert("user succssufuly deleting");
  };
  return (
    <>
      <NavigationBar />
      <h3 className="text-center mt-5">CRUD OPERATION USING REDUX TOOLKIT</h3>
      <Link to={`/user/add`}>
        <button className="btn btn-primary mx-5">Add user</button>
      </Link>

      <div className="container p-3 mt-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">email</th>
              <th scope="col">actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <div className="d-flex">
                    {/* <button
                      className="btn btn-danger"
                      onClick={() => {
                        setid(user.id);
                        handleDelete(user.id);
                      }}
                    >
                      Delete
                    </button> */}
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        setid(user.id);
                        handleDelete(user.id);
                      }}
                    >
                      Delete
                    </button>
                    <Link
                      to={`/user/update/${user.id}`}
                      className="btn btn-info mx-2"
                    >
                      Edit
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserList;
