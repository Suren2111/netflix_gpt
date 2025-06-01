import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Login } from "./Login"
import Browse from "./Browse"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser,removeUser } from "../utils/userSlice";


const Body = () => {

  const dispatch=useDispatch();
  useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
  if (user) {
    //console.log(user);
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    //console.log(user)
    const {uid,email} = user;
    dispatch(addUser({uid:uid,email:email}));
    // ...
  } else {
    // User is signed out
    // ...
    dispatch(removeUser());
  }
});
  },[])
 

  return (
    <div>
    <RouterProvider router={approuter}/>
    </div>
  )
}


const approuter=createBrowserRouter([
    {
    path:"/",
    element: <Login/>
    },
    {
    path:"/browse",
    element: <Browse/>
    },

])

export default Body