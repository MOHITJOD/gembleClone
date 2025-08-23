import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landingPage/home/HomePage';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import About from './landingPage/about/AboutPage';
import Signup from './landingPage/signup/Signup.js';
import Support from './landingPage/support/SupportPage';
import Price from './landingPage/pricing/PricingPage.js';
import ProductPage from './landingPage/products/ProductPage.js';
import NoPage from './landingPage/Nopage.js';
import Navbar from './landingPage/Navbar.js';
import Footer from './landingPage/Footer.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='signup' element={<Signup/>}/>
    <Route path='price' element={<Price/>}/>
    <Route path='support' element={<Support/>}/>
    <Route path='products' element={<ProductPage/>}/>
    <Route path='*' element={<NoPage/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
);

