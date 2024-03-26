import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"

import { FormData } from "@/interfaces/todoInterface"
import { handleToggle, removeTodo } from "@/store/slice"


const TodoItem: React.FC<{ todo: FormData }> = ({ todo }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleDelete = (id: string) => {
    const procees = window.confirm('Are you sure ?')

    if (procees) {
      console.log(id);
      dispatch(removeTodo(id))
      navigate('..')
    }
  }

  const handleTog = () => {
    dispatch(handleToggle())
  }

  return (
    <article className="todoItem-box">
      <h1>Title:{todo.title}</h1>
      <time>Time: {todo.date} {todo.time}</time>
      <span>Description:</span>
      <p>{todo.description}</p>
      <menu className="todoItem-box_btn">
        <Link to='edit' onClick={handleTog}>Edit</Link>
        <button className="btn" onClick={() => handleDelete(todo.id)}>
          Delete
        </button>
      </menu>
    </article>
  )
}

export default TodoItem