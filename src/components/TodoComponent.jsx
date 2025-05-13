import React, { useState } from 'react';
import './TodoComponent.css';
import { NavLink } from "react-router-dom";
import Checkbox from '../assets/checkbox.svg';
import CheckboxChecked from '../assets/checkbox-checked.svg';
import Training from '../assets/training.svg';
import Time from '../assets/time.svg';

function TodoComponent({ title, duration }) {
  const [checked, setChecked] = useState(false);

  return (
    <>
    <li className="todo-component-wrapper">
      <div>
        <h3 className="align-text-icon">
          <img src={Training} alt="" className="text-icon"/>{title}
        </h3>
        <p className="align-text-icon">
          <img src={Time} alt="" className="text-icon"/>{duration} minutter
        </p>
        <NavLink to="/" className="button button-blue">
          <span aria-label={`Se vejledning af ${title}`}>Se vejledning</span>
        </NavLink>
      </div>
      <div>
        <button
          className="checkbox-button"
          onClick={() => setChecked(!checked)}
          aria-pressed={checked}
        >
          <img src={checked ? CheckboxChecked : Checkbox} alt="" />
          <span className="sr-only">
            {checked
              ? `Markeret: ${title} er udført`
              : `Marker ${title} som udført`}
          </span>
        </button>
      </div>
    </li>
    <hr/>
    </>
  );
}
export default TodoComponent;