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
    Tooltip,
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
    }, [updateTitle]);
    return (
        <div className="slide linealization">
            <ResponsiveContainer height={'80%'}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis name='Kg.' tickCount={12} type="number" domain={[0, 'dataMax + 5']} dataKey="kg" />
                    <YAxis name='Volts'/>
                    <Legend />
                    <Tooltip />
                    <Line
                        type="linear"
                        dataKey="v"
                        stroke="#7f2b32"
                        strokeWidth={2}
                        dot={{ strokeWidth: 6 }}
                        name="Volts vs Kg"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Linealization;
