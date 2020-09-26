import React, { useEffect } from 'react';
import posed from 'react-pose';
import { useTitle } from '../../hooks';
import './Console.scss';

const CentralIcon = posed.div({
    exit: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1, staggerChildren: 80, delayChildren: 500 },
});
const Item = posed.div({
    exit: { opacity: 0 },
    enter: { opacity: 1 },
});
const Lines = posed.span({
    exit: { opacity: 0 },
    enter: { opacity: 1 },
});
const Console: React.FC = () => {
    const { updateTitle } = useTitle();
    const urlPrefix =
        process.env.NODE_ENV === 'development' ? '/icons' : '/thesis-presentation/icons';
    useEffect(() => {
        updateTitle('Consola');
    }, [updateTitle]);
    return (
        <div className="slide">
            <CentralIcon className="console">
                <Lines key="line1" className="lines" />
                <Item key="battery" className="items">
                    <img alt='battery-icon' src={`${urlPrefix}/battery.png`} className="icon" />
                </Item>

                <Lines key="line2" className="lines" />
                <Item key="fan" className="items">
                    <img alt='fan-icon' src={`${urlPrefix}/fan.png`} className="icon" />
                </Item>

                <Lines key="line3" className="lines" />
                <Item key="fuel" className="items">
                    <img alt='fuel-icon' src={`${urlPrefix}/fuel.png`} className="icon" />
                </Item>

                <Lines key="line4" className="lines" />
                <Item key="ignition" className="items">
                    <img alt='ignition-icon' src={`${urlPrefix}/ignition.png`} className="icon" />
                </Item>

                <Lines key="line5" className="lines" />
                <Item key="speed" className="items">
                    <img alt='speed-icon' src={`${urlPrefix}/speed.png`} className="icon" />
                </Item>

                <Lines key="line6" className="lines" />
                <Item key="temperature" className="items">
                    <img alt='temperature-icon' src={`${urlPrefix}/temperature.png`} className="icon" />
                </Item>
                <Lines key="line7" className="lines" />
                <div className="main">
                    <img alt='cpu-icon' key="cpu" className="icon" src={`${urlPrefix}/cpu.png`} />
                </div>
            </CentralIcon>
        </div>
    );
};

export default Console;
