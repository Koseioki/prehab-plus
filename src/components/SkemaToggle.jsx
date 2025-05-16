import React, { useState } from 'react';
import './SkemaToggle.css';

function SkemaToggle() {
    const [activeTab, setActiveTab] = useState('liste');

    return (
        <>
            <h2 id="tablist-1">title</h2>
            <div role="tablist" aria-labelledby="tablist-1">
                <button
                    id="tab-1"
                    role="tab"
                    aria-selected={activeTab === 'liste'}
                    aria-controls="tabpanel-1"
                    tabIndex={activeTab === 'liste' ? 0 : -1}
                    onClick={() => setActiveTab('liste')}
                >
                    <span className="tab-label">Liste</span>
                </button>
                <button
                    id="tab-2"
                    role="tab"
                    aria-selected={activeTab === 'kalender'}
                    aria-controls="tabpanel-2"
                    tabIndex={activeTab === 'kalender' ? 0 : -1}
                    onClick={() => setActiveTab('kalender')}
                >
                    <span className="tab-label">Kalender</span>
                </button>
            </div>

            <div
                id="tabpanel-1"
                role="tabpanel"
                aria-labelledby="tab-1"
                hidden={activeTab !== 'liste'}
            >
                <h3>Liste</h3>
                <p>Indhold til listevisning.</p>
            </div>
            <div
                id="tabpanel-2"
                role="tabpanel"
                aria-labelledby="tab-2"
                hidden={activeTab !== 'kalender'}
            >
                <h3>Kalender</h3>
                <p>Indhold til kalender.</p>
            </div>
        </>
    );
}

export default SkemaToggle;