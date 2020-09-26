import React, { useEffect } from 'react';
import { useTitle } from '../../hooks';
import './Break.scss';
const Break: React.FC = () => {
    const { updateTitle } = useTitle();
    useEffect(() => {
        updateTitle('noencontreicono');
    }, [updateTitle]);
    return (
        <div className="slide">
            <span className="line left top" />
            <h1>Break</h1>
        </div>
    );
};

export default Break;
