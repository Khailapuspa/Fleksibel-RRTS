import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface SideState {
    show: boolean;
}

const initialState: SideState = {
    show: false,
};

const sidebarSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setShow: (state, action: PayloadAction<boolean>) => {
            state.show = action.payload;
        }
    },
});

export const show = (state: RootState) => state.sidebar.show;

export const { setShow } = sidebarSlice.actions;
export default sidebarSlice.reducer