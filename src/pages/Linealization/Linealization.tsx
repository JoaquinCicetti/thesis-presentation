import React, { useEffect } from 'react';
import { useTitle } from '../../hooks';
import './Linealization.scss';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
} from 'recharts';
const data = [
    {
        kg: 5,
        v: 0.768,
    },
    {
        kg: 10,
        v: 0.979,
    },
    {
        kg: 15,
        v: 1.218,
    },
    {
        kg: 25,
        v: 1.663,
    },
    {
        kg: 35,
        v: 2.08,
    },
    {
        kg: 45,
        v: 2.53,
    },
];

const Linealization: React.FC = () => {
    const { updateTitle } = useTitle();
    useEffect(() => {
        updateTitle('Linealización');
    }, []);
    return (
        <div className="slide linealization">
            <ResponsiveContainer height={'80%'}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[0, 'dataMax + 5']}  dataKey="kg" />
                    <YAxis  />
                    <Legend />
                    <Line type="linear" dataKey="v" stroke="#377771" strokeWidth={4} dot={{  strokeWidth: 5 }}  name="Voltios vs Kilogramos." />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Linealization;
