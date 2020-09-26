import React, { useEffect, useContext, useState } from 'react';
import posed from 'react-pose';
import { MorphingIcon } from '../../components';
import { SocketContext } from '../../context/Socket';
import { useTitle, useKeyDown } from '../../hooks';
import './Signals.scss';
const secuency = [
    {
        icon: 'weight',
        title: 'Magnitud fisica',
        body:
            'Variable del mundo físico la cual se desea medir. Por ejemplo, la velocidad o el torque.',
        examples: ['Velocidad de giro del eje', 'Torque ejercido', 'Temperatura ambiente'],
    },
    {
        icon: 'resistor',
        title: 'Sensor',
        body: 'Dispositivo que transforma el flujo de energía en una señal electrica.',
        examples: ['Encoder', 'Celda de carga', 'Termocupla'],
    },
    {
        icon: 'equalizer',
        title: 'Señal eléctrica',
        body: 'Es una representación mesurable de la variable en cuestion',
    },
    {
        icon: 'cpu',
        title: 'Conversión',
        body: 'Lectura, digitalización y procesamiento de la información',
        examples: ['Conversión A/C', 'Muestreo', 'Filtrado'],
    },
    {
        icon: 'message',
        title: 'Difusión',
        body: 'Intercambio de la información con los demas dispositivos',
    },
    {
        icon: 'plot',
        title: 'Visualización',
        body: 'Etapa en la que la información procesada llega al usuario',
        examples: ['Graficas', 'Paneles de control', 'Indicadores'],
    },
];

const Mobile = posed.div({
    active: {
        x: ({ x }) => `${x}%`,
        transition: {
            duration: 600,
        },
    },
});
const Speed: React.FC = () => {
    const { updateTitle } = useTitle();
    const { socket } = useContext(SocketContext);
    const [index, setIndex] = useState(0);
    const content = secuency[index];
    const { examples = [] } = content;
    const x = (80 / secuency.length) * (index + 1);

    const iterate = () => {
        setIndex((index: number) => (index >= secuency.length - 1 ? 0 : index + 1));
    };
    useKeyDown({
        KeyI: iterate,
        Space: iterate,
    });
    useEffect(() => {
        updateTitle('Procesamiento de una señal');
    }, [updateTitle]);
    useEffect(() => {
        socket.on('iterate', iterate);
    }, [socket]);

    return (
        <div className="slide signal">
            <span className="line left top" />
            <Mobile poseKey={x} pose={'active'} className="mobile" x={x}>
                <MorphingIcon width={128} height={128} icon={content.icon} />
            </Mobile>
            <span className="way" />
            <div className="description">
                <p className="title">{content.title}</p>
                <div className="body">{content.body}</div>
                {examples.length > 0 && (
                    <ul className="examples">
                        {examples.map((example: string) => (
                            <li className="item">{example}</li>
                        ))}
                    </ul>
                )}
            </div>
            <span className="line right bottom" />
        </div>
    );
};

export default Speed;
