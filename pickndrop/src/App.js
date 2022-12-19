import React, { createContext } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Services from './components/Services';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Faq from './components/Faq';
import Contact from './components/Contact';

// const UserContext = createContext();

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/about" element={<Services />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Faq />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/register" element={<Signup />} />
          <Route path="*" element={<> <div className="h-[90vh]"><h1>Error 404 <br /> Page not found</h1></div></>} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
