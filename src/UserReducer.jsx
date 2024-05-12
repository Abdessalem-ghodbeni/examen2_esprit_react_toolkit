import { createSlice } from "@reduxjs/toolkit";

import { userList } from "./data.jsx";
const userSlice = createSlice({
  name: "user",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      console.log(action);
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const updatingUser = state.find((user) => user.id == id);
      if (updatingUser) {
        updatingUser.name = name;
        updatingUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const DeletingUser = state.find((user) => user.id == id);
      if (DeletingUser) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});
export const { addUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
