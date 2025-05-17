import React, { useState } from 'react';
import './TodoComponent.css';
import { NavLink } from "react-router-dom";
import Checkbox from '../assets/checkbox.svg';
import CheckboxChecked from '../assets/checkbox-checked.svg';
import Training from '../assets/training.svg';
import Time from '../assets/time.svg';


function TodoComponent({ exercise }) {
  const [checked, setChecked] = useState(false);


  return (
    <>

      <li className="todo-component-wrapper">

        {/* title for screen readers */}
        <h3 className="sr-only">{exercise.title}</h3>


        {/* check box */}
        <div>
          <button
            className="checkbox-button"
            onClick={() => setChecked(!checked)}
            aria-pressed={checked}
          >
            <img src={checked ? CheckboxChecked : Checkbox} alt="" />
            <span className="sr-only">
              {checked
                ? `Markeret: ${exercise.title} er udført`
                : `Marker ${exercise.title} som udført`}
            </span>
          </button>
        </div>


        <div className="todo-text-and-button">
          {/* visual title */}
          <div>
            <h3 aria-hidden="true" className="align-text-icon">
              <img src={Training} alt="" className="text-icon" />
              {exercise.title}
            </h3>
            <p className="align-text-icon">
              <img src={Time} alt="" className="text-icon" />
              {exercise.duration} minutter
            </p>
          </div>
          <div>
            {/* button to exercise tutorial */}
            <NavLink
              to={`/${exercise.id}`}
              className="button button-blue"
              aria-label={`Se vejledning i ${exercise.title}`}>
                Se vejledning
            </NavLink>
          </div>
        </div>

      </li>
      <hr aria-hidden="true" />
    </>
  );
}
export default TodoComponent;