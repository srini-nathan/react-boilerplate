import { combineReducers } from "@reduxjs/toolkit";

import app from "./app";

const rootReducer = () =>
  combineReducers({
    app: app.reducer,
  });

export type IRootStore = ReturnType<ReturnType<typeof rootReducer>>;

export default rootReducer;
