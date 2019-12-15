import React, { useEffect } from 'react';
import { useTitle } from '../../hooks';
import './Enhancements.scss';
const Enhancements: React.FC = () => {
    const { updateTitle } = useTitle();
    useEffect(() => {
        updateTitle('Mejoras futuras');
    }, [updateTitle]);
    return (
        <div className="slide">
            <span className="line left top" />
            <div className="enhancements">
                <ul className="list">
                    <li className="item">
                        <p className="headline">Control del freno</p>
                        <span>Implementación del control del freno</span>
                    </li>
                    <li className="item">
                        <p className="headline">Adquisición de datos</p>
                        <span>Extender adquisición de datos para los diferentes sensores presentes en la
                        consola</span>
                    </li>
                    <li className="item">
                        <p className="headline">Analisis de los datos</p>
                        <span>Anexar estudios de consumo de los elementos presentes en sala.</span>
                    </li>
                    <li className="item">
                        <p className="headline">Ajustes</p>
                        <span>Inserción de parámetros para correción de ensayos</span>
                    </li>
                    
                </ul>
            </div>
            <span className="line right bottom" />
        </div>
    );
};

export default Enhancements;
