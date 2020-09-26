import React, { useEffect } from 'react';
import { useTitle } from '../../hooks';
import './Conclusions.scss';
const Conclusions: React.FC = () => {
    const { updateTitle } = useTitle();
    useEffect(() => {
        updateTitle('Conclusiones');
    }, [updateTitle]);
    return (
        <div className="slide">
            <span className="line right top" />
            <div className="conclusions">
                <ul className="list">
                    <li className="item">
                        <p className="headline">Calidad de la información</p>
                        <span>Se mejoró tanto la adquisición como procesamientos de datos</span>
                    </li>
                    <li className="item">
                        <p className="headline">Control y visualización de la información</p>
                        <span>
                            {' '}
                            Mejorar las estadísticas sobre el motor para analizar los
                            comportamientos temporales. Memorias de ensayos
                        </span>
                    </li>
                    <li className="item">
                        <p className="headline">Escalabilidad</p>
                        <span>
                            Se logró el desarrollo de una solución abierta a modificaciones y
                            mejoras
                        </span>
                    </li>
                </ul>
            </div>
            <span className="line left bottom" />
        </div>
    );
};

export default Conclusions;
