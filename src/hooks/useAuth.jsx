import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"


const useAuth = () => {
  const { user, handleLogin, handleLogout, handleSignUp } = useContext(AuthContext);

  return { user, handleLogin, handleLogout, handleSignUp }
}

export default useAuth