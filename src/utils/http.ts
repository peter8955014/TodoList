import { FormData } from "@/interfaces/todoInterface";
import { updateTodo } from "@/store/slice"
import { Dispatch } from '@reduxjs/toolkit';




export const fetchTodoData = () => {
  return async (dispatch: Dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://todolist-react-91df3-default-rtdb.firebaseio.com/todo.json',
      )
      if (!response.ok) {
        throw new Error('Request Failed')
      }
      const data = await response.json()
      console.log(data);
      return data
    }

    try {
      const todoData = await fetchData()
      dispatch(updateTodo(todoData.items))
    } catch (error) {
      console.log(error)
    }
  }
}

export const sendTodoData = async (todoData: FormData[]) => {
  const sendRequest = async () => {
    const response = await fetch(
      'https://todolist-react-91df3-default-rtdb.firebaseio.com/todo.json',
      {
        method: 'POST',
        body: JSON.stringify(todoData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    if (!response.ok) {
      throw new Error('Sending data failed.')
    }
  }

  try {
    await sendRequest()
  } catch (error) {
    console.log(error);
  }
}
