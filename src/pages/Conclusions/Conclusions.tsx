import React, { useEffect } from 'react';
import { useTitle } from '../../hooks';
import './Conclusions.scss';
const Conclusions: React.FC = () => {
    const { updateTitle } = useTitle();
    useEffect(() => {
        updateTitle('Conclusiones');
    }, []);
    return (
        <div className="slide">
            <span className="line left top" />
            <div className="conclusions">
                <ul className="list">
                    <li className="item">Mejora en la adquisición y procesamientos de datos.</li>
                    <li className="item">Memorias de ensayos</li>
                    <li className="item">
                        Mejorar las estadísticas sobre el motor para analizar los comportamientos
                        temporales.
                    </li>
                    <li className="item">Gráfica de variables.</li>
                    <li className="item">
                        Se logro desarrollar una aplicación abierta a futuras modificaciones.
                    </li>
                </ul>
            </div>
            <span className="line right bottom" />
        </div>
    );
};

export default Conclusions;
