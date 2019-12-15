import React, { useContext, useEffect, useState } from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
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
import './CalibrationMethods.scss';

type Data = { time: number; torque: number };
const initial = [];
const datasetLength = 15;


const CalibrationMethods: React.FC = () => {
    const { socket } = useContext(SocketContext);
    const { updateTitle } = useTitle();
    const [active, setActive] = useState<boolean>(false);
    const [dataset, setDataset] = useState<Array<Data>>(initial);
    const [currentValue, setCurrentValue] = useState<number>(0);
    const weight = Math.random() * 30 + 5;
    const urlPrefix =
        process.env.NODE_ENV === 'development' ? '/icons' : '/thesis-presentation/icons';

    const addData = (): void => {
        const noise = (Math.random() - 0.5) * 2;
        const newValue = weight + noise;
        setCurrentValue(active ? Math.round(newValue) : 0);
        setDataset((prev: Array<Data>) => {
            const newData = { time: new Date().getTime(), torque: active ? newValue : 0 };
            let newDataset = [...prev];
            if (prev.length < datasetLength) newDataset.push(newData);
            else newDataset = [...prev.slice(1), newData];
            return newDataset;
        });
    };
    const iterate = () => {
        setActive((prev: boolean) => !prev);
    };

    useKeyDown({
        KeyI: iterate,
        Space: iterate,
    });
    useEffect(() => {
        const interval = setInterval(addData, 250);
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [active]);

    useEffect(() => {
        updateTitle('Métodos de validación');
    }, [updateTitle]);

    useEffect(() => {
        socket.on('iterate', iterate);
    }, [socket]);
    return (
        <div className="slide calibration-methods">
            <div className="left">
                <div className="balance">
                    <ReactSpeedometer
                        value={currentValue}
                        currentValueText={`${currentValue} Kg.`}
                        maxValue={50}
                        minValue={0}
                        segments={3}
                        ringWidth={20}
                        startColor="#1d3f3b45"
                        endColor="#1d3f3bcc"
                        needleColor="#7f2b32"
                        maxSegmentLabels={0}
                        height={240}
                        width={240}
                        needleTransitionDuration={2000}
                        needleTransition="easeElastic"
                    />
                    <span className="label">Balanza</span>
                    <img
                        className={`arrow ${active ? 'active' : ''}`}
                        alt="icon-arrow-down"
                        src={`${urlPrefix}/arrow-down.png`}
                    />
                </div>
            </div>
            <div className="center">
                <div className="axis"></div>
                <div className="load-cell">
                    <img
                        className={`arrow ${active ? 'active' : ''}`}
                        alt="icon-arrow-down"
                        src={`${urlPrefix}/arrow-down.png`}
                    />
                    <ResponsiveContainer height={'100%'}>
                        <LineChart data={dataset}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <YAxis name="torque" tickCount={datasetLength} dataKey="torque" />
                            <XAxis dataKey="time" hide />
                            <Legend />
                            <Tooltip />
                            <Line
                                type="linear"
                                dataKey="torque"
                                stroke="#7f2b32"
                                strokeWidth={1}
                                dot={{ strokeWidth: 1 }}
                                name="Torque [Kg]"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                    <span className="label">Celda de carga</span>
                </div>
            </div>
            <div className="right">
                <img
                    className={`motor ${active ? 'active' : ''}`}
                    alt="break-icon"
                    src={`${urlPrefix}/break-small.png`}
                />
                <span className="label">Freno</span>
            </div>
        </div>
    );
};

export default CalibrationMethods;
