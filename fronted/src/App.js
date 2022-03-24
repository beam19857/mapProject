import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin/signin";
import Main from "./components/Main/main";
import Login from "./components/Login/login";

export default function App() {
  return (
        <Routes>
        <Route path="/" element={<Main />} />
        <Route  path="/signin" element={<Signin />} />
        <Route  path="/login" element={<Login />} />
        </Routes>
  )
}
