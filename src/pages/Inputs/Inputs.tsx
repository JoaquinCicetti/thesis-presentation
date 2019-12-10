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
const Inputs: React.FC = () => {
    const { updateTitle } = useTitle();
    const urlPrefix =
        process.env.NODE_ENV === 'development' ? '/images' : '/thesis-presentation/images';
    useEffect(() => {
        updateTitle('Procesamiento de entradas');
    }, [updateTitle]);
    return (
        <div className="slide inputs">
            <Line key="line" className="connector" />
            <AnimatedDiagram key="speed" className="diagram">
                <Line key="speed-line" className="connector" />
                <AnimatedBlock key="speed-block1" className="block">
                    <p className="title">Celda de carga</p>
                    <div className="connections">
                        <span>
                            Torque
                            <br />
                            [Kg]
                        </span>
                        <img alt="celda-icon" src={`${urlPrefix}/load-cell.png`} />
                        <span>
                            Tensión
                            <br />
                            [V]
                        </span>
                    </div>
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
                            [mV]
                        </span>
                    </div>
                </AnimatedBlock>
                <AnimatedBlock key="speed-block3" className="result">
                    <p className="title">Entrada analógica</p>
                </AnimatedBlock>
            </AnimatedDiagram>
            <AnimatedDiagram key="torque" className="diagram">
                <Line key="torque-line" className="connector" />
                <AnimatedBlock key="torque-block1" className="block">
                    <p className="title">Encoder</p>
                    <div className="connections">
                        <span>
                            Velocidad
                            <br />
                            [PPV]
                        </span>
                        <img alt="celda-icon" src={`${urlPrefix}/encoder.png`} />
                        <span>
                            Tensión
                            <br />
                            [V]
                        </span>
                    </div>
                </AnimatedBlock>
                <AnimatedBlock key="torque-block2" className="block">
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
                            [mV]
                        </span>
                    </div>
                </AnimatedBlock>
                <AnimatedBlock key="torque-block3" className="result">
                    <p className="title">Entrada digital</p>
                </AnimatedBlock>
            </AnimatedDiagram>
        </div>
    );
};

//<img src={`${urlPrefix}/inputs.png`} />
export default Inputs;
