import Header from './Header'
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Browse = () => {
  const navigate=useNavigate();
  const HandleSignOut=()=>{
    signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/")
    
}).catch((error) => {
  // An error happened.
});
  }
  return (
     <div className='flex justify-between'>
      <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
       alt="logo" className='w-32'/>
      <div className='flex p-2 m-2'>
        <img src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' alt="logo" className='w-10'></img>
        <button onClick={HandleSignOut}>(Sign out)</button>
      </div>
     </div>
  )
}

export default Browse