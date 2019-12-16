import React, { useEffect, useState, useContext } from 'react';
import { SocketContext } from '../../context/Socket';
import { MorphingIcon } from '../../components';
import { useTitle, useKeyDown } from '../../hooks';
import './Thanks.scss';

const CurrentSituation: React.FC = () => {
    const { socket } = useContext(SocketContext);
    const { updateTitle } = useTitle();
    const [status, setStatus] = useState(false);
    const iterate = () => {
        setStatus((prev: boolean) => {
            return !prev;
        });
    };

    useKeyDown({
        KeyI: iterate,
        Space: iterate,
    });
    useEffect(() => {
        socket.on('iterate', iterate);
    }, [socket]);

    useEffect(() => {
        updateTitle('Fin');
    }, [updateTitle]);
    return (
        <div className="slide ">
            <span className="line left top" />
            <MorphingIcon width={260} height={120} icon={status ? 'thanks' : 'resistor'} />
        </div>
    );
};

export default CurrentSituation;
