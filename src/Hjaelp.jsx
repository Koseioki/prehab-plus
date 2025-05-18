import useDocumentTitle from './hooks/useDocumentTitle';

import ContactCard from './components/ContactCard';
import RingCard from './components/RingCard';
function Hjaelp() {
    useDocumentTitle('Hjælp - Prehab+');
    return (

        <main id="main-content" className="content-width section-width">
            <h1 className="heading">Hjælp</h1>
            <div className="paragraph">
            <p>Vi arbejder på at samle de mest stillede spørgsmål og svar her.
            </p>
            <p>Har du brug for hjælp nu, kan du kontakte os her.</p>
            </div>
            <ContactCard />
        </main>


    );
}
export default Hjaelp;