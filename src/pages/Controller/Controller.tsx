import React, { useEffect } from 'react';
import posed from 'react-pose';
import { useTitle } from '../../hooks';
import './Controller.scss';

const Controller = posed.div({
    exit: { opacity: 0, rotateY: '-90deg',  transition: { duration: 200, delay: 400 } },
    enter: { opacity: 1, rotateY: '0deg' ,transition: { duration: 200, delay: 400 } },
});

const Schematic: React.FC = () => {
    const { updateTitle } = useTitle();
    const urlPrefix =
        process.env.NODE_ENV === 'development' ? '/images' : '/thesis-presentation/images';
    useEffect(() => {
        updateTitle('Selección del controlador');
    }, [updateTitle]);
    return (
        <div className="slide controllers">
            <Controller key='section-arduino' className="section">
                <img src={`${urlPrefix}/arduino.jpg`} />
                <div className="info">
                    <p className="title">Arduino UNO</p>
                    <ul className="list">
                        <li className="item good">Costo</li>
                        <li className="item good">Complejidad</li>
                        <li className="item good">Compatibilidad</li>
                        <li className="item bad">Recursos</li>
                    </ul>
                </div>
            </Controller>
            <Controller key='section-freescale' className="section">
                <div className="info">
                    <p className="title">Freescale KL46Z</p>
                    <ul className="list">
                        <li className="item good">Recursos</li>
                        <li className="item good">Compatibilidad</li>
                        <li className="item normal">Costo</li>
                        <li className="item bad">Complejidad</li>
                    </ul>
                </div>
                <img src={`${urlPrefix}/freedom.jpg`} />
            </Controller>
        </div>
    );
};

export default Schematic;
