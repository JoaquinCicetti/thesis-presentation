import React, { useEffect, useState } from 'react';
import posed from 'react-pose';
import { useTitle } from '../../hooks';
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
    { name: 'console-2', alt: 'Detalle consola' },
    { name: 'engine', alt: 'Motor y freno' },
];
const CurrentSituation: React.FC = () => {
    const { updateTitle } = useTitle();
    const [index, setIndex] = useState(sources.length - 1);

    useEffect(() => {
        updateTitle(' ');
        const interval = setInterval(() => {
            setIndex((index: number) => (index >= sources.length - 1 ? 0 : index + 1));
        }, 15000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container">
            <Overlay className="overlay" key="overlay" />
            <AnimatedList key="list" className="slide currentSituation">
                {sources.map(({ name, alt }, i: number) => {
                    const src = `images/${name}.jpg`;
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
