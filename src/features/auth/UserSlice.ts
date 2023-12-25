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

  },
  extraReducers: (builder) => {
    // builder.addCase(userRegisAsync.pending, (state) => {
    //     state.loading = true;
    // })
    builder.addCase(userRegisAsync.fulfilled, (state, action) => {
      const payload: UserState = action.payload
      state.name = payload.name;
      state.age = payload.age;
      state.email = payload.email;
      state.password = payload.password;
    });
    // builder.addCase(userRegisAsync.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.error.message;
    // })
  },
});

export const name = (state: RootState) => state.user.name;
export const age = (state: RootState) => state.user.age;
export const email = (state: RootState) => state.user.email;
export const password = (state: RootState) => state.user.password;

export default userSlice.reducer;
