import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Todo from './Todo'
import Skema from './Skema'

const App = () =>{

  return (
    <Routes>
      <Route path="/" element={<Todo />} />
      <Route path="/skema" element={<Skema />} />
    </Routes>

  )
}

export default App
