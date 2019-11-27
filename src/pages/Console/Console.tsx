import React, { useEffect } from 'react';
import { useTitle } from '../../hooks';
import './Console.scss';

const Console: React.FC = () => {
    const { updateTitle } = useTitle();
    useEffect(() => {
        updateTitle('Un banco de pruebas?');
    }, []);
    return (
        <div className="slide">
            <div className="console">

            </div>
            <hr />
        </div>
    );
};

export default Console;
