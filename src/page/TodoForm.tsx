import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import { createNewTodo, editTodo, handleToggle } from "@/store/slice";
import { FormData as FormDataProps } from '@/interfaces/todoInterface';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const TodoForm: React.FC<{ todos?: FormDataProps }> = ({ todos }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const formRef = useRef<HTMLFormElement>(null);

  const handleToggleState = () => {
    dispatch(handleToggle())
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!formRef.current) return
    const fd = new FormData(formRef.current); // 使用表单的引用来创建新的 FormData 对象
    const updatedFormData = Object.fromEntries(fd.entries());

    if (!todos) {
      // create
      fd.set('id', uuidv4())
      fd.set('iscomplete', 'false')
      const formData = Object.fromEntries(fd.entries())

      dispatch(createNewTodo(formData))
    } else {
      // edit
      const updatedTodo = { ...todos, ...updatedFormData }

      dispatch(editTodo(updatedTodo))
      navigate('/todolist')
    }
    handleToggleState()
  }


  return (
    <form id="todolist_form" ref={formRef} onSubmit={handleSubmit}>
      <p className="control">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={todos ? todos.title : ''}
        />
      </p>
      <p className="control">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          rows={5}
          name="description"
          required
          defaultValue={todos ? todos.description : ''}
        />
      </p>

      <div className="control-row date">
        <p className="control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            name="date"
            required
            defaultValue={todos ? todos.date : ''}
          />
        </p>
        <p className="control">
          <label htmlFor="time">Time</label>
          <input
            id="time"
            type="time"
            name="time"
            required
            defaultValue={todos ? todos.time : ''}
          />
        </p>
      </div>


      <div className="control-row btnbox">
        <button
          type='button'
          onClick={handleToggleState}
          className='btn btn-cancel'        >
          Cancel
        </button>

        {!todos ? (
          <button className="btn btn-create"> create</button>
        ) : (
          <button className="btn btn-create">Save</button>
        )}

      </div>
    </form>
  )
}

export default TodoForm