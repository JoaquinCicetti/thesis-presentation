import React, { useEffect } from 'react';
import { useTitle } from '../../hooks';
import './Requirements.scss';
const Requirements: React.FC = () => {
    const { updateTitle } = useTitle();
    useEffect(() => {
        updateTitle('Requerimientos');
    }, [updateTitle]);
    return (
        <div className="slide">
            <span className="line left top" />
            <div className="requirements">
                <ul className="list">
                    <li className="item">
                        <p className="title">Sensado:</p>
                        <span>Medición, visualización y almacenamiento:</span>
                        <div className="row">
                            <div className="resolution">
                                <span className="label">Torque</span>
                                <p className="value">
                                    35 <span className="unit">kg</span>
                                </p>
                            </div>
                            <div className="resolution">
                                <span className="label">Velocidad</span>
                                <p className="value">
                                    12.000 <span className="unit">rpm</span>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="item">
                        <p className="title"> Control</p>
                        <span>Comando de elementos presentes en la sala</span>
                    </li>
                </ul>
            </div>
            <span className="line right bottom" />
        </div>
    );
};

export default Requirements;
