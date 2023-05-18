import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Pages/Home';
import Products from './components/Pages/Products/Products';
import Basket from './components/Pages/Basket';
import Orders from './components/Pages/Orders';
import NotFound from './components/Pages/NotFound';


function App() {
  return (
    <div className="App">
       <Router>
        <div>
        <NavBar />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
       </Router>
    </div>
  );
}

export default App;
