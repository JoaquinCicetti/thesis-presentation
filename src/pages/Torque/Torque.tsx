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
            <span className="line left bottom" />
        </div>
    );
};

export default Speed;
