import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import './AnimatedList.scss';

interface Props {
    items: Array<any>;
}

const AnimatedItem = posed.ul({
    exit: { opacity: 0, height: 0 },
    enter: {
        opacity: 1,
        height: 'auto',
    },
    unselected: {
        position: 'static',
        width: '100%',
        height: 'auto',
        flip: true,
    },
    selected: {
        position: 'fixed',
        width: '100%',
        left: 0,
        bottom: 0,
        flip: true,
    },
});

const AnimatedList: React.FC<Props> = ({ items }) => {
    return (
        <div className="list">
            <PoseGroup>
                {items.map((item: any, index: number) => {
                    return (
                        <AnimatedItem pose={'enter'} key={`item${index}`}>
                            <div className={`content `}>{item.name}</div>
                        </AnimatedItem>
                    );
                })}
            </PoseGroup>
        </div>
    );
};

export default AnimatedList;
