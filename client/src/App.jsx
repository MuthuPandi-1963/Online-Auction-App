import { useContext, useEffect } from "react";
import AuthDialog from "./components/Authforms/AuthDialog";
import Navbar from "./components/header/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {fetchUserData} from './store/Thunks/GetUserThunk'  
import { AuthContext } from "./store/Context/AuthContext";
import BiddingHero from "./components/home/Hero";

export default function App() {
  const data = useSelector(state=>state.auth)
  const {authDispatch} = useContext(AuthContext)
  console.log(data);
  
  const Dispatch = useDispatch()
  useEffect(()=>{
     Dispatch(fetchUserData())
     authDispatch({type:"close"})
     
  },[Dispatch])
  return (
    <>
    <Navbar/>
    {/* <BiddingHero/> */}
    <AuthDialog/>
    
    </>
  )
}