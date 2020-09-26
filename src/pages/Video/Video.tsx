import React, { useEffect } from 'react';
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
    const urlPrefix =
        process.env.NODE_ENV === 'development' ? '/videos' : '/thesis-presentation/videos';
    const { updateTitle } = useTitle();
    useEffect(() => {
        updateTitle(' ');
    }, [updateTitle]);
    return (
        <div className="video">
            <Player autoPlay src={`${urlPrefix}/calibration.mp4`}>
                <ControlBar disableCompletely />
            </Player>
        </div>
    );
};

export default Video;
