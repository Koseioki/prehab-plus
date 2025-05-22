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

    // get staff members from firebase
    const [staffMembers, setStaffMembers] = useState([]);
    useEffect(() => {
        async function getStaffMembers() {
            const url = "https://prehab-plus-default-rtdb.firebaseio.com/staff.json";
            const response = await fetch(url);
            const data = await response.json();
            const staffMembersArray = Object.keys(data).map((key) => ({
                id: key,
                ...data[key],
            }));
            setStaffMembers(staffMembersArray);
            console.log(staffMembersArray);
        }
        getStaffMembers();
    }
        , []);

    // Find the staff member related to this appointment
    const staffMember = staffMembers.find(
        (member) => member.id === appointment.staffId // adjust property name if needed
    );

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
                <AppointmentComponent appointment={appointment} detailPage="true" />

                <h2 className="heading">Om aftalen</h2>

                {appointment.description && appointment.description.slice(0).map((description, index) => (
                    <p className="paragraph" key={index}>{description}</p>
                ))}


            </Notebook>

            <div className="content-width">
                <h2 className="heading">Spørgsmål?</h2>
                <ul className="ul-no-style">

                    {staffMember && <ContactCard staffMember={staffMember} />}
                </ul>
            </div>
        </main>
    );
}
export default AppointmentDetails;