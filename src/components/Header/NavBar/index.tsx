import React from 'react'
import { NavLink } from 'react-router-dom'
import { FormOutlined,SettingOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
 
const NavBar = () => {

    const isSignedIn = useSelector((state: any) => state.authReducers.currentUser.authenticated)

    return (
            <div>
                { isSignedIn ? 
                <ul className='navbar'>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/signup'>
                            <FormOutlined />
                            New Post
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/signup'>
                            <SettingOutlined />
                            Setting
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/signup'>Name</NavLink>
                    </li>
                </ul>
                : <ul className='navbar'>
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
            }
            </div>
    )
}

export default NavBar
