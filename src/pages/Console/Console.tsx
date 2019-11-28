import React, { useEffect } from 'react';
import posed from 'react-pose';
import { useTitle } from '../../hooks';
import './Console.scss';

const Icon = posed.div({
    exit: { opacity: 0, width: 10, height: 10 },
    enter: { opacity: 1, width: 720, height: 720 },
});

const Console: React.FC = () => {
    const { updateTitle } = useTitle();
    const urlPrefix = process.env.NODE_ENV === 'development' ? '/icons' : '/thesis-presentation/icons';
    useEffect(() => {
        updateTitle('🕹');
    }, []);
    return (
        <div className="slide">
            <Icon className="console">
                <img className="icon" src={`${urlPrefix}/panel.png`} />
            </Icon>
        </div>
    );
};

export default Console;
