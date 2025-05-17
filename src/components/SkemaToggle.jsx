import React, { useState } from 'react';
import './SkemaToggle.css';
import SkemaListe from './SkemaListe';
import Calendar from './Calendar';

function SkemaToggle() {
    const [isList, setIsList] = useState(true);

    const handleToggle = () => {
        setIsList((prev) => !prev);
    };

    return (
        <>
            <h2 className="sr-only">Skift visning</h2>
            <div>
                <button
                    role="switch"
                    type="button"
                    aria-checked={isList}
                    className="skema-toggle"
                    onClick={handleToggle}
                    aria-label="Skift visning"
                >
                    <div className={isList ? "tab-label-on" : "tab-label-off"}>Liste</div>
                    <div className={!isList ? "tab-label-on" : "tab-label-off"}>Kalendar</div>
                </button>
            </div>
            <div
                aria-live="polite"
                style={{
                    position: "absolute",
                    left: "-9999px",
                    width: "1px",
                    height: "1px",
                    overflow: "hidden"
                }}
            >
                {isList ? "Listevisning valgt" : "Kalendervisning valgt"}
            </div>
                    <hr aria-hidden="true" />

            <div>
                {isList ? <SkemaListe /> : <Calendar />}
            </div>
            
        </>
    );
}

export default SkemaToggle;