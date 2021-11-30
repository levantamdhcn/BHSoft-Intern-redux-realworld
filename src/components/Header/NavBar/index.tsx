import React from 'react'
import { NavLink } from 'react-router-dom'
 
const NavBar = () => {
    return (
            <div>
                <ul className='navbar'>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/signin'>Sign in</NavLink>
                    </li>
                    <li>
                        <NavLink to='/signup'>Sign up</NavLink>
                    </li>
                </ul>
            </div>
    )
}

export default NavBar
