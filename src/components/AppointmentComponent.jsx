import { NavLink } from "react-router-dom";
import Drop from "../assets/drop.svg";
import Training from "../assets/training.svg";
import Operation from "../assets/operation.svg";
import Time from "../assets/time.svg";
import Location from "../assets/location.svg";
import "./AppointmentComponent.css";
function AppointmentComponent({ appointment, detailPage }) {

  // console.log(detailPage);
// format {appointment.date}... month in danish (Maj), date, and month and date in danish (Den femte Maj)

// Helper to get Danish month and day
function formatDanishDate(dateString) {
  if (!dateString) return { month: '', day: '', full: '' };
  const date = new Date(dateString);

  // Danish months
  const monthFull = date.toLocaleString('da-DK', { month: 'long' });
  const month = (monthFull.charAt(0).toUpperCase() + monthFull.slice(1)).slice(0, 3);
  const day = date.getDate();

  // Danish ordinals for 1-31
  const danishOrdinals = [
    '', 'første', 'anden', 'tredje', 'fjerde', 'femte', 'sjette', 'syvende', 'ottende', 'niende', 'tiende',
    'ellevte', 'tolvte', 'trettende', 'fjortende', 'femtende', 'sekstende', 'syttende', 'attende', 'nittende', 'tyvende',
    'enogtyvende', 'toogtyvende', 'treogtyvende', 'fireogtyvende', 'femogtyvende', 'seksogtyvende', 'syvogtyvende', 'otteogtyvende', 'niogtyvende', 'tredivte', 'enogtredivte'
  ];
  const full = `Den ${danishOrdinals[day]} ${month.charAt(0).toUpperCase() + month.slice(1)}`;
  return { month: month.charAt(0).toUpperCase() + month.slice(1), day, full };
}

const { month, day, full } = formatDanishDate(appointment.date);

// Choose icon based on appointment.icon
let iconSrc = null;
if (appointment.icon === "drop") {
  iconSrc = Drop;
}
else if (appointment.icon === "training") {
  iconSrc = Training;
}
else if (appointment.icon === "operation") {
  iconSrc = Operation;
}

  return (
    <>
      {/* <li > */}
        <div className="appointment-component-wrapper">

          <div className="tearoff-calendar" aria-hidden="true">
            <p>{month}</p>
            <p>{day}</p>
          </div>
          <div className="appointment-text-and-button">
            <div>

            
                <h3 className="align-text-icon">
                  <img
                  src={iconSrc}
                  alt="" className="text-icon" />
                  {appointment.title}
                  <span className="sr-only">{full}</span>
                </h3>
              


              <dl>

                <dt className="sr-only">Tid</dt>
                <dd className="align-text-icon">
                  <img src={Time} alt="" className="text-icon" />
                  {appointment.startTime}-{appointment.endTime}
                </dd>
                <dt className="sr-only">Sted</dt>
                <dd className="align-text-icon">
                  <img src={Location} alt="" className="text-icon" />
                  {appointment.location}
                </dd>


              </dl>
            </div>
            <div>
              {/* only when detailPage is false */}
              {!detailPage && (
                <NavLink
                  to={`/skema/${appointment.id}`}
                  className="button button-pink"
                  aria-label={`Det sker til ${appointment.title}`}>
                  Det sker til aftalen
                </NavLink>
              )}
            </div>
          </div>
        </div>
        <hr aria-hidden="true" />

      {/* </li> */}

    </>
  );
}

export default AppointmentComponent;