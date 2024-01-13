import { createAsyncThunk } from "@reduxjs/toolkit";

export const usertokenAsync = createAsyncThunk('/validate-token', async () => {
  const token = localStorage.getItem('data');
  const response = await fetch(`${process.env.REACT_APP_PUBLIC_URL}/validate-token`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  const data = await response.json();
  return data; // Assuming data has the structure of InitialParamsType
});
// function GetToken(): string {
//   throw new Error("Function not implemented.");
// }

