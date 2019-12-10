import React, { useEffect } from 'react';
import posed from 'react-pose';
import { useTitle } from '../../hooks';
import './Calibration.scss';


const Calibration: React.FC = () => {
    const { updateTitle } = useTitle();
    const urlPrefix =
        process.env.NODE_ENV === 'development' ? '/images' : '/thesis-presentation/images';
    useEffect(() => {
        updateTitle('Calibración de la celda de carga');
    }, [updateTitle]);
    return (
        <div className="slide calibration">
            <img src={`${urlPrefix}/calibration.png`} />
        </div>
    );
};

export default Calibration;
