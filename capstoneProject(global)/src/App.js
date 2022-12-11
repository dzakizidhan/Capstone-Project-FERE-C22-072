import React from 'react';
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer';

import {
    BrowserRouter,
	BrowserRouter as Router,
	Route
  } from 'react-router-dom';

import { Routes } from 'react-router-dom'; 

import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Testimonial from './pages/Testimonial/Testimonial';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Blog from './pages/Blog';
import Cards from './pages/Service/Cards';
import BlogDetail from './pages/Blog/BlogDetail';
import ServiceEmosi from './pages/Service/emosi';
import ServiceInteraksi from './pages/Service/interaksi';
import ServicePerasaan from './pages/Service/perasaan';
  

function App() {
	return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>
                    <main>
                        <Routes>
                            <Route exact path="/" element ={<Home/>}/>
                            <Route exact path="/about-us" element ={<AboutUs/>}/>
                            <Route exact path="/blog" element ={<Blog/>}/>
                            <Route exact path="/blog/:id" element ={<BlogDetail/>}/>
                            <Route exact path="/services" element ={<Cards/>}/>
                            <Route exact path="/services/emosional" element ={<ServiceEmosi/>}/>
                            <Route exact path="/services/interaksi" element ={<ServiceInteraksi/>}/>
                            <Route exact path="/services/perasaan" element ={<ServicePerasaan/>}/>
                            <Route exact path="/testimonial" element={<Testimonial/>}/>
                            <Route exact path="/contact" element={<Contact/>}/>
                            <Route exact path="/login" element ={<Login/>}/>
                            <Route exact path="/register" element ={<Register/>}/>
                            
                            <Route exact path="/admin" element ={<Register/>}/>
                        </Routes>
                    </main>
            </BrowserRouter>
            <Footer />
        </div>
	);
}

export default App;
