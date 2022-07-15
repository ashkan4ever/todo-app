import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { idGenerator } from "../../utils/helpers";

export type PriorityType = "High" | "Medium" | "Low";

export interface ITask {
  title: string;
  text: string;
  priority: PriorityType;
  status: "Done" | "Todo";
  gifts?: string;
  id?: string;
}

const initialState: ITask[] = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    edit: (state, action: PayloadAction<ITask>) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state[index] = { ...action.payload };
      return state;
    },
    remove: (state, action: PayloadAction<ITask>) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    add: (state, action: PayloadAction<ITask>) => {
      state.push({ ...action.payload, id: idGenerator(5) });
      return state;
    },
    perform: (state, action: PayloadAction<ITask>) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      const newItem = { ...state[index] };
      newItem.status = "Done";
      state[index] = newItem;
      return state;
    },
  },
});

export const { edit, remove, add, perform } = todoSlice.actions;
export default todoSlice.reducer;
