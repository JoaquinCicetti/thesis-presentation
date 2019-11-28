import React, { useEffect, useRef } from 'react';
import { useTitle } from '../../hooks';
import { Player, ControlBar } from 'video-react';
import 'video-react/dist/video-react.css';
import './Video.scss';
type Player = {
    video: {
        toggleFullscreen: () => void;
    };
};
const Video: React.FC = () => {
    const { updateTitle } = useTitle();
    useEffect(() => {
        updateTitle(' ');
    }, []);
    return (
        <div className="video">
            <Player autoPlay src="/videos/calibration.mp4">
                <ControlBar disableCompletely />
            </Player>
        </div>
    );
};

export default Video;
