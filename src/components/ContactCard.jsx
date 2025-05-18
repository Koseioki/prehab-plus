import RingCard from '../components/RingCard';
// import Rikke from '../assets/rikke.png';
import './ContactCard.css';
import Mail from '../assets/mail.svg';
import Phone from '../assets/phone.svg';
import Video from '../assets/video.svg';

function ContactCard({ staffMember }) {

    return (
        <li>
            <RingCard>
                <div className="contact-card">
                    <div className="contact-card-header">
                        <img className="thumbnail" src={staffMember.image} alt="" />
                        <div>
                            <h2>{staffMember.name} {staffMember.surname}</h2>
                            <p>Din {staffMember.title}</p>
                        </div>
                    </div>
                    <div className="paragraph">
                        <p>{staffMember.description}</p>
                    </div>
                    <ul className="ul-no-style">
                        <li>
                            <a href={`mailto:${staffMember.email}`} className="button button-yellow">
                                <img src={Mail} className="text-icon" alt="" />
                                Skriv til {staffMember.name}
                            </a>
                        </li>
                        <li>

                            <a href={`tel:${staffMember.phone}`} className="button button-yellow">
                                <img src={Phone} className="text-icon" alt="" />
                                Ring til {staffMember.name}</a>

                        </li>
                        <li>
                            <a href={`tel:${staffMember.phone}`} className="button button-yellow">
                                <img src={Video} className="text-icon" alt="" />
                                Video-opkald med {staffMember.name}</a>
                        </li>
                    </ul>
                </div>
            </RingCard>
        </li>
    );
}

export default ContactCard;