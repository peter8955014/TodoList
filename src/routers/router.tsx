import { createBrowserRouter } from "react-router-dom";

import RootLayout from "@/page/RootLayout";
import Header from "@/components/Header";
import NewTodoForm from "@/components/NewTodoForm";
import RootTodo from "@/page/RootTodo";
import EditTodo from "@/page/EditTodo";
import TodoDetail from "@/page/TodoDetail";
import TodoList from "@/components/TodoList";
import CompletePage from "@/page/CompletePage";
import UncompletePage from "@/page/UncompletePage";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Header /> },
      {
        path: 'todolist',
        element: <RootTodo />,
        children: [
          { index: true, element: <TodoList /> },
          { path: 'complete', element: <CompletePage /> },
          { path: 'uncomplete', element: <UncompletePage /> },
          {
            path: 'new',
            element: <NewTodoForm />,
          }, // new 页面
          {
            path: ':todoId',
            id: 'todo-detail',
            children: [
              { index: true, element: <TodoDetail /> },
              { path: 'edit', element: <EditTodo /> } // edit 页面
            ]
          },

        ]
      },
    ]
  }
])

