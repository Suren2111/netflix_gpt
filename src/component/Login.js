import Header from "./Header"
import { useState, useRef } from "react"
import { validate } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const navigate=useNavigate();
  //console.log("Login component is rendered");

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSubmitClick = () => {
    if (!isSignedIn) {
      const message = validate(email.current.value, password.current.value, isSignedIn, name.current.value);
      setErrMessage(message);
    }
    else {
      const message = validate(email.current.value, password.current.value, isSignedIn);
      setErrMessage(message);
    }
    //If the password or email or name is invalid
    if (errMessage) return;

    else {
      if (!isSignedIn) {
        //Logic for signup form
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            //console.log(user);
            // ...
            navigate("/browse")
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            //console.log(errorCode+"- "+errMessage);
            setErrMessage(errorCode + errMessage);
            // ..
          });
      }
      else {
        //Logic for signin form
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            //console.log(user);
            // ...
             navigate("/browse")
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrMessage(errorCode + errMessage);
          });
      }
    }


  }
  const toggleLogin = () => {
    setIsSignedIn(!isSignedIn);
  }
  return (
    <div className="relative">
      <Header />
      <div>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/202ac35e-1fca-44f0-98d9-ea7e8211a07c/web/IN-en-20250512-TRIFECTA-perspective_688b8c03-78cb-46a6-ac1c-1035536f871a_small.jpg"
          alt="logo" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col bg-black text-white w-80 space-y-4 bg-opacity-70">
        <h1 className="mt-6 mx-8">{isSignedIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignedIn && <input ref={name} type="text" placeholder='Name' className="p-2 rounded bg-gray-800  mt-2 mx-8"></input>}
        <input ref={email} type="text" placeholder='Email or mobile number' className="p-2 rounded bg-gray-800  mt-2 mx-8"></input>
        <input ref={password} type="password" placeholder='Password' className="p-2 rounded bg-gray-800 mt-2 mx-8"></input>
        {errMessage != null && <p className="text-red-700 text-lg font-bold p-2 mx-8">{errMessage}</p>}
        <button className="bg-red-700 mt-2 mx-8 p-2" onClick={handleSubmitClick}>{isSignedIn ? "Sign In" : "Sign Up"}</button>
        <p className="mx-8 mb-6 cursor-pointer" onClick={toggleLogin}>{isSignedIn ? "New to Netflix? Sign up now." : "Already user? Sign in now"}</p>
      </form>
    </div>
  )
}