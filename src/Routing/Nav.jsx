import React from 'react'
import {NavLink} from 'react-router-dom'

export default function () {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home page</NavLink>
                </li>
                <li>
                    <NavLink to="/productpage">Product page</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}
