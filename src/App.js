
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";

import './App.css';
import Sale from "./Sale/Sale";
// import { useState, useEffect} from 'react';
import BtnDarkMode from "./BtnDarkMode/BtnDarkMode";

function App() {
  

  return <Router >

  <nav >  
      <h2 className="flowtext">art&motors</h2>      
      <Link to="/"className="link Link--active" >Главная</Link>
      <Link to="Sale/" className="link">Акции</Link>
      <Link to="/contact"className="link">Контакты</Link>   
  <BtnDarkMode/>
  </nav>



  <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/Sale"element={<Sale/>}/>
      <Route path="/Contact"element={<Contact/>}/>

  </Routes>
</Router>


}

export default App;

