import React, { useEffect, useState, useMemo } from 'react';
import posed, { PoseGroup } from 'react-pose';
import { useTitle } from '../../hooks';
import './CurrentSituation.scss';

const AnimatedList = posed.ul({
    exit: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        beforeChildren: true,
        staggerChildren: 400,
    },
});
const AnimatedImg = posed.img({
    exit: { opacity: 0 },
    enter: { opacity: 1 },
    selected: { scale: 1.2, x: '-20%', y: '-20%', zIndex: 3 },
    unselected: { scale: 1, x: '0%', y: '0%', zIndex: 1 },
});
const sources: Array<string> = ['console', 'console-2', 'break', 'engine', 'sensor'];
const CurrentSituation: React.FC = () => {
    const { updateTitle } = useTitle();
    const [index, setIndex] = useState(0);
    const updateIndex = () => {
        console.log(index);
        if (index >= sources.length - 1) setIndex(0);
        else setIndex(index + 1);
    };
    useEffect(() => {
        updateTitle('Un banco de pruebas?');
        const id = setInterval(updateIndex, 2500);
        return () => clearInterval(id);
    }, [updateIndex]);
    const reversed = useMemo(() => sources.reverse(), [sources]);
    return (
        <AnimatedList className="slide currentSituation">
            <PoseGroup>
                {reversed.map((name: string, i: number) => {
                    const src = `images/${name}.jpg`;
                    return (
                        <AnimatedImg
                            pose={index === i ? 'selected' : 'unselected'}
                            className="picture"
                            key={name}
                            src={src}
                        />
                    );
                })}
            </PoseGroup>
        </AnimatedList>
    );
};

export default CurrentSituation;
