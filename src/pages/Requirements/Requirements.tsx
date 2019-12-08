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
                        Medición de torque desarrollado por el motor, para lo mismo disponen que el
                        peso máximo a medir es de 35 Kg.
                    </li>
                    <li className="item">
                        Medición de velocidad desarrollada por el motor, solicitud 12000 rpm valor
                        máximo.
                    </li>
                    <li className="item">Comando de elementos presentes en la sala.</li>
                    <li className="item">Gráfica de variables.</li>
                    <li className="item">Memoria de datos de ensayo.</li>
                </ul>
            </div>
            <span className="line right bottom" />
        </div>
    );
};

export default Requirements;
