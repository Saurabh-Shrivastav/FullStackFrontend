import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './Nav.css';

const Nav = () => {
    const navigate = useNavigate()
    const auth = localStorage.getItem('user');

    const logout = () => {
        localStorage.clear()
        navigate('/signup')
    }

    return (
        <div className='navBaar'>
            <img className='logo' src='https://ih1.redbubble.net/image.473156512.4596/st,small,507x507-pad,600x600,f8f8f8.u2.jpg'/>

            {auth ? <ul className='nav-ul'>
                <li><Link to="/">Product </Link></li>
                <li><Link to="/add">Add</Link></li>
                <li><Link to="/update">Update</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup">Logout</Link></li>
                <li className='userName'>{JSON.parse(auth).name}</li>
            </ul> :

                <ul className='nav-ul nav-right'>
                    <li> <Link to="/signup">SignUp</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>}
        </div>
    )
}

export default Nav;