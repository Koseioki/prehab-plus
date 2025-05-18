// import Navigation from './components/Navigation';
import Notebook from './components/Notebook';
import TodoComponent from './components/TodoComponent';
import { useEffect, useState } from 'react';
import useDocumentTitle from './hooks/useDocumentTitle';


function Todo() {
  useDocumentTitle('Prehab+');

  // get the current danish date
  const date = new Date();
  const options = { month: 'long', day: 'numeric', weekday: 'long' };
  const danishDate = date.toLocaleDateString('da-DK', options);
  console.log(danishDate);


  // get the exercises from the firebase database
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    async function getExercises() {
      const url = "https://prehab-plus-default-rtdb.firebaseio.com/exercises.json";
      const response = await fetch(url);
      const data = await response.json();
      const exercisesArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setExercises(exercisesArray);
      console.log(exercisesArray);

    }
    getExercises();
  }, []);

  return (
    <main id="main-content" className="content-width">


      <Notebook>
        <h1>Min to-do liste</h1>
        <p>{danishDate}</p>
        <h2 className="heading">Hjemmetræning</h2>
        <hr aria-hidden="true" />
        <ul className="ul-no-style">


        {exercises.map((exercise) => (
          <TodoComponent
            key={exercise.id}
            exercise={exercise}/>
        ))}



        </ul>
      </Notebook>

    </main>
  );
}

export default Todo;