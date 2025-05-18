import useDocumentTitle from './hooks/useDocumentTitle';

import Notebook from './components/Notebook';
import SkemaToggle from './components/SkemaToggle';

import { useEffect, useRef } from 'react';

function Skema() {
  // change the title
  useDocumentTitle('Mit skema - Prehab+');

// set focus on the heading
   const headingRef = useRef(null);
  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (

    <main id="main-content" className="content-width">

      <Notebook>
        <h1 ref={headingRef} tabIndex={-1}>Mit skema</h1>

        <SkemaToggle />

      </Notebook>






    </main>
  );
}
export default Skema;