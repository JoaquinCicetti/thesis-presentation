import React, { useEffect } from 'react';
import { useTitle } from '../../hooks';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
const Calibration: React.FC = () => {
    const { updateTitle } = useTitle();
    useEffect(() => {
        updateTitle(' ');
    }, []);
    return (
        <div className="slide calibration">
            <Player className="player" autoPlay>
                <source src="/videos/calibration.mp4" />
            </Player>
        </div>
    );
};

export default Calibration;
