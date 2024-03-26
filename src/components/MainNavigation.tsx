import { Suspense } from "react"
import Navigation from "./Navigation"
import { NavLink } from "react-router-dom"

const MainNavigation = () => {
  return (
    <div className="todolist_nav">
      <div className="logo-box">
        <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
          <NavLink to='..'>
            <img src="/logo_box.png" className="logo" alt="LOGO" />
          </NavLink>
        </Suspense>
      </div>
      <Navigation />
    </div>
  )
}

export default MainNavigation