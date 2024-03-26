import { useSelector } from "react-redux"

import { todoState } from "@/store/slice"
import NoProject from "@/page/NoPreject"
import Todo from "./Todo"


const TodoList: React.FC = () => {
  const todoDatas = useSelector(todoState)


  return (
    <>
      {todoDatas.length === 0 ? <NoProject /> : (
        <div className="todolist_content">
          <Todo todos={todoDatas} />
        </div>
      )}
    </>

  )
}

export default TodoList