import React, { useEffect } from 'react';
import { useTitle } from '../../hooks';
import './Objectives.scss';
const Objectives: React.FC = () => {
    const { updateTitle } = useTitle();
    useEffect(() => {
        updateTitle('Propuesta de desarrollo');
    }, []);
    return (
        <div className="slide">
            <span className="line left top" />
            <div className="objectives">
                <ul className="list">
                    <li className="item">
                        Corrección de los métodos empleados para la adquisición de datos, selección
                        de sensores, desarrollo de Hardware.
                    </li>
                    <li className="item">Memoria de ensayos</li>
                    <li className="item">Interaccion del usuario con el sistema desarrollado.</li>
                    <li className="item">
                        Multiplataforma, con un enfoque Open Source la cual permita modificaciones
                        futuras.
                    </li>
                    <li className="item">
                        Desarrollo e implementación de controlador para freno eléctrico. Interfaz de
                        usuario.
                    </li>
                </ul>
            </div>
            <span className="line right bottom" />
        </div>
    );
};

export default Objectives;
