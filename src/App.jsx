
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Details from './components/Details';

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/login' element={<Login/>}/>
        <Route path='/detail/:id' element={<Details/>}/>
      </Routes>
      </BrowserRouter>
     </>
  )
}

export default App
