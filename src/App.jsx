import Navbar from "./components/topbar/topbar"
import Sidebar from "./components/sidebar/Sidebar"
import VolunteerForm from "./components/VolunteerForm"
import Login from "./components/Login"
import SignupPage from "./components/Signin"
import Home from "./pages/home/Home"
import Products from "./pages/products/product"
import "./app.css"
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { useState } from "react"

function App() {
  
  const [auth, setAuth] = useState(
    false || window.localStorage.getItem("auth") === "true"
  )

  function Logout() {
    window.localStorage.clear()
    
    window.location.reload();
  }
 
  return (
    <>
      {/* <button className="p-2 rounded-lg outline " onClick={Logout}>
        Toggle Auth
      </button> */}
      <BrowserRouter>
        <div className="App">
          {auth && <Navbar />}
          <div className="container">
            {auth && <Sidebar />}
            <Routes>
              {auth && <Route path="/" element={<Home />} />}
              {!auth && <Route path="/signup" element={<SignupPage />} />}

              {!auth && <Route path="/volunteer" element={<VolunteerForm />} />}
              <Route exact path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
  }
export default App
