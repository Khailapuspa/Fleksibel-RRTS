import { createSlice } from "@reduxjs/toolkit";

interface initialStateType{
    name : string,
    age : number,
    email : string
    password: string
}

const initialState: initialStateType = {
    name : "khaila",
    age : 17,
    email : "khaila@gmail.com",
    password : "khaila19",
};

const userSlice = createSlice ({
    name: 'user',
    initialState: initialState,
    reducers:{

    }
});

export default userSlice.reducer;