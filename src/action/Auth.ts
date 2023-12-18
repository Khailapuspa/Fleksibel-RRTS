import { createAsyncThunk } from "@reduxjs/toolkit";

export const BASE_URL = "http://[::1]:3000"

interface initialParamsType{
    name : string,
    age : number,
    email : string
    password: string
}

export const userjuAsync = createAsyncThunk( 'post/register/user', async ({ name, age, email, password }: initialParamsType, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}/register/user`, {
        method: 'POST',
        body: JSON.stringify({ name, age, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      // Assuming response.json() returns the expected data structure
      const data = await response.json();

      // The value we return becomes the `fulfilled` action payload
      return data;
    } catch (error) {
      // You can handle errors here
      return thunkAPI.rejectWithValue(error);
    }
  }
);
