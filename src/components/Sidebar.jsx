import React from 'react'
import { NavLink } from 'react-router-dom'
export function Sidebar  () {
  return (
    <aside>
        <h2>Meridian</h2>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/reports">Reports</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/settings">Settings</NavLink>
    </aside>
  )
}

export default Sidebar