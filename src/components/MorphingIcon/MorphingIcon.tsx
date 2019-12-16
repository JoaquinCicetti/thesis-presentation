import React, { forwardRef } from 'react';
import posed from 'react-pose';
import { tween } from 'popmotion';
import { interpolate } from 'flubber';
import Icons from './Icons';
import './MorphingIcon.scss';

type Transition = ({ from, to }: { from: number; to: number }) => any;

const morphTransition: Transition = ({ from, to }) =>
    tween({
        from: 0,
        to: 1,
        duration: 420,
    }).pipe(interpolate(from, to));

const Paths = Object.entries(Icons).reduce((paths, [name, path]) => {
    const icon = {
        d: path,
        transition: morphTransition,
    };
    return { ...paths, [name]: icon };
}, {});

const Icon = posed.path(Paths);

interface Props {
    className?: string;
    icon: string;
    width?: number;
    height?: number;
    ref?: any;
}
const MorphingIcon: React.FC<Props> = ({ className, icon, height, width }, ref) => {
    return (
        <svg
            ref={ref}
            className={`morphingIcon ${className}`}
            width={width}
            height={height}
            viewBox="0 0 130 60">
            <Icon pose={icon} />
        </svg>
    );
};

export default forwardRef(MorphingIcon);
