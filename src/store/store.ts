import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import todoReducer from "./slices/todoSlice";
import modalReducer from "./slices/modalSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      todos: todoReducer,
      modals: modalReducer,
    },
  });
export const store = makeStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper(makeStore);
