import { About } from "../pages/About";
import { PostIdPages } from "../pages/PostIdPages";
import Posts from "../pages/Posts";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../pages/Login";


export const privateRoutes = [
   { path: "/about", element: <About />, exact: true },
   { path: "/posts", element: <Posts />, exact: true },
   { path: "/posts/:id", element: <PostIdPages />, exact: true },
   { path: "*", element: <Navigate to="/posts" replace={true} />, exact: true },
]

export const publicRoutes = [
   { path: "/login", element: <Login />, exact: true },
   { path: "*", element: <Navigate to="/login" replace={true} />, exact: true },
]