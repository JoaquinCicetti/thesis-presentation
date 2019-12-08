import React, { useEffect } from 'react';
import posed from 'react-pose';
import { useTitle } from '../../hooks';
import './Schematic.scss';

const Img = posed.img({
    exit: { opacity: 0, rotateY: '-180deg' },
    enter: { opacity: 1, rotateY: '0deg' },
});

const Schematic: React.FC = () => {
    const { updateTitle } = useTitle();
    const urlPrefix =
        process.env.NODE_ENV === 'development' ? '/images' : '/thesis-presentation/images';
    useEffect(() => {
        updateTitle('Esquemático');
    }, [updateTitle]);
    return (
        <div className="slide">
            <Img src={`${urlPrefix}/schematic.png`} />
        </div>
    );
};

export default Schematic;
