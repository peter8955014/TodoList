import React from "react"
import Modal from "@/page/Modal"
import TodoForm from "@/page/TodoForm"



const NewTodoForm: React.FC = () => {

  return (
    <Modal>
      <TodoForm />
    </Modal>
  )
}

export default NewTodoForm