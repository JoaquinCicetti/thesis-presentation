import React from 'react';
import './Thanks.scss';

const CurrentSituation: React.FC = () => {
    return (
        <div className="title">
            <span className="text write" data-splitting="lines">
                RETRO
                <br />
                LASER
                <br />
                WRITE
            </span>
            <span aria-hidden="true" className="text laser" data-splitting="lines">
                RETRO
                <br />
                LASER
                <br />
                WRITE
            </span>
        </div>
    );
};

export default CurrentSituation;