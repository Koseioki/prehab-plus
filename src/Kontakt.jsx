import ContactCard from './components/ContactCard';
import useDocumentTitle from './hooks/useDocumentTitle';
import { useEffect, useRef } from 'react';

function Kontakt() {
    useDocumentTitle('Kontakt - Prehab+');
     const headingRef = useRef(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);
    return (

        <main id="main-content" className="content-width section-width">
            <h1 ref={headingRef} tabIndex={-1} className="heading">Min kontakt</h1>
            <ContactCard/> 
        </main>



    );
}
export default Kontakt;