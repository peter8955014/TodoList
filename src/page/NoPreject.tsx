import { handleToggle } from "@/store/slice"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"

const NoProject = () => {
  const dispatch = useDispatch()

  const handleToggleState = () => {
    dispatch(handleToggle())
  }
  return (
    <div className="noproject-box">
      <h2 className="title">No project</h2>
      <p className="content">Select a Project or get started with a new one</p>
      <p>
        <NavLink onClick={handleToggleState} className="btn btn-gray" to="new">
          Create new project
        </NavLink>
      </p>
    </div>
  )
}

export default NoProject