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
    },
});
const Line = posed.div({
    exit: { width: '0' },
    enter: { width: '100%', transition: { delay: 100, duration: 1000 } },
});
const AnimatedBlock = posed.div({
    exit: { rotateY: '-90deg' },
    enter: { rotateY: '0deg', transition: { duration: 600 } },
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
                <AnimatedBlock key="speed-block1" className="result">
                    <p className="title">Salida digital</p>
                </AnimatedBlock>
                <AnimatedBlock key="speed-block2" className="block">
                    <p className="title">Adaptador</p>
                    <div className="connections">
                        <span>[V]</span>
                        <img alt="celda-icon" src={`${urlPrefix}/schematic.png`} />
                        <span>[V]</span>
                    </div>
                </AnimatedBlock>
                <AnimatedBlock key="speed-block3" className="block">
                    <p className="title">Ventilación</p>
                    <div className="connections">
                        <span>[V]</span>
                        <img alt="celda-icon" src={`${urlPrefix}/pistas.jpg`} />
                        <span>[On/Off]</span>
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
                        <span>[mV]</span>
                        <img alt="celda-icon" src={`${urlPrefix}/schematic.png`} />
                        <span>[mV]</span>
                    </div>
                </AnimatedBlock>

                <AnimatedBlock key="torque-block3" className="block">
                    <p className="title">Freno</p>
                    <div className="connections">
                        <span>[V]</span>
                        <img alt="celda-icon" src={`${urlPrefix}/pistas.jpg`} />
                        <span>[Kg]</span>
                    </div>
                </AnimatedBlock>
            </AnimatedDiagram>
        </div>
    );
};

export default Outputs;
