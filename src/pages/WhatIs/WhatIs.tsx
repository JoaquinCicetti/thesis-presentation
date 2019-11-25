import React, { useEffect } from 'react';
import { useTitle } from '../../hooks';
import './WhatIs.scss';

const WhatIs: React.FC = () => {
    const { updateTitle } = useTitle();
    useEffect(() => {
        updateTitle('Un banco de pruebas?');
    }, []);
    return (
        <div className="slide">
            <div className="asks">
                <div className="ask">
                    <img className="icon" src="Icons/ask.png" />
                    Que es un banco de pruebas?
                </div>
                <div className="ask">
                    <img className="icon" src="Icons/ask.png" />
                    Para que sirve?
                </div>
            </div>
            <hr />
        </div>
    );
};

export default WhatIs;
