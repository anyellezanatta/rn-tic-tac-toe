import { combineReducers } from "@reduxjs/toolkit";

import { gameReducer } from "@/features/game/store/gameSlice";

export const rootReducer = combineReducers({
  game: gameReducer.reducer,
});
