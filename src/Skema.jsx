import useDocumentTitle from './hooks/useDocumentTitle';

import Notebook from './components/Notebook';
import SkemaToggle from './components/SkemaToggle';
function Skema() {
  useDocumentTitle('Mit skema - Prehab+');

  return (

    <main id="main-content" className="content-width">

      <Notebook>
        <h1>Mit skema</h1>

        <SkemaToggle />

      </Notebook>






    </main>
  );
}
export default Skema;