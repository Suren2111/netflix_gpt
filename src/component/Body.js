import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Login } from "./Login"
import Browse from "./Browse"


const Body = () => {
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