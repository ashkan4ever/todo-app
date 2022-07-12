// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
// import rootReducer from "./reducers/reducers";
// import { IStore } from '../types';

// // initial states here
// const initalState: IStore = {
//     todos: [],
// };

// // middleware
// const middleware = [thunk];

// // creating store
// export const store = createStore(
//   rootReducer,
//   initalState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// // assigning store to next wrapper
// const makeStore = () => store;
// export const wrapper = createWrapper(makeStore);
import todoReducer from "./slices/todoSlice";

import { configureStore } from "@reduxjs/toolkit";

const makeStore = () =>
  configureStore({
    reducer: {
      todos: todoReducer,
    },
  });
export const store = makeStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper(makeStore);
