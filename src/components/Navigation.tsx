import { handleToggle } from "@/store/slice"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"



const Navigation: React.FC = () => {
  const dispatch = useDispatch()
  const handleToggleState = () => {
    dispatch(handleToggle())
  }

  return (
    <nav className="navigation">
      <ul className="navigation_list">
        <li className="navigation_item">
          <NavLink to="/todolist" className="navigation_link">All</NavLink>
        </li>
        <li className="navigation_item">
          <NavLink to="uncomplete" className="navigation_link">Uncompleted</NavLink>
        </li>
        <li className="navigation_item">
          <NavLink to="complete" className="navigation_link">Completed</NavLink>
        </li>
        <li className="navigation_item">
          <NavLink onClick={handleToggleState} to="new" className="navigation_link">+ New</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation