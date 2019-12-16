import React, { useContext, useEffect, useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
} from 'recharts';
import { SocketContext } from '../../context/Socket';
import { useTitle, useKeyDown } from '../../hooks';
import './CalibrationCell.scss';
type Data = { weight: number; output: number };
const data: Array<Data> = [
    {
        weight: 5,
        output: 0.768,
    },
    {
        weight: 10,
        output: 0.979,
    },
    {
        weight: 15,
        output: 1.218,
    },
    {
        weight: 25,
        output: 1.663,
    },
    {
        weight: 35,
        output: 2.08,
    },
    {
        weight: 45,
        output: 2.53,
    },
];

const CalibrationCell: React.FC = () => {
    const { socket } = useContext(SocketContext);
    const { updateTitle } = useTitle();
    const [step, setStep] = useState<number>(0);
    const visibleData = data.slice(0, step);
    const urlPrefix =
        process.env.NODE_ENV === 'development' ? '/icons' : '/thesis-presentation/icons';

    const iterate = (): void => {
        setStep((prev: number) => {
            return prev < data.length - 1 ? ++prev : 0;
        });
    };
    useKeyDown({
        KeyI: iterate,
        Space: iterate,
    });
    useEffect(() => {
        updateTitle('Método empleado - Celda de carga');
    }, [updateTitle]);

    useEffect(() => {
        socket.on('iterate', iterate);
    }, [socket]);
    return (
        <div className="slide calibration">
            <div className="left">
                <span className="label">Celda de carga</span>
                <div className="load-cell">
                    {visibleData.map((_: Data, index: number) => {
                        return <div key={`weight${index}`} className="weight" />;
                    })}
                </div>
            </div>
            <div className="center">
                <div className="console">
                    <div className="wire-container">
                        <span className="wire" />
                        <span className="wire" />
                        <span className="wire" />
                        <span className="wire" />
                    </div>
                    <div className={`cpu`}>
                        <img alt="cpu-icon" key="cpu" src={`${urlPrefix}/cpu-2.png`} />
                    </div>
                    <div className="wire-container">
                        <span className="wire" />
                        <span className="wire" />
                        <span className="wire" />
                        <span className="wire" />
                    </div>
                </div>
                <span className="label">Circuito adaptador</span>
            </div>
            <div className="right">
                <div className="chart">
                    <ResponsiveContainer height={'100%'}>
                        <LineChart data={visibleData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <YAxis dataKey="output" tickCount={6} type="number" domain={[0, 2.5]} />
                            <XAxis dataKey="weight" tickCount={12} type="number" domain={[0, 40]} />
                            <Legend />
                            <Tooltip />
                            <Line
                                dataKey="output"
                                stroke="#7f2b32"
                                strokeWidth={2}
                                dot={{ stroke: '#7f2b32', strokeWidth: 3 }}
                                name="Torque [Kg]"
                                animationDuration={400}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default CalibrationCell;
