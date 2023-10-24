 import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { logOutUser, loginUser, registerUser } from "../features/user/authSlice"
function Header() {
  const dispatch=useDispatch()
  const {user}=useSelector(state=>state.atuh)
  const handleLogout=()=>{
    dispatch(logOutUser());
  };
  return (
   <>
     <header class='header'>
            <div class='logo'>
              <Link to='/'>Support Desk</Link>
            </div>
            <ul>
            {
              user ? (  <li>
                <button class='btn' onClick={handleLogout}>
                Logout
                </button>
              </li>
             ) : (
            <>
              <li>
              <Link to='/login'>
               Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
              Register
              </Link>
            </li>
            </>
             )
            }    
             </ul>
          </header>
      
   
   </>
  )
}

export default Header