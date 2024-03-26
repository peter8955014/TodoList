import { Outlet } from "react-router-dom"
import MainNavigation from "@/components/MainNavigation";


const RootTodo = () => {
  return (
    <main className="todolist">
      <MainNavigation />
      <Outlet />
    </main>
  )
}

export default RootTodo