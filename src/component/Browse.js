import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useSelector } from "react-redux";
import Header from "./Header";
import { API_options, Body_LOGO } from "../utils/constant";
import { useEffect } from "react";


const Browse = () => {
  const user=useSelector((state)=>state.user);
  const getNowPlayingMovies=async ()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_options)
    const json=await data.json();
    console.log(json);
  }

  useEffect(()=>{
    getNowPlayingMovies();
  },[])
  const HandleSignOut=()=>{
    signOut(auth).then(() => {
    
}).catch((error) => {
  // An error happened.
});
  }
  return (
     <div className='flex justify-between'>
      <Header />
      <img src={Body_LOGO}
       alt="logo" className='w-32'/>
      <div className='flex p-2 m-2'>
        <img src={user?.photoURL} alt="logo" className='w-10'></img>
        <button onClick={HandleSignOut}>(Sign out)</button>
      </div>
     </div>
  )
}

export default Browse