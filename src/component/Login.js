import Header from "./Header"
import { useState } from "react"

export const Login = () => {
  const[isSignedIn,setIsSignedIn]=useState(true);
  const toggleLogin=()=>{
    setIsSignedIn(!isSignedIn);
  }
  return (
    <div className="relative">
     <Header />
     <div>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/202ac35e-1fca-44f0-98d9-ea7e8211a07c/web/IN-en-20250512-TRIFECTA-perspective_688b8c03-78cb-46a6-ac1c-1035536f871a_small.jpg"
      alt="logo"/>
     </div>
     <form className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col bg-black text-white w-80 space-y-4 bg-opacity-70">
      <h1 className="mt-6 mx-8">{isSignedIn ? "Sign In" : "Sign Up"}</h1>
      {!isSignedIn && <input type="text" placeholder='Name' className="p-2 rounded bg-gray-800  mt-2 mx-8"></input>}
      <input type="text" placeholder='Email or mobile number' className="p-2 rounded bg-gray-800  mt-2 mx-8"></input>
      <input type="password" placeholder='Password' className="p-2 rounded bg-gray-800 mt-2 mx-8"></input>
      <button className="bg-red-700 mt-2 mx-8 p-2">{isSignedIn ? "Sign In" : "Sign Up"}</button>
      <p className="mx-8 mb-6 cursor-pointer"  onClick={toggleLogin}>{isSignedIn ? "New to Netflix? Sign up now." : "Already user? Sign in now"}</p>
     </form>
     </div>
  )
}