import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/components/App';
import Gallery from './components/Gallery';
import Title from './components/Title';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Title/>
    <Gallery/>
    {/* <App /> */}
  </>

);

