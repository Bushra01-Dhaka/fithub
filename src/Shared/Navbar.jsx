import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo/fithub.svg'


const Navbar = () => {
    const navItem = <>
        <li>
            <NavLink to='/'
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-[#F72464] font-bold underline  rounded" : ""
          }
            >Home</NavLink> 
        </li>
        <li>
            <NavLink to='/gallery'>Gallery</NavLink> 
        </li>
        <li>
            <NavLink to='/trainer'>Trainer</NavLink> 
        </li>
        <li>
            <NavLink to='/classes'>Classes</NavLink> 
        </li>
        <li>
            <NavLink to='/dashboard'>Dashboard</NavLink> 
        </li>
        <li>
            <NavLink to='/community'>Community</NavLink> 
        </li>
    </>
  return (
    <div className="navbar bg-base-100 fixed z-20 md:max-w-screen-xl mx-auto shadow-xl">
      <div className="navbar-start">
        <div className="dropdown bg-white text-black font-bold">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-[#F72464]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
           {navItem}
          </ul>
        </div>
        {/* logo  */}
        <div className='flex items-center'>
           <Link><img 
           className='w-[100px] h-[70px]'
           src={logo} alt="" /></Link>
           <p className='uppercase font-extrabold text-[#F72464]'>Fithub</p>
        </div>
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItem}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-sm bg-[#F72464] rounded text-white hover:bg-red-400">Log in</a>
      </div>
    </div>
  );
};

export default Navbar;
