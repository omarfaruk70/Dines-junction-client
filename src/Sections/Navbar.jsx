import { Link, NavLink } from 'react-router-dom';
import { BiSolidUser } from "react-icons/bi";

import logo from "/logo.jpg";
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import Swal from 'sweetalert2';
const Navbar = () => {
  const {user, logOutUser} = useContext(AuthContext);
  console.log(user);
  const handleLogoutUser = () => {
    logOutUser()
    .then(()=> {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User log out",
        showConfirmButton: false,
        timer: 1500,
      });
    })
  }
  const li = <>
         <li  className='hover:border-b-2 py-3 rounded-sm transition-all border-yellow-500'>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? "text-white bg-amber-400 font-bold "
                  : ""
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li className='hover:border-b-2 py-3 rounded-sm transition-all border-yellow-500' >
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? "text-white bg-amber-400 font-bold"
                  : ""
              }
              to={"/allfood"}
            >
              All Food
            </NavLink>
          </li >
          <li className='hover:border-b-2 py-3 rounded-sm transition-all border-yellow-500'>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? "text-white bg-amber-400  font-bold"
                  : " "
              }
              to={"/blog"}
            >
              Blog
            </NavLink>
          </li>
  </>
    return (
      <div>
        <div className="navbar px-10 shadow-xl">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm flex justify-start items-center dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {li}
        </ul>
      </div>
      <Link>
      <img src={logo} className='w-20 h-14 rounded-3xl text-xl' alt="brand-logo" />
      </Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 flex justify-center items-center gap-5">
        {li}        
      </ul>
    </div>
    <div className="navbar-end">
      { user?.email ? 
    <div className='flex justify-center items-center'>
      <div>
      <h2 className="text-xl mr-10">{user?.displayName}</h2>
      </div>
      <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
      <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
      </div>
      </div>
      <ul tabIndex={0} className="flex flex-col justify-center items-center font-bold gap-y-5 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-40">
      <Link to={'/hudai'} className="hover:text-yellow-500">
      Profile
      </Link>
      <Link className='hover:text-yellow-500 ' to={'/blog'}>Settings</Link>
      <Link onClick={handleLogoutUser} className='hover:text-yellow-500'>Logout</Link>
      </ul>
      </div>
    </div> 
      :
    <Link to={'/login'} className="btn glass"><BiSolidUser className='text-2xl text-yellow-500' />Login</Link>
     }
    </div>
        </div>
     </div>
    );
};

export default Navbar;











