
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import './ExerciseTutorial.css';
import Notebook  from './components/Notebook';
import BackButton from './components/BackButton';

function ExerciseTutorial() {

    // import the exercise id from the url
    const { exerciseId } = useParams();
    // get the exercise from the firebase database
    const [exercise, setExercise] = useState({});
    useEffect(() => {
        async function getExercise() {
            const url = `https://prehab-plus-default-rtdb.firebaseio.com/exercises/${exerciseId}.json`;
            const response = await fetch(url);
            const data = await response.json();
            data.id = exerciseId;
            setExercise(data);
            console.log(data.tutorial);

        }
        getExercise();
    }, [exerciseId]);


    return (
        <div id="main-content">

            <Notebook>
            {/* title of the exercise */}
            <BackButton />
            <h1>{exercise.title}</h1>
            <h2>Video</h2>

            <div>Video here</div>

            <h2>Sådan gør du:</h2>
            {/* the first element of exercise.tutorial */}
       
            <ol>
                {exercise.tutorial && exercise.tutorial.slice(0).map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
</Notebook>
        </div>

    );
}

export default ExerciseTutorial;