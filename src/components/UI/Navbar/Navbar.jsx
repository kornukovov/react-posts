import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import { MyButton } from "../button/MyButton";


export const Navbar = () => {
  
  const {isAuth, setIsAuth} = useContext(AuthContext)
  console.log(isAuth);

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <div className="navbar">
      <MyButton onClick={logout}>
        go out
      </MyButton>
      <div className="navbar__links">
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  )
}