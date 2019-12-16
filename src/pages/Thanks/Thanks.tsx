import React, { useEffect, useState, useContext } from 'react';
import posed from 'react-pose';
import { SocketContext } from '../../context/Socket';
import { MorphingIcon } from '../../components';
import { useTitle, useKeyDown } from '../../hooks';
import './Thanks.scss';

const Container = posed.div({
    exit: {
        opacity: 0,
        rotateZ: '-90deg',
        y: -700,
    },
    enter: {
        opacity: 1,
        rotateZ: '0deg',
        y: 0,
    },
});
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
    useEffect(()=>{
        setTimeout(_ => setStatus(true), 420);
    },[])
    return (
        <div className="slide">
            <Container pose={'enter'} key="container" className="diagram">
                <MorphingIcon width={260} height={120} icon={status ? 'thanks' : 'resistor'} />
            </Container>
        </div>
    );
};

export default CurrentSituation;
