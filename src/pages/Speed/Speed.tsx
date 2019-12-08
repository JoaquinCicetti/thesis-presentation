import React, { useEffect } from 'react';
import { useTitle } from '../../hooks';
import './Speed.scss';
const Speed: React.FC = () => {
    const { updateTitle } = useTitle();
    useEffect(() => {
        updateTitle('‍Velocidad');
    }, [updateTitle]);
    return (
        <div className="slide ">
            <span className="line left top" />
            <div className="speed">
                <p className="title">Métodos de medición</p>
                <ul className="list">
                    <li className="item">
                        Sensor Inductivo
                        <ul className="details">
                            <li className="good">Inherentes a interferencias</li>
                            <li className="good">Larga vida util</li>
                            <li className="bad">Señal difícil de procesar a alta velocidad</li>
                            <li className="bad">Alto costo</li>
                        </ul>
                    </li>
                    <li className="item">
                        Sensor de Efecto Hall
                        <ul className="details">
                            <li className="good">Fácil procesamiento</li>
                            <li className="good">Diseñado para trabajar en ambientes con ruido</li>
                            <li className="bad">Mayor dificultad en el montaje</li>
                        </ul>
                    </li>
                    <li className="item">
                        Sensor Fotoeléctrico
                        <ul className="details">
                            <li className="good">Menor costo</li>
                            <li className="bad">
                                Vulnerable frente a linealidades e interferencias no deseadas
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <span className="line right bottom" />
        </div>
    );
};

export default Speed;
