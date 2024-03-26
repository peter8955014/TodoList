import TodoItem from "@/components/TodoItem"
// import TodoList from "@/components/TodoList"
import { selectorTodo, todoState } from "@/store/slice"
import { useSelector } from "react-redux"


const TodoDetail: React.FC = () => {
  const todoData = useSelector(todoState)
  const todos = useSelector(selectorTodo)

  return (
    <>
      {todoData && todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      {/* <div className="detail-list">
        <TodoList />
      </div> */}
    </>

  )
}

export default TodoDetail