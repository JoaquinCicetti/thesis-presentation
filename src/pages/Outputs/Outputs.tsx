import React, { useEffect } from 'react';
import posed from 'react-pose';
import { useTitle } from '../../hooks';
import './Outputs.scss';
const AnimatedDiagram = posed.div({
    exit: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        staggerChildren: 400,
    },
});
const Line = posed.div({
    exit: { opacity: 0, width: '0' },
    enter: { opacity: 0.6, width: '80%', transition: { delay: 100, duration: 900 } },
});
const AnimatedBlock = posed.div({
    exit: { opacity: 0, rotateY: '-90deg' },
    enter: { opacity: 1, rotateY: '0deg' },
});

const Outputs: React.FC = () => {
    const { updateTitle } = useTitle();
    const urlPrefix =
        process.env.NODE_ENV === 'development' ? '/images' : '/thesis-presentation/images';
    useEffect(() => {
        updateTitle('Procesamiento de salidas');
    }, [updateTitle]);
    return (
        <div className="slide outputs">
            <Line key="line" className="connector" />
            <AnimatedDiagram key="speed" className="diagram">
                <Line key="speed-line" className="connector" />
                <AnimatedBlock key="speed-block3" className="result">
                    <p className="title">Salida digital</p>
                </AnimatedBlock>
                <AnimatedBlock key="speed-block2" className="block">
                    <p className="title">Adaptador</p>
                    <div className="connections">
                        <span>
                            Tensión
                            <br />
                            [V]
                        </span>
                        <img alt="celda-icon" src={`${urlPrefix}/schematic.png`} />
                        <span>
                            Tensión
                            <br />
                            [V]
                        </span>
                    </div>
                </AnimatedBlock>
                <AnimatedBlock key="speed-block3" className="block">
                    <p className="title">Actuador de la ventilación</p>
                    <div className="connections">
                        <span>
                            Tensión
                            <br />
                            [V]
                        </span>
                        <img alt="celda-icon" src={`${urlPrefix}/pistas.jpg`} />
                        <span>
                            Ventilación
                            <br />
                            [On/Off]
                        </span>
                    </div>
                </AnimatedBlock>
            </AnimatedDiagram>
            <AnimatedDiagram key="torque" className="diagram">
                <Line key="torque-line" className="connector" />
                <AnimatedBlock key="torque-block1" className="result">
                    <p className="title">Salida PWM sincronizada</p>
                </AnimatedBlock>
                <AnimatedBlock key="torque-block2" className="block">
                    <p className="title">Adaptador</p>
                    <div className="connections">
                        <span>
                            Tensión
                            <br />
                            [mV]
                        </span>
                        <img alt="celda-icon" src={`${urlPrefix}/schematic.png`} />
                        <span>
                            Tensión
                            <br />
                            [mV]
                        </span>
                    </div>
                </AnimatedBlock>

                <AnimatedBlock key="torque-block3" className="block">
                    <p className="title">Actuador del freno</p>
                    <div className="connections">
                        <span>
                            Tensión
                            <br />
                            [V]
                        </span>
                        <img alt="celda-icon" src={`${urlPrefix}/pistas.jpg`} />
                        <span>
                            Torque
                            <br />
                            [Kg]
                        </span>
                    </div>
                </AnimatedBlock>
            </AnimatedDiagram>
        </div>
    );
};

export default Outputs;
