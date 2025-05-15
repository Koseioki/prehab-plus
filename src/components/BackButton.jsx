import { useNavigate } from "react-router-dom";
import './BackButton.css';
import Back from '../assets/back.svg';

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      className="back-button align-text-icon"
      onClick={() => navigate(-1)}
      // type="button"
    >
      <img src={Back} alt="" className="text-icon" />
      Tilbage
    </button>
  );
}

export default BackButton;