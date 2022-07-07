import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Error } from "../pages/Error";
import { About } from "../pages/About";
import Posts from "../pages/Posts";
import { PostIdPages } from "../pages/PostIdPages";
import { privateRoutes, publicRoutes } from "../router";
import { AuthContext } from "../context";
import { Loader } from "./UI/Loader/Loader";


export const AppRouter = () => {
   const { isAuth, isLoading } = useContext(AuthContext)

if(isLoading){
   return <Loader/>
}

   return (
      isAuth
         ?
         <Routes>
            {privateRoutes.map(route =>
               <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                  exact={route.exact}
               />
            )}
         </Routes>
         :
         <Routes>
            {publicRoutes.map(route =>
               <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                  exact={route.exact}
               />
            )}
         </Routes>
   )
}
