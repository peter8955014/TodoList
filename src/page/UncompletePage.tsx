import Todo from "@/components/Todo"
import { todoState } from "@/store/slice"
import { useSelector } from "react-redux"
import NoProject from "./NoPreject"


const UncompletePage = () => {
  const todos = useSelector(todoState)
  const unComplete = todos.filter((todo) => todo.isComplete === false)
  return (
    <>
      {unComplete.length ? (
        <div className="todolist_content">
          <Todo todos={unComplete} />
        </div>
      ) : <NoProject />}
    </>

  )
}

export default UncompletePage