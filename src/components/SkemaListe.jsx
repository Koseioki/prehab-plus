import AppointmentComponent from '../components/AppointmentComponent';
import React, { useState, useEffect } from 'react';
function SkemaListe() {
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
        <>

            <ul className="ul-no-style">
                {appointments.map((appointment) => (
                    <AppointmentComponent
                        key={appointment.id}
                        appointment={appointment} />
                ))}    </ul>
        </>
    );
}
export default SkemaListe;