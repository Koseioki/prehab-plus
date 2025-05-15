
import React, { useState, useEffect } from 'react';
import Notebook from './components/Notebook';
import AppointmentComponent from './components/AppointmentComponent';
function Skema() {

  //get appointments
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function getAppointments() {
      const url = "https://prehab-plus-default-rtdb.firebaseio.com/appointments.json";
      const response = await fetch(url);
      const data = await response.json();
      const appointmentsArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setAppointments(appointmentsArray);
      console.log(appointmentsArray);
    }
    getAppointments();
  }
    , []);



  return (


    <div id="main-content">




      <Notebook>
        <h1>Mit skema</h1>
        <hr aria-hidden="true" />

        <ul className="ul-no-style">
          {appointments.map((appointment) => (
            <AppointmentComponent
              key={appointment.id}
              appointment={appointment} />
          ))}    </ul>
      </Notebook>
    </div>
  );
}
export default Skema;