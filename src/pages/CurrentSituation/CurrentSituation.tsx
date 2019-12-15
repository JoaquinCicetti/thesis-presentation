import React, { useEffect, useState, useContext, useRef } from 'react';
import posed from 'react-pose';
import { useTitle, useKeyDown } from '../../hooks';
import { SocketContext } from '../../context/Socket';
import './CurrentSituation.scss';

const AnimatedList = posed.div({
    exit: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        staggerChildren: 120,
        delayChildren: 400,
        transition: {
            default: { duration: 100 },
        },
    },
});
const Overlay = posed.div({
    exit: {
        opacity: 0,
        zIndex: 0,
    },
    enter: {
        opacity: 1,
        zIndex: 2,
        transition: {
            default: { duration: 150 },
        },
    },
});
const AnimatedImg = posed.div({
    exit: { opacity: 0 },
    enter: { opacity: 1 },
    selected: {
        zIndex: 3,
        scale: 1.3,
        transition: {
            default: { ease: 'easeOut', duration: 400 },
            zIndex: { duration: 100 },
        },
    },
    unselected: {
        zIndex: 1,
        scale: 1,
        transition: {
            default: { ease: 'easeOut', duration: 400 },
            zIndex: { duration: 100 },
        },
    },
});
type ImageData = { name: string; alt: string };
const sources: Array<ImageData> = [
    { name: 'console', alt: 'Consola' },
    { name: 'break', alt: 'Freno' },
    { name: 'sensor', alt: 'Encoder' },
    { name: 'console-2', alt: 'Control del freno' },
    { name: 'engine', alt: 'Motor y freno' },
];
const CurrentSituation: React.FC = () => {
    const { socket } = useContext(SocketContext);
    const { updateTitle } = useTitle();
    const [index, setIndex] = useState(sources.length - 1);
    const urlPrefix =
        process.env.NODE_ENV === 'development' ? '/images' : '/thesis-presentation/images';
    const interval = useRef(null);

    const iterate = () => {
        setIndex((index: number) => (index >= sources.length - 1 ? 0 : index + 1));
    };

    useKeyDown({
        KeyI: iterate,
        Space: iterate,
    });
    useEffect(() => {
        updateTitle(' ');

        interval.current = setInterval(iterate, 10000);
        return () => clearInterval(interval.current);
    }, [updateTitle]);

    useEffect(() => {
        // next image
        socket.on('iterate', () => {
            clearInterval(interval.current);
            iterate();
            // stop animation
            // interval.current = setInterval(iterate, 10000);
        });
    }, [socket]);

    return (
        <div className="container">
            <Overlay className="overlay" key="overlay" />
            <AnimatedList key="list" className="slide currentSituation">
                {sources.map(({ name, alt }, i: number) => {
                    const src = `${urlPrefix}/${name}.jpg`;
                    return (
                        <AnimatedImg
                            className="picture"
                            pose={index === i ? 'selected' : 'unselected'}
                            key={src}>
                            <img src={src} alt={alt} />
                            {index === i && <p>{alt}</p>}
                        </AnimatedImg>
                    );
                })}
            </AnimatedList>
        </div>
    );
};

export default CurrentSituation;
