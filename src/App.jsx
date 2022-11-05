

import Navbar from "./components/topbar/topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Products from "./pages/products/product";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";




function App() {

  const [auth, setAuth] = useState(true);
  return (
<>
   
    <BrowserRouter>
    <div className="App">
          {auth&&<Navbar/>}
    <div className="container">
    <Sidebar/>
      <Routes>
        
        
        <Route path="/"
        element={<Home/>}/>
         <Route path="/products" element={<Products />}/>
        
      </Routes>
    </div>
    </div>
    </BrowserRouter>  
</>

  );
}

export default App;
