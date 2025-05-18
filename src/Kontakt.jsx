import ContactCard from './components/ContactCard';
import useDocumentTitle from './hooks/useDocumentTitle';

function Kontakt() {
    useDocumentTitle('Kontakt - Prehab+');
    return (

        <main id="main-content" className="content-width section-width">
            <h1 className="heading">Min kontakt</h1>
            <ContactCard/> 
        </main>



    );
}
export default Kontakt;