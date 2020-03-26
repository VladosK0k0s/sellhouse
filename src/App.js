import React from 'react';
import './App.scss';
import Header from './Components/Header/Header.jsx';
import MainSlider from './Components/MainSlider/MainSlider.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Form from './Components/Form/Form.jsx';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header/>
          <MainSlider/>
          <Form/>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
