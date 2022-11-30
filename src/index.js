import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
// import App from '../src/components/App';
// import Gallery from './components/Gallery';
// import Title from './components/Title';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header logo="images/logo.png" dropdown="Shop" />
    <Header logo="images/logo1.png" dropdown="About" />
  </>


  // <>
  //   <Title/>
  //   <Gallery/>
  //    <App />
  // </>


);

