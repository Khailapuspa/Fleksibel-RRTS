import { createAsyncThunk } from "@reduxjs/toolkit";


interface InitialParamsType {
  email: string;
  password: string;
}

export const userLoginAsync = createAsyncThunk('/login', async ({email, password }: InitialParamsType) => {
  const response = await fetch(`${process.env.REACT_APP_PUBLIC_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  return data; 
});