import React, { useState } from 'react';
import './SkemaToggle.css';

function SkemaToggle() {

    return (
        <>
            <div>
                <button role="switch" type="button" aria-checked="false"   class="skema-toggle">
                    <div className="tab-label-on">Liste</div>
                    <div className="tab-label-off">Kalendar</div>
                </button>
                </div>
                <div>
                    contents1
                </div>
                     <div>
                    contents2
                </div>
    
        </>
    );
}

export default SkemaToggle;