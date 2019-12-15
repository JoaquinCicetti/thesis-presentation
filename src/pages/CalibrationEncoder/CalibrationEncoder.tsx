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
import './CalibrationEncoder.scss';
type ChartData = { time: number; speed: number };
const initial = [];
const datasetLength = 15;
const CalibrationEncoder: React.FC = () => {
    const { socket } = useContext(SocketContext);
    const { updateTitle } = useTitle();
    const [active, setActive] = useState<boolean>(false);
    const [dataset, setDataset] = useState<Array<ChartData>>(initial);
    const [currentValue, setCurrentValue] = useState<number>(0);
    const weight = Math.random() * 600 + 500;
    const urlPrefix =
        process.env.NODE_ENV === 'development' ? '/icons' : '/thesis-presentation/icons';

    const addData = (): void => {
        const noise = (Math.random() - 0.5) * 3;
        const newValue = weight + noise;
        setCurrentValue(active ? Math.round(newValue) : 0);
        setDataset((_prev: Array<ChartData>) => {
            const newData = { time: new Date().getTime(), speed: active ? newValue : 0 };
            let newDataset = [..._prev];
            if (_prev.length < datasetLength) newDataset.push(newData);
            else newDataset = [..._prev.slice(1), newData];
            return newDataset;
        });
    };
    const iterate = (): void => {
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
        updateTitle('Método empleado - Encoder');
    }, [updateTitle]);

    useEffect(() => {
        socket.on('iterate', iterate);
    }, [socket]);
    return (
        <div className="slide calibration">
            <div className="left">
                <span className="label">Encoder</span>
                <div
                    className={`encoder ${
                        active ? (currentValue > 800 ? 'active-fast' : 'active') : ''
                    } `}>
                    <span className="hole" />
                    <span className="hole" />
                    <span className="hole" />
                    <span className="hole" />
                    <span className="hole" />
                    <span className="hole" />
                    <span className="hole" />
                    <span className="hole" />
                    <span className="hole" />
                    <span className="hole" />
                    <span className="hole" />
                    <span className="hole" />
                    <span className="hole" />
                    <span className="hole" />
                    <span className="hole" />
                    <span className="hole" />
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
                    <div className="cpu">
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
                        <LineChart data={dataset}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <YAxis name="speed" dataKey="speed" />
                            <XAxis dataKey="time" hide />
                            <Legend />
                            <Tooltip />
                            <Line
                                type="linear"
                                dataKey="speed"
                                stroke="#7f2b32"
                                strokeWidth={1}
                                dot={{ strokeWidth: 1 }}
                                name="Velocidad [rpm]"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default CalibrationEncoder;
