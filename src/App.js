import React from 'react';
import './App.scss';
import Header from './Components/Header/Header.jsx';
import MainSlider from './Components/MainSlider/MainSlider.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Form from './Components/Form/Form.jsx';
import Sorrypage from './Components/SorryPage/SorryPage.jsx';
import {BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Route exact path = '/' render = {() =><><MainSlider/><Form/></>}/>
        <Route exact path = '/sorrypage' render = {() => <Sorrypage/>}/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
