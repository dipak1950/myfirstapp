import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Travel from './components/Travel'
// import Counter from './components/Counter';
// import HoverCounter from './components/HoverCounter';
// import CounterFunHook from './components/CounterFun';
// import PageWidth from './components/PageWidth';
// import CounterFunUse from './components/CounterFunUse';
// import Tab from './components/TabApi';
// import List from './components/List-and-Key';
// import FormHandle from './components/FormHandle';
// import Events from './components/Events';
// import FormManage from './components/FormManage';
// import RegisterForm from './components/RegisterForm';
// import Todolist from './components/ToDoApp';
// import LocalStorageForm from './components/LocalStorageForm';
// import Header from './components/Router-Pages/Home/HeaderR';
import HeaderR from './components/Router-Pages/Home/HeaderR';
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
    {/* <Events /> */}
    {/* <FormHandle /> */}
    {/* <FormManage /> */}
    {/* <RegisterForm /> */}
    {/* <Todolist /> */}
    {/* <LocalStorageForm /> */}
    <BrowserRouter>
      <HeaderR />
    <Routes>
      <Route path='/' element='Home'/>
      <Route path='/Features' element='Features'/>
      <Route path='/Pricing' element='Pricing'/>
    </Routes>
    </BrowserRouter>
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

