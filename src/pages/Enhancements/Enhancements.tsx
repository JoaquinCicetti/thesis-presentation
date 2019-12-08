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
                    <li className="item">Implementación del control del freno</li>
                    <li className="item">
                        Extender adquisición de datos para los diferentes sensores presentes en la
                        consola.{' '}
                    </li>
                    <li className="item">
                        Anexar estudios de consumo de los elementos presentes en sala.
                    </li>
                </ul>
            </div>
            <span className="line right bottom" />
        </div>
    );
};

export default Enhancements;
