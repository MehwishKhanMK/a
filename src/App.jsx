import logo from './logo.svg';
import './App.css';
import Header from './components/Main/header';
import Body from './components/Main/body';
import Footer from './components/Main/footer';
import React, { useEffect } from 'react';
import Headerr from './components/Feedback/headerr';
import Bodyy from './components/Feedback/bodyy';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Body/>}/>
      <Route path="/feedback" element={<Bodyy/>}/>

      </Routes>
      
      </BrowserRouter>

      {/* <Header/>
      <Body/>
      <Footer/>
     <Headerr/>
      <Bodyy/>  */}
     
    </div>
  );
}

export default App;
