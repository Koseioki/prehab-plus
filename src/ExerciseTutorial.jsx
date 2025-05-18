import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ExerciseTutorial.css';
import Notebook from './components/Notebook';
import BackButton from './components/BackButton';
import useDocumentTitle from './hooks/useDocumentTitle';
import { useRef } from 'react';
import Error from './assets/error.svg';


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

    useDocumentTitle(`${exercise.title || ''} - Prehab+`);
    // set focus on the heading
    const headingRef = useRef(null);

    useEffect(() => {
        headingRef.current?.focus();
    }, []);

    return (
        <main id="main-content" className="content-width">

            <Notebook>
                <BackButton />
                <h1 ref={headingRef} tabIndex={-1} className="heading">{exercise.title}</h1>
                <h2 className="heading">Video</h2>
                <div className="video-container">
                    <div>
                    <img src={Error} alt="" />
                    <p>Video ikke tilgængelig</p>
                    </div>
                </div>


                <h2 className="heading">Sådan gør du:</h2>
                {/* the first element of exercise.tutorial */}

                <ol>
                    {exercise.tutorial && exercise.images && exercise.tutorial.map((step, index) => (
                        <li className="tutorial-text" key={index}>
                            <div>{step}</div>
                            {exercise.images[index] && (
                                <img src={exercise.images[index]} className="tutorial-image" alt="" />
                            )}
                        </li>
                    ))}
                    {/* Fallback if only tutorial or images exist */}
                    {!exercise.images && exercise.tutorial && exercise.tutorial.map((step, index) => (
                        <li className="tutorial-text" key={index}>{step}</li>
                    ))}
                    {!exercise.tutorial && exercise.images && exercise.images.map((img, index) => (
                        <li className="tutorial-text" key={index}><img className="tutorial-image" src={img} alt="" /></li>
                    ))}
                </ol>
                <BackButton />
            </Notebook>
        </main>

    );
}

export default ExerciseTutorial;