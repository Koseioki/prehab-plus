// import Navigation from './components/Navigation';
import Notebook from './components/Notebook';
import TodoComponent from './components/TodoComponent';


function Todo() {

      // get the current danish date
  const date = new Date();
  const options = { month: 'long', day: 'numeric', weekday: 'long' };
  const danishDate = date.toLocaleDateString('da-DK', options);
  console.log(danishDate);
  return (
    <div id="main-content">
    <Notebook>
    <h1>Min to-do liste</h1>
    <p>{danishDate}</p>
    <h2>Hjemmetræning</h2>
    <hr aria-hidden="true"/>
    <ul className="ul-no-style">
    <TodoComponent
    title="Armløft med rotation"
    duration="10" />
        <TodoComponent
    title="Armløft med rotation"
    duration="10" />

    </ul>
    </Notebook>

    </div>
  );
}

export default Todo;