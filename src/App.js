import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { Navbar } from "./components/UI/Navbar/Navbar";
import { AuthContext } from "./context";
import { About } from "./pages/About";
import Posts from "./pages/Posts";
import "./styles/App.css";


function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
  if(localStorage.getItem('auth')){
    setIsAuth(true)
  }
  setIsLoading(false)
}, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
        <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
    </AuthContext.Provider>
  
  )
}


export default App;