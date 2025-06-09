import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { NetFlix_LOGO } from '../utils/constant';

const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
   useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth, (user) => {
    if (user) {
      //console.log(user);
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      //console.log(user)
      const { uid, email, displayName, photoURL } = user;
      dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
      // ...
      navigate("/browse");
    } else {
      // User is signed out
      // ...
      dispatch(removeUser());
      navigate("/");
    }

  });

    return () => unsubscribe();
    },[])
  return (
    <div className="absolute w-32 bg-black">
      <img src={NetFlix_LOGO}
       alt="logo"/>
    </div>
  )
}

export default Header