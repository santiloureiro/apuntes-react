import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import FunctionState from './components/clase-04'
import Clase05 from './components/clase-05'
import Clase06 from './components/clase-06'
import './index.css'
import NavBar from './components/NavBar'
import Clase09 from './components/clase-09'
import ApiDetail from './components/ApiDetail'


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={
          <FunctionState />
        }></Route>
        <Route exact path="/clase-05" element={
          <Clase05 />
        }></Route>
        <Route exact path="/clase-06" element={
          <Clase06 />
        }></Route>
        <Route exact path="/item/:id" data="20" element={
          <ApiDetail />
        }></Route>
                <Route exact path="/clase-09" element={
          <Clase09 />
        }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
