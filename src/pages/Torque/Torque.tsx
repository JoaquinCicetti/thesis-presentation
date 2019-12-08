import React, { useEffect } from 'react';
import { useTitle } from '../../hooks';
import './Torque.scss';
const Speed: React.FC = () => {
    const { updateTitle } = useTitle();
    useEffect(() => {
        updateTitle('Torque');
    }, []);
    return (
        <div className="slide">
            <span className="line left top" />
            <div className="torque">
                <p className="title">Métodos de medición</p>
                <ul className="list">
                    <li className="item">
                        ...
                        <ul className="details">
                            <li className="good">...</li>
                            <li className="bad">...</li>
                        </ul>
                    </li>
                    <li className="item">
                        ...
                        <ul className="details">
                            <li className="good">...</li>
                            <li className="bad">...</li>
                        </ul>
                    </li>
                    <li className="item">
                        ...
                        <ul className="details">
                            <li className="good">...</li>
                            <li className="bad">...</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <span className="line right bottom" />
        </div>
    );
};

export default Speed;
