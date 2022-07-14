import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/task';
import { IStore, ITask } from '../../types'

const initialState: ITask[] = [];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    edit: (state, action: PayloadAction<ITask>) => {
      const index = state.findIndex(item => item.id === action.payload.id)
      state[index] = action.payload
      return state
    },
    remove: (state, action: PayloadAction<ITask>) => {
       return state.filter(item => item.id === action.payload.id)
    },
    add: (state, action: PayloadAction<ITask>) => {
        state.push(new Task(action.payload))
        return state
    },
    perform: (state, action: PayloadAction<ITask>) => {
        const item = state.find(item => item.id === action.payload.id)
        if (item) {
            item.status = "Done"
        }
        return state
    }
  },
})

export const { edit, remove, add, perform } = todoSlice.actions
export default todoSlice.reducer