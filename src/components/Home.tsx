import React from "react"
import { Link, Outlet } from "react-router-dom"

const LINKS = ["users", "reviews", "residents"]

const Home = () => {
  return (
    <div>
      <div className="flex flex-row p-5">
        {LINKS.map((link) => (
          <Link to={link} className="px-5 font-bold">
            {link}
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  )
}

export default Home
