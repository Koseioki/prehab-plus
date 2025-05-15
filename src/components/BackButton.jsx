import { NavLink } from "react-router-dom";
import './BackButton.css';
import Back from '../assets/back.svg';

function BackButton() {
  return (
    // return to the previous page using NavLink
    <NavLink to="/" className="back-button align-text-icon">
        <img src={Back} alt="" className="text-icon" />
    Tilbage
    </NavLink>
  );
}

export default BackButton;