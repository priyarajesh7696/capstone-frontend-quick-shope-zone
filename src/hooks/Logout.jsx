
import { useNavigate } from "react-router-dom";
  import {toast} from 'react-toastify'

function Logout() {
  let navigate = useNavigate()
  return ()=>{
          toast.error("Logged Out Successfully")
          sessionStorage.clear()
          navigate('/')
      }
  }


export default Logout