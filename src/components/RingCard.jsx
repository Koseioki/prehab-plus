import './RingCard.css';
import Ring from '../assets/notebook-rings.svg';
function RingCard({ children }) {
  return (
    <div className="ringcard">
        
        <div className="ringcard-paper">
            <img src={Ring} alt="" className="ringcard-ring"/>
            <div className="content-width">
        {children}
        </div>
        </div>
    </div>
  );
}
export default RingCard;