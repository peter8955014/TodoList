import { NavLink } from "react-router-dom"
import { FormData } from '../interfaces/todoInterface';
import { useDispatch } from "react-redux";
import { completeValue, setSelectedValue } from "@/store/slice";




const Todo: React.FC<{ todos: FormData[] }> = ({ todos }) => {
  const dispatch = useDispatch()

  const handleComplete = (todo: FormData) => {
    dispatch(completeValue(todo))
  }

  const handleSelector = (id: string) => {
    dispatch(setSelectedValue(id))
  }

  return (
    <section className="todo-box">
      <ul className="todo-box_ul">
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              id={todo.id}
              className="todo-box_item"
              onClick={() => handleSelector(todo.id)}
            >
              <NavLink className='todo-box_content' to={`/todolist/${todo.id}`}>
                <div className="todo-box_content_box">
                  <h2>{todo.title}</h2>
                  <time>{todo.date}</time>
                </div>
              </NavLink>

              <div className="checkbox-wrapper-23" >
                <input
                  type="checkbox"
                  id={`check-${todo.id}`}
                  checked={todo.isComplete}
                  onChange={() => handleComplete(todo)}
                />
                <label htmlFor={`check-${todo.id}`}>
                  <svg viewBox="0,0,50,50">
                    <path d="M5 30 L 20 45 L 45 5"></path>
                  </svg>
                </label>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Todo