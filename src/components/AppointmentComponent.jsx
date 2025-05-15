import { NavLink } from "react-router-dom";
import Drop from "../assets/drop.svg";
import Time from "../assets/time.svg";
import Location from "../assets/location.svg";
import "./AppointmentComponent.css";
function AppointmentComponent({appointment}) {
  return (
    <>
      <li className="appointment-component-wrapper">



        <div className="tearoff-calendar" aria-hidden="true">
          <p>Maj</p>
          <p>5</p>
        </div>
        <div className="appointment-text-and-button">
          <div>
            <h3 className="align-text-icon">
              <img src={Drop} alt="" className="text-icon" />
              {appointment.title}
              <span className="sr-only">Den femte Maj</span>
            </h3>


            <dl>
   
              <dt className="sr-only">Tid</dt>
              <dd className="align-text-icon">
                <img src={Time} alt="" className="text-icon" />
                10.00-11.00
              </dd>
              <dt className="sr-only">Sted</dt>
              <dd className="align-text-icon">
                <img src={Location} alt="" className="text-icon" />
                {appointment.location}
              </dd>


            </dl>
          </div>
          <div>
            <NavLink
            to={`/skema/${appointment.id}`}
            className="button button-pink"
            aria-label={`Det sker til ${appointment.title}`}>
              Det sker til aftalen
            </NavLink>
          </div>
        </div>
      </li>
      <hr aria-hidden="true" />
    </>
  );
}

export default AppointmentComponent;