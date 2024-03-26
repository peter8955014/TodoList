import { FormData } from "@/interfaces/todoInterface"
import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./store";


const initialItem = [
  { id: '01', title: 'test01', description: 'test01', date: '2020-12-08', time: '15:30', isComplete: false },
  { id: '02', title: 'test02', description: 'test02', date: '2020-12-08', time: '15:30', isComplete: false },
  { id: '03', title: 'test03', description: 'test03', date: '2020-12-08', time: '15:30', isComplete: false }
]

interface TodoState {
  items: FormData[]
  isToggle: boolean
  selectedValue: FormData[]
}

const initialState: TodoState = {
  items: initialItem,
  isToggle: false,
  selectedValue: [],
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    createNewTodo: (state, action): void => {
      const newItem = action.payload
      const existingItem = state.items.find(
        (item) => item.id === newItem.id
      )

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          description: newItem.description,
          time: newItem.time,
          date: newItem.date,
          isComplete: newItem.isComplete
        })
      }
    },

    handleToggle: (state): void => {
      state.isToggle = !state.isToggle
    },

    updateTodo: (state, action): void => {
      state.items = action.payload.items
    },

    removeTodo: (state, action): void => {
      const id = action.payload
      const existingItem = state.items.find((item) => item.id === id)

      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== id)
      }
    },

    editTodo: (state, action): void => {
      const upDateItem = action.payload
      const index = state.items.findIndex((item) => item.id === upDateItem.id)

      if (index !== -1) {
        console.log(index);
        state.items[index] = upDateItem
      }
    },

    setSelectedValue: (state, action): void => { // 添加设置 selectedValue 的 reducer
      const id = action.payload
      const existingItem = state.items.find((item) => item.id === id)

      if (existingItem) {
        state.selectedValue = state.items.filter((item) => item.id === id)
      }
    },

    completeValue: (state, action): void => { // 添加设置 selectedValue 的 reducer
      const { id, isComplete } = action.payload
      const todoIndex = state.items.findIndex(todo => todo.id === id)

      if (todoIndex !== -1) {
        console.log(todoIndex)

        state.items[todoIndex].isComplete = !isComplete
        console.log(state.items[todoIndex].isComplete)
      }
    }
  }
})


export const { createNewTodo, handleToggle, updateTodo, removeTodo, setSelectedValue, editTodo, completeValue } = todoSlice.actions
export const todoState = (state: RootState) => state.todo.items
export const selectorTodo = (state: RootState) => state.todo.selectedValue
export const toggleState = (state: RootState) => state.todo.isToggle

export default todoSlice