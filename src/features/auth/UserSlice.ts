// userSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { userRegisAsync } from "../../action/Auth";
import { RootState } from "../../app/store";

interface UserState {
  name: string;
  age: number;
  email: string;
  password: string;
}

const initialState: UserState = {
  name: "",
  age: 0,
  email: "",
  password: "",
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userRegisAsync.fulfilled, (state, action) => {
      const userData = action.payload;
      state.name = userData.name;
      state.age = userData.age;
      state.email = userData.email;
      state.password = userData.password;
    });
  },
});

export const { setName, setAge, setEmail, setPassword } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
