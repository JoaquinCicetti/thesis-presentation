import React, { useEffect } from 'react';
import { useTitle } from '../../hooks';
import './State.scss';
const Speed: React.FC = () => {
    const { updateTitle } = useTitle();
    useEffect(() => {
        updateTitle('Situación actual');
    }, [updateTitle]);
    return (
        <div className="slide ">
            <span className="line left top" />
            <div className="state">
                <ul className="list">
                    <li className="item">
                        <p className="headline">Tacómetro</p>
                        <span>Sensor fotoeléctrico.</span>
                        <span> Alcance: 10.000 rpm.</span>
                    </li>
                    <li className="item">
                        <p className="headline">Balanza</p>
                        <span>Tipo reloj. Alcance 25Kg. Resolusión 100g.</span>
                    </li>
                    <li className="item">
                        <p className="headline">Control del freno</p>
                        <span>
                            Dos potenciometro para control fino y grueso. Sin sincronización con la
                            red eléctrica
                        </span>
                    </li>
                    <li className="item">
                        <p className="headline">Memoria de ensayo</p>
                        <span>Confección manual de gráficas. Correcciones post-ensayos</span>
                    </li>
                </ul>
            </div>
            <span className="line right bottom" />
        </div>
    );
};

export default Speed;
