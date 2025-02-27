import React from 'react'
import Logo from './Logo';
import MenuItems from './MenuItems';
import MenuButtons from './MenuButtons';
import { useSelector } from 'react-redux';
import UserProfile from './Profile';

const Navbar = () => {
  const data = useSelector(state=>state.auth)
  return (
    <>
    <div className="px-4 flex items-center justify-between shadow-xl shadow-gray-200 sticky top-0 z-40 bg-white">
        <Logo/>
        <MenuItems/>
        {data.isAuthenticated ? <UserProfile user={data}/> : <MenuButtons/>}
    </div>
    </>
  )
}

export default Navbar;