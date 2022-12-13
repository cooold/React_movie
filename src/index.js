import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Header from './components/Header';
import Carousel from './components/Carousel' ;
import Column from './pages/Home/components/Column';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Carousel />
    <Column />
    <Home />
  </React.StrictMode>
);

