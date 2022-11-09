import React, { useContext, useState } from 'react';
import './Header.css'
import logo from '../../../assest/icon_logo_gammo-pswch6axtga3rhy4boklwfke5kmf99if8ca9nuy6m8.png'
import { Link } from 'react-router-dom';
import { AuthContex } from '../../UserContext/UserContext';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    const { user, logOut } = useContext(AuthContex)
    const handlelogOut = () => {
        logOut()
        toast.success('User logout Succesfully', { autoClose: 500 })
    }
    return (
        <>

            <div className="navbar bg-slate-500 text-white">

                {/* responsive navbar */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="text-2xl menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-400 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="blog">Blog</Link></li>
                            <li><Link to="review">Review</Link></li>
                            <li><Link to="/addservice">Add Service</Link></li>
                           

                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl"><img className='w-12' src={logo} alt="" /></Link>
                </div>


                <div className="flex-1">

                </div>
                <div className="flex-none">
                    <ul className=' hidden lg:flex gap-3 mr-10'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="review">Review</Link></li>
                        <li><Link to="/addservice">Add Service</Link></li>
                        {user?.uid ?  " ": <li><Link to="/login">Login</Link></li>}
                      
                    </ul>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {user?.photoURL ? <img src={user?.photoURL} />
                                    : <FontAwesomeIcon className='mt-3' icon={faUser} />

                                }
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-500 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    {user?.displayName}

                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li ><a onClick={handlelogOut}>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Header;