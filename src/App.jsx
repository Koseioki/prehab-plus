import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Todo from './Todo'
import { Routes, Route } from 'react-router-dom'
import Skema from './Skema'
import Kontakt from './Kontakt'
import Hjaelp from './Hjaelp'
import Navigation from './components/Navigation'
import ExerciseTutorial from './ExerciseTutorial'
import AppointmentDetails from './AppointmentDetails'

const App = () =>{

  return (
    <>
          <Navigation />

    <Routes>
      <Route path="/" element={<Todo />} />
      {/* each exercise page */}
      <Route path="/:exerciseId" element={<ExerciseTutorial />} />
      <Route path="/skema" element={<Skema />} />
      <Route path="/skema/:appointmentId" element={<AppointmentDetails />} />
      <Route path="/kontakt" element={<Kontakt />} />
      <Route path="/hjaelp" element={<Hjaelp />} />
    </Routes>
    </>

  )
}

export default App
