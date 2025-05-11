import React from 'react'
import Todo from './Todo'
import Skema from './Skema'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Todo />} />
      <Route path="/skema" element={<Skema />} />
    </Routes>

  )
}

export default App
