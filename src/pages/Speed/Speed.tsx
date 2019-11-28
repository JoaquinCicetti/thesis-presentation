import React, { useEffect } from 'react';
import { useTitle } from '../../hooks';
import './Speed.scss';
const Speed: React.FC = () => {
    const { updateTitle } = useTitle();
    useEffect(() => {
        updateTitle('🏃‍♀💨');
    }, []);
    return (
        <div className="slide">
            <span className="line left top" />
            <h1>Velocidad</h1>
            <span className="line right bottom" />
        </div>
    );
};

export default Speed;
