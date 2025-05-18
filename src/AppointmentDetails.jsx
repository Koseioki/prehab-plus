
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRef } from 'react';
import BackButton from './components/BackButton';
import Notebook from './components/Notebook';
import AppointmentComponent from './components/AppointmentComponent';
import ContactCard from './components/ContactCard';
import useDocumentTitle from './hooks/useDocumentTitle';

function AppointmentDetails() {

    // import the id from param
    const { appointmentId } = useParams();
    // get the appointment from the firebase database
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        async function getAppointment() {
            const url = `https://prehab-plus-default-rtdb.firebaseio.com/appointments/${appointmentId}.json`;
            const response = await fetch(url);
            const data = await response.json();
            data.id = appointmentId;
            setAppointment(data);
            console.log(data);
        }
        getAppointment();
    }, [appointmentId]);

    useDocumentTitle(`${appointment.title || ''} - Prehab+`);

    const headingRef = useRef(null);
    useEffect(() => {
        headingRef.current?.focus();
    }, []);

    return (
        <main id="main-content" className="content-width">
            <Notebook>
                <BackButton />
                <h1 ref={headingRef} tabIndex={-1} className="heading sr-only">{appointment.title}</h1>
                <AppointmentComponent appointment={appointment} />

                <h2 className="heading">Om aftalen</h2>

                {appointment.description && appointment.description.slice(0).map((description, index) => (
                    <p key={index}>{description}</p>
                ))}


            </Notebook>

            <div class="content-width">
                <h2>Spørgsmål?</h2>
                <ContactCard />
            </div>
        </main>
    );
}
export default AppointmentDetails;