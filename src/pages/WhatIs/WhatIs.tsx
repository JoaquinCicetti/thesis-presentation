import React, { useEffect } from 'react';
import { useTitle } from '../../hooks';
import './WhatIs.scss';

const WhatIs: React.FC = () => {
    const { updateTitle } = useTitle();
    const urlPrefix =
        process.env.NODE_ENV === 'development' ? '/icons' : '/thesis-presentation/icons';
    useEffect(() => {
        updateTitle('Automatización de un banco de pruebas de un motor a combustión');
    }, [updateTitle]);
    return (
        <div className="slide">
            <div className="asks">
                <div className="ask">
                    <img className="icon" alt="ask-icon" src={`${urlPrefix}/ask-2.png`} />
                    Qué es un banco de pruebas
                </div>
                <div className="ask">
                    Para qué sirve
                    <img className="icon" alt="ask-icon" src={`${urlPrefix}/ask-2.png`} />
                </div>
            </div>
            <hr />
        </div>
    );
};

export default WhatIs;
