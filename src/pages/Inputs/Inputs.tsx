import React, { useEffect } from 'react';
import posed from 'react-pose';
import { useTitle } from '../../hooks';
import './Inputs.scss';

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
    enter: { width: '90%', transition: { duration: 1000 } },
});
const AnimatedBlock = posed.div({
    exit: { rotateY: '-90deg' },
    enter: { rotateY: '0deg', transition: { delay: 100, duration: 600 } },
});
const Inputs: React.FC = () => {
    const { updateTitle } = useTitle();
    const urlPrefix =
        process.env.NODE_ENV === 'development' ? '/images' : '/thesis-presentation/images';
    useEffect(() => {
        updateTitle('Procesamiento de entradas');
    }, [updateTitle]);
    return (
        <div className="slide inputs">
            <AnimatedDiagram key="speed" className="diagram">
                <AnimatedBlock key="speed-block1" className="block">
                    <p className="title">Celda de carga</p>
                    <div className="connections">
                        <span>[Kg]</span>
                        <img alt="celda-icon" src={`${urlPrefix}/load-cell.png`} />
                        <span>[V]</span>
                    </div>
                </AnimatedBlock>
                <AnimatedBlock key="speed-block2" className="block">
                    <p className="title">Adaptador</p>
                    <div className="connections">
                        <span>[V]</span>
                        <img alt="celda-icon" src={`${urlPrefix}/schematic.png`} />
                        <span>[mV]</span>
                    </div>
                </AnimatedBlock>
                <AnimatedBlock key="speed-block3" className="result">
                    <p className="title">Entrada analógica</p>
                </AnimatedBlock>
                <Line key="speed-line" className="connector" />
            </AnimatedDiagram>
            <AnimatedDiagram key="torque" className="diagram">
                <AnimatedBlock key="torque-block1" className="block">
                    <p className="title">Encoder</p>
                    <div className="connections">
                        <span>
                            [PPV]
                        </span>
                        <img alt="celda-icon" src={`${urlPrefix}/sensor-hall.png`} />
                        <span>
                            [V]
                        </span>
                    </div>
                </AnimatedBlock>
                <AnimatedBlock key="torque-block2" className="block">
                    <p className="title">Adaptador</p>
                    <div className="connections">
                        <span>
                            [V]
                        </span>
                        <img alt="celda-icon" src={`${urlPrefix}/schematic.png`} />
                        <span>
                            [mV]
                        </span>
                    </div>
                </AnimatedBlock>
                <AnimatedBlock key="torque-block3" className="result">
                    <p className="title">Entrada digital</p>
                </AnimatedBlock>
                <Line key="torque-line" className="connector" />
            </AnimatedDiagram>
        </div>
    );
};

//<img src={`${urlPrefix}/inputs.png`} />
export default Inputs;
