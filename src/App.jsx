import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import React, { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
     
    </div>
  );
}

export default App;
