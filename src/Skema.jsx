import Notebook from './components/Notebook';
import AppointmentComponent from './components/AppointmentComponent';
function Skema () {
    return (
      <div id="main-content">
      <Notebook>
    <h1>Mit skema</h1>
    <ul className="ul-no-style">
      <hr aria-hidden="true" />
    <AppointmentComponent/>
    </ul>
    </Notebook>
</div>
    );
}
export default Skema;