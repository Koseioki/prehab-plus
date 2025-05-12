import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Todo from './Todo'
import { Routes, Route } from 'react-router-dom'
import Skema from './Skema'
import Kontakt from './Kontakt'
import Hjaelp from './Hjaelp'
import Navigation from './components/Navigation'

const App = () =>{

  return (
    <>
          <Navigation />

    <Routes>
      <Route path="/" element={<Todo />} />
      <Route path="/skema" element={<Skema />} />
      <Route path="/kontakt" element={<Kontakt />} />
      <Route path="/hjaelp" element={<Hjaelp />} />
    </Routes>
    </>

  )
}

export default App
