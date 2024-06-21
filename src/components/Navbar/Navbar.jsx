import React, { useContext, useState } from 'react';
import logo from '../../assets/images/logo.svg';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/userContext';

export default function Navbar() {
  const { UserLogin, setUserLogin } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function logOut() {
    localStorage.removeItem('userToken');
    setUserLogin(null);
    navigate('/login');
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-gray-100 px-24 fixed top-0 left-0 right-0 z-50 dark:bg-gray-700 '>
      <div className="container items-center flex justify-between mx-auto py-4">
        <div className='flex items-center'>
          <Link to={'./'}>
          <img src={logo} width={120} alt="fresh cart logo" />
          </Link>
          <button className="xl:hidden absolute right-0 top-0 p-3 rounded-full mt-2 mr-2 justify-center items-center flex text-white bg-green-600 ml-4" onClick={toggleMenu}>
            <i className={`fas fa-${isOpen ? 'times' : 'bars'} text-2xl`}></i>
          </button>
        </div>
        <div className={`flex-col xl:flex-row xl:flex xl:items-center ${isOpen ? 'flex' : 'hidden'} xl:flex`}>
          <ul className='flex  flex-col xl:flex-row justify-around m-0 pl-10'>
            {UserLogin !== null && (
              <>
                <li className='text-md mx-4 dark:text-gray-100 text-slate-900 font-normal'><NavLink to='/'>Home</NavLink></li>
                {/* <li className='text-md mx-4 dark:text-gray-100 text-slate-900 font-normal'><NavLink to='/about'>About</NavLink></li> */}
                <li className='text-md mx-4 dark:text-gray-100 text-slate-900 font-normal'><NavLink to='/cart'>Cart</NavLink></li>
                <li className='text-md mx-4 dark:text-gray-100 text-slate-900 font-normal'><NavLink to='/brands'>Brands</NavLink></li>
                <li className='text-md mx-4 dark:text-gray-100 text-slate-900 font-normal'><NavLink to='/products'>Products</NavLink></li>
              </>
            )}
          </ul>
          <ul className='flex flex-col xl:flex-row justify-around m-0 pl-10'>
            {UserLogin === null ? (
              <>
                <li className='text-md mx-4 dark:text-gray-100 text-slate-900 font-normal'><NavLink to='/login'>Login</NavLink></li>
                <li className='text-md mx-4 dark:text-gray-100 text-slate-900 font-normal'><NavLink to='/register'>Register</NavLink></li>
              </>
            ) : (
              <li onClick={logOut} className='text-md mx-4 dark:text-gray-100 text-slate-900 font-normal cursor-pointer'>
                <span>Logout</span>
              </li>
            )}
            {/* <li className='text-md mx-4 text-slate-900 font-normal items-center flex justify-between'>
              <i className='fab fa-facebook mx-2 fa-sm'></i>
              <i className='fab fa-twitter mx-2 fa-sm'></i>
              <i className='fab fa-instagram mx-2 fa-sm'></i>
              <i className='fab fa-tiktok mx-2 fa-sm'></i>
              <i className='fab fa-youtube mx-2 fa-sm'></i>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
