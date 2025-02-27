import React, { useContext } from 'react'
import { IoSearch } from "react-icons/io5";
import { AuthContext } from '../../store/Context/AuthContext';
const MenuButtons = () => {
  const {authState,authDispatch}=useContext(AuthContext);
  console.log(authState);
  
  return (
    
    <div className="flex items-center text-xl font-medium gap-x-4 pr-10">
        <div className="search">
            <input type="text" hidden />
            <button><IoSearch className='text-3xl'/></button>
        </div>
        <div className="signup ">
            <button onClick={()=>authDispatch({type:"register"})} className=' cursor-pointer py-3 px-6 bg-green-900  hover:bg-green-700 text-white rounded-full'>Signup</button>
        </div>
        <div className="login ">
            <button onClick={()=>authDispatch({type:"login"})} className='cursor-pointer py-3 px-6 bg-gray-100 hover:bg-gray-300 text-black ring rounded-full'>Login</button>
        </div>
    </div>
  )
}

export default MenuButtons