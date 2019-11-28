import React, { useEffect } from 'react';
import { useTitle } from '../../hooks';
import './Thanks.scss';

const CurrentSituation: React.FC = () => {
    const { updateTitle } = useTitle();
    useEffect(() => {
        updateTitle('🙏');
    }, []);
    return (
        <div className="title">
            <h1>Muchas gracias</h1>
        </div>
    );
};

export default CurrentSituation;
