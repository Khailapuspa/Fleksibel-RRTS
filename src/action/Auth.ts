// Auth.ts
import { createAsyncThunk } from "@reduxjs/toolkit";


interface InitialParamsType {
  name: string;
  age: number;
  email: string;
  password: string;
}

export const userRegisAsync = createAsyncThunk('/register/user', async (user: InitialParamsType) => {
  const response = await fetch(`${process.env.REACT_APP_PUBLIC_URL}/register/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  const data = await response.json();
  return data; // Assuming data has the structure of InitialParamsType
});

// export const userRegisAsync = createAsyncThunk('/register/user', async (user: InitialParamsType) => {
//   const apiUrl = `${process.env.REACT_APP_PUBLIC_URL}/register/user`;
//   console.log('API URL:', apiUrl); // Log URL ke konsol

//   const response = await fetch(apiUrl, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(user),
//   });

//   // ... (lanjutkan dengan log atau pemrosesan data lainnya)
// });




// export const userRegisAsync = createAsyncThunk('post/register/user', async ({ name, age, email, password }: InitialParamsType, thunkAPI) => {
//   try {
//     const response = await fetch(`${process.env.REACT_APP_PUBLIC_URL}/register/user`, {
//       method: "POST",
//       body: JSON.stringify({ name, age, email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     // Assuming response.json() returns the expected data structure
//     const data = await response.json();

//     // The value we return becomes the `fulfilled` action payload
//     return data;
//   } catch (error) {
//     // You can handle errors here
//     return thunkAPI.rejectWithValue(error);
//   }
// });

