import React, { useEffect } from 'react';
import { useTitle } from '../../hooks';
import './WhatIs.scss';

const WhatIs: React.FC = () => {
    const { updateTitle } = useTitle();
    const urlPrefix = process.env.NODE_ENV === 'development' ? '/icons' : '/thesis-presentation/icons';
    useEffect(() => {
        updateTitle('🤔');
    }, []);
    return (
        <div className="slide">
            <div className="asks">
                <div className="ask">
                    <img className="icon" src={`${urlPrefix}/ask.png`} />
                    Que es un banco de pruebas?
                </div>
                <div className="ask">
                    <img className="icon" src={`${urlPrefix}/ask.png`} />
                    Para que sirve?
                </div>
            </div>
            <hr />
        </div>
    );
};

export default WhatIs;
