
import Todo from "@/components/Todo"
import { todoState } from "@/store/slice"
import { useSelector } from "react-redux"
import NoProject from "./NoPreject"


const CompletePage = () => {
  const todos = useSelector(todoState)
  const isComplete = todos.filter((todo) => todo.isComplete === true)
  return (
    <>
      {isComplete.length ? (
        <div className="todolist_content">
          <Todo todos={isComplete} />
        </div>
      ) : <NoProject />}
    </>
  )
}

export default CompletePage