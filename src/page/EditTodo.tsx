import { useSelector } from "react-redux"

import TodoForm from "./TodoForm"
import { selectorTodo } from "@/store/slice"
import Modal from "./Modal"



const EditTodo = () => {
  const todos = useSelector(selectorTodo)

  return (
    <Modal>
        {todos.map(todos => <TodoForm key={todos.id} todos={todos} />)}
    </Modal>

  )
}

export default EditTodo