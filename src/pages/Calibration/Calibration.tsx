import React from 'react';
import { Player } from 'video-react';
import "video-react/dist/video-react.css"
const Calibration: React.FC = () => {
    
    return (
        <div className='slide'>
            <Player height={300} width={500} autoPlay>
                <source src="/videos/calibration.mp4" />
            </Player>
        </div>
    );
};

export default Calibration;
