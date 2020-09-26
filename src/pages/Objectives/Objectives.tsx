import React, { useEffect } from 'react';
import { useTitle } from '../../hooks';
import './Objectives.scss';
const Objectives: React.FC = () => {
    const { updateTitle } = useTitle();
    useEffect(() => {
        updateTitle('Propuesta de desarrollo');
    }, [updateTitle]);
    return (
        <div className="slide">
            <span className="line left top" />
            <div className="objectives">
                <ul className="list">
                    <li className="item">
                        <p className="headline">
                            Modificación de métodos de adquisición y procesamiento de señales
                        </p>
                        <span>Selección de sensores. Desarrollo de Hardware </span>
                    </li>
                    <li className="item">
                        <p className="headline">Diseño de arquitectura</p>
                        <span>
                            Selección de controlador. Desarrollo de Software y su correspondiente
                            interfaz
                        </span>
                    </li>
                    <li className="item">
                        <p className="headline">Controlador de freno electrico</p>
                        <span>
                            Diseño e implementación de algoritmo de control y hardware relacionado
                        </span>
                    </li>
                </ul>
            </div>
            <span className="line right bottom" />
        </div>
    );
};

export default Objectives;
