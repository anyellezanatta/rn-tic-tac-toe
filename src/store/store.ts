import type { ThunkAction, UnknownAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  UnknownAction
>;
