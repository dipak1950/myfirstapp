import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Header from './components/Header';
// import Travel from './components/Travel'
import Counter from './components/Counter';
import HoverCounter from './components/HoverCounter';
import CounterFunHook from './components/CounterFun';
import PageWidth from './components/PageWidth';
import CounterFunUse from './components/CounterFunUse';
import Tab from './components/TabApi';
import List from './components/List-and-Key';
import FormHandle from './components/FormHandle';
import Events from './components/Events';
import FormManage from './components/FormManage';
// import App from '../src/components/App';
// import Gallery from './components/Gallery';
// import Title from './components/Title';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const arr = ["home", "pages", "tour-list", "room-list", "tour-search", "blog"]
root.render(
  <>
    {/* <Counter /> */}
    {/* <HoverCounter/> */}
    {/* <CounterFunHook/> */}
    {/* <PageWidth /> */}
    {/* <CounterFunUse /> */}
    {/* <Tab /> */}
    {/* <List/> */}
    {/* <FormHandle /> */}
    {/* <Events /> */}
    <FormManage />
  </>

  // <Travel logo ="images/logo-travel.png" list = {arr} />

  // <>
  /* <Header logo="images/logo.png" dropdown="Shop" />
    <Header logo="images/logo1.png" dropdown="About" /> */
  // </>


  // <>
  //   <Title/>
  //   <Gallery/>
  //    <App />
  // </>


);

