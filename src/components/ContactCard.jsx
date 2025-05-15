import RingCard from '../components/RingCard';
import Rikke from '../assets/rikke.png';
import './ContactCard.css';
import Mail from '../assets/mail.svg';
import Phone from '../assets/phone.svg';
import Video from '../assets/video.svg';

function ContactCard() {
    return (
// card
        <RingCard>
            <div className="contact-card">
                <div className="contact-card-header">
                    <img className="thumbnail" src={Rikke} alt="" />
                    <div>
                        <h2>Rikke Møller</h2>
                        <p>Din prehabilitation koordinerer</p>
                    </div>
                </div>
                <p>Har du spørgsmål til forløbet, øvelser eller praktiske forhold, kan du kontakte mig :-)</p>
                <ul className="ul-no-style">
                    <li>
                        <a href="#" className="button button-yellow">
                            <img src={Mail} className="text-icon" alt="" />
                          Skriv til Rikke
                            </a>
                    </li>
                    <li>

                        <a href="#" className="button button-yellow">
                            <img src={Phone} className="text-icon" alt="" />
                            Ring til Rikke</a>
                    
                    </li>
                    <li>
                        <a href="#" className="button button-yellow">
                            <img src={Video} className="text-icon" alt="" />
                            Video-opkald med Rikke</a>
                    </li>
                </ul>
            </div>
        </RingCard>

    );
}

export default ContactCard;