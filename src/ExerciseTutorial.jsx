
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ExerciseTutorial() {

    // import the exercise id from the url
    const { id } = useParams();
    // get the exercise from the firebase database
    const [exercise, setExercise] = useState({});
    useEffect(() => {
        async function getExercise() {
            const url = `https://prehab-plus-default-rtdb.firebaseio.com/exercises/${id}.json`;
            const response = await fetch(url);
            const data = await response.json();
            setExercise(data);
            console.log(data);
        }
        getExercise();
    }, [id]);
  return (
    <div>
        {/* title of the exercise */}
        {/* <h1>{exercise.title}</h1> */}
        
      <h1>Exercise Tutorial</h1>
      <p>This is a tutorial for the exercise.</p>
    </div>
  );
}

export default ExerciseTutorial;