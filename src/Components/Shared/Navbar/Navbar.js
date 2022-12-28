import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(err => {
                console.log(err)
            })
    }
    const items = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link>Media</Link></li>
        <li> <Link>Message</Link></li>
        <li><Link>About</Link></li>
        {
            user?.uid ?
                <>
                    <li> <Link onClick={handleLogout}><button className="btn btn-primary btn-sm">Logout</button></Link></li>
                </> :
                <>
                    <li><Link to='/login' className=''><b>Login</b></Link></li>
                    <li> <Link to='/register'><button className="btn btn-primary btn-sm">Register</button></Link></li>
                </>
        }



    </>

    return (
        <div className="navbar bg-base-100 lg:w-11/12 mx-auto ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {items}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">SHADOw</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {items}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <Link className='mr-8'><b>Login</b></Link>
                <button className="btn btn-primary btn-sm">Register</button>
            </div> */}
        </div>
    );
};

export default Navbar;