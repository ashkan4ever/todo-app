import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "./todoSlice";

interface IModals {
  formTask: {
    visible: boolean;
    item?: ITask;
  };
  doneTasks: boolean;
  showTask: {
    visible: boolean;
    item?: ITask;
  };
}

const initialState: IModals = {
  formTask: {
    visible: false,
    item: undefined,
  },
  doneTasks: false,
  showTask: {
    visible: false,
    item: undefined,
  },
};

export const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    showFormTask: (state, action?: PayloadAction<ITask | undefined>) => {
      state.formTask = {
        visible: true,
        item: action?.payload,
      };
      return state;
    },
    showDoneTasks: (state) => {
      state.doneTasks = true;
      return state;
    },
    showShowTask: (state, action: PayloadAction<ITask>) => {
      state.showTask = {
        visible: true,
        item: action.payload,
      };
      return state;
    },
    closeFormTask: (state) => {
      state.formTask = {
        visible: false,
        item: undefined,
      };
      return state;
    },
    closeDoneTasks: (state) => {
      state.doneTasks = false;
      return state;
    },
    closeShowTask: (state) => {
      state.showTask = {
        visible: false,
        item: undefined,
      };
      return state;
    },
  },
});

export const {
  showDoneTasks,
  showFormTask,
  showShowTask,
  closeDoneTasks,
  closeFormTask,
  closeShowTask,
} = modalSlice.actions;
export default modalSlice.reducer;
