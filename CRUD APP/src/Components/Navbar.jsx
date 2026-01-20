import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="h-24 w-full bg-blue-600  flex items-center justify-center">
      <ul className="flex justify-between gap-12 capitalize text-white">
        <li>
            <NavLink to="/loginpage">Loginfoam</NavLink>
        </li>
        {/* <li>
            <NavLink to="/post">post data</NavLink>
        </li> */}
        <li>
            <NavLink to="/get">get data</NavLink>
        </li>
        <li>
            <NavLink to="/update">update data </NavLink>
        </li>
        <li>
            <NavLink to="/delete">delete data</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
