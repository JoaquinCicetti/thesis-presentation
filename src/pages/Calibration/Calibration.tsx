import React, { useEffect } from 'react';
import posed from 'react-pose';
import { useTitle } from '../../hooks';
import './Calibration.scss';

const Img = posed.img({
    exit: { opacity: 0, rotateX: '-90deg' },
    enter: { opacity: 1, rotateX: '0deg', transition: {duration: 400} },
});

const Calibration: React.FC = () => {
    const { updateTitle } = useTitle();
    const urlPrefix =
        process.env.NODE_ENV === 'development' ? '/images' : '/thesis-presentation/images';
    useEffect(() => {
        updateTitle('Calibración de la celda de carga');
    }, []);
    return (
        <div className="slide calibration">
            <Img src={`${urlPrefix}/calibration.png`} />
        </div>
    );
};

export default Calibration;
