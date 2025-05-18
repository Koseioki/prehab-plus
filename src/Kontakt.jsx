import ContactCard from './components/ContactCard';
import useDocumentTitle from './hooks/useDocumentTitle';
import { useEffect, useRef } from 'react';
import { useState } from 'react';

function Kontakt() {

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


    useDocumentTitle('Kontakt - Prehab+');
     const headingRef = useRef(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);
    return (

        <main id="main-content" className="content-width section-width">
            <h1 ref={headingRef} tabIndex={-1} className="heading">Min kontakt</h1>
            
                    <ul className="ul-no-style">
          {staffMembers.map((staffMember) => (
            <ContactCard
              key={staffMember.id}
              staffMember={staffMember} />
          ))}
        </ul>
        </main>



    );
}
export default Kontakt;