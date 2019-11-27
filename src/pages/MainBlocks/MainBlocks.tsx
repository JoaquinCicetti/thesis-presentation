import React, { useEffect } from 'react';
import posed, { PoseGroup } from 'react-pose';
import { useTitle } from '../../hooks';
import './MainBlocks.scss';

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
const AnimatedItem = posed.li({
    exit: { opacity: 0, rotateX: '-90deg' },
    enter: { opacity: 1, rotateX: '0deg' },
});
const WhatIs: React.FC = () => {
    const { updateTitle } = useTitle();

    useEffect(() => {
        updateTitle('Partes fundamentales');
        console.log('enter');
    }, [updateTitle]);
    return (
        <div className="slide">
            <AnimatedList className="main-blocks">
                <PoseGroup>
                    <AnimatedItem key="engine" className="block first">
                        <img className="icon" src="Icons/engine.png" />
                        <span className="name">Motor</span>
                    </AnimatedItem>
                    <AnimatedItem key="panel" className="block">
                        <img className="icon" src="Icons/panel.png" />
                        <span className="name">Consola</span>
                    </AnimatedItem>
                    <AnimatedItem key="break" className="block">
                        <img className="icon" src="Icons/break-small.png" />
                        <span className="name">Freno</span>
                    </AnimatedItem>
                </PoseGroup>
            </AnimatedList>
            <hr />
        </div>
    );
};

export default WhatIs;
