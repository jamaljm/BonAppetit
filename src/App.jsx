import Navbar from "./components/topbar/topbar"
import Sidebar from "./components/sidebar/Sidebar"
import VolunteerForm from "./components/VolunteerForm"
import Login from "./components/Login"
import SignupPage from "./components/Signin"
import Home from "./pages/home/Home"
import React from "react"
import Products from "./pages/products/product"
import "./app.css"
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { useState } from "react"
import Landingpage from "./components/Landingpage.js/Landingpage";

function App() {
  
  const [auth, setAuth] = useState(
    false || window.localStorage.getItem("auth") === "true"
  )

  const navigate = useNavigate()

  
 
  return (
    <>
      <div className="App">
        {auth && <Navbar />}
        <div className="container">
          {auth && <Sidebar />}
          <Routes>
            <Route path="*" component={<Landingpage/>} />
            {auth && <Route exact path="/home" element={<Home />} />}
            {!auth && <Route exact path="/" element={<SignupPage />} />}

            {<Route path="/volunteer" element={<VolunteerForm />} />}
            {!auth && <Route exact path="/login" element={<Login />} />}
          </Routes>
        </div>
      </div>
    </>
  );
  }
export default App
