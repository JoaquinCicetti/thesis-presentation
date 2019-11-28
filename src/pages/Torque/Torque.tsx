import React, { useEffect } from 'react';
import { useTitle } from '../../hooks';
import './Torque.scss';
const Speed: React.FC = () => {
    const { updateTitle } = useTitle();
    useEffect(() => {
        updateTitle('💪');
    }, []);
    return (
        <div className="slide">
            <span className="line right top" />
            <h1>Torque</h1>
            <span className="line left bottom" />
        </div>
    );
};

export default Speed;
