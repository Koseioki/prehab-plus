import useDocumentTitle from './hooks/useDocumentTitle';
import ContactCard from './components/ContactCard';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
function Hjaelp() {

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

  useDocumentTitle('Hjælp - Prehab+');
  const headingRef = useRef(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);
  return (

    <main id="main-content" className="content-width section-width">
      <h1 ref={headingRef} tabIndex={-1} className="heading">Hjælp</h1>
      <div className="paragraph">
        <p>Vi arbejder på at samle de mest stillede spørgsmål og svar her.
        </p>
        <p>Har du brug for hjælp nu, kan du kontakte os her.</p>
      </div>
      <ul className="ul-no-style">
        {staffMembers.map((staffMember) => (
          <ContactCard
            key={staffMember.id}
            staffMember={staffMember} />
        ))}
      </ul>        </main>


  );
}
export default Hjaelp;