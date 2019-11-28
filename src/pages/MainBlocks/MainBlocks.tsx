import React, { useEffect } from 'react';
import posed from 'react-pose';
import { useTitle } from '../../hooks';
import './MainBlocks.scss';

const AnimatedList = posed.ul({
    exit: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        staggerChildren: 500,
    },
});
const AnimatedItem = posed.li({
    exit: { opacity: 0, rotateX: '-90deg' },
    enter: { opacity: 1, rotateX: '0deg' },
});
const WhatIs: React.FC = () => {
    const { updateTitle } = useTitle();
    const urlPrefix = process.env.NODE_ENV === 'development' ? '/icons' : '/thesis-presentation/icons';
    useEffect(() => {
        updateTitle(' ');
        console.log('enter');
    }, []);
    return (
        <div className="slide">
            <AnimatedList className="main-blocks">
                <AnimatedItem key="engine" className="block first">
                    <img className="icon" src={`${urlPrefix}/engine.png`} />
                    <span className="name">Motor</span>
                </AnimatedItem>
                <AnimatedItem key="panel" className="block">
                    <img className="icon" src={`${urlPrefix}/panel.png`} />
                    <span className="name">Consola</span>
                </AnimatedItem>
                <AnimatedItem key="break" className="block">
                    <img className="icon" src={`${urlPrefix}/break-small.png`} />
                    <span className="name">Freno</span>
                </AnimatedItem>
            </AnimatedList>
            <hr />
        </div>
    );
};

export default WhatIs;
