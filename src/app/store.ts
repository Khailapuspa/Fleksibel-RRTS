import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userSlice from '../features/auth/UserSlice';
import SidebarSlice from '../features/sidebar/SidebarSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userSlice,
    sidebar: SidebarSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
